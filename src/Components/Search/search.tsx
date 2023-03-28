import React from "react";
import { useSearchDetails } from "../../search_context";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

const Search: React.FC = () => {
  const { searchedMovies, getSearchMovies } = useSearchDetails();

  return (
    <div className="w-9/12 ">
      <div className="relative flex items-center hover:border-slate-400 focus:border-slate-400  h-10 rounded-lg	 bg-slate-800	border-slate-700 top-1/4 border	 overflow-hidden">
        <SearchInput onChangeHandler={getSearchMovies} />
      </div>
      <SearchResult searchResults={searchedMovies} />
    </div>
  );
};

export default Search;
