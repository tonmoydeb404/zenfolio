import PageHeader from "@/components/pages/common/PageHeader";
import ContactCards from "@/components/pages/contact/ContactCards";
import ContactForm from "@/components/pages/contact/ContactForm";
import HomeSocials from "@/components/pages/home/HomeSocials";
import { contactSchema } from "@/lib/schema-markup";
import { getPage, getPagesSlug, getProfile } from "@/utils/app-request";

const Contact = async () => {
  const contact = await getPage("contact");
  const profile = await getProfile();
  const pagesSlug = await getPagesSlug();
  return (
    <>
      {contactSchema(contact, profile, pagesSlug).map((schema, index) => (
        <script
          key={`schema-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <PageHeader title={contact.title} desc={contact.description} />
      <HomeSocials links={profile.socialLinks} />
      <ContactForm className="py-16" />
      <ContactCards contacts={profile.contacts} />
    </>
  );
};

export default Contact;
