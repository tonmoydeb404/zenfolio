import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  src: string;
};

const Logo = ({ src }: Props) => {
  return (
    <Avatar className="rounded-sm">
      <AvatarImage src={src} />
      <AvatarFallback className="rounded-sm"></AvatarFallback>
    </Avatar>
  );
};

export default Logo;
