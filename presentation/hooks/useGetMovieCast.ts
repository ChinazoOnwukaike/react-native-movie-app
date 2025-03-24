import getMovies from "../../core/api/getMovies";
import useSWR from "swr";
import { MovieCastResponse } from "../../infrastructure/models/movieCastResponse";
import mapCast from "../../infrastructure/mappers/moveCast.mapper";

const useGetMovieCast = (id: string) => {
  const { data, error } = useSWR<MovieCastResponse>(
    `/${id}/credits`,
    getMovies,
    {
      revalidateOnFocus: false,
      dedupingInterval: 1000 * 60 * 60 * 60, //24 hours
    }
  );

  if (error) {
    throw new Error(error.message);
  }

  const cast = data?.cast.map(mapCast);

  return { cast };
};

export default useGetMovieCast;
