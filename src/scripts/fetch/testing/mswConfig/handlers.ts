import { rest } from "msw";
import {
  movieID420818VideoMockResponse,
  movieID550CreaditResponse,
  movieID550DetailsMockResponse,
  movieID603692DetailsMockResponse,
  personID119589DetailsMockResponse,
  personID119589PopMoviesMockResponse,
  personID119589SocialMediaMockResponse,
  personID287DetailsMockResponse,
  searchByPersonMockResponse,
  genreMovieListResponse,
  moviePopularResponse,
  discoverMovieResponse,
  actor287ExternalIDResponse,
  movieUpcomingResponse,
  movieNowPlayingResponse,
  movieTopRatedResponse
} from "./mock";

//base movie URL to C&P for new handlers: https://api.themoviedb.org/3/

export const handlers = [
  rest.get("https://api.themoviedb.org/3/movie/550", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(movieID550DetailsMockResponse));
  }),
  rest.get("https://api.themoviedb.org/3/movie/603692", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(movieID603692DetailsMockResponse));
  }),
  rest.get("https://api.themoviedb.org/3/person/287", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(personID287DetailsMockResponse));
  }),
  rest.get("https://api.themoviedb.org/3/search/person", (req, res, ctx) => {
    const query = req.url.searchParams.get("query");

    if (query === "Bradley") {
      return res(ctx.status(200), ctx.json(searchByPersonMockResponse));
    }
  }),

  rest.get(
    "https://api.themoviedb.org/3/person/71375/external_ids",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(personID119589SocialMediaMockResponse)
      );
    }
  ),
  rest.get("https://api.themoviedb.org/3/person/119589", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(personID119589DetailsMockResponse));
  }),
  // rest.get("https://api.themoviedb.org/3/discover/movie", (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(personID119589PopMoviesMockResponse));
  // }),

  rest.get(
    "https://api.themoviedb.org/3/movie/420818/videos",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(movieID420818VideoMockResponse));
    }
  ),
  rest.get("https://api.themoviedb.org/3/movie/550/videos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(movieID420818VideoMockResponse));
  }),
  rest.get(
    "https://api.themoviedb.org/3/movie/603692/videos",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(movieID420818VideoMockResponse));
    }
  ),
  rest.get(
    "https://api.themoviedb.org/3/movie/550/credits",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(movieID550CreaditResponse));
    }
  ),
  rest.get(
    "https://api.themoviedb.org/3/movie/603692/credits",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(movieID550CreaditResponse));
    }
  ),
  rest.get(
    "https://api.themoviedb.org/3/genre/movie/list",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(genreMovieListResponse));
    }
  ),
  rest.get(
    "https://api.themoviedb.org/3/movie/popular",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(moviePopularResponse));
    }
  ),
  rest.get(
    "https://api.themoviedb.org/3/discover/movie",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(discoverMovieResponse));
    }
  ),
  rest.get(
    "https://api.themoviedb.org/3/person/287/external_ids",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(actor287ExternalIDResponse));
    }
  ),
  rest.get(
    "https://api.themoviedb.org/3/movie/upcoming",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(movieUpcomingResponse));
    }
  ),
  rest.get(
    "https://api.themoviedb.org/3/movie/now_playing",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(movieNowPlayingResponse));
    }
  ),
  rest.get(
    "https://api.themoviedb.org/3/movie/top_rated",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(movieTopRatedResponse));
    }
  ),
];

