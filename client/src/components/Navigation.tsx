import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoGif from "@assets/discord-avatar-512-LNC36_1_1760714898258.gif";

interface NavigationProps {
  botName: string;
  inviteLink: string;
  supportServerLink: string;
}

export default function Navigation({ botName, inviteLink, supportServerLink }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      if (!isProgrammaticScroll) {
        const sections = ["home", "features", "demo", "developers"];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProgrammaticScroll]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsProgrammaticScroll(true);
      setActiveSection(id);
      
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
      
      setTimeout(() => {
        setIsProgrammaticScroll(false);
      }, 1000);
    }
  };

  const NavLink = ({ id, label, testId }: { id: string; label: string; testId: string }) => (
    <button
      onClick={() => scrollToSection(id)}
      className="relative group py-2"
      data-testid={testId}
    >
      <span className={`font-medium transition-all duration-300 ${
        activeSection === id 
          ? "text-primary" 
          : "text-muted-foreground group-hover:text-foreground"
      }`}>
        {label}
      </span>
      {/* Animated underline */}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-violet-500 transition-all duration-300 ease-out ${
        activeSection === id 
          ? "w-full" 
          : "w-0 group-hover:w-full"
      }`}></span>
      {/* Glow effect */}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-violet-500 blur-sm transition-all duration-300 ${
        activeSection === id 
          ? "w-full opacity-50" 
          : "w-0 group-hover:w-full group-hover:opacity-50"
      }`}></span>
    </button>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection("home")}>
              <div className="relative">
                <img 
                  src={logoGif} 
                  alt={`${botName} Logo`}
                  className="w-12 h-12 rounded-lg shadow-lg object-cover transition-transform duration-300 group-hover:scale-110"
                  data-testid="img-logo-nav"
                />
                <div className="absolute inset-0 rounded-lg bg-primary/20 blur-md opacity-50 animate-pulse-glow"></div>
              </div>
              <span className="font-heading font-bold text-xl lg:text-2xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                {botName}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink id="home" label="Home" testId="link-home" />
              <NavLink id="features" label="Features" testId="link-features" />
              <NavLink id="demo" label="Demo" testId="link-demo" />
              <NavLink id="developers" label="Team" testId="link-developers" />
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <Button 
                asChild
                variant="outline"
                size="default"
                data-testid="button-server-nav"
              >
                <a href={supportServerLink} target="_blank" rel="noopener noreferrer">
                  Support Server
                </a>
              </Button>
              <Button 
                asChild
                size="default"
                className="relative overflow-hidden bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
                data-testid="button-invite-nav"
              >
                <a href={inviteLink} target="_blank" rel="noopener noreferrer" className="relative z-10">
                  <span className="relative z-10">Add to Discord</span>
                  {/* Shine effect on hover */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover-elevate active-elevate-2 transition-transform duration-200 hover:scale-110"
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative flex flex-col items-center justify-center h-full gap-8 animate-fade-in">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-2xl font-heading font-semibold transition-all duration-300 relative group ${
                activeSection === "home" ? "text-primary scale-110" : "text-foreground hover:text-primary hover:scale-105"
              }`}
              data-testid="link-home-mobile"
            >
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-violet-500 transition-all duration-300 ${
                activeSection === "home" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className={`text-2xl font-heading font-semibold transition-all duration-300 relative group ${
                activeSection === "features" ? "text-primary scale-110" : "text-foreground hover:text-primary hover:scale-105"
              }`}
              data-testid="link-features-mobile"
            >
              Features
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-violet-500 transition-all duration-300 ${
                activeSection === "features" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className={`text-2xl font-heading font-semibold transition-all duration-300 relative group ${
                activeSection === "demo" ? "text-primary scale-110" : "text-foreground hover:text-primary hover:scale-105"
              }`}
              data-testid="link-demo-mobile"
            >
              Demo
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-violet-500 transition-all duration-300 ${
                activeSection === "demo" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>
            <button
              onClick={() => scrollToSection("developers")}
              className={`text-2xl font-heading font-semibold transition-all duration-300 relative group ${
                activeSection === "developers" ? "text-primary scale-110" : "text-foreground hover:text-primary hover:scale-105"
              }`}
              data-testid="link-developers-mobile"
            >
              Team
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-violet-500 transition-all duration-300 ${
                activeSection === "developers" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>
            <div className="flex flex-col gap-3 mt-4 w-full max-w-xs">
              <Button 
                asChild
                variant="outline"
                size="lg"
                data-testid="button-server-mobile"
              >
                <a href={supportServerLink} target="_blank" rel="noopener noreferrer">
                  Join Official Server
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 shadow-xl group"
                data-testid="button-invite-mobile"
              >
                <a href={inviteLink} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Add to Discord</span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
