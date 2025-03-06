import { Fetcher } from "swr";
import ResponseError from "./ResponseError";

const jsonFetcher = (async <T = unknown>(key: string) => {
  const response = await fetch(key);
  if (!response.ok) {
    throw new ResponseError(response.status, await response.text());
  }
  const json: T = await response.json();

  return json;
}) satisfies Fetcher;

export default jsonFetcher;
