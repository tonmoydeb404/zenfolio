import { Separator } from "@/components/ui/separator";
import socialIcons, { SocialIcon } from "@/config/icons/social-icons";
import { Link as LinkType } from "@/types/hygraph.type";
import Link from "next/link";

type Props = {
  links: LinkType<SocialIcon>[];
};

const HomeSocials = ({ links }: Props) => {
  return (
    <section className="flex items-center gap-5 py-5">
      <Separator className="flex-1" />
      {links ? (
        <ul className="icon-list">
          {links.map((link) => {
            const Icon = socialIcons[link.icon];
            if (!Icon) return null;
            return (
              <Link
                href={link.path}
                key={link.id}
                className="icon-list_icon"
                target="_blank"
                title={link.title}
              >
                <Icon />
              </Link>
            );
          })}
        </ul>
      ) : null}
      <Separator className="flex-1 hidden" />
    </section>
  );
};

export default HomeSocials;
