import NavigationItem from 'layout/NavigationItem';

/* TODO: Quite a bit. Break off the navigation list into its own component.
 * (Possibly rename this one when that happens.) Make the navigation snap to
 * vertical on md: sizes and just be a top bar on mobile. */
export default function SiteNavigation(props) {
	return (
		<div className="md:flex md:h-screen">
			<div className="flex-none w-full p-2 md:h-full bg-skip-black text-skip-white md:w-52 md:block">
				<nav>
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
			<div className="p-2 md:overflow-y-auto md:transition md:duration-300">
				{props.children}
			</div>
		</div>
	);
}
