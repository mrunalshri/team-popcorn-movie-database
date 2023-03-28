import { useEffect, useState } from "react";
import { APIFetch } from "../../scripts/fetch/fetch";
import "./HealthPage.css";

export const HealthPage = () => {
	const [health, setHealth] = useState<boolean>(false);
	useEffect(() => {
		const datafetch = async () => {
			const health = await fetch(
				`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_APIKEY}`
			).then((response: Response) => {
				if (response.status === 200) {
					return true;
				} else {
					return false;
				}
			});
			setHealth(health);
		};
		datafetch();
	}, []);

	return (
		<div className='HealthContainer'>
			{health ? (
				<h1 className='HealthHeader'>API UP</h1>
			) : (
				<h1 className='HealthHeader'>API DOWN</h1>
			)}
			{health ? (
				<h2 className='HealthEmoji'>👍</h2>
			) : (
				<h2 className='HealthEmoji'>👎</h2>
			)}
		</div>
	);
};
