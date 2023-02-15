export default function A(props) {
	const classNames = props.className
		? 'text-link-color underline ' + props.className
		: 'text-link-color underline';
	// This is a wrapper component--the element content
	// should be passed via props.
	// eslint-disable-next-line
	return <a {...props} className={classNames}></a>;
}
