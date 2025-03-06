import { Movie } from "../models/movieModel";
import { Result } from "../models/moviesResponse";

const mapMovies = (movie: Result): Movie => {
  return {
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    releaseDate: new Date(movie.release_date),
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    rating: movie.vote_average,
  };
};

export default mapMovies;
