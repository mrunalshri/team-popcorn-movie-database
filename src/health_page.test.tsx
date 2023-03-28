import { fireEvent, render, screen } from "@testing-library/react";
import { MovieData } from "./card/movie_card";
import Dropdown from "./Components/Dropdown/Dropdown";
import Search from "./Components/Search/search";
import { MovieCardInterface } from "./card/movie_card";
import { searchKeywordMockResponse } from "./scripts/fetch/testing/mswConfig/mock";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

//// test Dropdown component
const onchangeHandler = jest.fn();
const dropdownOptions = [
  {
    id: 0,
    name: "first",
  },
  {
    id: 1,
    name: "second",
  },
  {
    id: 2,
    name: "third",
  },
];

test("renders select element correctly with labelText for Dropdown", () => {
  render(
    <Dropdown
      name="select-name"
      value=""
      onChangeHandler={onchangeHandler}
      labelText="this is selectBox"
      options={[]}
    />
  );
  const DropdownComponentElement = screen.getByLabelText(/select-options/);
  const labelSelectElement = screen.getByText(/this is selectBox/i);
  expect(labelSelectElement).toBeInTheDocument();
  expect(DropdownComponentElement).toBeInTheDocument();
});

test("renders first value correctly and disabled when passed selectText as props for DropDown", () => {
  render(
    <Dropdown
      value=""
      selectText={"select option"}
      onChangeHandler={onchangeHandler}
      name="select-name"
      options={dropdownOptions}
      labelText=""
    />
  );
  const DropdownComponentElement = screen.getByLabelText(/select-options/);

  expect(DropdownComponentElement).toHaveValue("");
  expect(screen.getByText("select option")).toBeDisabled();
});

test("renders select default value correctly when pass as props for DropDown", () => {
  render(
    <Dropdown
      value={"2"}
      options={dropdownOptions}
      onChangeHandler={onchangeHandler}
      name="select-name"
      labelText="this is textbox"
    />
  );
  const DropdownComponentElement = screen.getByLabelText(/select-options/);
  expect(DropdownComponentElement).toHaveValue("2");
});

test("renders select value correctly on onchange handler for DropDown", () => {
  render(
    <Dropdown
      options={dropdownOptions}
      value={"0"}
      onChangeHandler={onchangeHandler}
      name="select-name"
      labelText=""
    />
  );
  const selectInputElement = screen.getByLabelText(/select-options/);
  fireEvent.change(selectInputElement, { target: { value: "2" } });
  expect(selectInputElement).toHaveValue("2");
});

//// test search component
test("renders search component and the input box is existing", () => {
  render(<Search />);

  //check if the input box is existing
  const inputText = screen.getByLabelText("search");
  expect(inputText).toBeInTheDocument();
});

// //// test movie_card component
test("renders movie_card component", () => {
  const movieCardProps: MovieCardInterface = {
    movieDetails: searchKeywordMockResponse.results[0],
    title: "test",
  };
  render(<MovieData {...movieCardProps} />);

  //check if the image object is existing
  const img = screen.getAllByRole("img")[0];
  expect(img).toBeInTheDocument();
});
