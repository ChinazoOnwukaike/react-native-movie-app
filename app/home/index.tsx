import useMovies from "../../presentation/hooks/useMovies";
import mapMovies from "../../infrastructure/mappers/movie.mapper";
import { View, Text, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = () => {
  const { moviePayload, isLoading } = useMovies("now_playing");
  const movies = moviePayload?.results.map(mapMovies);

  const safeArea = useSafeAreaInsets();

  return isLoading ? (
    <View className="justify-center items-center flex-1">
      <ActivityIndicator color="purple" size={30} />
    </View>
  ) : (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2">HomeScreen</Text>
      {/* <Text>{JSON.stringify(movies)}</Text> */}
    </View>
  );
};

export default Home;
