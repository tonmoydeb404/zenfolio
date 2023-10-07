import { Website } from "@/types/website.type";
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  website: Website;
  children: ReactNode;
};

const AppLayout = ({ children, website }: Props) => {
  return (
    <>
      <Navbar
        logo={website.logo?.url}
        navLinks={website.navigationLinks}
        title={website.title}
      />
      <main className="container">
        <div className="wrapper">{children}</div>
      </main>
      <Footer
        copyrightText={website.copyrightText}
        footerLinks={website.contactLinks}
      />
      {/* <Appbar navLinks={website.navigationLinks} /> */}
    </>
  );
};

export default AppLayout;
