export default function P(props) {
	const classNames = props.className ? 'mb-2 ' + props.className : 'mb-2';
	return <p {...props} className={classNames}></p>;
}
