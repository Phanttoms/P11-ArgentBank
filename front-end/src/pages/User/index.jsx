// Components
import Header from "../../components/Header";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

// Redux
import { fetchUserData, editUserName } from "../../redux/api/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function User() {
	const { userName, firstName, lastName } = useSelector(
		(state) => state.profile
	);
	const token = useSelector((state) => state.auth.token);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [toggleEdit, setToggleEdit] = useState(false);
	const [newName, setNewName] = useState(userName);

	useEffect(() => {
		setNewName(userName);
	}, [userName]);

	useEffect(() => {
		if (token) {
			fetchUserData(token, dispatch, navigate);
		} else {
			navigate("/login");
		}
	}, [dispatch, navigate, token]);

	const handleEditName = async (e) => {
		e.preventDefault();
		if (!newName) {
			alert("The field cannot be empty.");
			return;
		}
		try {
			await editUserName(newName, token, dispatch);
			setToggleEdit(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Header />
			<main className={`main ${toggleEdit ? "" : "bg-dark"}`}>
				<div className="user__header">
					{toggleEdit ? (
						<form onSubmit={handleEditName}>
							<h2>Edit user info</h2>
							<InputText
								label="User name: "
								id="username"
								type="text"
								onChange={(e) => {
									setNewName(e.target.value);
								}}
								value={newName}
							/>
							<InputText
								label="First name: "
								id="firstName"
								type="text"
								value={firstName}
								readOnly
							/>
							<InputText
								label="Last name: "
								id="lastName"
								type="text"
								value={lastName}
								readOnly
							/>
							<br />
							<Button className="edit-button" text="Save" />
						</form>
					) : (
						<>
							<h1>
								Welcome back
								<br />
								{firstName} {lastName} !
							</h1>
							<Button
								className="edit-button"
								onClick={() => setToggleEdit(true)}
								text="Edit UserName"
							/>
						</>
					)}
				</div>
				<h2 className="sr-only">Accounts</h2>
				<div className="account-test">
					<section className="account">
						<div className="account-content-wrapper">
							<h3 className="account-title">Argent Bank Checking (x8349)</h3>
							<p className="account-amount">$2,082.79</p>
							<p className="account-amount-description">Available Balance</p>
						</div>
						<div className="account-content-wrapper cta">
							<button className="transaction-button">View transactions</button>
						</div>
					</section>
					<section className="account">
						<div className="account-content-wrapper">
							<h3 className="account-title">Argent Bank Savings (x6712)</h3>
							<p className="account-amount">$10,928.42</p>
							<p className="account-amount-description">Available Balance</p>
						</div>
						<div className="account-content-wrapper cta">
							<button className="transaction-button">View transactions</button>
						</div>
					</section>
					<section className="account">
						<div className="account-content-wrapper">
							<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
							<p className="account-amount">$184.30</p>
							<p className="account-amount-description">Current Balance</p>
						</div>
						<div className="account-content-wrapper cta">
							<button className="transaction-button">View transactions</button>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
}
