import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/argentBankLogo.png";
import "../Header/_header.scss";

export default function Header() {
	return (
		<header className="header">
			<Link className="header__logo" to="/">
				<img
					className="header__logo--image"
					src={logo}
					alt="Argent Bank Logo"
				/>
				<h1 className="header__logo--title">Argent Bank</h1>
			</Link>
			<NavLink className="header__logo" to="/sign-in">
				<i className="fa fa-user-circle"></i>
				Sign In
			</NavLink>
		</header>
	);
}
