import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const useArticles = () => {
  const { data, error, isLoading } = useSWR("/api/articles", fetcher);

  return {
    articlesData: data,
    articlesError: error,
    articlesLoading: isLoading,
  };
};

export default useArticles;
