// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import * as dotenv from "dotenv";
import { server } from "./scripts/fetch/testing/mswConfig/server";

beforeAll(() => {
	dotenv.config();
	server.listen();
	console.log("Mock Server Loaded");
});

afterEach(() => server.resetHandlers);

afterAll(() => server.close);
