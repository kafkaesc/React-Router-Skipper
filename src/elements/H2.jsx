export default function H2(props) {
	const classNames = props.className
		? 'mb-2 text-2xl ' + props.className
		: 'mb-2 text-2xl';
	// This is a wrapper component--the element content
	// should be passed via props.
	// eslint-disable-next-line
	return <h2 {...props} className={classNames}></h2>;
}
