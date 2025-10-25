import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import DevelopersSection from "@/components/DevelopersSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ParticlesBackground from "@/components/ParticlesBackground";
import { type BotConfig, defaultBotConfig } from "@shared/schema";

export default function Home() {
  const { data: config = defaultBotConfig, isLoading } = useQuery<BotConfig>({
    queryKey: ["/api/config"],
  });

  useEffect(() => {
    // Update document metadata
    document.title = config.seo.title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', config.seo.description);
    }

    // Add keywords meta tag if it doesn't exist
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', config.seo.keywords);
  }, [config.seo]);

  // Show loading state with beautiful skeleton
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
          <p className="text-muted-foreground font-heading">Loading Legion...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <CursorGlow />
      <ParticlesBackground />
      
      <Navigation 
        botName={config.botName}
        inviteLink={config.inviteLink}
        supportServerLink={config.supportServerLink}
      />
      
      <main>
        <HeroSection
          botName={config.botName}
          heroTagline={config.heroTagline}
          description={config.botDescription}
          inviteLink={config.inviteLink}
          supportServerLink={config.supportServerLink}
        />
        
        <FeaturesSection features={config.features} />
        
        <DemoSection 
          stats={config.stats}
          inviteLink={config.inviteLink}
        />
        
        <DevelopersSection />
      </main>
      
      <Footer
        botName={config.botName}
        inviteLink={config.inviteLink}
        supportServerLink={config.supportServerLink}
      />
    </div>
  );
}
