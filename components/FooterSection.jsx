import Link from "next/link";
import React from "react";
import { Footer } from "react-daisyui";
import DB from "../data/siteData.preval";

const FooterSection = () => {
  return (
    <>
      <Footer>
        {DB.pages && DB.pages?.length ? (
          <div>
            <Footer.Title>Pages</Footer.Title>
            {DB.pages.map((item) => (
              <Link
                href={item.path}
                key={item.id}
                target={item.newTab ? "_blank" : "_self"}
                className="link link-hover"
              >
                {item.title}
              </Link>
            ))}
          </div>
        ) : null}

        {DB.socials && DB.socials?.length ? (
          <div>
            <Footer.Title>Socials</Footer.Title>
            {DB.socials.map((item) => (
              <Link
                href={item.path}
                key={item.id}
                target={item.newTab ? "_blank" : "_self"}
                className="link link-hover"
              >
                {item.title}
              </Link>
            ))}
          </div>
        ) : null}

        {DB.legalLinks && DB.legalLinks?.length ? (
          <div>
            <Footer.Title>Legal</Footer.Title>
            {DB.legalLinks.map((item) => (
              <Link
                href={item.path}
                key={item.id}
                target={item.newTab ? "_blank" : "_self"}
                className="link link-hover"
              >
                {item.title}
              </Link>
            ))}
          </div>
        ) : null}
      </Footer>
      <div className="copyright py-3 px-2 text-sm text-center border-t border-t-gray-300">
        &copy; all rights are reserved by{" "}
        <Link href={"/"} className="text-primary font-semibold">
          {DB.name.toLowerCase()}
        </Link>
      </div>
    </>
  );
};

export default FooterSection;
