import { Link } from 'react-router-dom';

export default function NavigationLink(props) {
	return (
		<Link
			{...props}
			className="block w-full p-2 hover:text-db-red text-skip-white md:p-2 md:m-0 hover:bg-skip-black-light"
		></Link>
	);
}
