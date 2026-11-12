<script lang="ts">
	// Small pink label above a section heading, with gradient dashes on each side
	let { label }: { label: string } = $props();
</script>

<p
	class="inline-flex gap-2 items-center max-w-full text-sm font-extrabold tracking-wider uppercase sm:gap-3 sm:text-base sm:tracking-[0.18em] text-brand-pink"
>
	<span class="w-6 h-0.5 rounded-full sm:w-8 shrink-0 bg-brand-gradient-ui" aria-hidden="true"
	></span>
	{label}
	<span class="w-6 h-0.5 rounded-full sm:w-8 shrink-0 bg-brand-gradient-ui" aria-hidden="true"
	></span>
</p>
