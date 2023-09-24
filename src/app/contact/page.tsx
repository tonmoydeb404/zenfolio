import PageHeader from "@/components/pages/common/PageHeader";
import ContactCards from "@/components/pages/contact/ContactCards";
import ContactForm from "@/components/pages/contact/ContactForm";
import HomeSocials from "@/components/pages/home/HomeSocials";
import { profileQuery, queryWrapper } from "@/lib/hygraph-queries";
import { Profile } from "@/types/hygraph.type";

const getProfile = async () => {
  const CMS_ENDPOINT = process.env.CMS_ENDPOINT as string;
  const PROFILE_ID = process.env.PROFILE_ID as string;

  const response = await fetch(CMS_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query: queryWrapper("getProfile", [profileQuery(PROFILE_ID)]),
    }),
  });

  const { data } = await response.json();

  return data.profile as Profile;
};

const Contact = async () => {
  const profile = await getProfile();
  return (
    <>
      <PageHeader
        title="Contact Me"
        desc="You can send me an email through this form or you can directly contact me through those links. I’m less active on social media so try to send me an email."
      />
      <HomeSocials links={profile.socialLinks} />
      <ContactForm className="py-16" />
      <ContactCards contacts={profile.contacts} />
    </>
  );
};

export default Contact;
