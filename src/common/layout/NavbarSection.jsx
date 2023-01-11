import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, Navbar } from "react-daisyui";
import icons from "../../constants/icons";
import DB from "../../data/siteData.preval";
import NavLink from "../components/NavLink";
import ThemeSwitch from "../components/ThemeSwitch";

const NavbarSection = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", mobileMenu);
  }, [mobileMenu]);

  return (
    <Navbar>
      <Navbar.Start>
        <Link href="/" className="navbar_brand">
          {DB.logoText}
        </Link>
      </Navbar.Start>

      <Navbar.Center>
        {DB.navLinks && DB.navLinks.length ? (
          <div className="navbar_links">
            <Menu>
              {DB.navLinks.map((item) => (
                <li key={item.id} role="menuitem">
                  <NavLink
                    activeClassName="navbar_active"
                    path={item.path}
                    onClick={() => setMobileMenu(false)}
                    target={item.newTab ? "_blank" : "_self"}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </Menu>
          </div>
        ) : null}
      </Navbar.Center>

      <Navbar.End>
        <div className="navbar_actions">
          <ThemeSwitch />
          <label
            className="swap swap-rotate btn btn-warning text-xl btn-sm px-3 py-5 sm:hidden z-[100000]"
            htmlFor="mobileMenuToggler"
          >
            <input
              type="checkbox"
              checked={mobileMenu}
              onChange={(e) => setMobileMenu(e.target?.checked)}
              id="mobileMenuToggler"
              aria-label="toggle mobile menu"
            />

            <span className="swap-on">{icons.navbar_close}</span>
            <span className="swap-off">{icons.navbar_open}</span>
          </label>
        </div>
      </Navbar.End>
    </Navbar>
  );
};

export default NavbarSection;
