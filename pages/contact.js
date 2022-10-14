import React from "react";
import { Divider } from "react-daisyui";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import FetchErrorHandler from "../components/FetchErrorHandler";
import Header from "../components/Header";
import LinkIconList from "../components/LinkIconList";
import SEOHead from "../components/SEOHead";
import { getAuthorData } from "../services";

export const getStaticProps = async () => {
  const author = await getAuthorData();

  return {
    props: {
      data: author.data || {},
      error: author.error,
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
              <LinkIconList list={data.externalLinks} />
            </Divider>
          </div>
        </Header>

        {/* contact page forms */}
        <ContactForm email={data.email} />

        {/* contact cards */}
        <div className="contact_cards pb-16">
          <ContactCard
            title={"Email"}
            link={`mailto:${data.email}`}
            text={data.email}
            icon={"bx-envelope"}
          />
          <ContactCard
            title={"Adress"}
            link={data.addressLink}
            icon={"bx-map"}
            text={data.addressText}
          />
        </div>
      </FetchErrorHandler>
    </>
  );
};

export default Contact;
