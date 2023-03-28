import { fireEvent, render, screen } from "@testing-library/react";
import { movieID550DetailsMockResponse } from "../../scripts/fetch/testing/mswConfig/mock";
import { WatchlistContext } from "../../watchList_context";
import Watchlist from "./watchlist";
import { MovieDetails } from "../../types/movie";

const mockedUsedNavigate = jest.fn();
const mockedHandleWatchListClick = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("renders watchlist component correctly", () => {
  render(<Watchlist />);
  const watchListComponent = screen.getByText(
    "WHY NOT WATCH MOVIE FROM YOUR WATCHLIST?"
  );
  expect(watchListComponent).toBeInTheDocument();
});

test("navigate to movie details page after clicking on image card", () => {
  render(
    <WatchlistContext.Provider
      value={{
        watchlistedMovies: [
          movieID550DetailsMockResponse as unknown as MovieDetails,
        ],
        handleWatchListClick: mockedHandleWatchListClick,
      }}
    >
      <Watchlist />
    </WatchlistContext.Provider>
  );
  const watchlistedMovieImages = screen.getAllByRole("img");
  fireEvent.click(watchlistedMovieImages[0]);
  expect(mockedUsedNavigate).toHaveBeenCalledWith(
    `/movie/${movieID550DetailsMockResponse.id}`
  );
  expect(mockedUsedNavigate).toBeCalledTimes(1);
});
test("should remove watchlist item after clicking on remove button", async () => {
  render(
    <WatchlistContext.Provider
      value={{
        watchlistedMovies: [
          movieID550DetailsMockResponse as unknown as MovieDetails,
        ],
        handleWatchListClick: mockedHandleWatchListClick,
      }}
    >
      <Watchlist />
    </WatchlistContext.Provider>
  );
  const watchlistedMovieRemoveButton = screen.getAllByRole("button");
  fireEvent.click(watchlistedMovieRemoveButton[0]);
  expect(mockedHandleWatchListClick).toBeCalledTimes(1);

  expect(mockedHandleWatchListClick).toHaveBeenCalledWith(
    movieID550DetailsMockResponse
  );
});
