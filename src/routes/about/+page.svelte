<script lang="ts">
	import { site, partners, link } from '$lib/site';
	import { Card, CardContent } from '$lib/components/ui/card';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import CtaSection from '$lib/components/site/CtaSection.svelte';
	import Heart from '@lucide/svelte/icons/heart';
	import Handshake from '@lucide/svelte/icons/handshake';
	import Eye from '@lucide/svelte/icons/eye';
	import Scale from '@lucide/svelte/icons/scale';
	import Info from '@lucide/svelte/icons/info';

	const values = [
		{
			icon: Heart,
			title: 'On Your Side',
			description:
				'Dealing with collectors is stressful. We treat every person with respect. No judgment, ever.'
		},
		{
			icon: Eye,
			title: 'Honest & Upfront',
			description:
				'We tell you who we are, what we do, and what we don’t. No fine-print surprises.'
		},
		{
			icon: Handshake,
			title: 'No Pressure',
			description:
				'The consultation is free, and the decision is always yours. We’re here to help, not to push.'
		}
	];
</script>

<svelte:head>
	<title>About Us | {site.name}</title>
	<meta
		name="description"
		content="Advanced Solutions Direct connects people dealing with debt collectors with independent licensed partners, including consumer rights law firms."
	/>
</svelte:head>

<PageHeader
	eyebrow="About Us"
	title="Straight Answers When"
	highlight=" Debt Collectors Call."
	description="We believe everyone deserves to understand their options, and to know where to turn for help."
/>

<section class="pb-16 sm:pb-20">
	<div class="grid gap-10 items-center px-4 mx-auto max-w-6xl sm:px-6 lg:grid-cols-2 lg:px-8">
		<div>
			<h2 class="text-3xl font-extrabold tracking-tight text-slate-900">Who We Are</h2>
			<div class="mt-4 space-y-4 text-lg leading-relaxed text-slate-600">
				<p>
					{site.name} helps people who are being pursued by debt collectors find out where they stand
					and where to turn next.
				</p>
				<p>
					Debt collection can be a legal issue, and legal issues deserve lawyers. That’s why we work
					with {partners.general}, including consumer rights law firms. Our job is to listen and
					connect you. The legal work is handled by the law firm, under its own agreement with you.
				</p>
			</div>
		</div>
		<!-- Placeholder for a team or brand photo -->
		<div
			class="flex justify-center items-center rounded-2xl border-2 border-dashed aspect-[4/3] border-slate-200 bg-slate-50"
		>
			<p class="px-6 text-sm text-center text-slate-500">Placeholder: team or brand photo</p>
		</div>
	</div>
</section>

<section class="py-16 sm:py-20 bg-slate-50">
	<div class="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
		<h2 class="text-3xl font-extrabold tracking-tight text-center sm:text-4xl text-slate-900">
			What We <span class="text-brand-gradient">Stand For</span>
		</h2>
		<div class="grid gap-4 mt-10 sm:gap-6 md:grid-cols-3">
			{#each values as value}
				<Card class="bg-white border-slate-100">
					<CardContent class="pt-6">
						<div class="flex justify-center items-center mb-4 w-12 h-12 bg-pink-50 rounded-xl">
							<value.icon class="w-6 h-6 text-brand-pink" />
						</div>
						<h3 class="mb-2 text-lg font-bold text-slate-900">{value.title}</h3>
						<p class="text-sm leading-relaxed text-slate-600">{value.description}</p>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>

<section class="py-16 sm:py-20">
	<div class="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
		<div class="flex flex-col gap-5 p-6 rounded-2xl border border-pink-100 sm:flex-row sm:p-8 bg-pink-50/40">
			<div
				class="flex justify-center items-center w-12 h-12 rounded-xl bg-brand-gradient shrink-0"
			>
				<Scale class="w-6 h-6 text-white" />
			</div>
			<div>
				<h2 class="flex gap-2 items-center text-xl font-bold text-slate-900">
					How Our Partnerships Work
				</h2>
				<p class="mt-2 leading-relaxed text-slate-600">
					{site.name} is not a law firm and doesn’t provide legal advice. When you’re a fit, we connect
					you with {partners.legal}. Our partners operate independently. You’ll sign an agreement
					directly with the firm, which sets out the services it will provide and any fees, so you
					know exactly what you’re getting before you commit.
				</p>
				<p class="flex gap-1.5 items-center mt-3 text-sm text-slate-500">
					<Info class="w-4 h-4" />
					<a href={link('/disclosures')} class="underline hover:text-slate-700">Read our full disclosures</a>
				</p>
			</div>
		</div>
	</div>
</section>

<CtaSection />
