<script lang="ts">
	import { page } from '$app/state';
	import { site, nav, consultationHref, ctaClass, link } from '$lib/site';
	import { Button } from '$lib/components/ui/button';
	import Phone from '@lucide/svelte/icons/phone';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';

	let menuOpen = $state(false);

	const isActive = (href: string) => page.url.pathname === href;
</script>

<!-- Top Bar -->
<div class="py-2 px-4 text-sm font-medium text-center text-white bg-brand-gradient-ui">
	Being contacted by a debt collector? You may have more options than you think.
</div>

<nav class="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
	<div class="flex justify-between items-center px-4 mx-auto max-w-7xl h-16 sm:px-6 lg:px-8">
		<a href={link('/')} class="flex gap-2 items-center" onclick={() => (menuOpen = false)}>
			<img src={site.logo} alt={site.name} width="384" height="124" class="w-auto h-11 sm:h-12" />
		</a>

		<!-- Desktop -->
		<div class="hidden gap-7 items-center lg:flex">
			{#each nav as item}
				<a
					href={item.href}
					aria-current={isActive(item.href) ? 'page' : undefined}
					class="text-sm font-medium transition-colors hover:text-slate-900 {isActive(item.href)
						? 'text-brand-pink'
						: 'text-slate-600'}"
				>
					{item.label}
				</a>
			{/each}
			<a
				href={site.phoneHref}
				class="flex gap-2 items-center text-sm font-semibold transition-colors text-slate-700 hover:text-slate-900"
			>
				<Phone class="w-4 h-4 text-brand-pink" />
				{site.phoneDisplay}
			</a>
			<Button href={consultationHref} class={ctaClass}>Free Consultation</Button>
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
						: 'text-slate-700'}"
				>
					{item.label}
				</a>
			{/each}
			<Button
				href={consultationHref}
				onclick={() => (menuOpen = false)}
				class="mt-4 w-full h-11 {ctaClass}"
			>
				Get My Free Consultation
			</Button>
		</div>
	{/if}
</nav>
