import Link from "next/link";
import React from "react";
import { Footer } from "react-daisyui";
import DB from "../constants/siteDetails.json";

const FooterSection = () => {
  return (
    <>
      <Footer>
        <div>
          <Footer.Title>Pages</Footer.Title>
          {DB.pageLinks &&
            DB.pageLinks.length &&
            DB.pageLinks.map((item) => (
              <Link href={item.path} key={item.id}>
                <a className="link link-hover">{item.title}</a>
              </Link>
            ))}
        </div>
        <div>
          <Footer.Title>Socials</Footer.Title>
          {DB.socialLinks &&
            DB.socialLinks.length &&
            DB.socialLinks.map((item) => (
              <Link href={item.path} key={item.id}>
                <a className="link link-hover">{item.title}</a>
              </Link>
            ))}
        </div>
        <div>
          <Footer.Title>Legal</Footer.Title>
          {DB.legalLinks &&
            DB.legalLinks.length &&
            DB.legalLinks.map((item) => (
              <Link href={item.path} key={item.id}>
                <a className="link link-hover">{item.title}</a>
              </Link>
            ))}
        </div>
      </Footer>
      <div className="copyright py-3 px-2 text-sm text-center border-t border-t-gray-300">
        &copy; all rights are reserved by{" "}
        <Link href={"/"}>
          <a className="text-primary font-semibold">
            {DB.author.toLowerCase()}
          </a>
        </Link>
      </div>
    </>
  );
};

export default FooterSection;
