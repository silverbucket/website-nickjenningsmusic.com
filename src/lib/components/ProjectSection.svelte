<script lang="ts">
	import type { MusicProject } from '$lib/data/projects';
	import LinkPill from './LinkPill.svelte';
	import ScrollReveal from './ScrollReveal.svelte';

	let { project, reversed = false } = $props<{
		project: MusicProject;
		reversed?: boolean;
	}>();

	const hasRichContent = $derived(
		!!project.description || !!project.members || !!project.albums
	);
</script>

<section
	class="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
	aria-labelledby="project-{project.id}"
	typeof="MusicGroup"
>
	{#if hasRichContent && project.image}
		<!-- Full layout: image + text -->
		<div class="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-10 lg:gap-16 items-center">
			<div
				class="lg:col-span-3 overflow-hidden rounded-sm {reversed
					? 'lg:order-2'
					: 'lg:order-1'}"
			>
				<ScrollReveal>
					<img
						src={project.image}
						alt={project.imageAlt || project.name}
						property="image"
						loading="lazy"
						class="w-full aspect-[3/2] object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-[1.02]"
					/>
				</ScrollReveal>
			</div>
			<div class="{reversed ? 'lg:order-1' : 'lg:order-2'} lg:col-span-2">
				<ScrollReveal delay={150}>
					<p
						class="text-[10px] md:text-xs tracking-widest-plus uppercase text-gold mb-3"
						property="genre"
					>
						{project.genre}
					</p>
					<h2
						id="project-{project.id}"
						class="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight"
						property="name"
					>
						{project.name}
					</h2>
					{#if project.quote}
						<p class="mt-4 text-muted italic font-display text-lg leading-relaxed">
							{project.quote}
						</p>
					{/if}
					{#if project.description}
						<p class="mt-4 text-cream/70 leading-relaxed" property="description">
							{project.description}
						</p>
					{/if}
					{#if project.members}
						<ul class="mt-6 space-y-1" aria-label="Band members">
							{#each project.members as member}
								<li class="text-sm" typeof="Person" property="member">
									<span class="text-cream/90" property="name">{member.name}</span>
									<span class="text-muted"> — <span property="roleName">{member.role}</span></span>
								</li>
							{/each}
						</ul>
					{/if}
					{#if project.albums}
						<div class="mt-6">
							<p class="text-[10px] tracking-widest uppercase text-muted mb-2">
								Releases
							</p>
							<ul class="space-y-1" aria-label="Releases">
								{#each project.albums as album}
									<li class="text-sm" typeof="MusicAlbum" property="album">
										<span class="text-cream/70 italic" property="name">{album.title}</span>
										<span class="text-muted/60 text-xs ml-1">(<time property="datePublished">{album.year}</time>)</span>
									</li>
								{/each}
							</ul>
						</div>
					{/if}
					{#if project.links.length > 0}
						<nav class="mt-8 flex flex-wrap gap-3" aria-label="{project.name} links">
							{#each project.links as link}
								<LinkPill label={link.label} url={link.url} />
							{/each}
						</nav>
					{/if}
				</ScrollReveal>
			</div>
		</div>
	{:else if hasRichContent}
		<!-- Rich content but no image -->
		<div class="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-10 lg:gap-16 items-start">
			<div
				class="lg:col-span-3 {reversed ? 'lg:order-2' : 'lg:order-1'}"
			>
				<ScrollReveal>
					<p
						class="text-[10px] md:text-xs tracking-widest-plus uppercase text-gold mb-3"
						property="genre"
					>
						{project.genre}
					</p>
					<h2
						id="project-{project.id}"
						class="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight"
						property="name"
					>
						{project.name}
					</h2>
					{#if project.description}
						<p class="mt-4 text-cream/70 leading-relaxed" property="description">
							{project.description}
						</p>
					{/if}
					{#if project.members}
						<ul class="mt-6 space-y-1" aria-label="Band members">
							{#each project.members as member}
								<li class="text-sm" typeof="Person" property="member">
									<span class="text-cream/90" property="name">{member.name}</span>
									<span class="text-muted"> — <span property="roleName">{member.role}</span></span>
								</li>
							{/each}
						</ul>
					{/if}
				</ScrollReveal>
			</div>
			<div class="{reversed ? 'lg:order-1' : 'lg:order-2'} lg:col-span-2">
				<ScrollReveal delay={150}>
					{#if project.albums}
						<p class="text-[10px] tracking-widest uppercase text-muted mb-2">
							Releases
						</p>
						<ul class="space-y-1" aria-label="Releases">
							{#each project.albums as album}
								<li class="text-sm" typeof="MusicAlbum" property="album">
									<span class="text-cream/70 italic" property="name">{album.title}</span>
									<span class="text-muted/60 text-xs ml-1">(<time property="datePublished">{album.year}</time>)</span>
								</li>
							{/each}
						</ul>
					{/if}
					{#if project.links.length > 0}
						<nav class="mt-8 flex flex-wrap gap-3" aria-label="{project.name} links">
							{#each project.links as link}
								<LinkPill label={link.label} url={link.url} />
							{/each}
						</nav>
					{/if}
				</ScrollReveal>
			</div>
		</div>
	{:else}
		<!-- Compact layout: genre + name + links -->
		<ScrollReveal>
			<div class="text-center max-w-xl mx-auto">
				<p
					class="text-[10px] md:text-xs tracking-widest-plus uppercase text-gold mb-3"
					property="genre"
				>
					{project.genre}
				</p>
				<h2
					id="project-{project.id}"
					class="font-display text-2xl md:text-3xl lg:text-4xl tracking-tight"
					property="name"
				>
					{project.name}
				</h2>
				{#if project.links.length > 0}
					<nav class="mt-6 flex flex-wrap justify-center gap-3" aria-label="{project.name} links">
						{#each project.links as link}
							<LinkPill label={link.label} url={link.url} />
						{/each}
					</nav>
				{/if}
			</div>
		</ScrollReveal>
	{/if}
</section>
