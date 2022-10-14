import { createSlice } from "@reduxjs/toolkit";
import { IColorItem } from "../../types/types";

export const personSlice = createSlice({
	name: "person",
	initialState: {
		value: [] as IColorItem[],
	},
	reducers: {
		init: (state, action) => {
			state.value = action.payload;
		},
		add: (state, action) => {
			state.value.push(action.payload);
		},
		remove: (state, action) => {
			state.value = [...state.value].filter(
				(item) => item.person !== action.payload
			);
		},
		update: (state, action) => {
			state.value = [...state.value].map((item) => {
				if (item.person === action.payload.person) {
					item.color = action.payload.color;
				}
				return item;
			});
		},
	},
});

export const { init, add, remove, update } = personSlice.actions;

export default personSlice.reducer;
