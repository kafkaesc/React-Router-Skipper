import NavigationLink from './NavigationLink';

export default function NavigationItem({ ...props }) {
	return (
		<li className="inline-block mx-1 md:list-item">
			<NavigationLink {...props} />
		</li>
	);
}
