import React, { useEffect, useState } from "react";
import FetchErrorHandler from "../../components/FetchErrorHandler";
import FilterComponent from "../../components/FilterComponent";
import Header from "../../components/Header";
import ProjectCard from "../../components/ProjectCard";
import SEOHead from "../../components/SEOHead";
import { getProjectsData } from "../../services";

export const getStaticProps = async () => {
  const projects = await getProjectsData();

  return {
    props: {
      data: projects.data || [],
      error: projects.error,
    },
  };
};

const Portfolio = ({ data, error }) => {
  // filter options
  const [filterOptions, setFilterOptions] = useState([]);

  // portfolio filter
  const [filter, setFilter] = useState("ALL");

  // filtered projects
  const [filteredProjects, setFilteredProjects] = useState([]);

  // filter options
  useEffect(() => {
    const fOptions = [];
    data.forEach((project) => {
      if (!fOptions.includes(project.projectType)) {
        fOptions.push(project.projectType);
      }
    });
    setFilterOptions(fOptions);
  }, [data]);

  // filter projects
  useEffect(() => {
    setFilteredProjects(() => {
      const filtered =
        data && data.length
          ? data.filter((item) => {
              if (filter == "ALL") return true;

              return filter == item.projectType;
            })
          : [];

      return filtered;
    });
  }, [filter, data]);

  return (
    <>
      <SEOHead title={"Portfolio - Tonmoy Deb"} path="/portfolio" />

      {/* header area */}
      <Header
        title={"Portfolio Projects"}
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium tempore architecto qui dolorem laboriosam quo magnam necessitatibus, cumque eius libero."
      />

      <FetchErrorHandler error={error} className="error_msg-1">
        {/* portfolio feed */}
        <div className="portfolio_projects">
          <FilterComponent
            list={filterOptions}
            name="portfolioFilter"
            className="portfolio_projects_filter mb-10"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          />

          <div className="portfolio_projects_content">
            {filteredProjects && filteredProjects.length
              ? filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    text={project.description}
                    tags={project.stacks}
                    imgSrc={project.thumbnail?.url}
                    srcCode={project.sourceLink}
                    demo={project.demoLink}
                  />
                ))
              : "no more projects"}
          </div>
        </div>
      </FetchErrorHandler>
    </>
  );
};

export default Portfolio;
