import { render, screen, waitFor } from "@testing-library/react";
import { MoviePage } from "./MoviePage";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe(" Render Tests", () => {
	test("Page Renders Fight Club", async () => {
		const movieID = 550;

		render(
			<MemoryRouter initialEntries={[`/movie/${movieID}`]}>
				<Routes>
					<Route path='/movie/:movieID/*' element={<MoviePage />} />
				</Routes>
			</MemoryRouter>
		);
		expect(await screen.findByText("Fight Club")).toBeInTheDocument();
	});

	test("Tests additional Movie - John Wick C4", async () => {
		const movieID = 603692;

		render(
			<MemoryRouter initialEntries={[`/movie/${movieID}`]}>
				<Routes>
					<Route path='/movie/:movieID/*' element={<MoviePage />} />
				</Routes>
			</MemoryRouter>
		);
		expect(await screen.findByText("John Wick: Chapter 4")).toBeInTheDocument();
	});

	test("Page Maps Genre's correctly", async () => {
		const movieID = 550;
		render(
			<MemoryRouter initialEntries={[`/movie/${movieID}`]}>
				<Routes>
					<Route path='/movie/:movieID/*' element={<MoviePage />} />
				</Routes>
			</MemoryRouter>
		);

		expect(await screen.findByText("Drama")).toBeInTheDocument();
	});
});
