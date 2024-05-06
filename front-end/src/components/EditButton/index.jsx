import "../EditButton/_editButton.scss";

// Components
import InputText from "../InputText";
import Button from "../Button";

// Redux
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserName } from "../../redux/api/api";

export default function EditButton() {
	const profile = useSelector((state) => state.profile);
	const token = useSelector((state) => state.auth.token);
	const dispatch = useDispatch();

	const [toggleEdit, setToggleEdit] = useState(false);
	const [newName, setNewName] = useState(profile.userName);

	useEffect(() => {
		setNewName(profile.userName);
		setToggleEdit(false);
	}, [profile.userName]);

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
		<div>
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
						value={profile.firstName}
						readOnly
					/>
					<InputText
						label="Last name: "
						id="lastName"
						type="text"
						value={profile.lastName}
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
						{profile.firstName} {profile.lastName} !
					</h1>
					<Button
						className="edit-button"
						onClick={() => setToggleEdit(true)}
						text="Edit UserName"
					/>
				</>
			)}
		</div>
	);
}
