import getMovies from "../../core/api/getMovies";
import { MoviesResponse } from "../../infrastructure/models/moviesResponse";
import useSWR from "swr";

const useMovies = (urlEnd: string) => {
  const { data, error, isLoading, mutate } = useSWR<MoviesResponse>(
    urlEnd,
    getMovies,
    {
      revalidateOnFocus: false,
      dedupingInterval: 1000 * 60 * 60 * 60, //24 hours
    }
  );
  return {
    moviePayload: data,
    isLoading,
    error,
    mutateMovies: mutate,
  };
};

export default useMovies;
