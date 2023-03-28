import { render, screen } from "@testing-library/react";
import { movieID550DetailsMockResponse } from "../../scripts/fetch/testing/mswConfig/mock";
import { MovieDetails } from "../../types/movie";
import DisplayMovieCard from "./displayMovieCard";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
test("renders Header component correctly", () => {
  render(
    <DisplayMovieCard
      movieDetail={movieID550DetailsMockResponse as unknown as MovieDetails}
    />
  );
  const displayMovieCardComponent = screen.getByAltText(
    `${movieID550DetailsMockResponse.original_title} movie poster`
  );
  expect(displayMovieCardComponent).toBeInTheDocument();
});
