import DesktopLinks from "./DesktopLinks";
import Logo from "./Logo";
import MobileLinks from "./MobileLinks";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="wrapper flex items-center py-3">
        <Logo src="/icons/TD.png" fallback="TD" />
        <DesktopLinks className="hidden sm:flex ml-auto" />
        <div className="ml-auto inline-flex items-center gap-2">
          <ThemeButton />
          <MobileLinks className="sm:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
