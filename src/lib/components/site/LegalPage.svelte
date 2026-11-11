<script lang="ts">
	import type { Snippet } from 'svelte';
	import { site } from '$lib/site';

	let { title, children }: { title: string; children: Snippet } = $props();
</script>

<svelte:head>
	<title>{title} | {site.name}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="py-14 px-4 sm:py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">{title}</h1>
		<div class="mt-2 w-16 h-1 rounded-full bg-brand-gradient"></div>
		<div
			class="mt-8 space-y-4 leading-relaxed text-slate-700 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900"
		>
			{@render children()}
		</div>
	</div>
</section>
