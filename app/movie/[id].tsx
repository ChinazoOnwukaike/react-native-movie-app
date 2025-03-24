import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import useGetMovieDetails from "../../presentation/hooks/useGetMovieDetails";
import MoviePoster from "../../presentation/components/MoviePoster";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  console.log(id);

  const { movie, isLoading } = useGetMovieDetails(String(id));

  if (!movie) {
    throw new Error("no movie");
  }

  return isLoading ? (
    <View className="justify-center items-center flex-1">
      <Text className="mb-4">Espera Por Favor</Text>
      <ActivityIndicator color="purple" size={30} />
    </View>
  ) : (
    <GestureHandlerRootView>
      <ScrollView>
        <Text>{movie?.title}</Text>
        <MoviePoster id={movie.id} poster={movie.poster} />
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default MovieDetails;
