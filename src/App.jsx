import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "./components/Card.jsx";
import { fetchItems } from "./redux/asyncActions.jsx";

import AppContext from "./context.jsx";
import "./sass/style.scss";

export default function App() {

	const { items, status } = useSelector((state) => state.items);
  const dispatch = useDispatch();

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

	const loadingItems = async () => {
		dispatch(fetchItems());
	};

	React.useEffect(() => {
		loadingItems();
	}, []);

	return (
		<AppContext.Provider value={{}}>
			<div className="layoutStyle">
				<header className="headerStyle">Корзина</header>
				<main className="main">
					<section className="contentStyle">
						{status !== 'success' ? "loaging" : items.map((item) => <Card key={item.id} {...item} />)}
					</section>
					<section className="contentStyle">Итого: 500 руб.</section>
				</main>
			</div>
		</AppContext.Provider>
	);
}
