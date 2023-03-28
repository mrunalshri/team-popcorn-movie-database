import React, { useState, useEffect } from "react";
import { APIFetch } from "../scripts/fetch/fetch";
import { Movie, MovieDetails } from "../types/movie";
import "./movie_card.css";
import { useNavigate } from "react-router-dom";

export interface MovieCardInterface {
	// movieid: number;
	title: string;
	movieDetails: Movie;
}

export const MovieData: React.FC<MovieCardInterface> = ({
	movieDetails: { id, poster_path, backdrop_path, original_title },
	title,
}) => {
	// const [moviedata, setMovieData] = useState<MovieDetails>();
	// const movieID = movieid;

	const Navigate = useNavigate();

	const handleClick = () => {
		Navigate(`/movie/${id}`);
	};

	// useEffect(() => {
	//   const datafetch = async () => {
	//     const data = await APIFetch(`/movie/${movieID}`);
	//     setMovieData(data);
	//   };
	//   datafetch();
	// }, []);

	const posterImage = `https://image.tmdb.org/t/p/w500${poster_path}`;
	const backdropImage = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
	const imageSource = title === "Netflix" ? posterImage : backdropImage;
	return (
		<>
			<img
				className='card__img'
				data-id={id}
				onClick={handleClick}
				src={imageSource}
				alt={original_title}
			/>
		</>
	);
};
