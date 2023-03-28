import React, { useEffect, useState } from "react";
import DisplayMovieCard from "../../Components/displayMovieCard/displayMovieCard";
import Dropdown from "../../Components/Dropdown/Dropdown";
import { APIFetch } from "../../scripts/fetch/fetch";
import { Genre } from "../../types/genres";
import { MovieDetails } from "../../types/movie";

const Genres: React.FC = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [moviesByGenre, setMoviesByGenre] = useState<MovieDetails[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const genreList = await APIFetch("/genre/movie/list");
      setGenres(genreList.genres);
      setSelectedGenre(genreList.genres[0].id);
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchMovieByGenre = async () => {
      const moviesData = await APIFetch("/discover/movie/", [
        { param: "with_genres", value: selectedGenre },
      ]);

      setMoviesByGenre(moviesData.results);
    };
    fetchMovieByGenre();
  }, [selectedGenre]);

  return (
    <div className="mt-12">
      <div className="text-center text-2xl pb-2.5">Find Movies by Genres</div>
      <div className="text-black text-center my-4">
        <Dropdown
          options={genres}
          name="genre-dropdown"
          value={selectedGenre}
          onChangeHandler={setSelectedGenre}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {moviesByGenre.length > 0 ? (
          moviesByGenre.map((movie: MovieDetails) => {
            return (
              <React.Fragment key={`genre-movie-${movie.id}`}>
                <DisplayMovieCard movieDetail={movie}></DisplayMovieCard>
              </React.Fragment>
            );
          })
        ) : (
          <p>No movies found for selected genre</p>
        )}
      </div>
    </div>
  );
};

export default Genres;
