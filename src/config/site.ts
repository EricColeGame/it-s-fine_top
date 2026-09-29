export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "It's Fine Wiki",
  shortName: "It's Fine",
  logoText: "IF",
  tagline: "Guides, Walkthroughs, Upgrades & Story",
  description: "Your ultimate guide to It's Fine! Explore gameplay walkthroughs, upgrade paths, prestige tips, characters, secrets and progression guides for this indie game-dev incremental game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://it-s-fine.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://it-s-fine.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3936270/Its_Fine/",
  heroVideoId: "uFQEe9oKYsk", // It's Fine Part 1 - 100% Full Game Walkthrough (No Commentary)
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
