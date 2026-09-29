import type { LucideIcon } from "lucide-react";
import { BookOpen, Cog, Gamepad2, TrendingUp, Trophy, Video } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "achievements", path: "/achievements", icon: Trophy, isContentType: true },
  { key: "videos", path: "/videos", icon: Video, isContentType: true },
  { key: "steam", path: "/steam", icon: Gamepad2, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
