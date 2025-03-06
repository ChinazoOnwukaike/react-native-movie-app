import getMovies from "../../core/api/getMovies";

import useSWR from "swr";

const useMovies = <T,>(urlEnd: string) => {
  const { data, error, isLoading, mutate } = useSWR<T>(urlEnd, getMovies, {
    revalidateOnFocus: false,
    dedupingInterval: 1000 * 60 * 60 * 60, //24 hours
  });
  return {
    moviePayload: data,
    isLoading,
    error,
    mutateMovies: mutate,
  };
};

export default useMovies;
