import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { SiFacebook, SiGithub, SiInstagram } from "react-icons/si";

const HomeSocials = () => {
  return (
    <section className="flex items-center gap-5 py-10">
      <Separator className="flex-1" />
      <ul className="icon-list">
        <Link href={"#"} className="icon-list_icon">
          <SiFacebook />
        </Link>
        <Link href={"#"} className="icon-list_icon">
          <SiInstagram />
        </Link>
        <Link href={"#"} className="icon-list_icon">
          <SiGithub />
        </Link>
      </ul>
      <Separator className="flex-1 hidden" />
    </section>
  );
};

export default HomeSocials;
