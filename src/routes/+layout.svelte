<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';
	import { site, consultationHref, ctaClass } from '$lib/site';
	import { Button } from '$lib/components/ui/button';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';
	import Phone from '@lucide/svelte/icons/phone';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	let { children } = $props();

	const showStickyCta = $derived(page.url.pathname !== consultationHref);
</script>

<svelte:head>
	<link rel="icon" href={site.icon} />
	<link rel="apple-touch-icon" sizes="180x180" href={site.appleIcon} />
	<!-- TODO: remove at launch. Keeps the temporary preview site out of search results -->
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="flex flex-col min-h-screen bg-white">
	<SiteHeader />
	<main class="flex-1">
		{@render children()}
	</main>
	<SiteFooter />

	{#if showStickyCta}
		<!-- Mobile Sticky CTA -->
		<div
			class="fixed right-0 bottom-0 left-0 z-40 p-3 border-t md:hidden border-slate-200 bg-white/95 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-md"
		>
			<div class="flex gap-3 items-center">
				<a
					href={site.phoneHref}
					aria-label="Call {site.name}"
					class="flex flex-shrink-0 justify-center items-center px-4 h-11 rounded-lg border border-slate-200"
				>
					<Phone class="w-5 h-5 text-slate-600" />
				</a>
				<Button href={consultationHref} class="flex-1 h-11 {ctaClass}">
					Free Consultation
					<ArrowRight class="ml-1 w-4 h-4" />
				</Button>
			</div>
		</div>
		<!-- Bottom padding for mobile sticky CTA -->
		<div class="h-16 md:hidden"></div>
	{/if}
</div>
