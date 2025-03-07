import useMovies from "../../presentation/hooks/useMovies";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideshow from "@/presentation/components/mainSlideshow";
import MovieHorizontalList from "@/presentation/components/MovieHorizontalList";

const Home = () => {
  // const limit = {
  //   movie: 10,
  //   popular: 10,
  //   topRated: 10,
  //   upcoming: 10,
  // };

  const { movies, isLoading } = useMovies(`/now_playing?language=en-US`);

  const { movies: popularMovies, loadMore: popularLoadMore } = useMovies(
    `/popular?language=en-US`
  );

  const { movies: topRatedMovies, loadMore: topRatedLoadMore } = useMovies(
    `/top_rated?language=en-US`
  );

  const { movies: upcomingMovies, loadMore: upcomingLoadMore } = useMovies(
    `/upcoming?language=en-US`
  );

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
          loadMore={popularLoadMore}
        />
        <MovieHorizontalList
          movies={topRatedMovies ?? []}
          title="Top Rated"
          className="mb-5"
          loadMore={topRatedLoadMore}
        />
        <MovieHorizontalList
          movies={upcomingMovies ?? []}
          title="Upcoming Movies"
          className="mb-5"
          loadMore={upcomingLoadMore}
        />
        {/* <Text>{JSON.stringify(movies)}</Text> */}
      </View>
    </ScrollView>
  );
};

export default Home;
