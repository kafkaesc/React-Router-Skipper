import H1 from 'elements/H1';
import P from 'elements/P';

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
			{tvShows.length === 0 && <P>No TV show data to show.</P>}
			{tvShows && tvShows.length > 0 && (
				<ul>
					{tvShows.map((ts) => (
						<li key={ts.title.replace(' ', '-').toLowerCase()}>{ts.title}</li>
					))}
				</ul>
			)}
		</SiteNavigation>
	);
}
