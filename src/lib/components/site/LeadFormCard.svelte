<script lang="ts">
	import LeadForm from './LeadForm.svelte';

	let {
		id,
		title = 'Find Out What Options May Be Available to You!',
		description = 'No obligation. Tell us a little about your situation.',
		submitLabel
	}: { id: string; title?: string; description?: string; submitLabel?: string } = $props();
</script>

<!-- scroll-mt keeps the card clear of the sticky header when a button jumps to it -->
<div
	data-form-card
	class="p-6 bg-white rounded-3xl border shadow-2xl scroll-mt-24 lg:scroll-mt-28 sm:p-7 border-slate-100 shadow-purple-900/10"
>
	<div class="mb-5">
		<h2
			class="text-2xl font-extrabold tracking-tight leading-tight sm:text-[1.65rem] text-brand-gradient pb-0.5"
		>
			{title}
		</h2>
		{#if description}
			<p class="mt-1.5 text-sm font-medium text-slate-700">{description}</p>
		{/if}
	</div>
	<LeadForm {id} {submitLabel} />
</div>
