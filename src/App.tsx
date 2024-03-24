import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "./redux/store.js";

import Card from "./components/Card.jsx";
import { fetchItems } from "./redux/asyncActions.jsx";

import "./sass/style.scss";
import { RootState } from "./redux/store.js";

export default function App() {
	const { items, status, totalPrice } = useSelector((state: RootState) => state.items);
	const dispatch = useAppDispatch();

	// React.useEffect(() => {
	// 	const fetchData = async () => {
	// 		setIsLoading(true);

	// 		await axios
	// 			.get(`https://65ef356dead08fa78a501216.mockapi.io/VKCardApp`)
	// 			.then((res) => {
	// 				setitems(res.data);
	// 				setIsLoading(false);
	// 			})
	// 			.catch(function (err) {
	// 				console.warn(err);
	// 				alert("Element filtering error, change filters");
	// 				setitems([]);
	// 			});
	// 	};

	// 	fetchData();
	// }, []);

	React.useEffect(() => {
		dispatch(fetchItems());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="layoutStyle">
			<header className="headerStyle">Корзина</header>
			<main className="main">
				<section className="contentStyle">
					{status !== "success" || items.length === 0
						? "loaging"
						: items.map((item) => (
								<Card
									key={item.id}
									id={item.id}
									title={item.title}
									description={item.description}
									price={item.price}
									image={item.image}
									count={item.count}
								/>))}
				</section>
				<section className="contentStyle">Итого: {totalPrice} руб.</section>
			</main>
		</div>
	);
}
