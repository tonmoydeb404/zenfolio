import ContactCard from "@/components/cards/ContactCard";
import contactIcons, { ContactIcon } from "@/config/icons/contact-icons";
import { Link } from "@/types/common.type";

type Props = {
  title: string;
  description: string;
  contacts: Link<ContactIcon>[];
};

const HomeContacts = ({ title, contacts, description }: Props) => {
  return (
    <section className="pt-16">
      <h2 className="block_heading mb-1">{title}</h2>
      <p className="block_desc mb-10">{description}</p>

      <div className="flex flex-col gap-3">
        {contacts?.map((contact) => (
          <ContactCard
            key={contact.id}
            title={contact.title}
            icon={contactIcons[contact.icon]}
            link={contact.path}
            text={contact.text || ""}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeContacts;
