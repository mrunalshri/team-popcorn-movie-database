import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./header";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
test("renders Header component correctly", () => {
  render(<Header />);
  const headerComponent = screen.getByLabelText("logo");
  expect(headerComponent).toBeInTheDocument();
});

test("navigate to home page after clicking on logo", () => {
  render(<Header />);
  const headerComponent = screen.getByLabelText("logo");
  fireEvent.click(headerComponent);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
});

test("navigate to My Watchlist page after clicking on my watchlist button", () => {
  render(<Header />);
  const headerComponent = screen.getByText("My Watchlist");
  fireEvent.click(headerComponent);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/watchlist");
});
