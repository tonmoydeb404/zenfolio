import { Separator } from "@/components/ui/separator";
import appIcons from "@/config/app-icons";
import socialIcons from "@/config/social-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container">
      <div className="wrapper pt-5">
        <Separator />

        <div className="flex flex-col sm:flex-row-reverse flex-wrap gap-5 items-center justify-center sm:justify-between px-3 py-4">
          <ul className="icon-list gap-0">
            <Link href={"#"} className="icon-list_icon text-2xl">
              <socialIcons.FACEBOOK />
            </Link>
            <Link href={"#"} className="icon-list_icon text-2xl">
              <socialIcons.INSTAGRAM />
            </Link>
            <Link href={"#"} className="icon-list_icon text-2xl">
              <socialIcons.GITHUB />
            </Link>
          </ul>
          <div className="flex items-center gap-1">
            <appIcons.COPYRIGHT className="text-lg text-primary" />
            <p>all rights are reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
