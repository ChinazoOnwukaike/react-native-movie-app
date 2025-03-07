import MovieDetails from "../models/movieDetailsModel";
import { MovieDetailsResponse } from "../models/movieDetailsResponse";

const mapMovieDetails = (movie?: MovieDetailsResponse): MovieDetails => {
  if (!movie) {
    throw "No movie found";
  }
  return {
    id: movie.id,
    title: movie.title,
    description: movie.overview,
    releaseDate: new Date(movie.release_date),
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    rating: movie.vote_average,
    genres: movie.genres,
    duration: movie.runtime,
    budget: movie.budget,
    originalTitle: movie.original_title,
    productionCompanies: movie.production_companies,
  };
};

export default mapMovieDetails;
