import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearchDetails } from "../../search_context";
import { Movie } from "../../types/movie";
import { SearchResults } from "./type";

const SearchResult: React.FC<SearchResults> = ({ searchResults }) => {
  const navigate = useNavigate();
  const { updateSearchMovies, updateSearchKeyword } = useSearchDetails();

  return (
    <>
      <ul className="relative z-10 mt-7 bg-slate-800	 text-white border-gray-100 w-full mt-2">
        {searchResults.length > 0 ? (
          searchResults.map(
            ({ id, original_title, overview, poster_path }: Movie) =>
              poster_path &&
              overview &&
              original_title && (
                <li
                  key={`search_result_${id}`}
                  onClick={() => {
                    updateSearchMovies([]);
                    updateSearchKeyword("");
                    navigate(`/movie/${id}`);
                  }}
                  className="hero hover:bg-slate-900 cursor-grab bg-base-200 border-b-2 py-5 px-2"
                >
                  <div className="hero-content flex w-full">
                    <div className="fit-content w-2/5">
                      <img
                        alt={`movie-${original_title}`}
                        src={`https://image.tmdb.org/t/p/w440_and_h660_face${poster_path}`}
                        className="rounded-lg shadow-2xl m-auto"
                      />
                    </div>

                    <div className="w-3/5	 pl-3 text-left">
                      <span className="font-extrabold text-white">
                        {original_title}
                      </span>
                      <p className="py-1">
                        {overview && overview.length >= 200 ? (
                          <button
                            onClick={() => {
                              navigate(`/movie/${id}`);
                            }}
                            className="text-white text-left"
                          >
                            {overview?.slice(0, 200)}
                            <span className="text-blue-500"> Read More..</span>
                          </button>
                        ) : (
                          <span className="text-white text-left">
                            {overview}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </li>
              )
          )
        ) : (
          <li
            key={`search_result_no-records`}
            className="hero cursor-grab bg-base-200 border-b-8 my-4 py-4 px-2 hidden"
          >
            No results found!
          </li>
        )}
      </ul>
    </>
  );
};

export default SearchResult;
