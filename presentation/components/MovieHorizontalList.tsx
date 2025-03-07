import {
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;
    loadMore && loadMore();
  };
  return (
    <View className={`${className}`}>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item: movie }) => (
          <MoviePoster id={movie.id} poster={movie.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
