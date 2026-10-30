<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';
	import { site, consultationHref, ctaClass } from '$lib/site';
	import { Button } from '$lib/components/ui/button';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';
	import PaletteToggle from '$lib/components/site/PaletteToggle.svelte';
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
	<a
		href="#main"
		class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:shadow-lg"
		>Skip to content</a
	>
	<SiteHeader />
	<main id="main" class="flex-1">
		{@render children()}
	</main>
	<SiteFooter />

	{#if site.showPaletteToggle}
		<PaletteToggle />
	{/if}

	{#if showStickyCta}
		<!-- Mobile Sticky CTA -->
		<div
			class="fixed right-0 bottom-0 left-0 z-40 p-3 border-t md:hidden border-slate-200 bg-white/95 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-md"
		>
			<div class="grid grid-cols-2 gap-3">
				<!-- Tap-to-call: equal billing with the form, since most mobile visitors would rather call -->
				<a
					href={site.phoneHref}
					class="flex gap-2 justify-center items-center h-12 text-sm font-bold rounded-lg border-2 border-pink-200 text-slate-900 bg-white active:bg-pink-50"
				>
					<Phone class="w-5 h-5 text-brand-pink" />
					Call Now
				</a>
				<Button href={consultationHref} class="h-12 text-sm {ctaClass}">
					Free Consultation
					<ArrowRight class="ml-1 w-4 h-4" />
				</Button>
			</div>
		</div>
		<!-- Bottom padding for mobile sticky CTA -->
		<div class="h-[4.5rem] md:hidden"></div>
	{/if}
</div>
