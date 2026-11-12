<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';
	import { site, consultationHref, ctaClass, ctaLabel, link } from '$lib/site';
	import { Button } from '$lib/components/ui/button';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';
	import Phone from '@lucide/svelte/icons/phone';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	let { children } = $props();

	const showStickyCta = $derived(page.url.pathname !== consultationHref);
	// On the home page the form is already on the page, so scroll to it instead of navigating
	const stickyHref = $derived(page.url.pathname === link('/') ? '#lead-form' : consultationHref);

	// Any "#lead-form" link (hero, header, sticky bar): bring the whole form card into view below
	// the sticky header and put the cursor in First Name, ready to type.
	function goToForm(e: MouseEvent) {
		const a = (e.target as HTMLElement | null)?.closest('a[href="#lead-form"]');
		const form = document.getElementById('lead-form');
		if (!a || !form) return;
		e.preventDefault();
		const card = (form.closest('[data-form-card]') as HTMLElement | null) ?? form;
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		// Focus first (without moving), then scroll; focusing mid-scroll would cut the scroll short
		form.querySelector<HTMLInputElement>('input')?.focus({ preventScroll: true });
		card.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
		// Safety net: if a browser skips the smooth scroll, jump there so the form is always shown
		setTimeout(() => {
			const top = card.getBoundingClientRect().top;
			if (top < 0 || top > window.innerHeight / 2) card.scrollIntoView({ block: 'start' });
		}, 900);
	}
</script>

<svelte:document onclick={goToForm} />

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

	{#if showStickyCta}
		<!-- Mobile Sticky CTA -->
		<div
			class="fixed right-0 bottom-0 left-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] border-t md:hidden border-slate-200 bg-white/95 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-md"
		>
			<div class="grid grid-cols-2 gap-3">
				<!-- Tap-to-call: equal billing with the form, since most mobile visitors would rather call -->
				<a
					href={site.phoneHref}
					class="flex gap-2 justify-center items-center min-h-12 text-sm font-bold rounded-lg border-2 border-pink-200 text-slate-900 bg-white active:bg-pink-50"
				>
					<Phone class="w-5 h-5 text-brand-pink" />
					Call Now
				</a>
				<Button
					href={stickyHref}
					class="px-2 h-auto min-h-12 text-sm leading-tight text-center whitespace-normal rounded-lg {ctaClass}"
				>
					{ctaLabel}
					<ArrowRight class="hidden ml-1 w-4 h-4 min-[25rem]:block" />
				</Button>
			</div>
		</div>
		<!-- Bottom padding for mobile sticky CTA -->
		<div class="h-[calc(4.5rem+env(safe-area-inset-bottom))] md:hidden"></div>
	{/if}
</div>
