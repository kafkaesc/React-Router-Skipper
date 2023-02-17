import H1 from 'elements/H1';
import Link from 'elements/Link';
import P from 'elements/P';

import SiteNavigation from 'layout/SiteNavigation';

const writers = [
	{
		birthDate: '1954-12-20',
		img: '',
		name: 'Sandra Cisneros',
		personalWebsite: 'https://www.sandracisneros.com',
		wikipediaLink: 'https://en.wikipedia.org/wiki/Sandra_Cisneros',
	},
	{
		birthDate: '1897-09-25',
		img: '',
		name: 'William Faulkner',
		personalWebsite: null,
		wikipediaLink: 'https://en.wikipedia.org/wiki/William_Faulkner',
	},
	{
		birthDate: '1896-09-24',
		img: '',
		name: 'F. Scott Fitzgerald',
		personalWebsite: null,
		wikipediaLink: 'https://en.wikipedia.org/wiki/F._Scott_Fitzgerald',
	},
	{
		birthDate: '1883-07-03',
		img: '',
		name: 'Franz Kafka',
		personalWebsite: null,
		wikipediaLink: 'https://en.wikipedia.org/wiki/Franz_Kafka',
	},
	{
		birthDate: '1931-02-18',
		img: '',
		name: 'Toni Morrison',
		personalWebsite: null,
		wikipediaLink: 'https://en.wikipedia.org/wiki/Toni_Morrison',
	},
	{
		birthDate: '1809-01-19',
		img: '',
		name: 'Edgar Allan Poe',
		personalWebsite: null,
		wikipediaLink: 'https://en.wikipedia.org/wiki/Edgar_Allan_Poe',
	},
	{
		birthDate: '1981-06-01',
		img: '',
		name: 'Shea Serrano',
		personalWebsite: '',
		wikipediaLink: 'https://en.wikipedia.org/wiki/Shea_Serrano',
	},
	{
		birthDate: '1922-11-11',
		img: '',
		name: 'Kurt Vonnegut',
		personalWebsite: null,
		wikipediaLink: 'https://en.wikipedia.org/wiki/Kurt_Vonnegut',
	},
];

export default function Writers() {
	return (
		<SiteNavigation>
			<H1>Writers</H1>
			{writers.length === 0 && <P>No writer data to show</P>}
			{writers && writers.length > 0 && (
				<ul>
					{writers.map((wr) => (
						<li key={wr.name.replace(/ /g, '-').toLowerCase()}>
							<Link to={`/Writers/${wr.name.replace(/ /g, '-')}`}>
								{wr.name}
							</Link>
						</li>
					))}
				</ul>
			)}
		</SiteNavigation>
	);
}
