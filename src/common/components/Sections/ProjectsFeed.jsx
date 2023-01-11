import React, { useEffect, useState } from "react";
import { BiError } from "react-icons/bi";
import InfiniteScroll from "react-infinite-scroll-component";
import useProjects from "../../hooks/useProjects";
import ProjectCard, { ProjectCardSkeleton } from "../Cards/ProjectCard";
import FilterComponent from "../FilterComponent";

const ProjectsFeed = () => {
  const { projectsData, projectsError, projectsLoading } = useProjects();
  // states
  const [projectTypes, setProjectTypes] = useState([]);
  const [projectList, setProjectList] = useState([]);
  // current filter state
  const [filter, setFilter] = useState("ALL");
  // pagination states
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 4;
  const hasMore = projectList.length != currentData.length;

  // handle load more fuction for pagination
  const handleLoadMore = () => {
    setCurrentPage((prevValue) => prevValue + 1);
  };

  // initial tasks
  useEffect(() => {
    if (!projectsLoading && !projectsError && projectsData) {
      // update project type state
      setProjectTypes(projectsData.__type?.enumValues || []);
      // update project list state with filter
      let projects = [...projectsData.projects];
      if (filter && filter != "ALL") {
        projects = projects.filter((item) => {
          return filter == item.type;
        });
      }
      setProjectList([...projects]);
    }
  }, [projectsLoading, projectsError, projectsData, filter]);

  // update current posts for pagination
  useEffect(() => {
    if (projectList) {
      setCurrentData([...projectList.slice(0, dataPerPage * currentPage)]);
    }
  }, [projectList, dataPerPage, currentPage]);

  // error return
  if (!projectsData && projectsError) {
    return (
      <div className={`error_msg error_msg-1`}>
        <BiError />
        something wents to wrong
      </div>
    );
  }

  return (
    <div>
      {!projectsLoading ? (
        <FilterComponent
          list={projectTypes}
          name="portfolioFilter"
          className="portfolio_projects_filter mb-10"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          optionKey="name"
          optionValue={"name"}
        />
      ) : (
        <div className="w-[200px] h-[48px] bg-base-content/10 shadow-sm bordered mb-10 animate-pulse"></div>
      )}

      {!projectsLoading ? (
        <InfiniteScroll
          dataLength={currentData.length}
          next={handleLoadMore}
          hasMore={hasMore}
          loader={
            <>
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
            </>
          }
          className="portfolio_projects_content"
          scrollThreshold={1}
          endMessage={
            <p className="error_msg error_msg-3 mt-5 sm:col-span-2">
              {projectList.length
                ? "no more projects"
                : "no projects are found"}
            </p>
          }
        >
          {currentData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              text={project.description}
              tags={project.stacks}
              imgSrc={project.thumbnail?.url}
              srcCode={project.sourceLink}
              demo={project.demoLink}
              slug={project.slug}
            />
          ))}
        </InfiniteScroll>
      ) : (
        <div className="portfolio_projects_content">
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      )}
    </div>
  );
};

export default ProjectsFeed;
