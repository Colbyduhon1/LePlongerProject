const divesites = [
		{
			id: null, // 1
			name: 'Carmel Point',
			longitude: -121.95361,
			latitude: 36.52417,
			rating: 'Experienced',
			description: 'Offshore and boat accessible, this dive location features large granite boulders covered in strawberry anemones. It is a relatively deep dive, the top of the rock formation is at 40\' and the bottom is at 110\'.',
			user_dive: 1,
		},
		{
			id: null, // 2
			name: ' Eric\'s Pinnacle',
			longitude: -121.91835,
			latitude: 36.63407 ,
			rating: 'Moderate',
			description: 'The best place to anchor is in the sand north and northeast of the main pinnacle.  Approach the main rock from the SW.  .  Go over the top, watch the depth finder, and as soon as it drops off to 55\', drop the hook.  Go down the line to the anchor, then swim SW.  The top\'s at 19\', the bottom\'s at 55.',
			user_dive: 1
		},
		{
			id: null, // 3
			name: 'Point Lobos',
			longitude: -121.95361,
			latitude: 36.52167,
			rating: 'Experienced',
			description: 'Offshore boat accessible',
			user_dive: 1
		},
		{
			id: null, // 3
			name: 'Kawika\'s Anchor Farm',
			longitude: -121.88448,
			latitude: 36.61427,
			rating: 'Novice',
			description: 'The anchors got moved again on Oct. 28, 2005, by the cruise ship Norwegian Star, and went missing for a year.     We had a position from the harbormaster, and many divers ran many search patterns looking for them to no avail.  There were multiple reports of one anchor a concrete block and a pile of chain at about the location of  anchor 01.  Finally,  in September, 2006, it all came together.  First a diver named James reported that there was a second anchor in a pile of chain in the general vicinity of anchor 01.  Then Marcos Perreau Guimaraes reported finding another anchor, with a bunch of chain, and it looked like the chain had been cut.  I went and checked them out.  James\' anchor was really two anchors (02 and 03) and a concrete block, and Marcos anchor was 04.  The cruise ship had cut the chain!',
			user_dive: 1
		},
		{
			id: null, // 4
			name: 'The Mating Amtracks of Lover\'s Point',
			longitude: -121.89282,
			latitude: 36.61240,
			rating: 'Novice',
			description: 'There\'s one kinda beat up Amtrack at Del Monte Beach that has been a dive site for many years.  There are two more, in better condition, one resting partially on the other (mating? ;-), in the sand at about 80\' off Lover\'s Point.  They were originally found by Holger Fuerst.  Why two in one place?  One theory is a collision.  Another is that they were moored together (there\'s a large concrete mooring block nearby), one sprang a leak and dragged the other down with it.',
			user_dive: 1
		},
		{
			id: null, // 5
			name: 'The Metridium Fields',
			longitude: -121.89282,
			latitude: 36.61240,
			rating: 'Novice',
			description: 'The Metridium Fields is a large general area covering several acres.  The bottom is sand with rock outcroppings here and there with, duh, lots of the big white metridium anemones.  It\'s also a good place to find Kellet\'s Whelks laying eggs in the latitudee spring.  The depth varies from 55\' to 80\'.',
			user_dive: 1
		},
		{
			id: null, // 6
			name: 'The Sailboat',
			longitude: -121.88528,
			latitude: 36.60322,
			rating: 'Novice',
			description: 'This is a 50\' or so sailboat in about 25\' off Del Monte Beach.  It\'s usually dived in conjunction with the Amtrack. There\'s usually kelp on the Sailboat, even in winter.  Because it\'s shallow and sheltered, it has a fairly unique ecosystem.',
			user_dive: 1
		},
		{
			id: null, // 7
			name: 'MacAfee Pinnacle',
			longitude: -121.89617,
			latitude: 36.61747,
			rating: 'Novice',
			description: 'This is not a spire or a pinnacle by any stretch of the imagination, but it\'s a nice reef to take newbies to.  If I remember rightly (it\'s been a while), the top\'s at about 25\', the bottom\'s at about 40\'',
			user_dive: 1
		},
		{
			id: null, // 8
			name: 'Shale Island',
			longitude: -121.87977,
			latitude: 36.60885,
			rating: 'Novice',
			description: 'Most of the structure in the shale consists of low cliffs running SE to NW, with the face towards the breakwater but Shale Island is a an exception.  It\'s a raised area with a six inch to five foot cliff face outwards, with nice color on the cliff face and on top of the island.  The island runs generally east-west, and is about ?? feet long by 10\' to 150\' wide. Depth is about 50\'.',
			user_dive: 1
		},
		{
			id: null, // 9
			name: 'The Barge',
			longitude: -121.89015,
			latitude: 36.61063,
			rating: 'Novice',
			description: 'The bottom is at 63\'.  This is an intermediate dive due to the depth and square profile.  And make darn sure you can find the anchor at the end of the dive.  The Barge is close to the line from the end of the breakwater to the mile buoy and there\'s a fair amount of boat traffic, so you want to follow the anchor line back to the surface and come up next to your boat.  If you MUST surface away from the boat, swim SSW toward the breakwater on your safety stops.  You do NOT want to surface offshore from your boat as that\'s where the boat traffic will generally be. ',
			user_dive: 1
		},
		{
			id: null, // 10
			name: 'Aumentos Reef',
			longitude: -121.92225,
			latitude: 36.63858,
			rating: 'Novice',
			description: 'The best place to anchor is in the sand just NW of the main rock.  Approach the main rock from the SE slowly.  Go over the top, watch the depth finder, and as soon as it drops off to 55\', drop the hook.  (If it\'s a NW wind (usual case), go another boat length or two before dropping to avoid dragging the line on the rock.)  Go down the line to the anchor, then swim SE.  The rock is the size of a big two story house.  The bottom\'s at 60\', the top\'s at about 30\'.',
			user_dive: 1
		},
		{
			id: null, // 11
			name: 'The Amtrack',
			longitude: -121.88560,
			latitude: 36.60303,
			rating: 'Novice',
			description: 'This is a WW-II vintage amphibious tracked vehicle in about 25\' off Del Monte Beach.  Presumably it set sail from Ft. Ord intending on invading Monterey.  It\'s usually dived in conjunction with the Sailboat.  It\'s easiest to do the Amtrack first, then swim NE to the sailboat (about 110 feet on bearing 40° magnetic)  Why the Amtrack first?  Because the Sailboat is a bigger target and therefore easier navigation on the bottom.',
			user_dive: 1
		},
		{
			id: null, // 12
			name: 'Alan\'s Arch',
			longitude: -121.95622,
			latitude: 36.48793,
			rating: 'Advanced',
			description: 'This is a rather amazing arch about 30\' high bridging a sand-bottomed canyon off Yankee Pt.  The bottom is at 110\', the top of the opening at 80\', the top of the arch at 70\', and I\'ve never been there without a ripping current.  It\'s for very advanced divers only due to depth, current, and offshore location.  Check out amazing color on the walls extending south from the arch.  The site is named after Alan Cull, former captain the the former (here, it\'s now in SoCal) dive boat Pacific Star.',
			user_dive: 1
		},
		{
		    id: null, // 14
			name: 'Dionysus',
			longitude: -121.44611,
			latitude: 35.73028,
			rating: 'Advanced',
			description: 'The Advance II lies about eight nautical miles out from the Oregon Inlet sea buoy. The 185-foot ship lies on a sandy bottom at 80 feet. This dive spot is a popular training and certification dive with Nags Head dive operators.',
			user_dive: 1
		},
		{
		    id: null, // 15
			name: 'EMERALD BAY',
			longitude: -118.31563,
			latitude: 33.28082,
			rating: 'Advanced',
			description: 'Generally Clear Blue water. Lots of Manta ray, sting ray, leopard shark, Eel, and the usual fish. Great night diving for beginners.',
			user_dive: 1
		},
		{
		    id: null, // 16
			name: 'CAPE CORTES',
			longitude: -118.32092,
			latitude: 33.25783,
			rating: 'Novice',
			description: 'This place is the coolest dive, new diver friendly and beautiful sea life all around.',
			user_dive: 1
		},
		{
		    id: null, // 17
			name: 'Girbralter',
			longitude: -118.24321,
			latitude: 33.25325,
			rating: 'Novice',
			description: 'This place is the coolest dive, new diver friendly and beautiful sea life all around.',
			user_dive: 1
		},
		{
		    id: null, // 18
			name: 'Nunans Bay',
			longitude: -118.33249,
			latitude: 33.28486,
			rating: 'intermediate',
			description: 'New diver friendly and This place is the coolest divebeautiful sea life all around.',
			user_dive: 1
		},
		{
		    id: null, // 19
			name: 'Turtle Point',
			longitude: -118.29324,
			latitude: 33.27144,
			rating: 'intermediate',
			description: 'We like turtles here, I am a huge fan or dolphins and I have never seen a turtle but that sure would be cool am I right am I right. ',
			user_dive: 1
		},
		{
		    id: null, // 20
			name: 'Black Point',
			longitude: -119.53144,
			latitude: 34.22340,
			rating: 'intermediate',
			description: 'Santa Cruz is the best!!!!.',
			user_dive: 1
		},
		{
		    id: null, // 21
			name: 'Forney Cove',
			longitude: -119.55036,
			latitude: 34.34050,
			rating: 'intermediate',
			description: 'Santa Cruz is the best!!!!.',
			user_dive: 1
		},
		{
		    id: null, // 22
			name: 'USS PEACOCK WRECK',
			longitude: -119.32895,
			latitude: 34.02932,
			rating: 'intermediate',
			description: 'Santa Cruz is the best!!!!.',
			user_dive: 1
		},
		{
		    id: null, // 23
			name: 'SCORPION ANCHORAGE',
			longitude: -119.34481,
			latitude: 34.03646,
			rating: 'intermediate',
			description: 'Santa Cruz is the best!!!!.',
			user_dive: 1
		},
		{
		    id: null, // 24
			name: 'MORSE POINT',
			longitude: -119.50626,
			latitude: 33.58075,
			rating: 'intermediate',
			description: 'Santa Cruz is the best!!!!.',
			user_dive: 1
		},
		{
		    id: null, // 25
			name: 'YELLOW BANKS',
			longitude: -119.32805,
			latitude: 34.00204,
			rating: 'intermediate',
			description: 'Santa Cruz is the best!!!!.',
			user_dive: 1
		},
		{
		    id: null, // 26
			name: 'Arena Cove',
			longitude: -123.42666,
			latitude: 38.54884,
			rating: 'Advanced',
			description: 'Sonoma County Dives for life!',
			user_dive: 1
		},
		{
		    id: null, // 27
			name: 'Horsehoe Cove',
			longitude: -123.04222,
			latitude: 38.18986,
			rating: 'Advanced',
			description: 'Sonoma County Dives for life!',
			user_dive: 1
		},
		{
		    id: null, // 28
			name: 'Salt Point',
			longitude: -123.19802,
			latitude: 38.34017,
			rating: 'Advanced',
			description: 'Sonoma County Dives for life!',
			user_dive: 1
		},
		{
		    id: null, // 29
			name: 'Stornetta Point',
			longitude: -123.43816,
			latitude: 38.55919,
			rating: 'Advanced',
			description: 'Sonoma County Dives for life!',
			user_dive: 1
		},
		{
		    id: null, // 30
			name: 'Novarro Point',
			longitude: -123.84507,
			latitude: 39.11407,
			rating: 'Advanced',
			description: 'Sonoma County Dives for life!',
			user_dive: 1
		}


];


module.exports = {
	divesites: divesites,

}