import "../LoginForm/_loginForm.scss";

export default function LoginForm() {
	return (
		<section className="login">
			<i className="fa fa-user-circle login__icon"></i>
			<h1>Sign In</h1>
			<form className="login__form">
				<div className="login__form--wrapper">
					<label htmlFor="username">Username</label>
					<input type="text" id="username" />
				</div>
				<div className="login__form--wrapper">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" />
				</div>
				<div className="login__form--remember">
					<input type="checkbox" id="remember-me" />
					<label htmlFor="remember-me">Remember me</label>
				</div>
				{/* En attendant d'ajouter la logic de form */}
				<a href="user" className="login__form--button">
					Sign In
				</a>
				{/* <button className="login__form--button">Sign In</button> */}
			</form>
		</section>
	);
}
