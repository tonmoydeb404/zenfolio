import { ContactIconType } from "@/config/icons/contact-icons";
import Link from "next/link";

type Props = {
  icon: ContactIconType;
  title: string;
  link: string;
  text: string;
};

const ContactCard = ({ title, icon: Icon, link, text }: Props) => {
  return (
    <section
      className="contact-card flex items-center gap-4 w-full bg-white dark:bg-muted
    shadow border rounded px-4 py-3"
    >
      <span className="contact-card_icon text-4xl text-primary">
        <Icon />
      </span>

      <div className="contact-card_body flex-1">
        <h2 className="contact-card_title text-xl font-medium">{title}</h2>
        <Link
          href={link}
          className="contact-card_link opacity-90 hover:text-primary"
        >
          {text}
        </Link>
      </div>
    </section>
  );
};

export default ContactCard;
