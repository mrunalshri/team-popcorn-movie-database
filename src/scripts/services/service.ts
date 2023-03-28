import { APIFetch } from "../fetch/fetch";

export const getMoviesByKeyword = async (searchKeyword: string) => {
  const response = await APIFetch(`/search/multi`, [
    { param: "language", value: "en-US" },
    { param: "page", value: "1" },
    { param: "include_adult", value: "false" },
    { param: "query", value: searchKeyword },
  ]);

  if (response.results) {
    return response.results;
  }
  return response;
};
