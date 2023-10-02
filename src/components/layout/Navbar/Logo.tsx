import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

type Props = {
  src: string;
  title: string;
};

const Logo = ({ src, title }: Props) => {
  return (
    <Link href={"/"}>
      <Avatar className="rounded-sm">
        <AvatarImage src={src} alt={title} />
        <AvatarFallback className="rounded-sm"></AvatarFallback>
      </Avatar>
    </Link>
  );
};

export default Logo;
