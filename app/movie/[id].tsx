import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import useGetMovieDetails from "../../presentation/hooks/useGetMovieDetails";
import MoviePoster from "../../presentation/components/MoviePoster";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  console.log(id);

  const { movie } = useGetMovieDetails(`${id}`);

  return (
    <View>
      <Text>{movie.title}</Text>
      <MoviePoster id={movie.id} poster={movie.poster} />
    </View>
  );
};

export default MovieDetails;
