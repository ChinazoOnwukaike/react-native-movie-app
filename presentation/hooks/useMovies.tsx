import { MoviesResponse } from "@/infrastructure/models/moviesResponse";
import getMovies from "../../core/api/getMovies";
import useSWRInfinite from "swr/infinite";
import mapMovies from "@/infrastructure/mappers/movie.mapper";

const useMovies = (urlEnd: string, limit?: string) => {
  const { data, error, isLoading, mutate, size, setSize } =
    useSWRInfinite<MoviesResponse>(
      (pageIndex: number, previousPageData: MoviesResponse | null) => {
        if (pageIndex === 0) return `${urlEnd}&page=1${limit ?? null}`;
        if (
          previousPageData &&
          previousPageData?.page >= previousPageData.total_pages
        ) {
          return null;
        } // reached the end

        console.log(
          `total=${previousPageData?.total_pages}, pageIndex=${pageIndex}`
        );
        return `${urlEnd}&page=${pageIndex + 1}${limit ?? null}`;
      },
      getMovies,
      {
        revalidateOnFocus: false,
        dedupingInterval: 1000 * 60 * 60 * 60, //24 hours
      }
    );

  // console.log("current size", size);
  // Handle loading state for fetching more data
  const isLoadingMore = isLoading && size > 0 && !data?.[size - 1];
  const isEndOfData = data?.[size - 1]?.results.length === 0;

  isEndOfData && console.log("end of data");

  // Function to load more data
  const loadMore = () => {
    if (!isLoadingMore && !isEndOfData) {
      setSize(size + 1); // Increment size to load next page'
    }
    console.log("size", size);
  };

  const results = data?.map((response) => response.results).flat();
  const movies = results?.map(mapMovies);

  return {
    movies,
    isLoading,
    error,
    mutateMovies: mutate,
    loadMore,
  };
};

export default useMovies;
