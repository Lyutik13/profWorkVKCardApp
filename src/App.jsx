import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "./components/Card.jsx";
import { fetchItems } from "./redux/asyncActions.jsx";
import { deleteItemsCard } from "./redux/itemsSlice.jsx";

import "./sass/style.scss";

export default function App() {
	const { items, status, totalPrice } = useSelector((state) => state.items);
	const dispatch = useDispatch();

	const deleteItems = (id) => {
		dispatch(deleteItemsCard(id));
	};

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
	}, []);

	console.log(items);

	return (
		<div className="layoutStyle">
			<header className="headerStyle">Корзина</header>
			<main className="main">
				<section className="contentStyle">
					{status !== "success" || items.length === 0
						? "loaging"
						: items.map((item) => <Card key={item.id} props={item} deleteItems={deleteItems} />)}
				</section>
				<section className="contentStyle">Итого: {totalPrice} руб.</section>
			</main>
		</div>
	);
}
