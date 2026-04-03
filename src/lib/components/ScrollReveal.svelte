<script lang="ts">
	import { browser } from '$app/environment';

	let { delay = 0, children } = $props<{ delay?: number; children: import('svelte').Snippet }>();

	let el: HTMLDivElement | undefined = $state();
	let visible = $state(false);

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

<div
	bind:this={el}
	class="reveal"
	class:visible
	style:transition-delay="{delay}ms"
>
	{@render children()}
</div>
