export interface MovieDetails {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: object | null;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date?: Date;
  revenue?: number;
  runtime?: number | null;
  spoken_languages: SpokenLanguage[];
  status?:
    | "Rumored"
    | "Planned"
    | "In Production"
    | "Post Production"
    | "Released"
    | "Canceled";
  tagline?: string | null;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  name: string;
  id: number;
  logo_path?: string;
  origin_country?: string;
}

interface ProductionCountry {
  iso_3166_1?: string;
  name?: string;
}

interface SpokenLanguage {
  iso_639_1?: string;
  name?: string;
}

export interface TopRatedMovie {
  page: number;
  results: {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
  total_pages: number;
  total_results: number;
}

// Movie Data Interface

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface PopularMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export interface NowPlayingMoviesResponse { 
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export interface UpcomingMoviesResponse { 
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

//Movie Trailers types
export interface movieTrailerDetails {
  id?: number;
  results?: movieTrailerResult[];
}

export interface movieTrailerResult {
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  key?: string;
  site?: string;
  size?: number;
  type?: string;
  official?: boolean;
  published_at?: string;
}
//--------------------

// Movie Cast Types

export interface Credits {
  id?: number;
  cast?: Cast[];
  crew?: Crew[];
}

export interface Cast {
  adult?: boolean;
  gender?: number | null;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  order?: number;
}

export interface Crew {
  adult?: boolean;
  gender?: number | null;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
  credit_id?: string;
  department?: string;
  job?: string;
}
