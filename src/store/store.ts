import { configureStore } from "@reduxjs/toolkit";

import personReducer from "./slice/personSlice";

export default configureStore({
	reducer: {
		person: personReducer,
	},
});
