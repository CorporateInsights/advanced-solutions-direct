<script lang="ts">
	// Small pink label above a section heading, with gradient dashes on each side
	let { label }: { label: string } = $props();
</script>

<p
	class="inline-flex gap-3 items-center text-sm font-extrabold uppercase sm:text-base tracking-[0.18em] text-brand-pink"
>
	<span class="w-8 h-0.5 rounded-full bg-brand-gradient-ui" aria-hidden="true"></span>
	{label}
	<span class="w-8 h-0.5 rounded-full bg-brand-gradient-ui" aria-hidden="true"></span>
</p>
