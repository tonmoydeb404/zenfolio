import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  src: string;
  fallback?: string;
};

const Logo = ({ src, fallback }: Props) => {
  return (
    <Avatar className="rounded-sm">
      <AvatarImage src={src} />
      {fallback ? (
        <AvatarFallback className="bg-primary text-primary-foreground rounded-sm font-bold">
          {fallback}
        </AvatarFallback>
      ) : null}
    </Avatar>
  );
};

export default Logo;
