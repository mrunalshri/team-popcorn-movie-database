import { render, screen } from "@testing-library/react";
import { searchKeywordMockResponse } from "../../scripts/fetch/testing/mswConfig/mock";
import { CardRow } from "./CardRow";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
test("renders Header component correctly", () => {
  render(<CardRow movies={searchKeywordMockResponse.results} title={"test"} />);
  const cardRowComponent = screen.getAllByRole("img");
  expect(cardRowComponent.length).toEqual(
    searchKeywordMockResponse.results.length
  );
});
