import "../LoginForm/_loginForm.scss";

// Redux
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchHandleLogin } from "../../redux/api/api";

export default function LoginForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [checkBox, setCheckBox] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await fetchHandleLogin(email, password, dispatch, navigate);
	};

	return (
		<section className="login">
			<i className="fa fa-user-circle login__icon"></i>
			<h1>Sign In</h1>
			<form className="login__form" onSubmit={handleSubmit}>
				<div className="login__form--wrapper">
					<label htmlFor="username">E-mail</label>
					<input
						type="text"
						id="username"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="login__form--wrapper">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="login__form--remember">
					<input
						type="checkbox"
						id="remember-me"
						onChange={(e) => setCheckBox(!checkBox)}
					/>
					<label htmlFor="remember-me">Remember me</label>
				</div>
				<button className="login__form--button">Sign In</button>
			</form>
		</section>
	);
}
