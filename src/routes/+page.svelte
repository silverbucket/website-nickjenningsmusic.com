<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ProjectSection from '$lib/components/ProjectSection.svelte';
	import PastProjectCard from '$lib/components/PastProjectCard.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import LinkPill from '$lib/components/LinkPill.svelte';
	import { currentProjects, pastProjects, collaborations, musicOfSenegal } from '$lib/data/projects';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'MusicGroup',
		name: 'Nick Jennings',
		description:
			'Multi-instrumentalist based in Prague, Czech Republic, playing drums, bass, banjo, guitar and synths across a wide range of projects.',
		url: 'https://nickjenningsmusic.com',
		image: 'https://nickjenningsmusic.com/images/nick-jennings.jpg',
		email: 'info@nickjenningsmusic.com',
		genre: [
			'Old-time Folk',
			'Bluegrass',
			'Post-Punk',
			'Dark Country',
			'Experimental Electronica'
		],
		location: {
			'@type': 'Place',
			name: 'Prague, Czech Republic'
		},
		sameAs: ['https://www.discogs.com/artist/3471762-Nick-Jennings-2']
	};
</script>

<svelte:head>
	<meta
		name="description"
		content="Nick Jennings is a multi-instrumentalist based in Prague, Czech Republic. Drums, bass, banjo, guitar and synths across old-time folk, post-punk, dark country, and electronica."
	/>
	<meta property="og:title" content="Nick Jennings — Music" />
	<meta
		property="og:description"
		content="Multi-instrumentalist based in Prague. Old-time folk, post-punk, dark country, electronica and more."
	/>
	<meta property="og:type" content="music.musician" />
	<meta property="og:image" content="https://nickjenningsmusic.com/images/nick-jennings.jpg" />
	<meta property="og:url" content="https://nickjenningsmusic.com" />
	<meta property="og:site_name" content="Nick Jennings Music" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Nick Jennings — Music" />
	<meta name="twitter:description" content="Multi-instrumentalist based in Prague. Old-time folk, post-punk, dark country, electronica and more." />
	<meta name="twitter:image" content="https://nickjenningsmusic.com/images/nick-jennings.jpg" />
	<link rel="canonical" href="https://nickjenningsmusic.com" />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<Hero />

<main id="main-content">
	<section
		class="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto"
		aria-label="About"
		typeof="Person"
	>
		<ScrollReveal>
			<p class="text-cream/70 leading-relaxed md:text-lg md:leading-relaxed" property="description">
				Originally from Northern California, <span property="name">Nick Jennings</span> is a multi-instrumentalist
				now based in <span property="homeLocation" typeof="Place"><span property="name">Prague, Czech Republic</span></span>.
				Active since 2006, he plays drums, bass, banjo, guitar and synths across a wide range of
				projects — from old-time folk and bluegrass to electronic post-punk, dark country, and
				experimental electronica. Together with his wife Eliška, he fronts Table Mountain String
				Band, and is active in a number of other groups and collaborations across Prague's music
				scene. He has performed throughout Europe and the United States.
			</p>
		</ScrollReveal>
		<div class="flex justify-center mt-16" aria-hidden="true">
			<div class="w-12 h-px bg-gold/20"></div>
		</div>
	</section>

	<section aria-label="Current Projects">
		{#each currentProjects as project, i}
			<ProjectSection {project} reversed={i % 2 !== 0} />
			{#if i < currentProjects.length - 1}
				<div class="flex justify-center" aria-hidden="true">
					<div class="w-12 h-px bg-gold/20"></div>
				</div>
			{/if}
		{/each}
	</section>

	<div class="flex justify-center" aria-hidden="true">
		<div class="w-12 h-px bg-gold/20"></div>
	</div>

	<section
		class="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
		aria-labelledby="mos-heading"
		typeof="Organization"
	>
		<div class="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
			<div class="lg:col-span-3 overflow-hidden rounded-sm">
				<ScrollReveal>
					<img
						src={musicOfSenegal.image}
						alt={musicOfSenegal.imageAlt}
						property="image"
						class="w-full aspect-[3/2] object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-[1.02]"
					/>
				</ScrollReveal>
			</div>
			<div class="lg:col-span-2">
				<ScrollReveal delay={150}>
					<p class="text-[10px] md:text-xs tracking-widest-plus uppercase text-gold mb-3">
						Music Documentary
					</p>
					<h2 id="mos-heading" class="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight" property="name">
						{musicOfSenegal.name}
					</h2>
					<p class="mt-4 text-cream/70 leading-relaxed" property="description">
						{musicOfSenegal.description}
					</p>
					{#if musicOfSenegal.links.length > 0}
						<nav class="mt-8 flex flex-wrap gap-3" aria-label="Music of Senegal links">
							{#each musicOfSenegal.links as link}
								<LinkPill label={link.label} url={link.url} />
							{/each}
						</nav>
					{/if}
				</ScrollReveal>
			</div>
		</div>
	</section>

	<section
		class="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
		aria-labelledby="collabs-heading"
	>
		<ScrollReveal>
			<div class="flex justify-center mb-12 md:mb-16" aria-hidden="true">
				<div class="w-12 h-px bg-gold/20"></div>
			</div>
			<h2
				id="collabs-heading"
				class="font-display text-2xl md:text-3xl tracking-tight text-center mb-10 md:mb-14"
			>
				Collaborations
			</h2>
		</ScrollReveal>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each collaborations as collab, i}
				<ScrollReveal delay={i * 100}>
					<article
						class="border border-cream/5 rounded-sm p-6 md:p-8 bg-surface-elevated/50 transition-colors duration-300 hover:border-gold/20"
						typeof="MusicGroup"
					>
						<p class="text-[10px] tracking-widest-plus uppercase text-gold mb-2" property="genre">
							{collab.genre}
						</p>
						<h3 class="font-display text-xl md:text-2xl tracking-tight" property="name">
							{collab.name}
						</h3>
						{#if collab.description}
							<p class="mt-3 text-sm text-cream/50 leading-relaxed" property="description">
								{collab.description}
							</p>
						{/if}
						{#if collab.links.length > 0}
							<nav class="mt-5 flex flex-wrap gap-2" aria-label="{collab.name} links">
								{#each collab.links as link}
									<LinkPill label={link.label} url={link.url} />
								{/each}
							</nav>
						{/if}
					</article>
				</ScrollReveal>
			{/each}
		</div>
	</section>

	<section
		class="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
		aria-labelledby="earlier-heading"
	>
		<ScrollReveal>
			<div class="flex justify-center mb-12 md:mb-16" aria-hidden="true">
				<div class="w-12 h-px bg-gold/20"></div>
			</div>
			<h2
				id="earlier-heading"
				class="font-display text-2xl md:text-3xl tracking-tight text-center mb-10 md:mb-14"
			>
				Earlier Work
			</h2>
		</ScrollReveal>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each pastProjects as project, i}
				<ScrollReveal delay={i * 100}>
					<PastProjectCard {project} />
				</ScrollReveal>
			{/each}
		</div>
	</section>

	<section
		class="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto"
		aria-labelledby="contact-heading"
	>
		<ScrollReveal>
			<div class="flex justify-center mb-12 md:mb-16" aria-hidden="true">
				<div class="w-12 h-px bg-gold/20"></div>
			</div>
			<div class="flex flex-col items-center text-center">
				<div class="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden mb-8">
					<img
						src="/images/nick-jennings.jpg"
						alt="Nick Jennings with banjo"
						class="w-full h-full object-cover"
					/>
				</div>
				<h2 id="contact-heading" class="font-display text-2xl md:text-3xl tracking-tight">
					Get in Touch
				</h2>
				<p class="mt-4 text-cream/50 leading-relaxed max-w-md">
					Want to collaborate, book a show, or just say hello? I'd love to hear from you.
				</p>
				<a
					href="mailto:info@nickjenningsmusic.com"
					class="mt-6 inline-block text-gold/80 hover:text-gold transition-colors duration-300 tracking-wide text-sm"
					aria-label="Send email to info@nickjenningsmusic.com"
				>
					info@nickjenningsmusic.com
				</a>
			</div>
		</ScrollReveal>
	</section>
</main>

<Footer />
