import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/Legion_Discord_bot_hero_image_93912760.png";

interface HeroSectionProps {
  botName: string;
  heroTagline: string;
  description: string;
  inviteLink: string;
  supportServerLink: string;
}

export default function HeroSection({ botName, heroTagline, description, inviteLink, supportServerLink }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 will-change-transform">
      {/* Animated Background Elements with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden pointer-events-none relative">
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.08, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 14, delay: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20"></div>

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              ease: [0.25, 0.4, 0.25, 1]
            }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.3, 
                duration: 0.6,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted by 120+ servers</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                  {botName}
                </span>
              </h1>
              <p className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-muted-foreground">
                {heroTagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {description}
            </p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.7, 
                duration: 0.8,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 flex-wrap"
            >
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-chart-2 hover:opacity-90 shadow-xl hover:shadow-2xl transition-all text-base sm:text-lg h-12 sm:h-14 px-8"
                data-testid="button-invite-hero"
              >
                <a href={inviteLink} target="_blank" rel="noopener noreferrer" className="gap-2">
                  Add to Discord
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:border-primary/50 text-base sm:text-lg h-12 sm:h-14 px-8"
                data-testid="button-server-hero"
              >
                <a href={supportServerLink} target="_blank" rel="noopener noreferrer">
                  Support Server
                </a>
              </Button>
              <Button 
                onClick={scrollToFeatures}
                variant="outline"
                size="lg"
                className="border-border hover:border-primary/50 text-base sm:text-lg h-12 sm:h-14 px-8"
                data-testid="button-explore"
              >
                Explore Features
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              delay: 0.5, 
              duration: 1,
              ease: [0.25, 0.4, 0.25, 1]
            }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt={`${botName} Discord Bot`}
                className="w-full h-auto rounded-2xl"
                data-testid="img-hero"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </div>
            {/* Glow Effect */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-chart-2/30 rounded-3xl blur-3xl -z-10"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}
