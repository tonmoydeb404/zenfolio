import icons from "@/config/icons";
import { Link as LinkType } from "@/types/common.type";
import Link from "next/link";

type Props = {
  links?: LinkType[];
};

const FooterLinks = ({ links = [] }: Props) => {
  return (
    <ul className="icon-list gap-0">
      {links.map((link) => {
        if (!link.icon || !icons[link.icon]) return null;
        const Icon = icons[link.icon];
        return (
          <li key={link.id}>
            <Link
              href={link.path}
              className="icon-list_icon text-2xl"
              title={link.title}
              target={link.newTab ? "_blank" : undefined}
              aria-label={link.title}
            >
              <Icon />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterLinks;
