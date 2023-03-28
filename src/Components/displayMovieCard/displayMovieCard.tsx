import { useNavigate } from "react-router-dom";
import { DisplayMovieCardProps } from "./type";

const DisplayMovieCard: React.FC<DisplayMovieCardProps> = ({
  movieDetail,
  isTVShow = false,
  children,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="display-movie-card flex flex-col items-center basis-1/6 m-3"
      key={`watchlist-${movieDetail.id}`}
    >
      <img
        className={`md:w-56  ${
          !isTVShow ? "cursor-pointer" : ""
        } shadow hover:shadow-3xl `} //max-h-64
        src={`https://image.tmdb.org/t/p/w440_and_h660_face${movieDetail.poster_path}`}
        alt={`${movieDetail.original_title} movie poster`}
        onClick={() => {
          if (!isTVShow) {
            navigate(`/movie/${movieDetail.id}`);
          }
        }}
      />
      {children && children}
    </div>
  );
};

export default DisplayMovieCard;
