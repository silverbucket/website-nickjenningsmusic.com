<script lang="ts">
	let { scale = 1 } = $props<{ scale?: number }>();
</script>

<div class="logo" style="--s: {scale}">
	<span class="logo-name">Nick Jennings</span>
	<span class="logo-music">music</span>
</div>

<style>
	.logo {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		gap: calc(0.2rem * var(--s));
		color: currentColor;
	}

	.logo-name {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: calc(1.25rem * var(--s));
		letter-spacing: -0.01em;
		line-height: 1;
	}

	.logo-music {
		font-family: 'Inter', system-ui, sans-serif;
		font-size: calc(0.5rem * var(--s));
		letter-spacing: 0.3em;
		text-transform: lowercase;
		color: #c8a96e;
		opacity: 0.6;
	}
</style>
