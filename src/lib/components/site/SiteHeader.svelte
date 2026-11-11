<script lang="ts">
	import { page } from '$app/state';
	import { site, nav, consultationHref, ctaClass, ctaLabel, link } from '$lib/site';
	import { Button } from '$lib/components/ui/button';
	import Phone from '@lucide/svelte/icons/phone';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	let menuOpen = $state(false);

	const isActive = (href: string) => page.url.pathname === href;
	// On the home page the form is already there, so the button scrolls to it
	const ctaHref = $derived(page.url.pathname === link('/') ? '#lead-form' : consultationHref);
</script>

<nav class="sticky top-0 z-50 border-b border-slate-100/80 bg-white/95 backdrop-blur-md">
	<div
		class="flex justify-between items-center px-4 mx-auto max-w-7xl h-20 sm:px-6 lg:h-24 lg:px-8"
	>
		<a href={link('/')} class="flex gap-2 items-center" onclick={() => (menuOpen = false)}>
			<img
				src={site.logo}
				alt={site.name}
				width="357"
				height="182"
				class="w-auto h-14 sm:h-16 lg:h-[4.75rem]"
			/>
		</a>

		<!-- Desktop -->
		<div class="hidden items-center lg:flex">
			<ul class="flex items-center">
				{#each nav as item, i}
					<li class="flex items-center">
						{#if i > 0}<span class="mx-4 w-px h-5 xl:mx-5 bg-slate-300" aria-hidden="true"
							></span>{/if}
						<a
							href={item.href}
							aria-current={isActive(item.href) ? 'page' : undefined}
							class="text-[0.95rem] font-semibold whitespace-nowrap transition-colors hover:text-brand-pink {isActive(
								item.href
							)
								? 'text-brand-pink'
								: 'text-slate-800'}"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
			<Button
				href={site.phoneHref}
				variant="outline"
				aria-label="Call Now: {site.phoneDisplay}"
				class="ml-6 w-11 h-11 px-0 rounded-full text-[0.95rem] font-bold bg-white border-2 xl:ml-8 xl:w-auto xl:px-5 border-brand-purple text-brand-purple hover:bg-purple-50 hover:text-brand-purple"
			>
				<Phone class="w-4 h-4 xl:mr-1.5" />
				<span class="hidden xl:inline">Call Now</span>
			</Button>
			<Button href={ctaHref} class="ml-3 h-11 px-6 rounded-full text-[0.95rem] {ctaClass}">
				{ctaLabel}
				<ArrowRight class="ml-1.5 w-4 h-4" />
			</Button>
		</div>

		<!-- Mobile -->
		<div class="flex gap-1 items-center lg:hidden">
			<Button variant="ghost" size="icon" href={site.phoneHref} aria-label="Call {site.name}">
				<Phone class="w-5 h-5 text-brand-pink" />
			</Button>
			<Button
				variant="ghost"
				size="icon"
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={menuOpen}
				onclick={() => (menuOpen = !menuOpen)}
			>
				{#if menuOpen}<X class="w-5 h-5" />{:else}<Menu class="w-5 h-5" />{/if}
			</Button>
		</div>
	</div>

	{#if menuOpen}
		<div class="px-4 pt-2 pb-5 bg-white border-t lg:hidden border-slate-100">
			{#each nav as item}
				<a
					href={item.href}
					onclick={() => (menuOpen = false)}
					class="block py-3 text-base font-medium border-b border-slate-100 {isActive(item.href)
						? 'text-brand-pink'
						: 'text-slate-800'}"
				>
					{item.label}
				</a>
			{/each}
			<Button
				href={ctaHref}
				onclick={() => (menuOpen = false)}
				class="mt-4 w-full h-11 rounded-full {ctaClass}"
			>
				{ctaLabel}
			</Button>
			<Button
				href={site.phoneHref}
				variant="outline"
				onclick={() => (menuOpen = false)}
				class="mt-3 w-full h-11 font-bold bg-white rounded-full border-2 border-brand-purple text-brand-purple hover:bg-purple-50 hover:text-brand-purple"
			>
				<Phone class="mr-1.5 w-4 h-4" />
				Call Now
			</Button>
		</div>
	{/if}
</nav>
