import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FetchErrorHandler from "../../components/FetchErrorHandler";
import FilterComponent from "../../components/FilterComponent";
import Header from "../../components/Header";
import ProjectCard, { ProjectCardSkeleton } from "../../components/ProjectCard";
import SEOHead from "../../components/SEOHead";
import { getProjectList } from "../../services/cms";

export const getStaticProps = async () => {
  const response = await getProjectList();

  return {
    props: {
      data: response.projects || [],
      projectTypes: response.__type?.enumValues || [],
      error: response.error ? true : false,
    },
  };
};

const Portfolio = ({ data, projectTypes, error }) => {
  // filter states
  const [filterOptions, setFilterOptions] = useState([]);
  const [filter, setFilter] = useState("ALL");

  const [allData, setAllData] = useState([]);

  // pagination states
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(4);
  const hasMore = allData.length != currentData.length;

  // filter options
  useEffect(() => {
    if (projectTypes && projectTypes.length) {
      setFilterOptions([...projectTypes]);
    }
  }, [projectTypes]);

  // update and filter all projects from data
  useEffect(() => {
    if (data && data?.length) {
      // clone projects
      let projects = [...data];

      // filter projects
      if (filter && filter != "ALL") {
        projects = projects.filter((item) => {
          return filter == item.type;
        });
      }

      // update projects
      setAllData([...projects]);
    }
  }, [data, filter]);

  // update current posts for pagination
  useEffect(() => {
    if (allData) {
      setCurrentData([...allData.slice(0, dataPerPage * currentPage)]);
    }
  }, [allData, dataPerPage, currentPage, filter]);

  // handle load more fuction for pagination
  const handleLoadMore = () => {
    setCurrentPage((prevValue) => prevValue + 1);
  };

  return (
    <>
      <SEOHead title={"Portfolio - Tonmoy Deb"} />

      {/* header area */}
      <Header
        title={"Portfolio Projects"}
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium tempore architecto qui dolorem laboriosam quo magnam necessitatibus, cumque eius libero."
      />

      <FetchErrorHandler error={error} className="error_msg-1">
        {/* portfolio feed */}
        {data && data.length ? (
          <div className="portfolio_projects">
            <FilterComponent
              list={filterOptions.filter((op) =>
                data.some((item) => item.type == op.name)
              )}
              name="portfolioFilter"
              className="portfolio_projects_filter mb-10"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            />

            {allData ? (
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
                  allData.length == currentData.length ? (
                    <p className="error_msg error_msg-3 mt-5 sm:col-span-2">
                      {allData.length
                        ? "no more projects"
                        : "no projects are found"}
                    </p>
                  ) : (
                    ""
                  )
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
        ) : (
          <div className={`error_msg error_msg-2`}>
            <i className="bx bx-sad"></i>
            there is no projects
          </div>
        )}
      </FetchErrorHandler>
    </>
  );
};

export default Portfolio;
