import "../Account/_account.scss";
import Button from "../Button";

export default function Account({ title, amount, description }) {
	return (
		<section className="account">
			<div className="account__content">
				<h3 className="account__content--title">{title}</h3>
				<p className="account__content--amount">{amount}</p>
				<p className="account__content--description">{description}</p>
			</div>
			<div className="account__transaction">
				<Button
					className="account__transaction--button"
					text="View transactions"
				/>
			</div>
		</section>
	);
}
