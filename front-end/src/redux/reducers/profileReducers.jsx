import { createSlice } from "@reduxjs/toolkit";

const profileReducers = createSlice({
	name: "Profile",
	initialState: {
		email: "",
		firstName: "",
		lastName: "",
		userName: "",
	},
	reducers: {
		setGetProfile(state, action) {
			const { email, firstName, lastName, userName } = action.payload.data.body;
			state.email = email;
			state.firstName = firstName;
			state.lastName = lastName;
			state.userName = userName;
		},
	},
});

export const { setGetProfile } = profileReducers.actions;
export default profileReducers.reducer;
