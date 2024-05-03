// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { fetchUserData } from "../../redux/api/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function User() {
	const profile = useSelector((state) => state.profile);
	const token = useSelector((state) => state.auth.token);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (token) {
			fetchUserData(token, dispatch, navigate);
		} else {
			navigate("/login");
		}
	}, [dispatch, navigate, token]);

	return (
		<>
			<Header />
			<div>contenu</div>
			<Footer />
		</>
	);
}
