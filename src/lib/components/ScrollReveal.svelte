<script lang="ts">
	import { browser } from '$app/environment';

	let { delay = 0, children }: { delay?: number; children: import('svelte').Snippet } = $props();

	let el: HTMLDivElement | undefined = $state();
	let visible = $state(!browser);

	$effect(() => {
		if (!browser || !el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.15 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<div bind:this={el} class="reveal" class:visible style:transition-delay="{delay}ms">
	{@render children()}
</div>
