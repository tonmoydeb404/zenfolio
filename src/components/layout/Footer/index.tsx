import { Separator } from "@/components/ui/separator";
import appIcons from "@/config/icons/app-icons";
import { Link as LinkType } from "@/types/common.type";
import FooterLinks from "./FooterLinks";

type Props = {
  copyrightText: string;
  footerLinks: LinkType[];
};

const Footer = ({ copyrightText, footerLinks }: Props) => {
  return (
    <footer className="container mt-32">
      <div className="wrapper">
        <Separator />

        <div className="flex flex-col sm:flex-row-reverse flex-wrap gap-5 items-center justify-center sm:justify-between px-3 py-4">
          {footerLinks ? <FooterLinks links={footerLinks} /> : null}
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
