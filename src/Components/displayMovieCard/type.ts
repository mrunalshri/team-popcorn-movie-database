import { MovieDetails } from "../../types/movie";

export interface DisplayMovieCardProps {
  movieDetail: MovieDetails;
  isTVShow?: boolean;
  children?: React.ReactNode;
}
