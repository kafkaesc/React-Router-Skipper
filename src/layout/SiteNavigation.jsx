import { useRef } from 'react';

import NavigationItem from 'layout/NavigationItem';
import SkipToMain from 'layout/SkipToMain';

export default function SiteNavigation({ fullWidth, ...props }) {
	const mainContent = useRef();
	const widthClass = fullWidth ? 'md:max-w-none' : 'md:max-w-3xl';

	function focusMainContent() {
		mainContent.current.focus();
	}

	return (
		<div className="md:flex md:h-screen">
			<div className="flex-none w-full p-2 md:h-full bg-skip-black text-skip-white md:w-52 md:block">
				<nav>
					<SkipToMain onClick={focusMainContent} />
					<ul>
						<NavigationItem to="/Home">Home</NavigationItem>
						<NavigationItem to="/Coffee">Coffee</NavigationItem>
						<NavigationItem to="/Listicles">Listicles</NavigationItem>
						<NavigationItem to="/TV-Shows">TV Shows</NavigationItem>
						<NavigationItem to="/Writers">Writers</NavigationItem>
						<NavigationItem to="/About">About</NavigationItem>
					</ul>
				</nav>
			</div>
			<div className={`p-2 w-full md:overflow-y-auto`}>
				<div
					className={`${widthClass}`}
					id="mainContent"
					ref={mainContent}
					tabindex={0}
				>
					{props.children}
				</div>
			</div>
		</div>
	);
}
