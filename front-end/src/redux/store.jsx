import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/reducers/authReducers.jsx";

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});

export default store;
