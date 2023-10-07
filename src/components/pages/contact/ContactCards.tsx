import ContactCard from "@/components/cards/ContactCard";
import contactIcons, { ContactIcon } from "@/config/icons/contact-icons";
import { Link } from "@/types/common.type";

type Props = {
  contacts: Link<ContactIcon>[];
};

const ContactCards = ({ contacts }: Props) => {
  return (
    <section className="flex flex-col gap-3 pt-16">
      {contacts?.map((contact) => (
        <ContactCard
          key={contact.id}
          title={contact.title}
          icon={contactIcons[contact.icon]}
          link={contact.path}
          text={contact.text || ""}
        />
      ))}
    </section>
  );
};

export default ContactCards;
