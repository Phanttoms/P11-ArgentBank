import "../Error/_error.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

export default function Error() {
	return (
		<>
			<Header />
			<div className="error">
				<h1 className="error__title">404</h1>
				<p className="error__txt">
					Oups! La page que vous demandez n'existe pas.
				</p>
				<Link to="/" className="error__return">
					Retourner sur la page d'accueil
				</Link>
			</div>
			<Footer />
		</>
	);
}
