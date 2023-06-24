import HomeHero from "@/components/pages/home/HomeHero";
import HomeSkills from "@/components/pages/home/HomeSkills";

export default function Home() {
  return (
    <section className="wrapper">
      <HomeHero
        name="Tonmoy Deb"
        profession="Front-end Developer"
        bio="a self-taught programmer from Bangladesh, who loves to explore the binary world."
        avatar="https://tonmoydeb.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FlBCgPojdTjWqXB6V0UC6&w=256&q=75"
        primaryCTA={{
          text: "Download CV",
          url: "#",
        }}
        secondaryCTA={{
          text: "Github",
          url: "#",
        }}
      />
      <HomeSkills />
    </section>
  );
}
