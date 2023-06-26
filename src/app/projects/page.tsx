import PageHeader from "@/components/pages/common/PageHeader";
import ProjectList from "@/components/pages/projects/ProjectList";

const Projects = () => {
  return (
    <>
      <PageHeader
        title="Projects"
        desc="Whenever I learn a new technology I try to implement my knowledge by creating a project. so some of them are listed here and whenever I get some free-time I’d like to think about my next project"
      />
      <ProjectList />
    </>
  );
};

export default Projects;
