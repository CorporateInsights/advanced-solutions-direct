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
			title: 'Respect, Always',
			description:
				'Dealing with debt is stressful. We treat every person with respect. No judgment, ever.'
		},
		{
			icon: Eye,
			title: 'Honest & Upfront',
			description:
				'We tell you who we are, what we do, and what we don’t, and we point you to our full disclosures.'
		},
		{
			icon: Handshake,
			title: 'No Pressure',
			description:
				'The call is free, and the decision is always yours. We’re here to help, not to push.'
		}
	];
</script>

<svelte:head>
	<title>About Us | {site.name}</title>
	<meta
		name="description"
		content="Advanced Solutions Direct is the first call when debt gets overwhelming. We listen, explain how the process works, and connect you with an independent consumer rights law firm if it's a fit."
	/>
</svelte:head>

<PageHeader
	eyebrow="About Us"
	title="We’re the"
	highlight=" First Call."
	description="When debt gets overwhelming, it’s hard to know who to trust or where to start. We’re the calm, honest place to begin."
/>

<section class="pb-16 sm:pb-20">
	<div class="grid gap-10 items-center px-4 mx-auto max-w-6xl sm:px-6 lg:grid-cols-2 lg:px-8">
		<div>
			<h2 class="text-3xl font-extrabold tracking-tight text-slate-900">Who We Are</h2>
			<div class="mt-4 space-y-4 text-lg leading-relaxed text-slate-600">
				<p>
					{site.name} is where people start when debt feels like too much. We listen to what
					you’re facing, explain how the process works, and, if it’s a fit, connect you with
					{partners.legal} that may be able to help.
				</p>
				<p>
					We’re not a law firm, and we don’t pretend to be. Debt problems often involve legal
					rights, and legal questions deserve lawyers. Our job is to make that first step easier,
					and to be honest with you along the way.
				</p>
			</div>
		</div>
		<!-- Stock photo of a model, not staff or a client. Swap for a real team photo if one is approved. -->
		<img
			src={link('/images/about-first-call.webp')}
			alt="A woman smiling while talking on the phone at home"
			width="1200"
			height="675"
			class="object-cover w-full rounded-2xl shadow-xl aspect-[4/3] object-[35%_50%] shadow-slate-900/10"
		/>
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
