import React from "react";
import { useSearchDetails } from "../../search_context";
import { SearchInputProps } from "./type";

const SearchInput: React.FC<SearchInputProps> = ({ onChangeHandler }) => {
  const { updateSearchKeyword, searchKeyword } = useSearchDetails();

  return (
    <>
      <div className="grid place-items-center  w-12 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        className="peer w-full outline-none font-bold bg-slate-800		 text-sm  pr-2 "
        type="text"
        value={searchKeyword}
        onChange={({ target }) => {
          updateSearchKeyword(target.value);
          onChangeHandler(target.value);
        }}
        aria-label="search"
        placeholder="Search movies.."
      />
    </>
  );
};

export default SearchInput;
