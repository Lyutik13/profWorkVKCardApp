interface TotalPriceItems {
  price: number;
  count: number;
}

export const calcTotalPrice = (items: TotalPriceItems[]) => {
	return items.reduce((sum: number, obj: TotalPriceItems) => Math.round(obj.price) * obj.count + sum, 0);
};
