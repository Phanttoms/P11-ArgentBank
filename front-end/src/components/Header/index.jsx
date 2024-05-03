import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/argentBankLogo.png";
import "../Header/_header.scss";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/authReducers";

export default function Header() {
	const token = useSelector((state) => state.auth.token);
	const profile = useSelector((state) => state.profile);
	console.log("Contenu du profil :", profile);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

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
			{token ? (
				<div className="header__logo">
					{profile.userName && (
						<NavLink to="/user" className="header__logo header__logo--link">
							<i className="fa fa-user-circle"></i>
							{profile.userName}
						</NavLink>
					)}

					<NavLink
						to="/login"
						className="header__logo header__logo--link"
						onClick={handleLogout}
					>
						<i className="fa fa-sign-out"></i>
						Sign Out
					</NavLink>
				</div>
			) : (
				<NavLink className="header__logo header__logo--link" to="/login">
					<i className="fa fa-user-circle"></i>
					Sign In
				</NavLink>
			)}
		</header>
	);
}
