import React from "react";
import { Divider } from "react-daisyui";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import FetchErrorHandler from "../components/FetchErrorHandler";
import Header from "../components/Header";
import LinkIconList from "../components/LinkIconList";
import SEOHead from "../components/SEOHead";
import { getAuthor, getPage } from "../services/cms";

export const getStaticProps = async () => {
  const authorResponse = await getAuthor();
  const pageResponse = await getPage({ slug: "contact" });

  return {
    props: {
      data: authorResponse.author || {},
      page: pageResponse.page || {},
      error: authorResponse.error || pageResponse.error || false,
    },
  };
};

const Contact = ({ data, page, error }) => {
  return (
    <>
      <SEOHead
        title={page.seo.title}
        follow={page.seo.followPage}
        index={page.seo.indexPage}
        keywords={page.seo.keywords}
        url={page.seo.url}
        description={page.seo.description}
        image={page.seo.thumbnail}
      />

      <FetchErrorHandler error={error} className="error_msg-1 my-5">
        {/* header area */}
        <Header title={page.title} text={page.description}>
          {/* social section */}
          <div className="social contact_social pb-0">
            <Divider>
              <LinkIconList list={data.socialLinks} />
            </Divider>
          </div>
        </Header>

        {/* contact page forms */}
        <ContactForm email={data.email} />

        {/* contact cards */}
        <div className="contact_cards pb-16">
          {data.contacts &&
            data.contacts.map((item) => (
              <ContactCard
                title={item.title}
                link={item.path}
                text={item.text}
                icon={item.iconName}
                key={item.id}
              />
            ))}
        </div>
      </FetchErrorHandler>
    </>
  );
};

export default Contact;
