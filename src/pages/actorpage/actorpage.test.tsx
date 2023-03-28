import { render, screen, waitFor } from "@testing-library/react";
import { ActorPage } from "./ActorPage";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Render Tests", () => {
	test("Page Renders Donald Glover", async () => {
		const actorID = 119589;

		render(
			<MemoryRouter initialEntries={[`/actor/${actorID}`]}>
				<Routes>
					<Route path='/actor/:actorID/*' element={<ActorPage />} />
				</Routes>
			</MemoryRouter>
		);

		expect(await screen.findByText("Donald Glover")).toBeInTheDocument();
	});

	test("Page Renders Facebook Link", async () => {
		const actorID = 119589;

		render(
			<MemoryRouter initialEntries={[`/actor/${actorID}`]}>
				<Routes>
					<Route path='/actor/:actorID/*' element={<ActorPage />} />
				</Routes>
			</MemoryRouter>
		);

		expect(await screen.findByTestId("facebook")).toBeInTheDocument();
	});

	test("Page Renders Popular Movies", async () => {
		const actorID = 119589;

		render(
			<MemoryRouter initialEntries={[`/actor/${actorID}`]}>
				<Routes>
					<Route path='/actor/:actorID/*' element={<ActorPage />} />
				</Routes>
			</MemoryRouter>
		);

		expect(await screen.findByText("Popular Movies")).toBeInTheDocument();
	});

	//expect trailers to be rendered
	test("Page Renders Trailers", async () => {
		const actorID = 119589;

		render(
			<MemoryRouter initialEntries={[`/actor/${actorID}`]}>
				<Routes>
					<Route path='/actor/:actorID/*' element={<ActorPage />} />
				</Routes>
			</MemoryRouter>
		);
		await waitFor(
			() => {
				expect(screen.getByText("Movie Trailers")).toBeInTheDocument();
			},
			//given a little longer due to calling youtube iframe
			{ timeout: 5000 }
		);
	});
});
