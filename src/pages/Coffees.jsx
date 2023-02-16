import H1 from 'elements/H1';

import SiteNavigation from 'layout/SiteNavigation';

const coffees = [
	{ title: 'Cà phê sữa đá', img: '' },
	{ title: 'Cappuccino', img: '' },
	{ title: 'Cold Brew', img: '' },
	{ title: 'Iced Latte', img: '' },
];

export default function Coffees() {
	return (
		<SiteNavigation>
			<H1>Coffees</H1>
			<ul>
				{coffees.map((co) => (
					<li key={co.title.replace(' ', '-').toLowerCase()}>{co.title}</li>
				))}
			</ul>
		</SiteNavigation>
	);
}
