import H1 from 'elements/H1';
import P from 'elements/P';

import SiteNavigation from 'layout/SiteNavigation';

export default function About() {
	return (
		<SiteNavigation>
			<H1>About This Site</H1>
			<P>Built by Jared Hettinger</P>
		</SiteNavigation>
	);
}
