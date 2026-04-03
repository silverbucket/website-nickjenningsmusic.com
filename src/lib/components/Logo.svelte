<script lang="ts">
	let { scale = 1 } = $props<{ scale?: number }>();
</script>

<div class="logo" style="--s: {scale}">
	<div class="logo-mark">
		<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nick Jennings Music">
			<g transform="translate(50, 50)">
				<circle cx="0" cy="0" r="38" fill="none" stroke="currentColor" stroke-width="0.4" opacity="0.15"/>
				<circle cx="0" cy="0" r="34" fill="none" stroke="currentColor" stroke-width="0.3" opacity="0.2"/>
				<circle cx="0" cy="0" r="30" fill="none" stroke="currentColor" stroke-width="0.3" opacity="0.25"/>
				<circle cx="0" cy="0" r="26" fill="none" stroke="currentColor" stroke-width="0.4" opacity="0.3"/>
				<circle cx="0" cy="0" r="36" fill="none" stroke="currentColor" stroke-width="0.2" stroke-dasharray="1.5 3" opacity="0.12"/>
				<circle cx="0" cy="0" r="32" fill="none" stroke="currentColor" stroke-width="0.2" stroke-dasharray="1 2.5" opacity="0.1"/>
				<circle cx="0" cy="0" r="28" fill="none" stroke="currentColor" stroke-width="0.2" stroke-dasharray="2 4" opacity="0.1"/>
				<circle cx="0" cy="0" r="40" fill="none" stroke="currentColor" stroke-width="1" opacity="0.4"/>
				<circle cx="0" cy="0" r="16" fill="none" stroke="#c8a96e" stroke-width="0.6" opacity="0.5"/>
				<circle cx="0" cy="0" r="15" fill="var(--logo-bg, #0a0a0a)" stroke="none"/>
				<circle cx="0" cy="0" r="15" fill="none" stroke="#c8a96e" stroke-width="0.3" opacity="0.3"/>
				<circle cx="0" cy="0" r="2" fill="#c8a96e" opacity="0.3"/>
				<text x="0" y="2" text-anchor="middle" dominant-baseline="central" font-family="Georgia, 'Times New Roman', serif" font-size="11" letter-spacing="1" fill="#c8a96e" opacity="0.85">NJ</text>
				<line x1="28" y1="-42" x2="12" y2="-18" stroke="currentColor" stroke-width="1" opacity="0.3"/>
				<circle cx="12" cy="-18" r="1.5" fill="currentColor" opacity="0.25"/>
				<circle cx="30" cy="-44" r="3" fill="none" stroke="currentColor" stroke-width="0.6" opacity="0.2"/>
			</g>
			<text x="110" y="40" font-family="Georgia, 'Times New Roman', serif" font-size="14" letter-spacing="3" fill="currentColor" opacity="0.95">NICK JENNINGS</text>
			<line x1="110" y1="48" x2="180" y2="48" stroke="#c8a96e" stroke-width="0.6" opacity="0.35"/>
			<text x="110" y="60" font-family="system-ui, sans-serif" font-size="8" letter-spacing="3.5" fill="#c8a96e" opacity="0.5">music</text>
		</svg>
	</div>
</div>

<style>
	.logo {
		display: inline-flex;
		align-items: center;
		color: currentColor;
	}

	.logo-mark {
		width: calc(16rem * var(--s));
	}

	.logo-mark :global(svg) {
		width: 100%;
		height: auto;
		display: block;
	}
</style>
