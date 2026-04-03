export interface ProjectLink {
	label: string;
	url: string;
}

export interface Album {
	title: string;
	year: number;
}

export interface Collaboration {
	name: string;
	genre: string;
	description?: string;
	links: ProjectLink[];
}

export interface MusicProject {
	id: string;
	name: string;
	genre: string;
	description?: string;
	members?: { name: string; role: string }[];
	quote?: string;
	image?: string;
	imageAlt?: string;
	albums?: Album[];
	links: ProjectLink[];
	current: boolean;
}

export const projects: MusicProject[] = [
	{
		id: 'tmsb',
		name: 'Table Mountain String Band',
		genre: 'Old-Time American Folk',
		description:
			'A four-piece group based out of Prague, Czech Republic, playing high-energy, driving old-time American fiddle tunes and folk songs. The band gets its name from an area not far from where Nick grew up, in Northern California.',
		members: [
			{ name: 'Nick Jennings', role: 'Clawhammer Banjo & Vocals' },
			{ name: 'Eli\u0161ka Jennings', role: 'Guitar & Vocals' },
			{ name: 'Ludv\u00edk Jacek', role: 'Fiddle' },
			{ name: 'Petr Pij\u00e1\u010dek', role: 'Upright Bass' }
		],
		quote:
			'\u201CThis husband and wife fronted group make for the best old-time sound in Prague.\u201D',
		image: '/images/tmsb-band.jpg',
		imageAlt: 'Table Mountain String Band performing live in Prague',
		links: [
			{ label: 'Website', url: 'https://tablemountainstringband.com' },
			{ label: 'Instagram', url: 'https://instagram.com/tablemountainstringband' },
			{ label: 'Facebook', url: 'https://facebook.com/tablemountainstringband' }
		],
		current: true
	},
	{
		id: 'turpentine-ray',
		name: 'The Turpentine Ray',
		genre: 'Turbine-Room Folk',
		description:
			'Folk and country mixed with a special blend of chaos, revolving around acoustic guitar, banjo, cello, resonator and drums.',
		members: [
			{ name: 'Mark Tierney', role: 'Vocals, Acoustic & Electric Guitar' },
			{ name: 'Nick Jennings', role: 'Banjo, Resonator, Backup Vocals' },
			{ name: 'Marc Cram', role: 'Bass, Guitar, Backup Vocals' },
			{ name: 'Matt Ford', role: 'Cello' },
			{ name: 'Jakub Kovtun', role: 'Drums' }
		],
		image: '/images/turpentine-ray.jpg',
		imageAlt: 'The Turpentine Ray performing at Swan Divadelni Klub',
		albums: [
			{ title: 'Same Player Continues Play When Lit', year: 2025 },
			{ title: 'Turn On To The Sun', year: 2019 },
			{ title: 'The Corporeal Races', year: 2015 },
			{ title: 'The First TV Dinner', year: 2012 }
		],
		links: [
			{ label: 'Bandcamp', url: 'https://theturpentineray.bandcamp.com' },
			{ label: 'Spotify', url: 'https://open.spotify.com/artist/0vcgkMTWSgfU9ipmAhldia' },
			{ label: 'YouTube', url: 'https://www.youtube.com/theturpentineray' },
			{ label: 'Instagram', url: 'https://www.instagram.com/theturpentineray' },
			{ label: 'Facebook', url: 'https://www.facebook.com/theturpentineray' }
		],
		current: true
	},
	{
		id: 'death-ponee',
		name: 'death ponee',
		genre: 'Electronic Post-Punk',
		description:
			'Gritty guitars, warped synths, live drums stabbed with vocals. Two synths, guitar, drums \u2014 plus a glitchy 8-bit sampler called the MicroGranny.',
		members: [
			{ name: 'Matt Ford', role: 'Synths & Vocals' },
			{ name: 'Mark Tierney', role: 'Guitar' },
			{ name: 'George Allen', role: 'Synths & Vocals' },
			{ name: 'Nick Jennings', role: 'Drums' }
		],
		image: '/images/death-ponee.jpg',
		imageAlt: 'death ponee performing live',
		albums: [
			{ title: 'Waiting for Rover', year: 2025 },
			{ title: "Life's Great Uniform", year: 2019 }
		],
		links: [
			{ label: 'Website', url: 'https://deathponee.com' },
			{ label: 'Bandcamp', url: 'https://deathponee.bandcamp.com' },
			{ label: 'Spotify', url: 'https://open.spotify.com/artist/2y9esGDEbNVxvbTSRT56u8' },
			{ label: 'Instagram', url: 'https://www.instagram.com/deathponee' },
			{ label: 'Facebook', url: 'https://www.facebook.com/deathponee' },
			{ label: 'TikTok', url: 'https://www.tiktok.com/@deathponee' }
		],
		current: true
	},
	{
		id: 'band-no-7',
		name: 'Band No. 7',
		genre: 'Dark Country / Gothic Country',
		image: '/images/band-no-7.jpg',
		imageAlt: 'Band No. 7',
		albums: [
			{ title: 'Rip Session', year: 2025 },
			{ title: 'Sinnerman', year: 2023 }
		],
		members: [
			{ name: 'Eli\u00e1\u0161 Slune\u010dko', role: 'Guitar & Vocals' },
			{ name: 'Ludv\u00edk Jacek', role: 'Fiddle & Vocals' },
			{ name: 'Sam Whitten', role: 'Mandolin & Vocals' },
			{ name: 'Steve Willis', role: 'Banjo' },
			{ name: 'Nick Jennings', role: 'Bass & Vocals' },
			{ name: 'Bohdan Pracha\u0159', role: 'Drums' }
		],
		links: [
			{ label: 'Website', url: 'https://bandno7.cz' },
			{ label: 'Bandcamp', url: 'https://bandno7.bandcamp.com' },
			{ label: 'Spotify', url: 'https://open.spotify.com/artist/4wqACL4lbRWlNj8acfKPDW' },
			{ label: 'Instagram', url: 'https://www.instagram.com/bandno7' },
			{ label: 'Facebook', url: 'https://www.facebook.com/bandno7cz' }
		],
		current: true
	},
	{
		id: 'renegade-string-band',
		name: 'The Renegade String Band',
		genre: 'Bluegrass',
		image: '/images/renegade-string-band.jpg',
		imageAlt: 'The Renegade String Band in a park in Prague',
		members: [
			{ name: 'Matt Whitten', role: 'Vocals & Guitar' },
			{ name: 'Sam Whitten', role: 'Vocals & Mandolin' },
			{ name: 'Steve Willis', role: 'Banjo' },
			{ name: 'Ludv\u00edk Jacek', role: 'Fiddle' },
			{ name: 'Nick Jennings', role: 'Bass' }
		],
		links: [
			{ label: 'Instagram', url: 'https://www.instagram.com/therenegadestringband' },
			{ label: 'Facebook', url: 'https://www.facebook.com/GnarlyBluegrass' }
		],
		current: true
	},
	{
		id: 'hurphendale',
		name: 'Hurphendale',
		genre: 'Experimental Electronica',
		description:
			'Solo electronic project. Melodic ideas blended and layered, spun into the gravity wells of glitchy electronic beats.',
		image: '/images/hurphendale.jpg',
		imageAlt: 'Hurphendale \u2014 Nick Jennings performing',
		albums: [{ title: 'Space Dust and Starlight', year: 2022 }],
		links: [
			{ label: 'Website', url: 'https://hurphendale.com' },
			{ label: 'Bandcamp', url: 'https://hurphendale.bandcamp.com' },
			{ label: 'Spotify', url: 'https://open.spotify.com/artist/2gI8ydRR48dn8MwQ9hzQ2U' },
			{ label: 'Facebook', url: 'https://www.facebook.com/hurphendale' }
		],
		current: true
	},
	{
		id: 'that-old-dream',
		name: 'That Old Dream',
		genre: 'Dark Moody Country & Folk',
		description:
			'A blend of tear-in-your-beer ballads and butt-shaking barn-burners.',
		image: '/images/that-old-dream.jpg',
		imageAlt: 'That Old Dream performing outdoors',
		members: [
			{ name: 'Marc Cram', role: 'Guitar & Vocals' },
			{ name: 'Nick Jennings', role: 'Banjo & Vocals' },
			{ name: 'Caolan O Neill Forde', role: 'Lapsteel, Mandolin & Vocals' }
		],
		links: [
			{ label: 'Instagram', url: 'https://www.instagram.com/that.old.dream' },
			{ label: 'Facebook', url: 'https://www.facebook.com/thatolddream' }
		],
		current: true
	},
	{
		id: 'holy-fanda',
		name: 'Holy Fanda and the Reverends',
		genre: 'Americana / Southern Gothic',
		description: 'Americana, folk rock and southern gothic roots music from Prague.',
		albums: [
			{ title: 'The End of the Road', year: 2026 },
			{ title: 'I Will Go', year: 2022 },
			{ title: 'Dopisy v lahvi', year: 2022 },
			{ title: 'Mus\u00edme voca\u010f pry\u010d', year: 2016 },
			{ title: 'Konec Cesty', year: 2015 }
		],
		links: [
			{ label: 'Website', url: 'https://holyfanda.com' },
			{ label: 'Bandcamp', url: 'https://holyfandathereverends.bandcamp.com' },
			{ label: 'Instagram', url: 'https://instagram.com/holyfanda' }
		],
		current: false
	},
	{
		id: 'tower-of-dudes',
		name: 'The Tower of Dudes',
		genre: 'Gypsy Punk Accordion Rock',
		description:
			'East meets West gypsy punk accordion rock. Lively stage presence and shotgun delivery inspiring frenzied dancing and reckless abandon.',
		albums: [
			{ title: 'Genre Rock', year: 2019 },
			{ title: 'Boring Country Songs', year: 2018 },
			{ title: 'Make Your Own Culture', year: 2014 },
			{ title: 'Reheat and Serve', year: 2011 },
			{ title: 'Earl', year: 2010 },
			{ title: 'A Plan', year: 2008 }
		],
		links: [
			{ label: 'Bandcamp', url: 'https://towerofdudes.bandcamp.com' },
			{ label: 'Facebook', url: 'https://www.facebook.com/towerofdudes' }
		],
		current: false
	},
	{
		id: 'ocean-versus-daughter',
		name: 'Ocean Versus Daughter',
		genre: 'Alternative / Indie',
		description:
			'3 Americans, 1 Brit and 1 Czech who came together in Prague. Keyboard, cello, synthesizer, violin, drums and occasionally glockenspiel.',
		albums: [{ title: 'Slightly Parted', year: 2011 }],
		links: [
			{ label: 'Bandcamp', url: 'https://oceanversusdaughter.bandcamp.com' }
		],
		current: false
	},
	{
		id: 'zeroking',
		name: 'Zeroking',
		genre: 'Garage Rock',
		description: 'Garage rock four piece based in Prague.',
		albums: [
			{
				title: 'Steve Shellingsworth Singing Kindergarten Ballads 500,000 A.D.',
				year: 2008
			}
		],
		members: [
			{ name: 'Mark Tierney', role: 'Vocals & Guitar' },
			{ name: 'Jakub Kovtun', role: 'Drums' },
			{ name: 'Nick Jennings', role: 'Guitar' },
			{ name: 'Selena Orkwis', role: 'Bass' }
		],
		links: [
			{ label: 'YouTube', url: 'https://youtu.be/1nWqlqmFx2E?si=xIAHfNc5LQrgC8el' }
		],
		current: false
	},
	{
		id: 'namodn',
		name: 'Namodn',
		genre: 'Punk',
		description: 'A 2–3 piece punk band from the SF Bay Area, circa 1998.',
		links: [],
		current: false
	}
];

export const currentProjects = projects.filter((p) => p.current);
export const pastProjects = projects.filter((p) => !p.current);

export const musicOfSenegal = {
	name: 'Music of Senegal',
	description:
		'A documentary initiative showcasing the stories and talents of musicians throughout Senegal through short music documentaries. Founded in 2019.',
	image: '/images/music-of-senegal.jpg',
	imageAlt: 'Musicians performing in Senegal — kora player and singers',
	links: [
		{ label: 'Website', url: 'https://musicofsenegal.com' },
		{ label: 'YouTube', url: 'https://www.youtube.com/channel/UCfbyJOm6Fy99cHaOXqOL80w' },
		{ label: 'Instagram', url: 'https://instagram.com/MusicOfSenegal' },
		{ label: 'Facebook', url: 'https://facebook.com/MusicOfSenegal' }
	]
};

export const collaborations: Collaboration[] = [
	{
		name: 'Datura Blues',
		genre: 'Experimental Pop / Freak-Rock',
		description:
			'Experimental pop and freak-rock from Humboldt County, California, with a revolving collaborative approach to songwriting and performance.',
		links: [
			{ label: 'Website', url: 'https://www.daturablues.com/' },
			{ label: 'Bandcamp', url: 'https://daturablues.bandcamp.com/' }
		]
	},
	{
		name: 'Die Geister Beschwören',
		genre: 'Free Folk / Psychedelic Freak-Folk',
		description:
			'Intoxicating blends of finger-picked guitar, singing saw, electronics, flute and percussion. Self-described organic mossfolk.',
		links: [
			{ label: 'Bandcamp', url: 'https://diegeisterbeschworen.bandcamp.com' }
		]
	}
];
