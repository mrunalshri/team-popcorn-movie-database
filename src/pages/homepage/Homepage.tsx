import React, { createContext, useEffect, useState } from "react";
import "./Homepage.css";

import { getMoviesByKeyword } from "../../scripts/services/service";
import {
	PopularMoviesResponse,
	TopRatedMovie,
	NowPlayingMoviesResponse,
	UpcomingMoviesResponse,
	MovieDetails,
} from "../../types/movie";
import { Genre } from "../../types/genres";
import { APIFetch } from "../../scripts/fetch/fetch";
import { CardRow } from "../../Components/cardRow/CardRow";
import { Movie } from "../../types/movie";

export interface movieDetails {
	movieData: Movie[];
}

export const GenreContext = createContext<Genre[]>([]);

export function Homepage() {
	const [genrelist, setGenreList] = useState<Genre[]>([]);
	const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
	const [topratedMovies, setTopRatedMovies] = useState<Movie[]>([]);
	const [nowplayingdMovies, setNowPlayingMovies] = useState<Movie[]>([]);
	const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);

	//Genre useEffect
	useEffect(() => {
		const fetchGenre = async () => {
			const data = await APIFetch("/genre/movie/list");
			setGenreList(data.genres);
		};
		fetchGenre();
	}, []);

	//Movie list useEffect
	useEffect(() => {
		const fetchRows = async () => {
			// const data = await APIFetch("/movie/popular", [
			// 	{ param: "adult", value: false },
			// ]);
			// // const popdata: movieDetails[] = data.results.map((movie) => {
			// //   return { movieData: movie, genre: movie.genre_ids };
			// // });
			// setPopularMovies(data.results);

			const dataupcoming = (await APIFetch(
				"/movie/upcoming"
			)) as UpcomingMoviesResponse;
			const upcomingdata: Movie[] = dataupcoming.results;
			setUpcomingMovies(upcomingdata);

			const datanowplaying = (await APIFetch(
				"/movie/now_playing"
			)) as NowPlayingMoviesResponse;
			const nowdata: Movie[] = datanowplaying.results;
			setNowPlayingMovies(nowdata);

			const datapop = (await APIFetch(
				"/movie/popular"
			)) as PopularMoviesResponse;
			const popdata: Movie[] = datapop.results;
			setPopularMovies(popdata);

			const datatoprated = (await APIFetch(
				"/movie/top_rated"
			)) as TopRatedMovie;
			const toprateddata: Movie[] = datatoprated.results;
			setTopRatedMovies(toprateddata);
		};
		fetchRows();
	}, []);

	//   const [searchedMovies, setSearchedMovies] = useState<MovieDetails[]>([]);

	return (
		<div className='App'>
			{/* <div>
        {searchedMovies.map((movie: MovieDetails) => (
          <Card movieDetails={movie} />
        ))}
      </div> */}
			<GenreContext.Provider value={genrelist}>
				<div className='card__netflixOriginal'>
					<div className='card_title'>
						<h2>Popular Films</h2>
					</div>
					<div className='original__movies'>
						<CardRow title='Netflix' movies={popularMovies} />
					</div>
				</div>
				<div className='card__movies'>
					<div className='movies__header'>
						<h2>Now Playing</h2>
					</div>
					<div className='movies__container'>
						<CardRow title='Trending' movies={nowplayingdMovies} />
					</div>
				</div>
				<div className='card__movies'>
					<div className='movies__header'>
						<h2>Top Rated</h2>
					</div>
					<div className='movies__container'>
						<CardRow title='top rated' movies={topratedMovies} />
					</div>
				</div>
				<div className='card__movies'>
					<div className='movies__header'>
						<h2>Upcoming Movies</h2>
					</div>
					<div className='movies__container'>
						<CardRow title='top rated' movies={upcomingMovies} />
					</div>
				</div>
			</GenreContext.Provider>
		</div>
	);
}
