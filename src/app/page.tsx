import HomeContacts from "@/components/pages/home/HomeContacts";
import HomeHero from "@/components/pages/home/HomeHero";
import HomeHobbies from "@/components/pages/home/HomeHobbies";
import HomeProjects from "@/components/pages/home/HomeProjects";
import HomeSkills from "@/components/pages/home/HomeSkills";
import HomeSocials from "@/components/pages/home/HomeSocials";

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
      <HomeSocials />
      <HomeSkills />
      <HomeProjects />
      <HomeHobbies />
      <HomeContacts />
    </section>
  );
}
