import { Separator } from "@/components/ui/separator";
import icons from "@/config/icons";
import appIcons from "@/config/icons/app-icons";
import { Link as FooterLink } from "@/types/hygraph.type";
import Link from "next/link";

type Props = {
  copyrightText: string;
  footerLinks: FooterLink[];
};

const Footer = ({ copyrightText, footerLinks }: Props) => {
  return (
    <footer className="container mt-32">
      <div className="wrapper">
        <Separator />

        <div className="flex flex-col sm:flex-row-reverse flex-wrap gap-5 items-center justify-center sm:justify-between px-3 py-4">
          {footerLinks ? (
            <ul className="icon-list gap-0">
              {footerLinks.map((link) => {
                if (!link.icon || !icons[link.icon]) return null;
                const Icon = icons[link.icon];
                return (
                  <Link
                    key={link.id}
                    href={link.path}
                    className="icon-list_icon text-2xl"
                    title={link.title}
                    target={link.newTab ? "_blank" : undefined}
                  >
                    <Icon />
                  </Link>
                );
              })}
            </ul>
          ) : null}
          <div className="flex items-center gap-1">
            <appIcons.COPYRIGHT className="text-lg text-primary" />
            <p>{copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
