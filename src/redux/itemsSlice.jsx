import { createSlice } from "@reduxjs/toolkit";

import { fetchItems } from "./asyncActions";

const initialState = {
	items: [],
	status: "loading", // loading | success | error
};

const itemsSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload;
		},

		addtotalPrice: (state, action) => {
			state.items = state + action.payload;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchItems.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchItems.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = "success";
			})
			.addCase(fetchItems.rejected, (state) => {
				state.status = "error";
				state.items = [];
			});
	},
});

export const { setItems, addtotalPrice } = itemsSlice.actions;

export default itemsSlice.reducer;
