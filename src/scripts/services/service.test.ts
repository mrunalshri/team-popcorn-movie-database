import { rest } from "msw";
import { searchKeywordMockResponse } from "../fetch/testing/mswConfig/mock";
import { server } from "../fetch/testing/mswConfig/server";
import { getMoviesByKeyword } from "../services/service";

describe("getMoviesByKeyword function should fetch data correctly.", () => {
  test("should return correct data as per keyword passed", async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_BASE_URL}/search/multi`,
        (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(searchKeywordMockResponse));
        }
      )
    );

    const results = await getMoviesByKeyword("family");
    expect(results).toEqual(searchKeywordMockResponse.results);
  });
  test("should get error when 500 status code returned", async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_BASE_URL}/search/multi`,
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    const data = await getMoviesByKeyword("family");
    expect(data).toEqual({ error: "something went wrong!" });
  });
  test("should get error when 404 status code returned", async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_BASE_URL}/search/multi`,
        (req, res, ctx) => {
          return res(ctx.status(404, "Not Found 404!"));
        }
      )
    );
    const data = await getMoviesByKeyword("family");
    expect(data).toEqual({ error: "Not Found 404!" });
  });
  test("should get error when 401 status code returned", async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_BASE_URL}/search/multi`,
        (req, res, ctx) => {
          return res(ctx.status(401, "Unauthorized!"));
        }
      )
    );
    const data = await getMoviesByKeyword("family");
    expect(data).toEqual({ error: "Unauthorized!" });
  });

  //   test("should ammend correct query params", async () => {
  //     let value:any = "";
  //     server.use(
  //         rest.get(
  //           `${process.env.REACT_APP_BASE_URL}/search/multi`,
  //           (req, res, ctx) => {
  //             value = req.url.searchParams.get('query')
  //             return res(ctx.status(200), ctx.json(searchKeywordMockResponse));
  //           }
  //         )
  //       );
  //     const data = await getMoviesByKeyword("family");
  //     expect(data.name).toStrictEqual("Brad Pitt");
  //   });
});
