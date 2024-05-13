import "../Button/_button.scss";

export default function Button({ className, onClick, text }) {
	return (
		<button className={className} onClick={onClick}>
			{text}
		</button>
	);
}
