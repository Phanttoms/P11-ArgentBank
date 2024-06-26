import "../Feature/_feature.scss";

export default function Feature(props) {
	return (
		<div className="feature__item">
			<img
				src={props.icon}
				alt={props.iconType}
				className="feature__item--icon"
			/>
			<h3 className="feature__item--title">{props.title}</h3>
			<p>{props.text}</p>
		</div>
	);
}
