<script lang="ts">
	import BrandArc from './BrandArc.svelte';
	import SectionEyebrow from './SectionEyebrow.svelte';
	import { accentText, leadClass, pageTitleClass } from '$lib/site';

	let {
		eyebrow,
		title,
		highlight,
		description
	}: { eyebrow?: string; title: string; highlight?: string; description?: string } = $props();
</script>

<!-- Top of each inner page. Same type and colors as the home page sections. -->
<section class="overflow-hidden relative bg-gradient-to-b from-purple-50/70 via-white to-white">
	<div class="absolute inset-0 pointer-events-none">
		<div
			class="absolute -top-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-purple-300/20 blur-3xl"
		></div>
		<div
			class="absolute -bottom-56 -left-40 w-[28rem] h-[28rem] rounded-full bg-orange-300/20 blur-3xl"
		></div>
		<BrandArc
			class="absolute -bottom-6 left-1/2 w-[40rem] max-w-none -translate-x-1/2 opacity-[0.09]"
		/>
	</div>
	<div class="relative py-14 px-4 mx-auto max-w-4xl text-center sm:px-6 lg:py-20 lg:px-8">
		{#if eyebrow}
			<SectionEyebrow label={eyebrow} />
		{/if}
		<h1 class="mt-4 {pageTitleClass}">
			{title}{#if highlight}<span class={accentText}>{highlight}</span>{/if}
		</h1>
		{#if description}
			<p class="mx-auto mt-5 max-w-3xl {leadClass}">{description}</p>
		{/if}
	</div>
</section>
