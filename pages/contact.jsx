import React from "react";
import { Divider } from "react-daisyui";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import FetchErrorHandler from "../components/FetchErrorHandler";
import Header from "../components/Header";
import LinkIconList from "../components/LinkIconList";
import SEOHead from "../components/SEOHead";
import { getAuthor } from "../services/cms";

export const getStaticProps = async () => {
  const response = await getAuthor({ authorID: "tonmoy-deb" });

  return {
    props: {
      data: response.author || {},
      error: response.error || false,
    },
  };
};

const Contact = ({ data, error }) => {
  return (
    <>
      <SEOHead title={"Contact - Tonmoy Deb"} path="/contact" />

      <FetchErrorHandler error={error} className="error_msg-1 my-5">
        {/* header area */}
        <Header
          title={"Contact Me"}
          text={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium tempore architecto qui dolorem laboriosam quo magnam necessitatibus, cumque eius libero."
          }
        >
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
