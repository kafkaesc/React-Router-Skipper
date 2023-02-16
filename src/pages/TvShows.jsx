import H1 from 'elements/H1';

import SiteNavigation from 'layout/SiteNavigation';

const tvShows = [
	{ title: 'Better Call Saul', link: '' },
	{ title: 'Breaking Bad', link: '' },
	{ title: 'Fleabag', link: '' },
	{ title: 'Star Trek', link: '' },
	{ title: 'Watchmen', link: '' },
];

export default function TvShows() {
	return (
		<SiteNavigation>
			<H1>TV Shows</H1>
			<ul>
				{tvShows.map((ts) => (
					<li>{ts.title}</li>
				))}
			</ul>
		</SiteNavigation>
	);
}
