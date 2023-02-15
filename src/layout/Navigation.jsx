import A from '../elements/A';
import H1 from '../elements/H1';
import NavigationLink from './NavigationLink';
import P from '../elements/P';

/* TODO: Quite a bit. Break off the navigation list into its own component.
 * (Possibly rename this one when that happens.) Make the navigation snap to
 * vertical on md: sizes and just be a top bar on mobile. */
export default function Navigation(props) {
	return (
		<div className="flex h-screen">
			<div className="flex-none hidden p-2 bg-skip-black text-skip-white w-52 md:block">
				<ul>
					<li>
						<NavigationLink to="/Home">Home</NavigationLink>
					</li>
					<li>
						<NavigationLink to="/About">About</NavigationLink>
					</li>
					<li>Item 3</li>
					<li>Item 4</li>
					<li>Item 5</li>
					<li>Item 6</li>
				</ul>
			</div>
			<div className="p-2 overflow-y-auto">
				<H1>The Oblong Box</H1>
				<P>
					H/T: <A href="https://poestories.com/read/oblong">Poe Stories</A>
				</P>
				<P>
					The box in question was, as I say, oblong. It was about six feet in
					length by two and a half in breadth; I observed it attentively, and
					like to be precise. Now this shape was PECULIAR; and no sooner had I
					seen it, than I took credit to myself for the accuracy of my guessing.
					I had reached the conclusion, it will be remembered, that the extra
					baggage of my friend, the artist, would prove to be pictures, or at
					least a picture; for I knew he had been for several weeks in
					conference with Nicolino:—and now here was a box, which, from its
					shape, COULD possibly contain nothing in the world but a copy of
					Leonardo's "Last Supper;" and a copy of this very "Last Supper," done
					by Rubini the younger, at Florence, I had known, for some time, to be
					in the possession of Nicolino. This point, therefore, I considered as
					sufficiently settled. I chuckled excessively when I thought of my
					acumen. It was the first time I had ever known Wyatt to keep from me
					any of his artistical secrets; but here he evidently intended to steal
					a march upon me, and smuggle a fine picture to New York, under my very
					nose; expecting me to know nothing of the matter. I resolved to quiz
					him WELL, now and hereafter.
				</P>
				<P>
					One thing, however, annoyed me not a little. The box did NOT go into
					the extra stateroom. It was deposited in Wyatt's own; and there, too,
					it remained, occupying very nearly the whole of the floor—no doubt to
					the exceeding discomfort of the artist and his wife;—this the more
					especially as the tar or paint with which it was lettered in sprawling
					capitals, emitted a strong, disagreeable, and, to my fancy, a
					peculiarly disgusting odor. On the lid were painted the words—"Mrs.
					Adelaide Curtis, Albany, New York. Charge of Cornelius Wyatt, Esq.
					This side up. To be handled with care."
				</P>
				<P>
					Now, I was aware that Mrs. Adelaide Curtis, of Albany, was the
					artist's wife's mother,—but then I looked upon the whole address as a
					mystification, intended especially for myself. I made up my mind, of
					course, that the box and contents would never get farther north than
					the studio of my misanthropic friend, in Chambers Street, New York.
				</P>
				<P>
					For the first three or four days we had fine weather, although the
					wind was dead ahead; having chopped round to the northward,
					immediately upon our losing sight of the coast. The passengers were,
					consequently, in high spirits and disposed to be social. I MUST
					except, however, Wyatt and his sisters, who behaved stiffly, and, I
					could not help thinking, uncourteously to the rest of the party.
					Wyatt's conduct I did not so much regard. He was gloomy, even beyond
					his usual habit—in fact he was MOROSE—but in him I was prepared for
					eccentricity. For the sisters, however, I could make no excuse. They
					secluded themselves in their staterooms during the greater part of the
					passage, and absolutely refused, although I repeatedly urged them, to
					hold communication with any person on board.
				</P>
				<P>
					Mrs. Wyatt herself was far more agreeable. That is to say, she was
					CHATTY; and to be chatty is no slight recommendation at sea. She
					became EXCESSIVELY intimate with most of the ladies; and, to my
					profound astonishment, evinced no equivocal disposition to coquet with
					the men. She amused us all very much. I say "amused"—and scarcely know
					how to explain myself. The truth is, I soon found that Mrs. W. was far
					oftener laughed AT than WITH. The gentlemen said little about her; but
					the ladies, in a little while, pronounced her "a good-hearted thing,
					rather indifferent looking, totally uneducated, and decidedly vulgar."
					The great wonder was, how Wyatt had been entrapped into such a match.
					Wealth was the general solution—but this I knew to be no solution at
					all; for Wyatt had told me that she neither brought him a dollar nor
					had any expectations from any source whatever. "He had married," he
					said, "for love, and for love only; and his bride was far more than
					worthy of his love." When I thought of these expressions, on the part
					of my friend, I confess that I felt indescribably puzzled. Could it be
					possible that he was taking leave of his senses? What else could I
					think? HE, so refined, so intellectual, so fastidious, with so
					exquisite a perception of the faulty, and so keen an appreciation of
					the beautiful! To be sure, the lady seemed especially fond of
					HIM—particularly so in his absence—when she made herself ridiculous by
					frequent quotations of what had been said by her "beloved husband, Mr.
					Wyatt." The word "husband" seemed forever—to use one of her own
					delicate expressions—forever "on the tip of her tongue." In the
					meantime, it was observed by all on board, that he avoided HER in the
					most pointed manner, and, for the most part, shut himself up alone in
					his state-room, where, in fact, he might have been said to live
					altogether, leaving his wife at full liberty to amuse herself as she
					thought best, in the public society of the main cabin.
				</P>
				<P>
					My conclusion, from what I saw and heard, was, that, the artist, by
					some unaccountable freak of fate, or perhaps in some fit of
					enthusiastic and fanciful passion, had been induced to unite himself
					with a person altogether beneath him, and that the natural result,
					entire and speedy disgust, had ensued. I pitied him from the bottom of
					my heart—but could not, for that reason, quite forgive his
					incommunicativeness in the matter of the "Last Supper." For this I
					resolved to have my revenge.
				</P>
			</div>
		</div>
	);
}
