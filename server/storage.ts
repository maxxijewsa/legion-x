import { type BotConfig, defaultBotConfig } from "@shared/schema";

export interface IStorage {
  getBotConfig(): Promise<BotConfig>;
}

export class MemStorage implements IStorage {
  private botConfig: BotConfig;

  constructor() {
    this.botConfig = defaultBotConfig;
  }

  async getBotConfig(): Promise<BotConfig> {
    return this.botConfig;
  }
}

export const storage = new MemStorage();
