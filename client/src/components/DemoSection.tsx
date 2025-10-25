import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import type { BotStat } from "@shared/schema";
import demoImage from "@assets/generated_images/Abstract_hero_background_9ef3d42f.png";

interface DemoSectionProps {
  stats: BotStat[];
  inviteLink: string;
}

export default function DemoSection({ stats, inviteLink }: DemoSectionProps) {
  return (
    <section id="demo" className="py-20 lg:py-32 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <ScrollReveal>
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl">
                  <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                    See It In Action
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Experience the power and intuitive interface that thousands of servers trust every day.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center space-y-2"
                    data-testid={`stat-${index}`}
                  >
                  <div className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent" data-testid={`text-stat-number-${index}`}>
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground uppercase tracking-wider font-medium" data-testid={`text-stat-label-${index}`}>
                    {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-chart-2 hover:opacity-90 shadow-xl hover:shadow-2xl transition-all text-base sm:text-lg h-12 sm:h-14 px-8"
                data-testid="button-invite-demo"
              >
                <a href={inviteLink} target="_blank" rel="noopener noreferrer">
                  Get Started Free
                </a>
              </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Demo Image */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <Card className="relative overflow-hidden border-border bg-card shadow-2xl group">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <img 
                      src={demoImage} 
                      alt="Legion Bot Demo"
                      className="w-full h-full object-cover"
                      data-testid="img-demo"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-primary blur-xl animate-pulse-glow"></div>
                      </div>
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  </div>
                </CardContent>
              </Card>
              {/* Glow Effect */}
              <motion.div 
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-chart-2/20 rounded-3xl blur-3xl -z-10"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
