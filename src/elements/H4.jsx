export default function H4(props) {
	const classNames = props.className
		? 'mb-2 text-2xl ' + props.className
		: 'mb-2 text-2xl';
	// This is a wrapper component--the element content
	// should be passed via props.
	// eslint-disable-next-line
	return <h4 {...props} className={classNames}></h4>;
}
