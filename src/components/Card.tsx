import React from "react";
import { useDispatch } from "react-redux";

import { plusItemsCard, minusItemsCard, deleteItemsCard } from "../redux/itemsSlice";
import { ItemsState } from "../redux/types";

export const Card: React.FC<ItemsState> = ({ id, title, description, price, image, count }) => {
	const priceOneCard = (price * count).toFixed(0);
	const dispatch = useDispatch();

	const onClickPlus = () => {
		dispatch(plusItemsCard({ id }));
	};

	const onClickMinus = () => {
		dispatch(minusItemsCard({ id }));
	};

	const deleteItems = () => {
		dispatch(deleteItemsCard(id));
	};

	return (
		<div className="card">
			<div className="card__img">
				<img src={image} alt={title} />
			</div>
			<div className="card__content">
				<h3 className="card__title">{title}</h3>
				<p className="card__description">{description}</p>
			</div>
			<div className="card__count">
				<button
					disabled={count === 1}
					onClick={() => onClickMinus()}
					className="button button--outline button--circle cart__item-count-minus">
					-
				</button>
				<b>{count}</b>
				<button
					disabled={count === 10}
					onClick={() => onClickPlus()}
					className="button button--outline button--circle cart__item-count-plus">
					+
				</button>
			</div>
			<div className="card__price">
				<b>{priceOneCard} ₽</b>
			</div>
			<div>
				<div onClick={() => deleteItems()} className="button button--outline button--circle">
					del
				</div>
			</div>
		</div>
	);
};

export default Card;
