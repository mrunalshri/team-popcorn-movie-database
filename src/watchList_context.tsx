import React, { useState, useContext } from "react";
import { MovieDetails } from "./types/movie";

export const WatchlistContext = React.createContext<{
  watchlistedMovies: MovieDetails[];
  handleWatchListClick: (value: MovieDetails) => void;
}>({
  watchlistedMovies: [],
  handleWatchListClick: () => null,
});

export function useWatchListContext() {
  return useContext(WatchlistContext);
}

export function WatchListProvider({ children }: { children: React.ReactNode }) {
  const [watchlistedMovies, setWatchlistedMovies] = useState<MovieDetails[]>(
    []
  );
  const handleWatchListClick = (movieData: MovieDetails) => {
    if (movieData) {
      const isWatchlisted = watchlistedMovies.some(
        (movie) => movie.id === movieData.id
      );
      if (!isWatchlisted) {
        setWatchlistedMovies([...watchlistedMovies, movieData]);
      } else {
        const filteredWatchlistMovies = watchlistedMovies.filter(
          (movie) => movie.id !== movieData.id
        );
        setWatchlistedMovies(filteredWatchlistMovies);
      }
    }
  };
  return (
    <>
      <WatchlistContext.Provider
        value={{
          watchlistedMovies: watchlistedMovies,
          handleWatchListClick: handleWatchListClick,
        }}
      >
        {children}
      </WatchlistContext.Provider>
    </>
  );
}
