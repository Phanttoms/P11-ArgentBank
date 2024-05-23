import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoggedIn: false,
	token: null,
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
		loginError(state) {
			state.isLoggedIn = false;
			state.user = null;
			state.token = null;
			state.error = "E-mail or Password incorect";
		},
		logout(state) {
			state.isLoggedIn = false;
			state.user = null;
			state.token = null;
			state.error = null;
		},
	},
});

export const { loginSuccess, logout, loginError } = authReducers.actions;
export default authReducers.reducer;
