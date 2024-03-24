import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { ItemsState } from "./types";

export const fetchItems = createAsyncThunk("items/fetchItemsStatus", async () => {
	const { data } = await axios.get(`https://65ef356dead08fa78a501216.mockapi.io/VKCardApp`);

	return data as ItemsState[];
});
