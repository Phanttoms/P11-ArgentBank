import { loginSuccess } from "../reducers/authReducers";

export const FetchHandleLogin = async (email, password, dispatch, navigate) => {
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
		alert("Nom d'utilisateur ou mot de passe incorrect");
	}
};
