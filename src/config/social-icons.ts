import type { IconType } from "react-icons";
import {
  SiBehance,
  SiDribbble,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiMessenger,
  SiTwitter,
  SiWhatsapp,
  SiYoutube,
} from "react-icons/si";

export type SocialIconType = IconType;

export type SocialIcon =
  | "FACEBOOK"
  | "GITHUB"
  | "INSTAGRAM"
  | "TWITTER"
  | "LINKEDIN"
  | "WHATSAPP"
  | "MESSENGER"
  | "BEHANCE"
  | "DRIBBLE"
  | "YOUTUBE";

const socialIcons: Record<SocialIcon, SocialIconType> = {
  BEHANCE: SiBehance,
  DRIBBLE: SiDribbble,
  FACEBOOK: SiFacebook,
  GITHUB: SiGithub,
  INSTAGRAM: SiInstagram,
  LINKEDIN: SiLinkedin,
  MESSENGER: SiMessenger,
  TWITTER: SiTwitter,
  WHATSAPP: SiWhatsapp,
  YOUTUBE: SiYoutube,
};

export default socialIcons;
