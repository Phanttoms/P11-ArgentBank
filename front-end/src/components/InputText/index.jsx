export default function InputText({
	className,
	input,
	label,
	id,
	type,
	onChange,
	value,
	readOnly,
}) {
	return (
		<div className={className}>
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				id={id}
				onChange={onChange}
				value={value}
				readOnly={readOnly}
				className={input}
			/>
		</div>
	);
}