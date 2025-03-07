import { Fetcher } from "swr";

const getMovies = (async (urlEnd: string) => {
  const url = `${process.env.EXPO_PUBLIC_MOVIE_DB_URL}${urlEnd}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${process.env.EXPO_PUBLIC_MOVIE_DB_ACCESS_TOKEN}`,
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw `no movies received`;
  }

  return response.json();
}) satisfies Fetcher;
export default getMovies;
