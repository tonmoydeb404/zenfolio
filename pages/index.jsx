import Link from "next/link";
import { Button, Divider } from "react-daisyui";
import ContactCard from "../components/ContactCard";
import FetchErrorHandler from "../components/FetchErrorHandler";
import Header from "../components/Header";
import HobbyCard from "../components/HobbyCard";
import LinkIconList from "../components/LinkIconList";
import ProjectCard from "../components/ProjectCard";
import SEOHead from "../components/SEOHead";
import SkillCard from "../components/SkillCard";
import { getAuthor } from "../services/cms";

export const getStaticProps = async () => {
  const response = await getAuthor({ authorID: "tonmoy-deb" });

  return {
    props: {
      data: response.author || {},
      error: response.error ? true : false,
    },
  };
};

export default function Home({ data, error }) {
  return (
    <>
      <SEOHead />
      <FetchErrorHandler error={error} className="error_msg-1 my-5">
        {/* header section */}
        <Header
          title={data.name}
          subtitle={data.tagLine}
          text={data.description}
          imgSrc={data.image?.url}
        >
          <div className="header_actions">
            {data.cvLink ? (
              <Link href={data.cvLink} passHref target={"_blank"}>
                <Button color="primary">
                  <i className="bx bx-cloud-download icon"></i> &nbsp; Download
                  Cv
                </Button>
              </Link>
            ) : (
              ""
            )}
            {data.cta ? (
              <Link
                href={data.cta?.path}
                passHref
                target={data.cta?.newTab ? "_blank" : "_self"}
              >
                <Button color="warning">{data.cta?.title}</Button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </Header>

        {/* social section */}
        <div className="social mb-16">
          <Divider>
            <LinkIconList list={data.socialLinks} />
          </Divider>
        </div>

        {/* skills section */}

        <div className="index_skills">
          <div className="box_header mb-10">
            <h2 className="box_header_title">My Skills</h2>
            <p className="box_header_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae voluptas quo repellendus earum a ut facere, eveniet
              dolorum excepturi dolor.
            </p>
          </div>

          <div className="index_skills_content mb-10">
            {data.devSkills.map((skill) => (
              <SkillCard
                title={skill.name}
                level={skill.level}
                key={skill.id}
              />
            ))}
          </div>
          <Divider className="">
            <span className="btn btn-sm btn-primary no-animation cursor-default">
              Other skills
            </span>
          </Divider>
          <div className="index_skills_content mt-10">
            {data.otherSkills.map((skill) => (
              <SkillCard
                title={skill.name}
                level={skill.level}
                key={skill.id}
              />
            ))}
          </div>
        </div>

        {/* projects section */}
        {data.projects && data.projects?.length ? (
          <div className="index_projects pb-16 mt-5">
            <div className="box_header mb-10">
              <h2 className="box_header_title">My Projects</h2>
              <p className="box_header_text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                repudiandae fuga at odio. Reprehenderit, voluptates deserunt
                ipsum nulla dolorum animi!
              </p>
            </div>

            <div className="index_projects_content">
              {data.projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  imgSrc={index > 1 ? false : project.thumbnail?.url}
                  title={project.title}
                  text={project.description}
                  demo={project.demoLink}
                  srcCode={project.sourceLink}
                  tags={project.stacks}
                  slug={project.slug}
                />
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

        {/* hobbies section */}
        {data?.hobbies && data?.hobbies?.length && (
          <div className="index_hobbies">
            <div className="box_header mb-10">
              <h2 className="box_header_title">Hobbies</h2>
            </div>

            <div className="index_hobbies_content">
              {data.hobbies.map((hobby) => (
                <HobbyCard
                  title={hobby.title}
                  icon={hobby.iconName}
                  key={hobby.id}
                />
              ))}
            </div>
          </div>
        )}

        {/* contact me section */}
        <div className="index_contact">
          <div className="box_header mb-10">
            <h2 className="box_header_title">Contact Me</h2>
            <p className="box_header_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae voluptas quo repellendus earum a ut facere, eveniet
              dolorum excepturi dolor.
            </p>
          </div>

          <div className="index_contact_content">
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

          <div className="index_contact_footer">
            <Link href={"/contact"} passHref>
              <Button color="primary">
                <i className="bx bx-paper-plane icon"></i> &nbsp; Contact Form
              </Button>
            </Link>
          </div>
        </div>
      </FetchErrorHandler>
    </>
  );
}
