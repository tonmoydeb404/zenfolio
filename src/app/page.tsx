import HomeContacts from "@/components/pages/home/HomeContacts";
import HomeHero from "@/components/pages/home/HomeHero";
import HomeHobbies from "@/components/pages/home/HomeHobbies";
import HomeProjects from "@/components/pages/home/HomeProjects";
import HomeSkills from "@/components/pages/home/HomeSkills";
import HomeSocials from "@/components/pages/home/HomeSocials";
import { profileQuery, queryWrapper } from "@/lib/hygraph-queries";
import { Profile } from "@/types/hygraph.type";

const getData = async () => {
  const CMS_ENDPOINT = process.env.CMS_ENDPOINT as string;
  const PROFILE_ID = process.env.PROFILE_ID as string;

  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: queryWrapper("getProfile", [profileQuery(PROFILE_ID)]),
    }),
    next: {
      tags: [PROFILE_ID],
    },
  });

  const { data } = await response.json();

  return data.profile as Profile;
};

export default async function Home() {
  const profile = await getData();

  return (
    <>
      <HomeHero
        name={profile.name}
        profession={profile.profession}
        bio={profile.bio}
        avatar={profile.avatar.url}
        primaryCTA={profile.primaryCta}
        secondaryCTA={profile.secondaryCta}
      />
      <HomeSocials links={profile.socialLinks} />
      <HomeSkills
        title={profile.skillSectionTitle}
        description={profile.skillSectionDescription}
        techSkills={profile.techSkills}
        otherSkills={profile.otherSkills}
      />
      <HomeProjects
        title={profile.featuredProjectsSectionTitle}
        description={profile.featuredProjectsSectionDescription}
        projects={profile.featuredProjects}
      />
      <HomeHobbies
        title={profile.hobbySectionTitle}
        description={profile.hobbySectionDescription}
        hobbies={profile.hobbies}
      />
      <HomeContacts
        title={profile.contactSectionTitle}
        description={profile.contactSectionDescription}
        contacts={profile.contacts}
      />
    </>
  );
}
