<script lang="ts">
	import { site, partners } from '$lib/site';
	import { Card, CardContent } from '$lib/components/ui/card';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import CtaSection from '$lib/components/site/CtaSection.svelte';
	import MessageSquare from '@lucide/svelte/icons/message-square';
	import Handshake from '@lucide/svelte/icons/handshake';
	import Scale from '@lucide/svelte/icons/scale';
	import Check from '@lucide/svelte/icons/check';
	import FileText from '@lucide/svelte/icons/file-text';
	import Users from '@lucide/svelte/icons/users';
	import Clock from '@lucide/svelte/icons/clock';

	const steps = [
		{
			icon: MessageSquare,
			title: 'Tell Us What’s Going On',
			description:
				'Call us or fill out a quick form. We’ll ask about your debts and what’s been going on, and explain your options in plain English.',
			points: ['No cost', 'No obligation', 'No pressure']
		},
		{
			icon: Handshake,
			title: 'Get Matched',
			description: `If it’s a fit, we connect you with ${partners.legal}. The firm sends you its agreement, including any fees, in writing to review before you sign anything.`,
			points: ['Licensed consumer rights attorneys', 'Everything explained up front']
		},
		{
			icon: Scale,
			title: 'The Law Firm Takes It From There',
			description:
				'If you decide to move forward, the law firm represents you and works directly with your creditors and collectors, so you’re not facing them alone. Our part is done once you’re connected.',
			points: ['You decide whether to sign', 'The law firm handles the legal work']
		}
	];

	const bringToCall = [
		{ icon: FileText, text: 'Recent statements or letters from creditors or collectors' },
		{ icon: Users, text: 'A rough list of who you owe and how much' },
		{ icon: Clock, text: 'A few minutes to talk about what’s been happening' }
	];
</script>

<svelte:head>
	<title>How It Works | {site.name}</title>
	<meta
		name="description"
		content="Getting help with overwhelming debt starts with one free call. Tell us what's going on, and if it's a fit, we'll connect you with an independent consumer rights law firm."
	/>
</svelte:head>

<PageHeader
	eyebrow="How It Works"
	title="Getting Help Is"
	highlight=" Simple."
	description="Three steps, starting with one free phone call. No pressure, and no obligation."
/>

<section class="pb-16 sm:pb-20">
	<div class="px-4 mx-auto space-y-6 max-w-4xl sm:px-6 lg:px-8">
		{#each steps as step, i}
			<Card class="bg-white border-slate-100">
				<CardContent class="flex flex-col gap-5 pt-6 sm:flex-row sm:gap-8">
					<div class="flex gap-4 items-center sm:flex-col sm:items-center sm:w-24 shrink-0">
						<div
							class="flex justify-center items-center w-16 h-16 rounded-2xl shadow-lg bg-brand-gradient shadow-pink-200"
						>
							<step.icon class="w-8 h-8 text-white" />
						</div>
						<span class="text-xs font-bold tracking-widest uppercase text-brand-pink">
							Step {i + 1}
						</span>
					</div>
					<div>
						<h2 class="text-xl font-bold sm:text-2xl text-slate-900">{step.title}</h2>
						<p class="mt-2 leading-relaxed text-slate-600">{step.description}</p>
						<ul class="flex flex-wrap gap-x-5 gap-y-2 mt-4">
							{#each step.points as point}
								<li class="flex gap-1.5 items-center text-sm font-medium text-slate-700">
									<Check class="w-4 h-4 text-brand-pink" />
									{point}
								</li>
							{/each}
						</ul>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
</section>

<section class="py-16 sm:py-20 bg-slate-50">
	<div class="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
				What to Have <span class="text-brand-gradient">Handy</span>
			</h2>
			<p class="mt-4 text-lg text-slate-600">
				Don’t have everything? That’s okay. Call anyway and we’ll figure it out together.
			</p>
		</div>
		<div class="grid gap-4 mt-10 sm:grid-cols-3">
			{#each bringToCall as item}
				<div class="flex flex-col gap-3 items-center p-6 text-center bg-white rounded-xl border border-slate-100">
					<div class="flex justify-center items-center w-12 h-12 bg-pink-50 rounded-xl">
						<item.icon class="w-6 h-6 text-brand-pink" />
					</div>
					<p class="text-sm font-medium text-slate-700">{item.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<CtaSection title="Ready to Take the First Step?" />
