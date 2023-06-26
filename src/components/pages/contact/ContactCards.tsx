import ContactCard from "@/components/cards/ContactCard";
import contactIcons from "@/config/icons/contact-icons";

const ContactCards = () => {
  return (
    <section className="flex flex-col gap-3 pt-16">
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
    </section>
  );
};

export default ContactCards;
