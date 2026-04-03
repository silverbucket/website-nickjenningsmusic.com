<script lang="ts">
	let { label, url } = $props<{ label: string; url: string }>();
</script>

<a
	href={url}
	target="_blank"
	rel="noopener noreferrer"
	class="inline-block border border-gold/40 text-gold text-xs tracking-widest uppercase
		px-4 py-2 rounded-full transition-all duration-300
		hover:bg-gold hover:text-surface hover:border-gold"
>
	{label}
</a>
