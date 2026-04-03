<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ProjectSection from '$lib/components/ProjectSection.svelte';
	import PastProjectCard from '$lib/components/PastProjectCard.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import LinkPill from '$lib/components/LinkPill.svelte';
	import { currentProjects, pastProjects, collaborations, musicOfSenegal } from '$lib/data/projects';
</script>

<svelte:head>
	<meta
		name="description"
		content="Nick Jennings is a multi-instrumentalist based in Prague, Czech Republic, playing across multiple projects."
	/>
	<meta property="og:title" content="Nick Jennings — Music" />
	<meta
		property="og:description"
		content="Clawhammer banjo, bass, and drums. Old-time folk, post-punk, dark country, electronica and more."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<Hero />

<section class="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto">
	<ScrollReveal>
		<p class="text-cream/70 leading-relaxed md:text-lg md:leading-relaxed">
			Originally from Northern California, Nick Jennings is a multi-instrumentalist
			now based in Prague, Czech Republic. Active since 2006, he plays drums, bass,
			banjo, guitar and synths across a wide range of projects — from old-time folk
			and bluegrass to electronic post-punk, dark country, and experimental electronica.
			Together with his wife Eliška, he fronts Table Mountain String Band, and is active
			in a number of other groups and collaborations across Prague's music scene. He has
			performed throughout Europe and the United States.
		</p>
	</ScrollReveal>
	<div class="flex justify-center mt-16">
		<div class="w-12 h-px bg-gold/20"></div>
	</div>
</section>

{#each currentProjects as project, i}
	<ProjectSection {project} reversed={i % 2 !== 0} />
	{#if i < currentProjects.length - 1}
		<div class="flex justify-center">
			<div class="w-12 h-px bg-gold/20"></div>
		</div>
	{/if}
{/each}

<section class="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
	<div class="flex justify-center mb-12 md:mb-16">
		<div class="w-12 h-px bg-gold/20"></div>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
		<div class="lg:col-span-3 overflow-hidden rounded-sm">
			<ScrollReveal>
				<img
					src={musicOfSenegal.image}
					alt={musicOfSenegal.imageAlt}
					class="w-full aspect-[3/2] object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-[1.02]"
				/>
			</ScrollReveal>
		</div>
		<div class="lg:col-span-2">
			<ScrollReveal delay={150}>
				<p class="text-[10px] md:text-xs tracking-widest-plus uppercase text-gold mb-3">
					Music Documentary
				</p>
				<h2 class="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight">
					{musicOfSenegal.name}
				</h2>
				<p class="mt-4 text-cream/70 leading-relaxed">
					{musicOfSenegal.description}
				</p>
				{#if musicOfSenegal.links.length > 0}
					<div class="mt-8 flex flex-wrap gap-3">
						{#each musicOfSenegal.links as link}
							<LinkPill label={link.label} url={link.url} />
						{/each}
					</div>
				{/if}
			</ScrollReveal>
		</div>
	</div>
</section>

<section class="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
	<ScrollReveal>
		<div class="flex justify-center mb-12 md:mb-16">
			<div class="w-12 h-px bg-gold/20"></div>
		</div>
		<h2
			class="font-display text-2xl md:text-3xl tracking-tight text-center mb-10 md:mb-14"
		>
			Collaborations
		</h2>
	</ScrollReveal>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		{#each collaborations as collab, i}
			<ScrollReveal delay={i * 100}>
				<div
					class="border border-cream/5 rounded-sm p-6 md:p-8 bg-surface-elevated/50 transition-colors duration-300 hover:border-gold/20"
				>
					<p class="text-[10px] tracking-widest-plus uppercase text-gold mb-2">
						{collab.genre}
					</p>
					<h3 class="font-display text-xl md:text-2xl tracking-tight">
						{collab.name}
					</h3>
					{#if collab.description}
						<p class="mt-3 text-sm text-cream/50 leading-relaxed">
							{collab.description}
						</p>
					{/if}
					{#if collab.links.length > 0}
						<div class="mt-5 flex flex-wrap gap-2">
							{#each collab.links as link}
								<LinkPill label={link.label} url={link.url} />
							{/each}
						</div>
					{/if}
				</div>
			</ScrollReveal>
		{/each}
	</div>
</section>

<section class="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
	<ScrollReveal>
		<div class="flex justify-center mb-12 md:mb-16">
			<div class="w-12 h-px bg-gold/20"></div>
		</div>
		<h2
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

<section class="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto">
	<ScrollReveal>
		<div class="flex justify-center mb-12 md:mb-16">
			<div class="w-12 h-px bg-gold/20"></div>
		</div>
		<div class="flex flex-col items-center text-center">
			<div class="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden mb-8">
				<img
					src="/images/nick-jennings.jpg"
					alt="Nick Jennings"
					class="w-full h-full object-cover"
				/>
			</div>
			<h2 class="font-display text-2xl md:text-3xl tracking-tight">
				Get in Touch
			</h2>
			<p class="mt-4 text-cream/50 leading-relaxed max-w-md">
				Want to collaborate, book a show, or just say hello? I'd love to hear from you.
			</p>
			<a
				href="mailto:info@nickjenningsmusic.com"
				class="mt-6 inline-block text-gold/80 hover:text-gold transition-colors duration-300 tracking-wide text-sm"
			>
				info@nickjenningsmusic.com
			</a>
		</div>
	</ScrollReveal>
</section>

<Footer />
