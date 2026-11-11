<script lang="ts">
	import { site, consultationHref, ctaClass } from '$lib/site';
	import { situations, debtTypes, debtExclusions } from '$lib/content';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
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

<section class="pb-16 sm:pb-20">
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
			{#each situations as s}
				<Card class="h-full bg-white border-slate-100">
					<CardContent class="pt-6">
						<div class="flex justify-center items-center mb-4 w-12 h-12 bg-orange-50 rounded-xl">
							<s.icon class="w-6 h-6 text-brand-orange" />
						</div>
						<h2 class="mb-2 text-lg font-bold text-slate-900">{s.title}</h2>
						<p class="text-sm leading-relaxed text-slate-700">{s.description}</p>
					</CardContent>
				</Card>
			{/each}
		</div>

		<div class="mt-10 text-center">
			<p class="mb-4 text-lg font-semibold text-slate-900">Sound like you?</p>
			<Button size="lg" href={consultationHref} class={ctaClass}>
				Talk to a Real Person
				<ArrowRight class="ml-2 w-4 h-4" />
			</Button>
		</div>
	</div>
</section>

<section class="py-16 sm:py-20 bg-slate-50">
	<div class="px-4 mx-auto max-w-4xl text-center sm:px-6 lg:px-8">
		<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
			Debts We <span class="text-brand-gradient">Commonly See</span>
		</h2>
		<div class="flex flex-wrap gap-3 justify-center mt-8">
			{#each debtTypes as type}
				<span
					class="py-2 px-4 text-sm font-medium bg-white rounded-full border border-pink-100 text-slate-700"
				>
					{type}
				</span>
			{/each}
		</div>
		<p class="mt-6 text-sm text-slate-700">
			{debtExclusions} Not sure about yours? That’s exactly what the free call is for.
		</p>
	</div>
</section>

<CtaSection />
