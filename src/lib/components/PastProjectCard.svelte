<script lang="ts">
	import type { MusicProject } from '$lib/data/projects';
	import LinkPill from './LinkPill.svelte';

	let { project } = $props<{ project: MusicProject }>();
</script>

<article
	class="border border-cream/5 rounded-sm p-6 md:p-8 bg-surface-elevated/50 transition-colors duration-300 hover:border-gold/20"
	typeof="MusicGroup"
>
	<p class="text-[10px] tracking-widest-plus uppercase text-gold mb-2" property="genre">
		{project.genre}
	</p>
	<h3 class="font-display text-xl md:text-2xl tracking-tight" property="name">
		{project.name}
	</h3>
	{#if project.description}
		<p class="mt-3 text-sm text-cream/50 leading-relaxed" property="description">
			{project.description}
		</p>
	{/if}
	{#if project.albums && project.albums.length > 0}
		<p class="mt-3 text-xs text-muted italic">
			{project.albums.map((a) => `${a.title} (${a.year})`).join(' \u00b7 ')}
		</p>
	{/if}
	{#if project.links.length > 0}
		<nav class="mt-5 flex flex-wrap gap-2" aria-label="{project.name} links">
			{#each project.links as link}
				<LinkPill label={link.label} url={link.url} />
			{/each}
		</nav>
	{/if}
</article>
