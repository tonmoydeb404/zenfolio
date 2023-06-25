import ContactCard from "@/components/cards/ContactCard";
import { contactIcons } from "@/config/contact-icon";

const HomeContacts = () => {
  return (
    <section className="py-16">
      <h2 className="block_heading mb-1">Contact Me</h2>
      <p className="block_desc mb-10">
        I’m really interested to work or collaborate with any company that
        thinks that my skills are helpful to them. So please let me know.
      </p>

      <div className="flex flex-col gap-3">
        <ContactCard
          title="Email"
          icon={contactIcons.EMAIL}
          link="#"
          text="tonmoydeb404@gmail.com"
        />
        <ContactCard
          title="Address"
          icon={contactIcons.ADDRESS}
          link="#"
          text="Moulvibazar, Sylhet, Bangladesh"
        />
        <ContactCard
          title="Phone"
          icon={contactIcons.PHONE}
          link="#"
          text="+8801571362609"
        />
      </div>
    </section>
  );
};

export default HomeContacts;
