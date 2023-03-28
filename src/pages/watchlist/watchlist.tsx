import React from "react";
import { MovieDetails } from "../../types/movie";
import { useWatchListContext } from "../../watchList_context";
import DisplayMovieCard from "../../Components/displayMovieCard/displayMovieCard";
import {
  convertMinToHoursAndMinutes,
  convertReleaseDateToYear,
} from "../../scripts/utils";

const Watchlist: React.FC = () => {
  const { watchlistedMovies, handleWatchListClick } = useWatchListContext();

  return (
    <div className="mt-12">
      <div className="pb-2.5 flex flex-wrap justify-center text-2xl">
        WHY NOT WATCH MOVIE FROM YOUR WATCHLIST?
      </div>
      <div className="flex flex-wrap justify-center">
        {watchlistedMovies.length > 0 ? (
          watchlistedMovies.map((movie: MovieDetails) => (
            <React.Fragment key={`watch-list${movie.id}`}>
              <DisplayMovieCard movieDetail={movie}>
                <>
                  <div className="flex min-h-20	flex-col justify-center md:w-56 self-center items-center bg-neutral-800 p-1	 mt-1.5">
                    <h4 className="text-center">{movie.original_title}</h4>
                    <div>
                      {movie.release_date && (
                        <span className="mr-2">
                          {convertReleaseDateToYear(movie.release_date)}
                        </span>
                      )}
                      {movie.runtime && (
                        <span>
                          {convertMinToHoursAndMinutes(movie.runtime)}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      handleWatchListClick(movie);
                    }}
                    className="cursor-pointer flex justify-center my-2 text-black py-1 md:w-56 w-56 bg-slate-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                    <span className="ml-1 text-base">Remove</span>
                  </button>
                </>
              </DisplayMovieCard>
            </React.Fragment>
          ))
        ) : (
          <p>No movies added to watchlist!</p>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
