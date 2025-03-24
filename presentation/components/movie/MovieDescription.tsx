import { View, Text } from "react-native";
import MovieDetails from "../../../infrastructure/models/movieDetailsModel";
import formatter from "../../../config/helpers/formatter";

type MovieDescriptionType = {
  movie: MovieDetails;
};
const MovieDescription = ({ movie }: MovieDescriptionType) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row">
        <Text>{movie.rating}</Text>
        <Text> - {movie.genres.map((genre) => genre.name).join(", ")}</Text>
      </View>

      <Text className="font-bold mt-5">Summary</Text>
      <Text className="font-normal mt-2">{movie.description}</Text>

      <Text className="font-bold mt-2 text-2xl">{formatter(movie.budget)}</Text>
    </View>
  );
};

export default MovieDescription;
