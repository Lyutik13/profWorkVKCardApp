import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	count: 1,
};

const cardSlice = createSlice({
	name: "card",
	initialState,
	reducers: {
		addCount: (state, action) => {
			state.count = action.payload
		},
		removeCount: (state, action) => {
			state.itemsCard.filter((obj) => obj !== action.payload);
		},
		clearCount: (state) => {
			state.itemsCard = [];
		},
	},
});

export const { addCount, removeCount, clearCount} = cardSlice.actions;

export default cardSlice.reducer;
