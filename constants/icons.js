import {
  BiBookReader,
  BiCodeAlt,
  BiMenu,
  BiPaperPlane,
  BiX,
} from "react-icons/bi";
import { BsTwitch } from "react-icons/bs";
import {
  MdAlternateEmail,
  MdDarkMode,
  MdFileDownload,
  MdLightMode,
  MdMyLocation,
  MdOutlineDesignServices,
  MdPhone,
  MdTravelExplore,
} from "react-icons/md";
import {
  SiFacebook,
  SiGithub,
  SiGmail,
  SiGoogle,
  SiLinkedin,
  SiSkype,
  SiTwitter,
  SiWhatsapp,
} from "react-icons/si";

const icons = {
  facebook: <SiFacebook />,
  twitter: <SiTwitter />,
  twitch: <BsTwitch />,
  whatsapp: <SiWhatsapp />,
  google: <SiGoogle />,
  linkedin: <SiLinkedin />,
  gmail: <SiGmail />,
  github: <SiGithub />,
  skype: <SiSkype />,
  books: <BiBookReader />,
  code: <BiCodeAlt />,
  travel: <MdTravelExplore />,
  email: <MdAlternateEmail />,
  address: <MdMyLocation />,
  phone: <MdPhone />,
  design: <MdOutlineDesignServices />,
  dark: <MdDarkMode />,
  light: <MdLightMode />,
  file_download: <MdFileDownload />,
  paper_plane: <BiPaperPlane />,
  navbar_close: <BiX />,
  navbar_open: <BiMenu />,
};

export default icons;
