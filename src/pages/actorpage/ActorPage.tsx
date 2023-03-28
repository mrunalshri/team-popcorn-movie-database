import React, { useEffect } from "react";
import { ActorDetails } from "../../types/actors";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { APIFetch } from "../../scripts/fetch/fetch";
import { useNavigate } from "react-router-dom";
import { DiscoverResponse } from "../../types/Discover";
import { SMLinks } from "../../types/External";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { MovieDetails, movieTrailerResult } from "../../types/movie";

import "./ActorPage.css";

export const ActorPage: React.FC = () => {
	const Navigate = useNavigate();
	const [actorData, setActorData] = useState<ActorDetails>();
	const [popularMovies, setPopularMovies] = useState<DiscoverResponse>();
	const [socialMedia, setSocialMedia] = useState<SMLinks>();
	const [movieTrailerData, setmovieTrailerData] = useState<
		movieTrailerResult[]
	>([]);
	const { actorID } = useParams();

	useEffect(() => {
		const datafetch = async () => {
			// get the actor details
			const data = await APIFetch(`/person/${actorID}`);
			setActorData(data);
			// get the popular movies for the actor
			const popularMoviesData = await APIFetch("/discover/movie", [
				{ param: "sort_by", value: "popularity.desc" },
				{ param: "with_cast", value: actorID },
			]);
			setPopularMovies(popularMoviesData);
			// get the social media links for the actor
			const socialMediaData = await APIFetch(`/person/${actorID}/external_ids`);
			setSocialMedia(socialMediaData);
			// get the movie details for each movie for trailers
			const popularMovieDetailsData = await Promise.all(
				popularMoviesData.results.map(async (movie: MovieDetails) => {
					const movieData = await APIFetch(`/movie/${movie.id}`);
					return movieData;
				})
			);
			// Get the first movie trailer for each movie
			const movieTrailerData = await Promise.all(
				popularMovieDetailsData.map(async (movie: MovieDetails) => {
					const movieTrailer = await APIFetch(`/movie/${movie.id}/videos`);
					return movieTrailer.results[0];
				})
			);
			setmovieTrailerData(movieTrailerData);
		};
		datafetch();
	}, [actorID]);

	return (
		<article className='actor__container'>
			<h1 className='actor__Name'>{actorData?.name}</h1>
			<div className='actor__bioContainer'>
				<div className='actor__bioContainer__imgContainer'>
					{actorData?.profile_path && (
						<img
							className='actor__img'
							src={`https://image.tmdb.org/t/p/w500${actorData?.profile_path}`}
							alt={actorData?.name}
						/>
					)}
					<div className='actor__imgContainer__socialMedia'>
						{socialMedia?.facebook_id && (
							<a
								href={`https://www.facebook.com/${socialMedia?.facebook_id}`}
								target='_blank'
								rel='noreferrer'
								data-testid='facebook'
							>
								<FontAwesomeIcon
									className='socialMedia__icon'
									icon={faFacebook}
								/>
							</a>
						)}

						{socialMedia?.instagram_id && (
							<a
								href={`https://www.instagram.com/${socialMedia?.instagram_id}`}
								target='_blank'
								rel='noreferrer'
								data-testid='instagram'
							>
								<FontAwesomeIcon
									className='socialMedia__icon'
									icon={faInstagram}
								/>
							</a>
						)}

						{socialMedia?.twitter_id && (
							<a
								href={`https://www.twitter.com/${socialMedia?.twitter_id}`}
								target='_blank'
								rel='noreferrer'
								data-testid='twitter'
							>
								<FontAwesomeIcon
									className='socialMedia__icon'
									icon={faTwitter}
								/>
							</a>
						)}
					</div>
					<div className='actor__imgContainer__birthDeath'>
						<p className='actor__birthDeath__line'>
							{actorData?.birthday?.split("-").reverse().join("/")}
							{actorData?.deathday && (
								<span className='actor__deathday'>
									{<> - </>}
									{actorData?.deathday?.split("-").reverse().join("/")}
								</span>
							)}
						</p>
					</div>
				</div>
				<div className='bioContainer__details'>
					<h2 className='actor__biographyTitle'>Biography</h2>
					<p className='actor__placeOfBirth'>
						Place of Birth: {actorData?.place_of_birth}
					</p>
					<p className='actor__biography'>{actorData?.biography}</p>
				</div>
			</div>

			{popularMovies?.results && popularMovies?.results?.length > 0 && (
				<div className='actor__popularMovies'>
					<h2 className='popularMovies__title'>Popular Movies</h2>
					<ul className='popularMovies__list'>
						{popularMovies?.results.slice(0, 5).map((movie) => (
							<li className='popularMovies__list__item'>
								<img
									className='popularMovies__list__item__img'
									src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
									alt={movie.title}
									onClick={() => Navigate(`/movie/${movie.id}`)}
								/>
							</li>
						))}
					</ul>
				</div>
			)}
			<div className='actor__movieTrailers'>
				{movieTrailerData && movieTrailerData.length > 0 && (
					<>
						<h2 className='movieTrailers__title'>Movie Trailers</h2>
						<ul className='movieTrailers__list'>
							{movieTrailerData.slice(0, 5).map((movie) => (
								<li className='movieTrailers__list__item'>
									{movie?.official && (
										<iframe
											className='movieTrailers__list__item__iframe'
											src={`https://www.youtube.com/embed/${movie.key}`}
											title={movie.name}
											allowFullScreen
											loading='lazy'
										/>
									)}
								</li>
							))}
						</ul>
					</>
				)}
			</div>
		</article>
	);
};
