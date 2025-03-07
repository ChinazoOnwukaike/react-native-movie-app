import {
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React, { useRef } from "react";
import { Movie } from "../../infrastructure/models/movieModel";
import MoviePoster from "./MoviePoster";

const MovieHorizontalList = ({
  movies,
  title,
  className,
  loadMore,
}: {
  movies: Movie[];
  title?: string;
  className?: string;
  loadMore?: () => void;
}) => {
  const isLoading = useRef(false);
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;
    console.log("Get next movies");
    loadMore && loadMore();
  };
  return (
    <View className={`${className}`}>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item: movie }) => (
          <MoviePoster id={movie.id} poster={movie.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
