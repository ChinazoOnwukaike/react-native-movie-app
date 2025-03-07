import { MoviesResponse } from "@/infrastructure/models/moviesResponse";
import getMovies from "../../core/api/getMovies";
import useSWRInfinite from "swr/infinite";
import mapMovies from "@/infrastructure/mappers/movie.mapper";

const useMovies = (urlEnd: string, limit?: string) => {
  const { data, error, isLoading, size, setSize } =
    useSWRInfinite<MoviesResponse>(
      (pageIndex: number, previousPageData: MoviesResponse | null) => {
        if (previousPageData && previousPageData.results.length === 0) {
          return null;
        }

        if (pageIndex === 0 || !previousPageData) {
          return `${urlEnd}&page=1${limit ?? null}`;
        }

        return `${urlEnd}&page=${pageIndex + 1}${limit ?? null}`;
      },
      getMovies,
      {
        revalidateOnFocus: false,
        dedupingInterval: 1000 * 60 * 60 * 60, //24 hours
      }
    );

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEndOfData = data?.[size - 1]?.results.length === 0;

  isEndOfData && console.log("end of data");

  const loadMore = () => {
    if (!isLoadingMore && !isEndOfData) {
      setSize(size + 1);
    }
  };

  const results = data?.map((response) => response.results).flat();
  const movies = results?.map(mapMovies);

  return {
    movies,
    isLoading,
    error,
    loadMore,
  };
};

export default useMovies;
