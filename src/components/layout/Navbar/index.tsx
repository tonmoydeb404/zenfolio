import { Link } from "@/types/hygraph.type";
import DesktopLinks from "./DesktopLinks";
import Logo from "./Logo";
import MobileLinks from "./MobileLinks";
import ThemeButton from "./ThemeButton";

type Props = {
  logo: string;
  navLinks: Link[];
};

const Navbar = ({ logo, navLinks }: Props) => {
  return (
    <nav className="container">
      <div className="wrapper flex items-center py-3">
        <Logo src={logo} />
        <DesktopLinks className="hidden sm:flex ml-auto" navLinks={navLinks} />
        <div className="ml-auto inline-flex items-center gap-2">
          <ThemeButton />
          <MobileLinks className="sm:hidden" navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
