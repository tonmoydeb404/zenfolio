import HomeContacts from "@/components/pages/home/HomeContacts";
import HomeHero from "@/components/pages/home/HomeHero";
import HomeHobbies from "@/components/pages/home/HomeHobbies";
import HomeProjects from "@/components/pages/home/HomeProjects";
import HomeSkills from "@/components/pages/home/HomeSkills";
import HomeSocials from "@/components/pages/home/HomeSocials";
import { profileSchema } from "@/lib/schema-markup";
import { getProfile } from "@/utils/app-request";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const profile = await getProfile();

  return {
    title: {
      absolute: profile.meta.title,
    },
    description: profile.meta.description,
    keywords: profile.meta.keywords,
    alternates: {
      canonical: profile.meta.url,
    },
    openGraph: {
      images: profile.meta.thumbnail?.url,
      title: profile.meta.title,
      description: profile.meta.description,
      url: profile.meta.url,
      type: "profile",
    },
    robots: {
      index: profile.meta.indexPage,
      follow: profile.meta.followPage,
    },
  };
}

export default async function Home() {
  const profile = await getProfile();

  return (
    <>
      {profileSchema(profile).map((schema, index) => (
        <script
          key={`schema-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
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
