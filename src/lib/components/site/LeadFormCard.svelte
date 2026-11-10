<script lang="ts">
	import LeadForm from './LeadForm.svelte';

	let {
		id,
		title = 'Explore My Options',
		description = 'No obligation. It only takes about 60 seconds.',
		submitLabel
	}: { id: string; title?: string; description?: string; submitLabel?: string } = $props();
</script>

<!-- scroll-mt keeps the card clear of the sticky header when a button jumps to it -->
<div
	data-form-card
	class="p-6 bg-white rounded-3xl border shadow-2xl scroll-mt-24 lg:scroll-mt-28 sm:p-7 border-slate-100 shadow-purple-900/10"
>
	<div class="mb-5 text-center">
		<h2
			class="text-3xl font-extrabold tracking-tight italic leading-tight sm:text-[2rem] text-brand-gradient pb-0.5"
		>
			{title}
		</h2>
		{#if description}
			<p class="mt-1 text-sm italic text-slate-600">{description}</p>
		{/if}
	</div>
	<LeadForm {id} {submitLabel} />
</div>
