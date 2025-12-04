export interface MenuItem {
  label: string;
  url: string;
  icon?: string;
  active?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  color?: string;
}

export interface LanguageOption {
  code: string;
  label: string;
  flag?: string;
}