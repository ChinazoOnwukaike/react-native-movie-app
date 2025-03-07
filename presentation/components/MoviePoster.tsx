import { Pressable, Image } from "react-native";
import React from "react";
import { router } from "expo-router";

type MoviePosterType = {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
};

const MoviePoster = ({
  id,
  poster,
  smallPoster = false,
  className,
}: MoviePosterType) => {
  return (
    <Pressable
      className={`active:opacity-90 px-2 ${className}`}
      onPress={() => router.push(`/movie/${id}`)}
    >
      <Image
        source={{ uri: poster }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default MoviePoster;
