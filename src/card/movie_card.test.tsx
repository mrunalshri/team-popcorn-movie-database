import { render, screen } from "@testing-library/react";
import { searchKeywordMockResponse } from "../scripts/fetch/testing/mswConfig/mock";
import { MovieData } from "./movie_card";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
test("renders Layout component correctly", () => {
  const movieDetails = searchKeywordMockResponse.results[0];
  render(<MovieData movieDetails={movieDetails} title={"test"} />);
  const movieDataComponent = screen.getByAltText(movieDetails.original_title);
  expect(movieDataComponent).toBeInTheDocument();
});
