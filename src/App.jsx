import React from "react";
import axios from "axios";

import Card from "./components/Card.jsx";

import AppContext from "./context.jsx";
import "./sass/style.scss";

export default function App() {
	const [items, setitems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);

			await axios
				.get(`https://65ef356dead08fa78a501216.mockapi.io/VKCardApp`)
				.then((res) => {
					setitems(res.data);
					setIsLoading(false);
				})
				.catch(function (err) {
					console.warn(err);
					alert("Element filtering error, change filters");
					setitems([]);
				});
		};

		fetchData();
	}, []);

	return (
		<AppContext.Provider value={{}}>
			<div className="layoutStyle">
				<header className="headerStyle">Корзина</header>
				<main className="main">
					<section className="contentStyle">
						{isLoading ? "loaging" : items.map((item) => <Card key={item.title} {...item} />)}
					</section>
					<section className="contentStyle">Итого: 500 руб.</section>
				</main>
			</div>
		</AppContext.Provider>
	);
}
