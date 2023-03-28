import React, { useEffect, useState } from "react";
import DisplayMovieCard from "../../Components/displayMovieCard/displayMovieCard";
import { APIFetch } from "../../scripts/fetch/fetch";
import { convertReleaseDateToYear } from "../../scripts/utils";
import { MovieDetails } from "../../types/movie";

const TVShows: React.FC = () => {
  const [tvShows, setTvShows] = useState<MovieDetails[]>([]);

  useEffect(() => {
    const fetchTVShows = async () => {
      const tvShowsList = await APIFetch("/tv/popular");
      setTvShows(tvShowsList.results);
    };
    fetchTVShows();
  }, []);

  return (
    <div className="mt-12">
      <div className="text-center text-2xl pb-2.5">Popular TV Shows</div>
      <div className="flex flex-wrap justify-center">
        {tvShows.length > 0 ? (
          tvShows.map((movie: any) => {
            return (
              <React.Fragment key={`genre-movie-${movie.id}`}>
                {movie.poster_path && (
                  <DisplayMovieCard isTVShow={true} movieDetail={movie}>
                    <div className="flex flex-col justify-center md:w-56 self-center items-center bg-neutral-800	 mt-1.5">
                      <h4>{movie.original_name}</h4>
                      <div>
                        {movie.first_air_date && (
                          <span className="mr-2">
                            Year:{" "}
                            {convertReleaseDateToYear(movie.first_air_date)}
                          </span>
                        )}
                        <span>
                          Rating:{" "}
                          {movie.vote_average && (
                            <span>{movie.vote_average}</span>
                          )}
                        </span>
                      </div>
                    </div>
                  </DisplayMovieCard>
                )}
              </React.Fragment>
            );
          })
        ) : (
          <p>No TV shows found</p>
        )}
      </div>
    </div>
  );
};

export default TVShows;
