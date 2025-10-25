import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import { Code, Palette } from "lucide-react";
import mohitAvatar from "@assets/generated_images/Dark_anime_avatar_Mohit_4ef58660.png";
import jerryAvatar from "@assets/jerry_1760720812093.jpg";

const developers = [
  {
    name: "Mohit",
    role: "Lead Developer & Architect",
    avatar: mohitAvatar,
    icon: Code,
    gradient: "from-purple-500 via-purple-600 to-violet-600",
    skills: ["Backend", "Architecture", "Web Development" , "API Design"]
  },
  {
    name: "Jerry",
    role: "Core Developer & Designer",
    avatar: jerryAvatar,
    icon: Palette,
    gradient: "from-violet-500 via-purple-600 to-fuchsia-600",
    skills: ["Frontend", "Backend", "UI/UX", "Design"]
  }
];

export default function DevelopersSection() {
  return (
    <section id="developers" className="py-20 lg:py-32 bg-gradient-to-b from-white via-purple-50 to-white dark:from-background dark:via-background dark:to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(168,85,247,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(168,85,247,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/10 dark:bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 dark:bg-chart-2/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-6">
            <div className="inline-block">
              <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-500 to-violet-600 text-white border-purple-400 hover-elevate" data-testid="badge-team">
                Meet The Team
              </Badge>
            </div>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 bg-clip-text text-transparent">
                The Minds Behind LegionX
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Passionate developers crafting the ultimate Discord bot experience with dedication and expertise.
            </p>
          </div>
        </ScrollReveal>

        {/* Developers Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {developers.map((developer, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <Card
                className="group relative overflow-visible border-2 border-purple-200 dark:border-border bg-white dark:bg-card hover:border-purple-400 dark:hover:border-primary/40 transition-all duration-500 h-full shadow-lg hover:shadow-2xl"
                data-testid={`card-developer-${index}`}
              >
                {/* Animated Border Gradient */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></div>
                
                <CardContent className="p-8 lg:p-10">
                  <div className="flex flex-col items-center text-center space-y-6">
                    {/* Avatar Container with Glow */}
                    <div className="relative">
                      {/* Glow Effect */}
                      <div className={`absolute -inset-4 bg-gradient-to-r ${developer.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
                      
                      {/* Avatar Image */}
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${developer.gradient} rounded-full animate-pulse opacity-30`}></div>
                        <img
                          src={developer.avatar}
                          alt={developer.name}
                          className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white dark:border-background shadow-2xl group-hover:scale-105 transition-transform duration-500"
                          data-testid={`img-avatar-${index}`}
                        />
                        
                        {/* Icon Badge */}
                        <div className={`absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br ${developer.gradient} rounded-full flex items-center justify-center border-4 border-white dark:border-background shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <developer.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-3">
                      <h3 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 dark:text-foreground group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-violet-500 group-hover:bg-clip-text group-hover:text-transparent transition-all" data-testid={`text-developer-name-${index}`}>
                        {developer.name}
                      </h3>
                      <p className="text-lg lg:text-xl text-gray-600 dark:text-muted-foreground font-medium" data-testid={`text-developer-role-${index}`}>
                        {developer.role}
                      </p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 justify-center pt-2">
                        {developer.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="text-xs font-medium bg-purple-100 dark:bg-secondary text-purple-700 dark:text-secondary-foreground border-purple-200 dark:border-0"
                            data-testid={`badge-skill-${index}-${skillIndex}`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Decoration */}
                    <div className={`w-20 h-1 bg-gradient-to-r ${developer.gradient} rounded-full group-hover:w-32 transition-all duration-500`}></div>
                  </div>
                </CardContent>

                {/* Card Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"></div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16 lg:mt-20">
            <p className="text-gray-600 dark:text-muted-foreground text-lg">
              Built with passion, powered by expertise.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
