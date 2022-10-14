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

export default function Home({ data, error }) {
  return (
    <>
      <SEOHead />
      <FetchErrorHandler error={error} className="error_msg-1 my-5">
        {/* header section */}
        <Header
          title={data.name}
          subtitle={data.profession}
          text={data.bio}
          imgSrc={data.avatar?.url}
        >
          <div className="header_actions">
            <Button href={data.cvLink} color="primary">
              <i className="bx bx-cloud-download icon"></i> &nbsp; Download Cv
            </Button>
            {data.cta && (
              <Button href={data.cta?.link} color="warning">
                {data.cta?.title}
              </Button>
            )}
          </div>
        </Header>

        {/* social section */}
        <div className="social mb-16">
          <Divider>
            <LinkIconList list={data.externalLinks} />
          </Divider>
        </div>

        {/* skills section */}
        {data.skills && data.skills?.length && (
          <div className="index_skills">
            <div className="box_header mb-10">
              <h2 className="box_header_title">My Skills</h2>
              <p className="box_header_text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae voluptas quo repellendus earum a ut facere, eveniet
                dolorum excepturi dolor.
              </p>
            </div>

            <div className="index_skills_content">
              {data.skills.map((skill) => (
                <SkillCard
                  title={skill.title}
                  progress={skill.progress}
                  key={skill.id}
                />
              ))}
            </div>
          </div>
        )}

        {/* projects section */}
        {data.featuredProjects && data.featuredProjects?.length && (
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
              {data.featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  imgSrc={index > 1 ? false : project.thumbnail?.url}
                  title={project.title}
                  text={project.description}
                  demo={project.demoLink}
                  srcCode={project.sourceLink}
                  tags={project.stacks}
                />
              ))}
            </div>
          </div>
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
                  icon={hobby.icon}
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
            {data.email && (
              <ContactCard
                title={"Email"}
                link={`mailto:${data.email}`}
                text={data.email}
                icon={"bx-envelope"}
              />
            )}
            {data.addressText && (
              <ContactCard
                title={"Adress"}
                link={data.addressLink || "#"}
                icon={"bx-map"}
                text={data.addressText}
              />
            )}
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
