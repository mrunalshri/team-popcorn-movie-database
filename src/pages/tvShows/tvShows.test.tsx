import { render, screen } from "@testing-library/react";

import TVShows from "./tvShows";

test("renders TVShows component correctly", () => {
  render(<TVShows />);
  const TVShowComponent = screen.getByText("Popular TV Shows");
  expect(TVShowComponent).toBeInTheDocument();
});
