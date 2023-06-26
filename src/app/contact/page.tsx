import PageHeader from "@/components/pages/common/PageHeader";
import ContactCards from "@/components/pages/contact/ContactCards";
import ContactForm from "@/components/pages/contact/ContactForm";
import HomeSocials from "@/components/pages/home/HomeSocials";

const Contact = () => {
  return (
    <>
      <PageHeader
        title="Contact Me"
        desc="You can send me an email through this form or you can directly contact me through those links. I’m less active on social media so try to send me an email."
      />
      <HomeSocials />
      <ContactForm className="py-16" />
      <ContactCards />
    </>
  );
};

export default Contact;
