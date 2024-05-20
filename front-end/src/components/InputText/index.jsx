export default function InputText(props) {
	return (
		<div className={props.className}>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				type={props.type}
				id={props.id}
				onChange={props.onChange}
				value={props.value}
				readOnly={props.readOnly}
				className={props.input}
			/>
		</div>
	);
}
