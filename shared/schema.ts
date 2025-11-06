import { z } from "zod";

// Bot Configuration Schema
export const botFeatureSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string(),
});

export const botStatSchema = z.object({
  number: z.string(),
  label: z.string(),
});

export const developerSchema = z.object({
  name: z.string(),
  role: z.string(),
  avatar: z.string().optional(),
});

export const botConfigSchema = z.object({
  botName: z.string(),
  botDescription: z.string(),
  heroTagline: z.string(),
  inviteLink: z.string(),
  supportServerLink: z.string(),
  features: z.array(botFeatureSchema),
  stats: z.array(botStatSchema),
  developers: z.array(developerSchema),
  seo: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.string(),
  }),
});

export type BotFeature = z.infer<typeof botFeatureSchema>;
export type BotStat = z.infer<typeof botStatSchema>;
export type Developer = z.infer<typeof developerSchema>;
export type BotConfig = z.infer<typeof botConfigSchema>;

// Default LegionX Bot Configuration
export const defaultBotConfig: BotConfig = {
  botName: "LegionX",
  botDescription: "The ultimate Discord bot for server protection and management. Anti-nuke security, advanced moderation tools, auto-moderation, and comprehensive logging system.",
  heroTagline: "Power. Precision. Performance.",
  inviteLink: "https://discord.com/oauth2/authorize?client_id=1428989669688873083",
  supportServerLink: "https://discord.gg/SAvtnnurGr",
  features: [
    {
      title: "Anti-Nuke Protection",
      description: "Advanced anti-nuke system that protects your server from mass deletions, bans, and unauthorized changes with instant rollback capabilities.",
      icon: "ShieldAlert",
    },
    {
      title: "Moderation Tools",
      description: "Comprehensive moderation commands including ban, kick, mute, warn with customizable durations and automated action logs.",
      icon: "Shield",
    },
    {
      title: "Auto Moderation",
      description: "Automated content filtering with spam detection, link blocking, profanity filters, and configurable auto-sanctions for rule violations.",
      icon: "ShieldCheck",
    },
    {
      title: "Advanced Logging",
      description: "Detailed server logging system tracking message edits, deletions, member joins/leaves, role changes, and all moderation actions.",
      icon: "FileText",
    },
    {
      title: "Custom Commands",
      description: "Create custom commands with automated responses and advanced actions to personalize your server experience.",
      icon: "Code",
    },
    {
      title: "24/7 Reliability",
      description: "99.9% uptime with dedicated support team available around the clock to assist with any issues.",
      icon: "Zap",
    },
  ],
  stats: [
    { number: "35+", label: "Servers" },
    { number: "17.5k+", label: "Users" },
    { number: "99.9%", label: "Uptime" },
  ],
  developers: [
    {
      name: "Mohit",
      role: "Lead Developer & Architect",
      avatar: "/attached_assets/generated_images/Dark_anime_avatar_Mohit_4ef58660.png",
    },
    {
      name: "Jerry",
      role: "Core Developer & Designer",
      avatar: "/attached_assets/generated_images/Red_anime_avatar_Jerry_050da9bb.png",
    },
  ],
  seo: {
    title: "LegionX - Discord Security Bot | Anti-Nuke & Auto-Moderation",
    description: "Protect your Discord server with LegionX. Anti-nuke protection, advanced moderation, auto-moderation, detailed logging, and 24/7 security. Join 120+ servers!",
    keywords: "discord bot, legionx bot, anti-nuke bot, discord security, discord moderation, auto moderation, server logging, discord protection",
  },
};
