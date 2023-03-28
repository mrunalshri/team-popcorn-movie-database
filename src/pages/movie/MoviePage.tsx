import React, { useEffect, useState } from "react";
import { APIFetch } from "../../scripts/fetch/fetch";
import { useNavigate } from "react-router-dom";
import "./MoviePage.css";
import {
	Credits,
	MovieDetails,
	movieTrailerDetails,
	movieTrailerResult,
} from "../../types/movie";
import { useParams } from "react-router-dom";
import AddToWatchlist from "../../Components/addToWatchlist/addToWatchlist";
import { useWatchListContext } from "../../watchList_context";

export const MoviePage: React.FC = () => {
	const Navigate = useNavigate();
	const [moviedata, setMovieData] = useState<MovieDetails>();
	const { movieID } = useParams();
	const [movieTrailerData, setmovieTrailerData] =
		useState<movieTrailerResult[]>();
	const [credits, setCredits] = useState<Credits>();

	useEffect(() => {
		const datafetch = async () => {
			//fetches movie data
			const data = await APIFetch(`/movie/${movieID}`);
			setMovieData(data);

			//fetches Trailer data
			const trailerdata: movieTrailerDetails = await APIFetch(
				`/movie/${movieID}/videos`
			);
			if (trailerdata.results) {
				setmovieTrailerData(trailerdata.results);
			}

			//fetches credits data
			const creditsdata: Credits = await APIFetch(`/movie/${movieID}/credits`);
			if (creditsdata) {
				setCredits(creditsdata);
			}
		};
		datafetch();
	}, [movieID]);

	const { handleWatchListClick, watchlistedMovies } = useWatchListContext();
	return (
		<main className='moviePage'>
			<h1 className='moviePage__title'>{moviedata?.original_title}</h1>
			{moviedata && (
				<AddToWatchlist
					onClickHandler={() => handleWatchListClick(moviedata)}
					isAdded={
						moviedata
							? watchlistedMovies.some((movie) => movie.id === moviedata.id)
							: false
					}
				/>
			)}
			<article className='moviePage__details'>
				<img
					alt={`${moviedata?.original_title} poster`}
					className='moviePage__details__img'
					src={`https://image.tmdb.org/t/p/w500${moviedata?.poster_path}`}
				/>
				<article className='moviePage__details__infoBox'>
					<p className='infoBox__tagline'>{moviedata?.tagline}</p>
					<h2 className='infoBox__overviewTitle'>Overview:</h2>
					<p className='infoBox__Overview'>{moviedata?.overview}</p>
					<h2 className='infoBox__detailsTitle'>Details</h2>
					<article className='infoBox__detailsBox'>
						<div className='detailsBox__Col1'>
							<h3 className='detailsBox__releaseStatus__title'>Status</h3>
							<p className='detailsBox__releaseStatus'>{moviedata?.status}</p>
							<h3 className='detailsBox__genre__Title'>Genre</h3>
							<p className='detailsBox__genre'>
								{moviedata?.genres.map((genre) => genre.name).join(", ")}
							</p>
						</div>
						<div className='detailsBox__Col2'>
							<h3 className='detailsBox__budget__title'>Budget</h3>
							<p className='detailsBox__budget'>
								{moviedata?.budget.toLocaleString("en-US", {
									style: "currency",
									currency: "USD",
								})}
							</p>
							<h3 className='detailsBox__revenue__title'>Revenue</h3>
							<p className='detailsBox__revenue'>
								{moviedata?.revenue?.toLocaleString("en-US", {
									style: "currency",
									currency: "usd",
								})}
							</p>
						</div>
					</article>
				</article>
			</article>
			<h1 className='moviePage__Cast__title'>Top Cast</h1>
			<article className='moviePage__Cast'>
				{/*If credits is defined: Create a card for first ten members*/}
				{!credits && <p>Loading...</p>}
				{credits &&
					credits.cast &&
					credits.cast.slice(0, 10).map(
						(cast) =>
							cast.profile_path && (
								<article className='moviePage__Cast__card'>
									<img
										className='moviePage__Cast__card__img'
										src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
										alt={cast.name}
										onClick={() => Navigate(`/actor/${cast.id}`)}
									/>
									<p className='moviePage__Cast__card__name'>{cast.name}</p>
									<p className='moviePage__Cast__card__character'>
										{`"${cast.character}"`}
									</p>
								</article>
							)
					)}
			</article>

			<article className='moviePage__Trailer'>
				{/*Displays Trailers if there are any*/}
				{movieTrailerData && movieTrailerData.length >= 1 && (
					<h1 className='moviePage__Trailer__title'>Trailers</h1>
				)}
				{movieTrailerData?.slice(0, 5).map((trailer) => (
					<iframe
						className='moviePage__Trailer__video'
						src={`https://www.youtube.com/embed/${trailer.key}`}
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						title={trailer.name}
						loading='lazy'
					></iframe>
				))}
			</article>
		</main>
	);
};
