export const calcTotalPrice = (items) => {
	return items.reduce((sum, obj) => obj.price.toFixed(0) * obj.count + sum, 0);
};
