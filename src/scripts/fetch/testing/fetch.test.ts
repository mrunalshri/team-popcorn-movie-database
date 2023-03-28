import { rest } from "msw";
import { APIFetch } from "../fetch";
import { actor287ExternalIDResponse, discoverMovieResponse, genreMovieListResponse, movieID420818VideoMockResponse, movieID550CreaditResponse, movieID550DetailsMockResponse, movieNowPlayingResponse, moviePopularResponse, movieTopRatedResponse, movieUpcomingResponse } from "./mswConfig/mock";
import { server } from "./mswConfig/server";

describe("should fetch data correctly.", () => {
  test("should fetch movie details", async () => {
    const data = await APIFetch("/movie/550");
    expect(data).toStrictEqual(movieID550DetailsMockResponse);
  });
  test("should get error when 500 status code returned", async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_BASE_URL}/movie/550`,
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    const data = await APIFetch(`/movie/550`);
    expect(data).toEqual({ error: "something went wrong!" });
  });
  test("should get error when 404 status code returned", async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_BASE_URL}/movie/550`,
        (req, res, ctx) => {
          return res(ctx.status(404, "Not Found!"));
        }
      )
    );
    const data = await APIFetch(`/movie/550`);
    expect(data).toEqual({ error: "Not Found!" });
  });
  test("should get error when 401 status code returned", async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_BASE_URL}/movie/550`,
        (req, res, ctx) => {
          return res(ctx.status(401, "Unauthorized!"));
        }
      )
    );
    const data = await APIFetch(`/movie/550`);
    expect(data).toEqual({ error: "Unauthorized!" });
  });

  test("should get actor details", async () => {
    const data = await APIFetch("/person/287");
    expect(data.name).toStrictEqual("Brad Pitt");
  });
});

describe("Parameter Test", () => {
  test("Should find Actor", async () => {
    const data = await APIFetch("/search/person", [
      { param: "query", value: "Bradley" },
    ]);
    expect(data.results[0].name).toBe("Bradley Cooper");
  });
});

describe("Genre Movie List Test", () => {
  test("Should find Genre Movie List", async () => {
    const data = await APIFetch("/genre/movie/list");
    expect(data).toStrictEqual(genreMovieListResponse);
  });
});

describe("Genre Movie Popular Test", () => {
  test("Should find Movie Popular List", async () => {
    const data = await APIFetch("/movie/popular");
    expect(data).toStrictEqual(moviePopularResponse);
  });
});

describe("Discover Movies for actor Test", () => {
  test("Should find Movies for actor", async () => {
    const data = await APIFetch("/discover/movie", [
      { param: "sort_by", value: "popularity.desc" },
      { param: "with_cast", value: 287 },
    ]);
    expect(data).toStrictEqual(discoverMovieResponse);
  });
});

describe("Discover actor 287's external IDs Test", () => {
  test("Should find actor 287 external IDs", async () => {
    const data = await APIFetch("/person/287/external_ids");
    expect(data).toStrictEqual(actor287ExternalIDResponse);
  });
});

describe("Should get movie ID 550 credits Test", () => {
  test("Should get movie ID 550 credits", async () => {
    const data = await APIFetch("/movie/550/credits");
    expect(data).toStrictEqual(movieID550CreaditResponse);
  });
});

describe("Should get movie ID 420818 videos Test", () => {
  test("Should get movie ID 420818 videos", async () => {
    const data = await APIFetch("/movie/420818/videos");
    expect(data).toStrictEqual(movieID420818VideoMockResponse);
  });
});

describe("Should get movie upcoming Test", () => {
  test("Should get movie upcoming", async () => {
    const data = await APIFetch("/movie/upcoming");
    expect(data).toStrictEqual(movieUpcomingResponse);
  });
});

describe("Should get movie now playing Test", () => {
  test("Should get movie now playing", async () => {
    const data = await APIFetch("/movie/now_playing");
    expect(data).toStrictEqual(movieNowPlayingResponse);
  });
});

describe("Should get movie top rated Test", () => {
  test("Should get movie top rated", async () => {
    const data = await APIFetch("/movie/top_rated");
    expect(data).toStrictEqual(movieTopRatedResponse);
  });
});


