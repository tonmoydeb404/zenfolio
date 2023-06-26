import { Separator } from "@/components/ui/separator";
import socialIcons from "@/config/icons/social-icons";
import Link from "next/link";

const HomeSocials = () => {
  return (
    <section className="flex items-center gap-5 py-5">
      <Separator className="flex-1" />
      <ul className="icon-list">
        <Link href={"#"} className="icon-list_icon">
          <socialIcons.FACEBOOK />
        </Link>
        <Link href={"#"} className="icon-list_icon">
          <socialIcons.INSTAGRAM />
        </Link>
        <Link href={"#"} className="icon-list_icon">
          <socialIcons.GITHUB />
        </Link>
      </ul>
      <Separator className="flex-1 hidden" />
    </section>
  );
};

export default HomeSocials;
