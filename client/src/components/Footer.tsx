import { Button } from "@/components/ui/button";

interface FooterProps {
  botName: string;
  inviteLink: string;
  supportServerLink: string;
}

export default function Footer({ botName, inviteLink, supportServerLink }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center font-heading font-bold text-lg text-primary-foreground shadow-lg">
                L
              </div>
              <span className="font-heading font-bold text-2xl text-foreground">
                {botName}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              The ultimate Discord bot for server management, moderation, and entertainment. Trusted by thousands of communities worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-foreground">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              <a 
                href="#features" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-features"
              >
                Features
              </a>
              <a 
                href="#demo" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-demo"
              >
                Demo
              </a>
              <a 
                href="#developers" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-team"
              >
                Team
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-foreground">
              Support
            </h3>
            <div className="flex flex-col gap-3">
              <Button 
                asChild
                variant="outline"
                size="sm"
                className="justify-start"
                data-testid="button-footer-support"
              >
                <a href={supportServerLink} target="_blank" rel="noopener noreferrer">
                  Join Support Server
                </a>
              </Button>
              <Button 
                asChild
                size="sm"
                className="justify-start bg-gradient-to-r from-primary to-chart-2 hover:opacity-90"
                data-testid="button-footer-invite"
              >
                <a href={inviteLink} target="_blank" rel="noopener noreferrer">
                  Add to Discord
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} {botName}. Developed with passion by <span className="text-primary font-semibold">Mohit</span> & <span className="text-primary font-semibold">Jerry</span>.
            </p>
            <p className="text-sm text-muted-foreground">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
