import H1 from 'elements/H1';

import SiteNavigation from 'layout/SiteNavigation';

const writers = [
	{ name: 'Sandra Cisneros', img: '' },
	{ name: 'William Faulkner', img: '' },
	{ name: 'F. Scott Fitzgerald', img: '' },
	{ name: 'Franz Kafka', img: '' },
	{ name: 'Toni Morrison', img: '' },
	{ name: 'Edgar Allan Poe', img: '' },
	{ name: 'Shea Serrano', img: '' },
	{ name: 'Kurt Vonnegut', img: '' },
];

export default function Writers() {
	return (
		<SiteNavigation>
			<H1>Writers</H1>
			<ul>
				{writers.map((wr) => (
					<li key={wr.name.replace(' ', '-').toLowerCase()}>{wr.name}</li>
				))}
			</ul>
		</SiteNavigation>
	);
}
