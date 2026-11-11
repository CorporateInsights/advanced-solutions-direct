<script lang="ts">
	import {
		site,
		consultationHref,
		ctaClass,
		inkText,
		accentText,
		sectionTitleClass,
		cardClass,
		iconBadgeClass,
		bandClass
	} from '$lib/site';
	import { situations, debtTypes, debtExclusions } from '$lib/content';
	import { Button } from '$lib/components/ui/button';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import CtaSection from '$lib/components/site/CtaSection.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
</script>

<svelte:head>
	<title>Who We Help | {site.name}</title>
	<meta
		name="description"
		content="Balances that won't shrink, medical bills, more bills than paycheck, or collection calls. If debt is weighing on you, talk to a real person for free."
	/>
</svelte:head>

<PageHeader
	eyebrow="Who We Help"
	title="If Debt Is Weighing on You,"
	highlight=" You’re in the Right Place."
	description="People call us about all kinds of debt, from balances that won’t budge to collection calls. Here are some of the most common situations we hear about."
/>

<!-- Common situations. Same cards and type as the home page. -->
<section class="pb-14 lg:pb-16">
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
			{#each situations as s}
				<li class="flex flex-col gap-4 p-6 h-full {cardClass}">
					<span class={iconBadgeClass}>
						<s.icon class="w-7 h-7 text-brand-purple" strokeWidth={2} />
					</span>
					<div>
						<h2 class="text-xl font-extrabold leading-snug {inkText}">{s.title}</h2>
						<p class="mt-1.5 text-base font-medium leading-relaxed text-slate-800">
							{s.description}
						</p>
					</div>
				</li>
			{/each}
		</ul>

		<div class="mt-10 text-center">
			<p class="mb-4 text-xl font-extrabold {inkText}">Sound like you?</p>
			<Button
				href={consultationHref}
				class="py-3 px-8 max-w-full h-auto text-base leading-tight text-center whitespace-normal rounded-full min-h-12 {ctaClass}"
			>
				Talk to a Real Person
				<ArrowRight class="ml-2 w-4 h-4" />
			</Button>
		</div>
	</div>
</section>

<!-- Debts we commonly see: on a tinted band, like Who We Help on the home page -->
<section class="py-14 lg:py-16 {bandClass}">
	<div class="px-4 mx-auto max-w-5xl text-center sm:px-6 lg:px-8">
		<h2 class={sectionTitleClass}>
			Debts We <span class={accentText}>Commonly See</span>
		</h2>
		<ul class="flex flex-wrap gap-3 justify-center mt-8">
			{#each debtTypes as type}
				<li
					class="py-2.5 px-5 text-base font-bold bg-white rounded-full ring-1 shadow-md ring-brand-purple/15 shadow-purple-900/5 {inkText}"
				>
					{type}
				</li>
			{/each}
		</ul>
		<p
			class="mx-auto mt-6 max-w-3xl text-base font-medium leading-relaxed sm:text-lg text-slate-800"
		>
			{debtExclusions} Not sure about yours? That’s exactly what the free call is for.
		</p>
	</div>
</section>

<CtaSection />
