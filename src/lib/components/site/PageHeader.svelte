<script lang="ts">
	import BrandArc from './BrandArc.svelte';
	import { Badge } from '$lib/components/ui/badge';

	let {
		eyebrow,
		title,
		highlight,
		description
	}: { eyebrow?: string; title: string; highlight?: string; description?: string } = $props();
</script>

<section class="overflow-hidden relative bg-gradient-to-b from-orange-50/60 via-white to-white">
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
	<div class="relative py-14 px-4 mx-auto max-w-3xl text-center sm:py-20 sm:px-6 lg:px-8">
		{#if eyebrow}
			<Badge variant="outline" class="mb-5 bg-white border-pink-200 text-brand-pink"
				>{eyebrow}</Badge
			>
		{/if}
		<h1
			class="text-4xl font-extrabold tracking-tight leading-tight text-balance sm:text-5xl text-slate-900"
		>
			{title}
			{#if highlight}<span class="text-brand-gradient">{highlight}</span>{/if}
		</h1>
		{#if description}
			<p class="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">{description}</p>
		{/if}
	</div>
</section>
