import { fireEvent, render, screen } from "@testing-library/react";
import { SearchDetailsProvider, useSearchDetails } from "../../search_context";

import SearchInput from "./SearchInput";
const onChangeHandler = jest.fn();

test("renders search element correctly with aria label", () => {
  render(<SearchInput onChangeHandler={onChangeHandler} />);
  const SearchComponentElement = screen.getByLabelText("search");

  expect(SearchComponentElement).toBeInTheDocument();
});

test("renders searched value correctly on onchange handler", async () => {
  render(
    <SearchDetailsProvider>
      <SearchInput onChangeHandler={onChangeHandler} />
    </SearchDetailsProvider>
  );
  const SearchComponentElement = screen.getByRole("textbox");

  fireEvent.change(SearchComponentElement, { target: { value: "movie" } });
  expect(SearchComponentElement).toHaveValue("movie");
});
