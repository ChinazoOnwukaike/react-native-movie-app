import { View } from "react-native";
import useGetMovieCast from "../../../presentation/hooks/useGetMovieCast";
import ActorCard from "./ActorCard";

type MovieCastType = {
  id: string;
};
const MovieCast = ({ id }: MovieCastType) => {
  const { cast } = useGetMovieCast(String(id));

  return (
    <View className="flex flex-row">
      {cast?.map((actor) => (
        <ActorCard actor={actor} />
      ))}
    </View>
  );
};

export default MovieCast;
