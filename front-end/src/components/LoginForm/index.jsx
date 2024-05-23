import "../LoginForm/_loginForm.scss";

// Components
import Button from "../../components/Button";
import InputText from "../../components/InputText";

// Redux
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchHandleLogin } from "../../api/api";

export default function LoginForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const error = useSelector((state) => state.auth.error);
	const token = useSelector((state) => state.auth.token);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [checkBox, setCheckBox] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await fetchHandleLogin(email, password, dispatch);
	};

	useEffect(() => {
		if (token) {
			navigate("/user");
		}
	}, [token, navigate]);

	return (
		<section className="login">
			<i className="fa fa-user-circle login__icon"></i>
			<h1>Sign In</h1>
			<form className="login__form" onSubmit={handleSubmit}>
				<InputText
					className="login__form--wrapper"
					label="E-mail"
					id="email"
					type="text"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<InputText
					className="login__form--wrapper"
					label="Password"
					id="password"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<InputText
					className="login__form--remember"
					label="Remember me"
					id="remember-me"
					type="checkbox"
					onChange={(e) => setCheckBox(!checkBox)}
				/>
				<Button className="button" text="Sign-in" />
				{error && <p className="login__error">{error}</p>}
			</form>
		</section>
	);
}
