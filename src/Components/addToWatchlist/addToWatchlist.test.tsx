import { render, screen } from "@testing-library/react";
import AddToWatchlist from "../addToWatchlist/addToWatchlist";
const onClickHandler = jest.fn();

test("renders add-to-watchlist component correctly", () => {
  render(<AddToWatchlist onClickHandler={onClickHandler} />);
  const watchListComponent = screen.getByRole("button");
  expect(watchListComponent).toBeInTheDocument();
});

test("renders Add to watchList text when isAdded false by default", () => {
  render(<AddToWatchlist onClickHandler={onClickHandler} />);
  const watchListComponent = screen.getByText("Add to watchlist");
  expect(watchListComponent).toBeInTheDocument();
});

test("renders Watchlisted text when isAdded true", () => {
  render(<AddToWatchlist isAdded={true} onClickHandler={onClickHandler} />);
  const watchListComponent = screen.getByText("Watchlisted");
  expect(watchListComponent).toBeInTheDocument();
});
