import H1 from 'elements/H1';

import SiteNavigation from 'layout/SiteNavigation';

const listicles = [
	{
		date: '2013-08-29',
		link: 'https://www.newyorker.com/books/page-turner/10-paragraphs-about-lists-you-need-in-your-life-right-now',
		quote:
			'(I clicked on the owls, fearing that I would never again have a chance to see them; they were, to be fair, uniformly superb.)',
		title: 'Ten Paragraphs About Lists You Need in Your Life Right Now',
	},
	{
		date: '2015-01-29',
		link: 'https://clickhole.com/8-things-never-to-say-to-creative-people-1825121904/',
		quote: 'Creative work is still work.',
		title: '8 Things Never To Say To Creative People',
	},
	{
		date: '2023-02-16',
		link: '',
		quote: '',
		title: "3 Listicles You Won't Want to Miss",
	},
];

export default function Listicles() {
	return (
		<SiteNavigation>
			<H1>
				3 Listicles You Won't Want to Miss (Number 3 Will Throw You for a Loop)
			</H1>
			<ul>
				{listicles.map((li) => (
					<li>{li.title}</li>
				))}
			</ul>
		</SiteNavigation>
	);
}
