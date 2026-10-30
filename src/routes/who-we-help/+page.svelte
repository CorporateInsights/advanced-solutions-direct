<script lang="ts">
	import { site, consultationHref } from '$lib/site';
	import { Card, CardContent } from '$lib/components/ui/card';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import CtaSection from '$lib/components/site/CtaSection.svelte';
	import PhoneCall from '@lucide/svelte/icons/phone-call';
	import Eye from '@lucide/svelte/icons/eye';
	import Calculator from '@lucide/svelte/icons/calculator';
	import CreditCard from '@lucide/svelte/icons/credit-card';
	import Gavel from '@lucide/svelte/icons/gavel';
	import Briefcase from '@lucide/svelte/icons/briefcase';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import TrendingUp from '@lucide/svelte/icons/trending-up';
	import Stethoscope from '@lucide/svelte/icons/stethoscope';
	import CalendarX from '@lucide/svelte/icons/calendar-x';

	// Broad situations first, then collections-specific ones
	const situations = [
		{
			icon: TrendingUp,
			title: 'Your balances keep growing',
			description:
				'You make payments every month, but interest and fees keep the balance from going anywhere.'
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
			description:
				'An illness, injury, or hospital stay left you with bills you weren’t prepared for.'
		},
		{
			icon: PhoneCall,
			title: 'The calls won’t stop',
			description:
				'Collectors are calling your cell, your home, maybe several times a day, and you dread every ring.'
		},
		{
			icon: Eye,
			title: 'You don’t recognize the debt',
			description:
				'A company you’ve never heard of says you owe them, and you’re not sure where the debt even came from.'
		},
		{
			icon: Calculator,
			title: 'The balance doesn’t add up',
			description:
				'Fees and interest have piled on, and the amount they want doesn’t match what you remember.'
		},
		{
			icon: CreditCard,
			title: 'Collections are on your credit report',
			description:
				'Collection accounts are showing up on your report and holding you back from what you want next.'
		},
		{
			icon: Gavel,
			title: 'You’re being threatened with a lawsuit',
			description:
				'You’ve gotten letters or calls about court, or you’ve already been served. Don’t wait on this one.'
		},
		{
			icon: Briefcase,
			title: 'They’re calling your work or family',
			description:
				'Collectors are contacting you at your job or reaching out to people you know about your debt.'
		}
	];

	const debtTypes = [
		'Credit cards',
		'Medical bills',
		'Personal loans',
		'Store cards',
		'Utility bills',
		'Other unsecured consumer debt'
	];
</script>

<svelte:head>
	<title>Who We Help | {site.name}</title>
	<meta
		name="description"
		content="Dealing with nonstop collection calls, a debt you don’t recognize, or threats of a lawsuit? Advanced Solutions Direct can connect you with independent licensed partners who can help."
	/>
</svelte:head>

<PageHeader
	eyebrow="Who We Help"
	title="If Debt Is Making Your Life Hard,"
	highlight=" Let’s Talk."
	description="We hear from people every day who are dealing with debt, from growing balances to collection calls. If any of these sound like you, give us a call."
/>

<section class="pb-16 sm:pb-20">
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
			{#each situations as s}
				<a href={consultationHref} class="group">
					<Card
						class="h-full bg-white transition-all duration-300 group-hover:border-pink-200 group-hover:shadow-lg border-slate-100 group-hover:shadow-pink-50"
					>
						<CardContent class="flex flex-col pt-6 h-full">
							<div class="flex justify-center items-center mb-4 w-12 h-12 bg-orange-50 rounded-xl">
								<s.icon class="w-6 h-6 text-brand-orange" />
							</div>
							<h2 class="mb-2 text-lg font-bold text-slate-900">{s.title}</h2>
							<p class="flex-1 text-sm leading-relaxed text-slate-600">{s.description}</p>
							<span
								class="inline-flex gap-1 items-center mt-5 text-sm font-semibold text-brand-pink"
							>
								Sound like you? Let’s talk
								<ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
							</span>
						</CardContent>
					</Card>
				</a>
			{/each}
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
			Not sure if your situation qualifies? That’s exactly what the free consultation is for.
		</p>
	</div>
</section>

<CtaSection title="Sound Like You? Give Us a Call." />
