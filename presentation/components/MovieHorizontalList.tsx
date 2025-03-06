import { View, Text, FlatList } from "react-native";
import React from "react";
import { Movie } from "../../infrastructure/models/movieModel";
import MoviePoster from "./MoviePoster";

const MovieHorizontalList = ({
  movies,
  title,
  className,
}: {
  movies: Movie[];
  title?: string;
  className?: string;
}) => {
  return (
    <View className={`${className}`}>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item: movie }) => (
          <MoviePoster id={movie.id} poster={movie.poster} smallPoster />
        )}
      />
    </View>
  );
};

export default MovieHorizontalList;
