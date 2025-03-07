import { MovieDetailsResponse } from "../../infrastructure/models/movieDetailsResponse";
import getMovies from "../../core/api/getMovies";
import useSWR from "swr";
import mapMovieDetails from "../../infrastructure/mappers/movieDetails.mapper";

const useGetMovieDetails = (id: string) => {
  const { data, error, isLoading } = useSWR<MovieDetailsResponse>(
    `/${id}?language=en-US`,
    getMovies,
    {
      revalidateOnFocus: false,
      dedupingInterval: 1000 * 60 * 60 * 60, //24 hours
    }
  );

  if (error) {
    throw new Error(error.message);
  }

  const movie = mapMovieDetails(data);

  return { movie, isLoading, error };
};

export default useGetMovieDetails;
