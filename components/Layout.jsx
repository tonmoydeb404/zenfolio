import React from "react";
import FooterSection from "./FooterSection";
import NavbarSection from "./NavbarSection";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <NavbarSection />
        <div className="main">
          {children}
          <FooterSection />
        </div>
      </div>
    </>
  );
};

export default Layout;
