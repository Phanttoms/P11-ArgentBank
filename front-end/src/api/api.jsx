import { loginError, loginSuccess } from "../redux/reducers/authReducers";
import { setGetProfile } from "../redux/reducers/profileReducers";

export const fetchHandleLogin = async (email, password, dispatch) => {
	try {
		const response = await fetch("http://localhost:3001/api/v1/user/login", {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({ email, password }),
		});
		const data = await response.json();
		const token = data.body?.token;
		if (token) {
			dispatch(loginSuccess({ token }));
		} else if (!token) {
			dispatch(loginError());
		}
	} catch (error) {
		console.log(error);
	}
};

export const fetchUserData = async (token, dispatch) => {
	try {
		const response = await fetch("http://localhost:3001/api/v1/user/profile", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const data = await response.json();
		dispatch(setGetProfile({ data }));
	} catch (error) {
		console.log(error);
	}
};

export const editUserName = async (newName, token, dispatch, setError) => {
	if (!newName) {
		setError("The field cannot be empty.");
		return;
	}
	try {
		const response = await fetch("http://localhost:3001/api/v1/user/profile", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ userName: newName }),
		});
		if (!response) {
			throw new Error("Update user name fail.");
		}
		const data = await response.json();
		dispatch(setGetProfile({ data }));
	} catch (error) {
		console.log(error);
	}
};
