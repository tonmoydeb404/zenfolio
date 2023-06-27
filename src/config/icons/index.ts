import appIcons, { AppIcon } from "./app-icons";
import contactIcons, { ContactIcon } from "./contact-icons";
import hobbyIcons, { HobbyIcon } from "./hobby-icons";
import projectIcons, { ProjectIcon } from "./project-icons";
import socialIcons, { SocialIcon } from "./social-icons";

export type Icon = AppIcon | ContactIcon | HobbyIcon | ProjectIcon | SocialIcon;
const icons = {
  ...appIcons,
  ...contactIcons,
  ...hobbyIcons,
  ...projectIcons,
  ...socialIcons,
};

export default icons;
