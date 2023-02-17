import NavigationItem from 'layout/NavigationItem';
import SkipToMain from 'layout/SkipToMain';

/* TODO: Break off the navigation list into its own component.
 * (Possibly rename this one when that happens.) */
export default function SiteNavigation({ fullWidth, ...props }) {
	const widthClass = fullWidth ? 'md:max-w-none' : 'md:max-w-3xl';
	return (
		<div className="md:flex md:h-screen">
			<div className="flex-none w-full p-2 md:h-full bg-skip-black text-skip-white md:w-52 md:block">
				<nav>
					<SkipToMain />
					<ul>
						<NavigationItem to="/Home">Home</NavigationItem>
						<NavigationItem to="/Coffee">Coffees</NavigationItem>
						<NavigationItem to="/Listicles">Listicles</NavigationItem>
						<NavigationItem to="/TV-Shows">TV Shows</NavigationItem>
						<NavigationItem to="/Writers">Writers</NavigationItem>
						<NavigationItem to="/About">About</NavigationItem>
					</ul>
				</nav>
			</div>
			<div
				className={`p-2 w-full md:overflow-y-auto md:transition md:duration-300`}
			>
				<div className={`${widthClass}`}>{props.children}</div>
			</div>
		</div>
	);
}
