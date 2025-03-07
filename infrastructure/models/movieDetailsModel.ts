import { Genre, ProductionCompany } from "./movieDetailsResponse";
import { Movie } from "./movieModel";

type MovieDetails = Movie & {
  genres: Genre[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: ProductionCompany[];
};

export default MovieDetails;
