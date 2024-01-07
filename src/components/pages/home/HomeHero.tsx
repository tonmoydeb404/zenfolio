import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link as LinkType } from "@/types/common.type";
import Link from "next/link";

type Props = {
  name: string;
  profession: string;
  bio: string;
  avatar: string;
  primaryCTA: LinkType | null;
  secondaryCTA: LinkType | null;
};

const HomeHero = (props: Props) => {
  const { name, profession, bio, avatar, primaryCTA, secondaryCTA } = props;

  return (
    <header className={`home-hero`}>
      <div className="home-hero_body">
        <h1 className="home-hero_name">{name}</h1>
        <h2 className="home-hero_profession">{profession}</h2>
        <p className="home-hero_bio">{bio}</p>

        <div className="home-hero_cta">
          {primaryCTA ? (
            <Button size={"lg"} className="uppercase font-semibold" asChild>
              <Link href={primaryCTA.path} target="_blank">
                {primaryCTA.title}
              </Link>
            </Button>
          ) : null}
          {secondaryCTA ? (
            <Button
              size={"lg"}
              className="uppercase font-semibold"
              asChild
              variant={"outline"}
            >
              <Link href={secondaryCTA.path} target="_blank">
                {secondaryCTA.title}
              </Link>
            </Button>
          ) : null}
        </div>
      </div>

      <div className="home-hero_media">
        <Avatar className="w-36 h-36 rounded">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="rounded"></AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default HomeHero;
