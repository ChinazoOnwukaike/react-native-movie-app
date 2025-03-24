import { View, Text } from "react-native";
import useGetMovieCast from "../../../presentation/hooks/useGetMovieCast";
import ActorCard from "./ActorCard";
import { FlatList } from "react-native-gesture-handler";

type MovieCastType = {
  id: string;
};
const MovieCast = ({ id }: MovieCastType) => {
  const { cast } = useGetMovieCast(String(id));

  return (
    <View className="mt-5 mb-20">
      <Text className="font-bold text-2xl px-5">Actors</Text>
      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};

export default MovieCast;
