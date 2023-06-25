import Link from "next/link";

type FooterLink = {
  title: string;
  url: string;
  newTab?: boolean;
};

type Props = {
  title: string;
  links?: FooterLink[];
};

const FooterLinks = ({ title, links = [] }: Props) => {
  return (
    <section className="footer-links">
      <h3 className="footer-links_title uppercase text-sm font-semibold opacity-60 mb-5">
        {title}
      </h3>
      <ul className="footer-links_list flex flex-col gap-1.5 text-sm">
        {links.map((link) => (
          <li key={link.url} className="footer-links_item">
            <Link
              href={link.url}
              target={link.newTab ? "_blank" : ""}
              className="hover:text-primary"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterLinks;
