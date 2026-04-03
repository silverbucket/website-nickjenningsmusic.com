<script lang="ts">
	import c1Full from '$lib/assets/logos/concept-1-monogram.svg?raw';
	import c1Fav from '$lib/assets/logos/concept-1-monogram-favicon.svg?raw';
	import c3Full from '$lib/assets/logos/concept-3-soundwave.svg?raw';
	import c3Fav from '$lib/assets/logos/concept-3-soundwave-favicon.svg?raw';
	import c7Full from '$lib/assets/logos/concept-7-vinyl.svg?raw';
	import c7Fav from '$lib/assets/logos/concept-7-vinyl-favicon.svg?raw';
	import c8Full from '$lib/assets/logos/concept-8-tuning-fork.svg?raw';
	import c8Fav from '$lib/assets/logos/concept-8-tuning-fork-favicon.svg?raw';
	import c9Full from '$lib/assets/logos/concept-9-sound-ripple.svg?raw';
	import c9Fav from '$lib/assets/logos/concept-9-sound-ripple-favicon.svg?raw';
	import c10Full from '$lib/assets/logos/concept-10-guitar-pick.svg?raw';
	import c10Fav from '$lib/assets/logos/concept-10-guitar-pick-favicon.svg?raw';
	import c11Full from '$lib/assets/logos/concept-11-sound-hole.svg?raw';
	import c11Fav from '$lib/assets/logos/concept-11-sound-hole-favicon.svg?raw';
	import c12Full from '$lib/assets/logos/concept-12-sine-wave.svg?raw';
	import c12Fav from '$lib/assets/logos/concept-12-sine-wave-favicon.svg?raw';
	import c13Full from '$lib/assets/logos/concept-13-musical-staff.svg?raw';
	import c13Fav from '$lib/assets/logos/concept-13-musical-staff-favicon.svg?raw';
	import c14Full from '$lib/assets/logos/concept-14-bow-strings.svg?raw';
	import c14Fav from '$lib/assets/logos/concept-14-bow-strings-favicon.svg?raw';
	import c15Full from '$lib/assets/logos/concept-15-spiral-groove.svg?raw';
	import c15Fav from '$lib/assets/logos/concept-15-spiral-groove-favicon.svg?raw';
	import c16Full from '$lib/assets/logos/concept-16-bridge.svg?raw';
	import c16Fav from '$lib/assets/logos/concept-16-bridge-favicon.svg?raw';
	import c17Full from '$lib/assets/logos/concept-17-constellation.svg?raw';
	import c17Fav from '$lib/assets/logos/concept-17-constellation-favicon.svg?raw';
	import c18Full from '$lib/assets/logos/concept-18-f-hole.svg?raw';
	import c18Fav from '$lib/assets/logos/concept-18-f-hole-favicon.svg?raw';
	import c19Full from '$lib/assets/logos/concept-19-waveform-sig.svg?raw';
	import c19Fav from '$lib/assets/logos/concept-19-waveform-sig-favicon.svg?raw';

	const concepts = [
		{
			num: 1,
			name: 'Elegant NJ Monogram',
			desc: 'Intertwined serif N+J letterforms. The J descender curves into a violin scroll suggestion, bridging music and typography.',
			full: c1Full,
			fav: c1Fav
		},
		{
			num: 3,
			name: 'Abstract Sound Wave',
			desc: 'Rounded equalizer bars whose height pattern traces the silhouette of the letter "N". Varying opacities add depth.',
			full: c3Full,
			fav: c3Fav
		},
		{
			num: 7,
			name: 'Vinyl Record Motif',
			desc: 'Concentric grooved circles form a vinyl record. "NJ" sits in the center label. A tonearm completes the composition.',
			full: c7Full,
			fav: c7Fav
		},
		{
			num: 8,
			name: 'Tuning Fork',
			desc: 'Minimal tuning fork whose prongs double as the two verticals of an "N", connected by a diagonal. Resonance arcs radiate outward.',
			full: c8Full,
			fav: c8Fav
		},
		{
			num: 9,
			name: 'Sound Ripple',
			desc: 'Expanding concentric arcs emanate from a single point, like sound propagating through air. Asymmetric for visual tension.',
			full: c9Full,
			fav: c9Fav
		},
		{
			num: 10,
			name: 'Guitar Pick',
			desc: 'Classic plectrum silhouette containing the NJ monogram. Simple, iconic, immediately recognizable as a musical mark.',
			full: c10Full,
			fav: c10Fav
		},
		{
			num: 11,
			name: 'Sound Hole Rosette',
			desc: 'Ornate circular pattern inspired by acoustic guitar sound holes. Decorative dashed rings frame the NJ initials in the void.',
			full: c11Full,
			fav: c11Fav
		},
		{
			num: 12,
			name: 'Sine Wave',
			desc: 'Continuous flowing sine wave as a baseline motif. Two phase-shifted waves create an interference pattern. NJ rides the peak.',
			full: c12Full,
			fav: c12Fav
		},
		{
			num: 13,
			name: 'Musical Staff',
			desc: 'Five staff lines with N and J placed as noteheads on different pitches. A simplified treble clef and double bar line complete the notation.',
			full: c13Full,
			fav: c13Fav
		},
		{
			num: 14,
			name: 'Bow & Strings',
			desc: 'Abstract violin bow crossing four parallel strings at a diagonal. A subtle glow at the contact point suggests the moment of sound creation.',
			full: c14Full,
			fav: c14Fav
		},
		{
			num: 15,
			name: 'Spiral Groove',
			desc: 'A single continuous golden spiral, evoking both a vinyl groove and the golden ratio. Thickens toward center for emphasis.',
			full: c15Full,
			fav: c15Fav
		},
		{
			num: 16,
			name: 'Bridge',
			desc: 'Abstract violin/guitar bridge silhouette with f-hole-inspired cutouts. Architectural and musical. NJ nestled in the arch.',
			full: c16Full,
			fav: c16Fav
		},
		{
			num: 17,
			name: 'Constellation',
			desc: 'NJ letterforms traced as star constellations with connecting lines. Scattered background stars. Celestial and atmospheric.',
			full: c17Full,
			fav: c17Fav
		},
		{
			num: 18,
			name: 'F-Holes',
			desc: 'Elegant mirrored violin f-hole shapes that suggest the two verticals of an "N". A subtle diagonal line connects them.',
			full: c18Full,
			fav: c18Fav
		},
		{
			num: 19,
			name: 'Waveform Signature',
			desc: 'Audio waveform bars placed along the cursive trajectory of "NJ". The bar heights modulate to trace the letterforms.',
			full: c19Full,
			fav: c19Fav
		}
	];

	let elevated = $state(false);
</script>

<svelte:head>
	<title>Logo Concepts — Nick Jennings Music</title>
</svelte:head>

<main id="main-content" class="page" class:elevated>
	<header>
		<h1>Logo Concepts</h1>
		<p class="subtitle">Nick Jennings Music — {concepts.length} design directions</p>
		<button onclick={() => (elevated = !elevated)}>
			{elevated ? 'Dark background' : 'Elevated background'}
		</button>
	</header>

	{#each concepts as concept}
		<section class="concept-card">
			<div class="concept-header">
				<span class="concept-num">{concept.num}</span>
				<h2>{concept.name}</h2>
			</div>
			<p class="concept-desc">{concept.desc}</p>

			<div class="logo-row">
				<div class="full-logo">
					<span class="label">Full Logo</span>
					<div class="svg-container full">
						{@html concept.full}
					</div>
				</div>

				<div class="favicon-set">
					<span class="label">Favicon</span>
					<div class="favicon-sizes">
						<div class="fav-item">
							<div class="svg-container fav-64">
								{@html concept.fav}
							</div>
							<span class="size-label">64px</span>
						</div>
						<div class="fav-item">
							<div class="svg-container fav-32">
								{@html concept.fav}
							</div>
							<span class="size-label">32px</span>
						</div>
						<div class="fav-item">
							<div class="svg-container fav-16">
								{@html concept.fav}
							</div>
							<span class="size-label">16px</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	{/each}
</main>

<style>
	.page {
		min-height: 100vh;
		background: #0a0a0a;
		color: #f5f0e8;
		padding: 3rem 2rem;
		font-family: 'Inter', system-ui, sans-serif;
		transition: background 0.3s ease;
	}

	.page.elevated {
		background: #141414;
	}

	header {
		text-align: center;
		margin-bottom: 4rem;
	}

	h1 {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 2.5rem;
		font-weight: 400;
		letter-spacing: 0.05em;
		margin: 0 0 0.5rem;
	}

	.subtitle {
		color: #c8a96e;
		font-size: 0.75rem;
		letter-spacing: 0.25em;
		text-transform: uppercase;
		opacity: 0.6;
		margin: 0 0 1.5rem;
	}

	button {
		background: none;
		border: 1px solid #c8a96e40;
		color: #c8a96e;
		padding: 0.4rem 1rem;
		font-size: 0.7rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		cursor: pointer;
		border-radius: 2px;
		transition: all 0.2s;
	}

	button:hover {
		background: #c8a96e15;
		border-color: #c8a96e80;
	}

	.concept-card {
		max-width: 900px;
		margin: 0 auto 4rem;
		border: 1px solid #c8a96e15;
		border-radius: 4px;
		padding: 2rem;
	}

	.concept-header {
		display: flex;
		align-items: baseline;
		gap: 1rem;
		margin-bottom: 0.5rem;
	}

	.concept-num {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 2rem;
		color: #c8a96e;
		opacity: 0.3;
		line-height: 1;
	}

	h2 {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 1.25rem;
		font-weight: 400;
		letter-spacing: 0.02em;
		margin: 0;
	}

	.concept-desc {
		color: #999;
		font-size: 0.8rem;
		line-height: 1.6;
		margin: 0 0 1.5rem;
		max-width: 600px;
	}

	.logo-row {
		display: flex;
		gap: 2.5rem;
		align-items: flex-start;
	}

	.full-logo {
		flex: 1;
	}

	.favicon-set {
		flex-shrink: 0;
	}

	.label {
		display: block;
		font-size: 0.6rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: #999;
		margin-bottom: 0.75rem;
	}

	.svg-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.svg-container.full {
		background: #0a0a0a;
		border: 1px solid #ffffff08;
		border-radius: 3px;
		padding: 1.5rem 2rem;
	}

	.svg-container.full :global(svg) {
		width: 100%;
		max-width: 500px;
		height: auto;
	}

	.favicon-sizes {
		display: flex;
		gap: 1.5rem;
		align-items: flex-end;
	}

	.fav-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.fav-64 :global(svg) {
		width: 64px;
		height: 64px;
	}

	.fav-32 :global(svg) {
		width: 32px;
		height: 32px;
	}

	.fav-16 :global(svg) {
		width: 16px;
		height: 16px;
	}

	.size-label {
		font-size: 0.55rem;
		color: #999;
		letter-spacing: 0.1em;
	}

	@media (max-width: 640px) {
		.logo-row {
			flex-direction: column;
		}

		.page {
			padding: 2rem 1rem;
		}

		.concept-card {
			padding: 1.25rem;
		}
	}
</style>
