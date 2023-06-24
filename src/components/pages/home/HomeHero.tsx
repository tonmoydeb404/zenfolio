import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type CTA = { url: string; text: string };

type Props = {
  name: string;
  profession: string;
  bio: string;
  avatar: string;
  primaryCTA?: CTA;
  secondaryCTA?: CTA;
};

const HomeHero = ({
  name,
  profession,
  bio,
  avatar,
  primaryCTA,
  secondaryCTA,
}: Props) => {
  return (
    <header className={`home-hero`}>
      <div className="home-hero_body">
        <h1 className="home-hero_name">{name}</h1>
        <h2 className="home-hero_profession">{profession}</h2>
        <p className="home-hero_bio">{bio}</p>

        <div className="home-hero_cta">
          {primaryCTA ? (
            <Button size={"lg"} className="uppercase font-semibold" asChild>
              <Link href={primaryCTA.url} target="_blank">
                {primaryCTA.text}
              </Link>
            </Button>
          ) : null}
          {secondaryCTA ? (
            <Button
              size={"lg"}
              className="uppercase font-semibold"
              asChild
              variant={"secondary"}
            >
              <Link href={secondaryCTA.url} target="_blank">
                {secondaryCTA.text}
              </Link>
            </Button>
          ) : null}
        </div>
      </div>

      <div className="home-hero_media">
        <Avatar className="w-36 h-36 rounded">
          <AvatarImage src={avatar} />
          <AvatarFallback>TD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default HomeHero;
