import { Link as RRLink } from 'react-router-dom';

export default function Link(props) {
	const classNames = props.className
		? 'text-link-color underline ' + props.className
		: 'text-link-color underline';
	return <RRLink {...props} className={classNames}></RRLink>;
}
