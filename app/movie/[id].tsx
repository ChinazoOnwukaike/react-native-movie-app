import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import useGetMovieDetails from "../../presentation/hooks/useGetMovieDetails";
import { ScrollView } from "react-native-gesture-handler";
import MovieHeader from "../../presentation/components/movie/MovieHeader";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import MovieCast from "@/presentation/components/movie/MovieCast";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const { movie, isLoading } = useGetMovieDetails(String(id));

  return isLoading || !movie ? (
    <View className="justify-center items-center flex-1">
      <Text className="mb-4">Espera Por Favor</Text>
      <ActivityIndicator color="purple" size={30} />
    </View>
  ) : (
    <ScrollView>
      <MovieHeader
        poster={movie.poster}
        originalTitle={movie.originalTitle}
        title={movie.title}
      />
      <MovieDescription movie={movie} />
      <MovieCast id={String(id)} />
    </ScrollView>
  );
};

export default MovieDetails;
