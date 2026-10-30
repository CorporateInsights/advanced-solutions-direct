<script lang="ts">
	import { site, consultationHref, ctaClass } from '$lib/site';
	import { debtTypes, debtExclusions } from '$lib/content';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import CtaSection from '$lib/components/site/CtaSection.svelte';
	import PhoneCall from '@lucide/svelte/icons/phone-call';
	import Eye from '@lucide/svelte/icons/eye';
	import CreditCard from '@lucide/svelte/icons/credit-card';
	import Gavel from '@lucide/svelte/icons/gavel';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import TrendingUp from '@lucide/svelte/icons/trending-up';
	import Stethoscope from '@lucide/svelte/icons/stethoscope';
	import CalendarX from '@lucide/svelte/icons/calendar-x';

	// Broad situations first, then collections-related ones, all with equal weight
	const situations = [
		{
			icon: TrendingUp,
			title: 'Your balances keep growing',
			description: 'Interest and fees keep the balance from going anywhere, no matter what you pay.'
		},
		{
			icon: CalendarX,
			title: 'You’re falling behind',
			description:
				'Juggling due dates has gotten hard, and you’re not sure how to catch up on everything you owe.'
		},
		{
			icon: Stethoscope,
			title: 'Medical bills are piling up',
			description: 'An illness, injury, or hospital stay left you with bills you weren’t prepared for.'
		},
		{
			icon: PhoneCall,
			title: 'Collectors keep calling',
			description:
				'Calls and letters about your debts, maybe several times a day, and you dread every ring.'
		},
		{
			icon: Eye,
			title: 'A debt doesn’t look right',
			description:
				'You don’t recognize a debt, or the amount someone says you owe doesn’t match what you remember.'
		},
		{
			icon: CreditCard,
			title: 'Collections on your credit report',
			description:
				'Collection accounts are showing up on your credit report and you want to understand them.'
		}
	];
</script>

<svelte:head>
	<title>Who We Help | {site.name}</title>
	<meta
		name="description"
		content="Growing balances, medical bills, falling behind, or collection calls: Advanced Solutions Direct can connect you with independent partners who may be able to help."
	/>
</svelte:head>

<PageHeader
	eyebrow="Who We Help"
	title="If Debt Is Making Your Life Hard,"
	highlight=" Let’s Talk."
	description="People reach out to us about all kinds of debt, from growing balances to collection calls. If any of these sound like you, give us a call."
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
						<p class="text-sm leading-relaxed text-slate-600">{s.description}</p>
					</CardContent>
				</Card>
			{/each}
		</div>

		<!-- Lawsuits get their own note: the right first step is an attorney, not a sales call -->
		<div
			class="flex flex-col gap-4 items-start p-5 mx-auto mt-8 max-w-3xl rounded-2xl border border-amber-200 sm:flex-row sm:items-center sm:p-6 bg-amber-50"
		>
			<div class="flex justify-center items-center w-11 h-11 bg-amber-100 rounded-xl shrink-0">
				<Gavel class="w-5 h-5 text-amber-700" />
			</div>
			<p class="text-sm leading-relaxed sm:text-base text-slate-700">
				<span class="font-bold text-slate-900">Been served with a lawsuit?</span> Don’t ignore it.
				Court deadlines are strict, so speak with an attorney right away. You can call us too, and if
				our partner firm handles situations like yours, we’ll connect you quickly.
			</p>
		</div>

		<div class="mt-10 text-center">
			<Button size="lg" href={consultationHref} class={ctaClass}>
				Sound Like You? Let’s Talk
				<ArrowRight class="ml-2 w-4 h-4" />
			</Button>
		</div>
	</div>
</section>

<section class="py-16 sm:py-20 bg-slate-50">
	<div class="px-4 mx-auto max-w-4xl text-center sm:px-6 lg:px-8">
		<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
			Types of Debt We <span class="text-brand-gradient">Commonly See</span>
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
		<p class="mt-6 text-sm text-slate-500">
			{debtExclusions} Not sure about yours? That’s exactly what the free consultation is for.
		</p>
	</div>
</section>

<CtaSection title="Ready to Talk It Through?" />
