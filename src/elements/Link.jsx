import { Link as RRLink } from 'react-router-dom';

export default function Link(props) {
	const classNames = props.className
		? 'text-link-color hover:italic hover:underline ' + props.className
		: 'text-link-color hover:italic hover:underline';
	return <RRLink {...props} className={classNames}></RRLink>;
}
