import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const useProjects = () => {
  const { data, error, isLoading } = useSWR("/api/projects", fetcher);

  return {
    projectsData: data,
    projectsError: error,
    projectsLoading: isLoading,
  };
};

export default useProjects;
