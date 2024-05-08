import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoggedIn: false,
	token: localStorage.getItem("token"),
	user: null,
	error: null,
};

const authReducers = createSlice({
	name: "UserAuth",
	initialState,
	reducers: {
		loginSuccess(state, action) {
			state.isLoggedIn = true;
			state.user = action.payload;
			state.token = action.payload.token;
			state.error = null;
		},
		logout(state) {
			state.isLoggedIn = false;
			state.user = null;
			state.token = null;
			state.error = null;
			localStorage.removeItem("token");
		},
	},
});

export const { loginSuccess, logout } = authReducers.actions;
export default authReducers.reducer;
