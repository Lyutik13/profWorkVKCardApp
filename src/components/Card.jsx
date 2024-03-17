import React from "react";

export const Card = ({ title, description, price, image }) => {
	const [count, setCount] = React.useState(1);

	const onClickPlus = () => {
		setCount(count + 1);
	};

	const onClickMinus = () => {
		setCount(count - 1);
	};

	const onClickDel = () => {
		setCount(1);
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
					onClick={onClickMinus}
					className="button button--outline button--circle cart__item-count-minus">
					-
				</button>
				<b>{count}</b>
				<button
					disabled={count === 10}
					onClick={onClickPlus}
					className="button button--outline button--circle cart__item-count-plus">
					+
				</button>
			</div>
			<div className="card__price">
				<b>{(price * count).toFixed(0)} ₽</b>{" "}
			</div>
			<div>
				<div onClick={onClickDel} className="button button--outline button--circle">
					del
				</div>
			</div>
		</div>
	);
};

export default Card;
