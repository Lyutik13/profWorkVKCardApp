export interface ItemsState {
	id: number;
	title: string;
	description: string;
	price: number;
	image: string;
	count: number;
}

export interface ItemsSliceState {
	items: ItemsState[];
	status: 'loading' | 'success' | 'error';
	totalPrice: number;
}