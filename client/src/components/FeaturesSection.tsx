import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Music, Trophy, Code, BarChart, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import type { BotFeature } from "@shared/schema";

interface FeaturesSectionProps {
  features: BotFeature[];
}

const iconMap: Record<string, any> = {
  Shield,
  Music,
  Trophy,
  Code,
  BarChart,
  Zap,
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Everything you need to manage and grow your Discord server, all in one powerful bot.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Shield;
            return (
              <motion.div key={index} variants={item}>
                <Card
                  className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full"
                  data-testid={`card-feature-${index}`}
                >
                {/* Top Border Gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-chart-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                <CardContent className="p-6 lg:p-8 space-y-4">
                  {/* Icon */}
                  <div className="relative inline-flex">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold text-xl lg:text-2xl text-foreground" data-testid={`text-feature-title-${index}`}>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </div>
                </CardContent>

                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-primary/5 to-chart-2/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-lg"></div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
