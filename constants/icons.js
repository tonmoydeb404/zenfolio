import { BiBookReader, BiCodeAlt } from "react-icons/bi";
import { BsTwitch } from "react-icons/bs";
import {
  MdAlternateEmail,
  MdMyLocation,
  MdPhone,
  MdTravelExplore,
} from "react-icons/md";
import {
  SiFacebook,
  SiGithub,
  SiGmail,
  SiGoogle,
  SiLinkedin,
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
  books: <BiBookReader />,
  code: <BiCodeAlt />,
  travel: <MdTravelExplore />,
  email: <MdAlternateEmail />,
  address: <MdMyLocation />,
  phone: <MdPhone />,
};

export default icons;
