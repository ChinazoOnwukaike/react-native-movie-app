import getMovies from "@/core/api/getMovies";
import mapMovies from "@/infrastructure/mappers/movie.mapper";
import { MoviesResponse } from "@/infrastructure/models/moviesResponse";

const nowPlayingAction = async () => {
  try {
    const response: MoviesResponse = await getMovies("now_playing");

    const movies = response.results.map(mapMovies);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Can't get movies";
  }
};

export default nowPlayingAction;
