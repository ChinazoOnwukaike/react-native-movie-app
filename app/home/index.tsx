import useMovies from "../../presentation/hooks/useMovies";
import mapMovies from "../../infrastructure/mappers/movie.mapper";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideshow from "@/presentation/components/mainSlideshow";
import { MoviesResponse } from "@/infrastructure/models/moviesResponse";
import MovieHorizontalList from "@/presentation/components/MovieHorizontalList";

const Home = () => {
  const { moviePayload, isLoading } = useMovies<MoviesResponse>("now_playing");
  const movies = moviePayload?.results.map(mapMovies);

  const { moviePayload: popularMoviesPayload } =
    useMovies<MoviesResponse>("popular");
  const popularMovies = popularMoviesPayload?.results.map(mapMovies);

  const { moviePayload: topRatedMoviesPayload } =
    useMovies<MoviesResponse>("top_rated");
  const topRatedMovies = topRatedMoviesPayload?.results.map(mapMovies);

  const { moviePayload: upcomingMoviesPayload } =
    useMovies<MoviesResponse>("upcoming");
  const upcomingMovies = upcomingMoviesPayload?.results.map(mapMovies);

  const safeArea = useSafeAreaInsets();

  return isLoading ? (
    <View className="justify-center items-center flex-1">
      <ActivityIndicator color="purple" size={30} />
    </View>
  ) : (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>

        {/* Image Carousel */}
        <MainSlideshow movies={movies ?? []} />
        <MovieHorizontalList
          movies={popularMovies ?? []}
          title="Most Popular"
          className="mb-5"
        />
        <MovieHorizontalList
          movies={topRatedMovies ?? []}
          title="Top Rated"
          className="mb-5"
        />
        <MovieHorizontalList
          movies={upcomingMovies ?? []}
          title="Upcoming Movies"
          className="mb-5"
        />
        {/* <Text>{JSON.stringify(movies)}</Text> */}
      </View>
    </ScrollView>
  );
};

export default Home;
