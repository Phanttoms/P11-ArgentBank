import { loginSuccess } from "../redux/reducers/authReducers";
import { setGetProfile } from "../redux/reducers/profileReducers";

export const fetchHandleLogin = async (email, password, dispatch, navigate) => {
	try {
		const response = await fetch("http://localhost:3001/api/v1/user/login", {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({ email, password }),
		});
		const data = await response.json();
		const token = data.body.token;
		if (token) {
			dispatch(loginSuccess({ token }));
			localStorage.setItem("token", token);
			navigate("/user");
		}
	} catch (error) {
		console.log(error);
		alert("E-mail or password incorrect.");
	}
};

export const fetchUserData = async (token, dispatch, navigate) => {
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
		localStorage.removeItem("token");
		navigate("/login");
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
