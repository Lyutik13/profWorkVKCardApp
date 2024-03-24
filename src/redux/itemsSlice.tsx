import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchItems } from "./asyncActions";
import { calcTotalPrice } from "../utils/calcTotalPrice";
import { ItemsSliceState } from "./types";

type ItemsId = {
	id: number;
};

const initialState: ItemsSliceState = {
	items: [],
	status: "loading", // loading | success | error
	totalPrice: 0,
};

const itemsSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload;
		},

		deleteItemsCard: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((obj) => obj.id !== action.payload);
			state.totalPrice = calcTotalPrice(state.items);
		},

		plusItemsCard: (state, action: PayloadAction<ItemsId>) => {
			const findItem = state.items.find((obj) => obj.id === action.payload.id);
			if (findItem) {
				findItem.count++;
			}
			state.totalPrice = calcTotalPrice(state.items);
		},

		minusItemsCard: (state, action: PayloadAction<ItemsId>) => {
			const findItem = state.items.find((obj) => obj.id === action.payload.id);
			if (findItem) {
				findItem.count--;
			}
			state.totalPrice = calcTotalPrice(state.items);
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchItems.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchItems.fulfilled, (state, action) => {
				state.items = action.payload;
				state.totalPrice = calcTotalPrice(state.items);
				state.status = "success";
			})
			.addCase(fetchItems.rejected, (state) => {
				state.status = "error";
				state.totalPrice = 0;
				state.items = [];
			});
	},
});

export const { setItems, deleteItemsCard, plusItemsCard, minusItemsCard } = itemsSlice.actions;

export default itemsSlice.reducer;
