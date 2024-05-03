import { configureStore } from "@reduxjs/toolkit";
import authReducers from "../redux/reducers/authReducers.jsx";
import profileReducers from "../redux/reducers/profileReducers.jsx";

const store = configureStore({
	reducer: {
		auth: authReducers,
		profile: profileReducers,
	},
});

export default store;
