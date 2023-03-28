import { render, screen } from "@testing-library/react";
import { Homepage } from "./Homepage";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
test("renders Header component correctly", () => {
  render(<Homepage />);
  const homePageComponent = screen.getByText("Netflix Original");
  expect(homePageComponent).toBeInTheDocument();
});
