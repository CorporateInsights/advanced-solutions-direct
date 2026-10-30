<script lang="ts">
	import { site, partners, ctaClass, link } from '$lib/site';
	import { coreFaqs, situations } from '$lib/content';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import LeadFormCard from '$lib/components/site/LeadFormCard.svelte';
	import FaqList from '$lib/components/site/FaqList.svelte';
	import CtaSection from '$lib/components/site/CtaSection.svelte';
	import BrandArc from '$lib/components/site/BrandArc.svelte';
	import Shield from '@lucide/svelte/icons/shield';
	import CheckCircle2 from '@lucide/svelte/icons/check-circle-2';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Scale from '@lucide/svelte/icons/scale';
	import Phone from '@lucide/svelte/icons/phone';
	import Handshake from '@lucide/svelte/icons/handshake';
	import MessageSquare from '@lucide/svelte/icons/message-square';
	import FileCheck from '@lucide/svelte/icons/file-check';
	import UserRound from '@lucide/svelte/icons/user-round';
	import XCircle from '@lucide/svelte/icons/circle-x';

	const heroPoints = [
		'Free, no-obligation call',
		'Most types of personal debt considered',
		'No pressure. You decide what happens next.'
	];

	const steps = [
		{
			icon: MessageSquare,
			title: 'Talk to Us',
			description: 'A free, no-pressure call with a real person. Tell us what you’re dealing with.'
		},
		{
			icon: Handshake,
			title: 'Get Connected',
			description: `If it’s a fit, we introduce you to ${partners.legal}.`
		},
		{
			icon: Scale,
			title: 'You Decide',
			description:
				'The firm explains what it can do and any fees, in writing. Moving forward is up to you.'
		}
	];

	const benefits = [
		{
			icon: UserRound,
			title: 'A Real Person',
			description: 'Someone on our team who listens first and never judges.'
		},
		{
			icon: Scale,
			title: 'Independent Attorneys',
			description: 'Any legal work is done by an independent consumer rights law firm, not by us.'
		},
		{
			icon: FileCheck,
			title: 'Everything in Writing',
			description: 'Fees are set by the law firm and explained in writing before you commit.'
		},
		{
			icon: Handshake,
			title: 'Your Call, Always',
			description: 'Free to talk, free to walk away. Nothing happens without your say.'
		}
	];

	// Honesty section: a plain statement of a broker's role
	const weDo = [
		'Listen to what you’re going through',
		'Explain how the process works, in plain English',
		`Connect you with ${partners.general} if it’s a fit`
	];
	const weDont = [
		'Give legal advice',
		'Contact your creditors or collectors',
		'Promise results',
		'Pressure you to sign up'
	];

	// Buttons on the home page scroll to the form already on this page
	const formAnchor = '#lead-form';
</script>

<svelte:head>
	<title>{site.name} | Overwhelmed by Debt? Find Out Where You Stand.</title>
	<meta
		name="description"
		content="Overwhelmed by credit cards, medical bills, or collection calls? Talk to a real person for free. If it's a fit, we'll connect you with an independent consumer rights law firm. No pressure, no obligation."
	/>
</svelte:head>

<!-- Hero -->
<section class="overflow-hidden relative bg-gradient-to-b from-orange-50/60 via-white to-white">
	<div class="absolute inset-0 pointer-events-none">
		<div
			class="absolute -top-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-purple-300/25 blur-3xl"
		></div>
		<div
			class="absolute -bottom-48 -left-40 w-[28rem] h-[28rem] rounded-full bg-orange-300/25 blur-3xl"
		></div>
		<!-- Brand arc rising behind the form -->
		<BrandArc
			class="hidden absolute -right-24 top-10 w-[46rem] opacity-[0.13] lg:block xl:right-0"
		/>
		<BrandArc class="absolute -top-6 -right-28 w-[26rem] opacity-[0.10] lg:hidden" />
	</div>

	<div class="relative py-12 px-4 mx-auto max-w-7xl sm:py-20 sm:px-6 lg:py-24 lg:px-8">
		<div class="grid gap-10 items-center lg:grid-cols-2 lg:gap-16">
			<div class="text-center lg:text-left">
				<Badge variant="outline" class="mb-6 bg-white border-pink-200 text-brand-pink">
					<Shield class="mr-1.5 w-3 h-3" />
					The first call when debt gets overwhelming
				</Badge>

				<h1
					class="text-4xl font-extrabold tracking-tight leading-[1.1] text-balance sm:text-5xl lg:text-[3.25rem] xl:text-6xl text-slate-900"
				>
					Overwhelmed by Debt?
					<span class="block mt-1 text-brand-gradient">Find Out Where You Stand.</span>
				</h1>

				<p
					class="mx-auto mt-6 max-w-xl text-lg leading-relaxed sm:text-xl lg:mx-0 text-slate-600"
				>
					You don’t have to figure this out alone. Talk with a real person, for free, about what
					you’re facing. If it’s a fit, we’ll connect you with {partners.legal} that may be able
					to help.
				</p>

				<ul class="mx-auto mt-8 space-y-3 max-w-md text-left lg:mx-0">
					{#each heroPoints as point}
						<li class="flex gap-3 items-start">
							<CheckCircle2 class="mt-0.5 w-5 h-5 text-brand-pink shrink-0" />
							<span class="text-slate-700">{point}</span>
						</li>
					{/each}
				</ul>

				<p class="mt-8 text-slate-600">
					Prefer to talk now?
					<a
						href={site.phoneHref}
						class="inline-flex gap-1.5 items-center ml-1 font-bold whitespace-nowrap text-slate-900 hover:text-brand-pink"
					>
						<Phone class="w-4 h-4 text-brand-pink" />
						Call {site.phoneDisplay}
					</a>
				</p>
			</div>

			<div class="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
				<LeadFormCard id="lead-form" />
			</div>
		</div>
	</div>
</section>

<!-- Band -->
<section class="py-10 px-4 bg-brand-gradient-ui sm:px-6 lg:px-8">
	<div
		class="flex flex-col gap-6 justify-between items-center mx-auto max-w-5xl text-center md:flex-row md:text-left"
	>
		<div>
			<p class="text-2xl font-extrabold text-white sm:text-3xl">The hardest part is the first call.</p>
			<p class="mt-1 text-lg text-white/90">We make it easy. Free, friendly, and no pressure.</p>
		</div>
		<Button
			size="lg"
			href={formAnchor}
			class="h-12 px-7 font-bold bg-white shadow-lg hover:bg-white/90 text-brand-pink shrink-0"
		>
			Talk to a Real Person
			<ArrowRight class="ml-2 w-4 h-4" />
		</Button>
	</div>
</section>

<!-- Sound Familiar -->
<section class="py-16 bg-white sm:py-20 lg:py-24">
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
				Does Any of This <span class="text-brand-gradient">Sound Familiar?</span>
			</h2>
			<p class="mt-4 text-lg text-slate-600">
				Debt looks different for everyone. If any of this feels like your life right now, you’re
				in the right place.
			</p>
		</div>

		<div class="grid gap-4 mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
			{#each situations as s}
				<Card class="bg-white border-slate-100">
					<CardContent class="pt-6">
						<div class="flex justify-center items-center mb-4 w-12 h-12 bg-orange-50 rounded-xl">
							<s.icon class="w-6 h-6 text-brand-orange" />
						</div>
						<h3 class="mb-2 text-base font-bold text-slate-900">{s.title}</h3>
						<p class="text-sm leading-relaxed text-slate-600">{s.description}</p>
					</CardContent>
				</Card>
			{/each}
		</div>

		<div class="flex flex-col gap-4 justify-center items-center mt-10 sm:flex-row">
			<Button size="lg" href={formAnchor} class={ctaClass}>
				Get My Free Consultation
				<ArrowRight class="ml-2 w-4 h-4" />
			</Button>
			<a href={link('/who-we-help')} class="text-sm font-semibold text-slate-600 hover:text-brand-pink">
				See the types of debt we see →
			</a>
		</div>
	</div>
</section>

<!-- How It Works -->
<section class="py-16 sm:py-20 lg:py-24 bg-slate-50">
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
				Three Steps. <span class="text-brand-gradient">You’re in Control.</span>
			</h2>
			<p class="mt-4 text-lg text-slate-600">It starts with one free call, and every decision is yours.</p>
		</div>

		<div class="relative mt-14">
			<div
				class="hidden absolute top-16 h-0.5 opacity-30 right-[16.66%] left-[16.66%] bg-brand-gradient md:block"
			></div>
			<ol class="grid gap-10 md:grid-cols-3">
				{#each steps as step, i}
					<li class="relative text-center">
						<div class="flex relative z-10 justify-center items-center mx-auto mb-6 w-32 h-32">
							<div class="absolute inset-0 bg-pink-50 rounded-full"></div>
							<div
								class="flex relative justify-center items-center w-20 h-20 rounded-full shadow-lg bg-brand-gradient shadow-pink-200"
							>
								<step.icon class="w-9 h-9 text-white" />
							</div>
							<span
								class="flex absolute top-2 right-2 justify-center items-center w-7 h-7 text-xs font-bold bg-white rounded-full border border-pink-200 text-brand-pink"
							>
								{i + 1}
							</span>
						</div>
						<h3 class="mb-2 text-lg font-bold text-slate-900">{step.title}</h3>
						<p class="mx-auto max-w-xs text-sm leading-relaxed text-slate-600">
							{step.description}
						</p>
					</li>
				{/each}
			</ol>
		</div>

		<div class="mt-10 text-center">
			<a href={link('/how-it-works')} class="text-sm font-semibold text-slate-600 hover:text-brand-pink">
				See the full process →
			</a>
		</div>
	</div>
</section>

<!-- Why Us -->
<section class="py-16 bg-white sm:py-20 lg:py-24">
	<div class="grid gap-12 items-center px-4 mx-auto max-w-7xl sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
		<div class="text-center lg:col-span-2 lg:text-left">
			<h2 class="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl text-slate-900">
				Why People Start <span class="text-brand-gradient">With Us</span>
			</h2>
			<p class="mt-4 text-lg text-slate-600">
				Because getting help with debt shouldn’t feel like another fight.
			</p>
			<Button size="lg" href={formAnchor} class="mt-8 {ctaClass}">
				Talk to Us Free
				<ArrowRight class="ml-2 w-4 h-4" />
			</Button>
		</div>

		<div class="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-3">
			{#each benefits as benefit}
				<div class="flex gap-4">
					<div
						class="flex justify-center items-center w-12 h-12 rounded-xl bg-brand-gradient shrink-0 shadow-md shadow-pink-200"
					>
						<benefit.icon class="w-6 h-6 text-white" />
					</div>
					<div>
						<h3 class="text-base font-bold text-slate-900">{benefit.title}</h3>
						<p class="mt-1 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- What We Do / Don't Do -->
<section class="py-16 sm:py-20 lg:py-24 bg-slate-50">
	<div class="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
				No Promises We <span class="text-brand-gradient">Can’t Keep</span>
			</h2>
			<p class="mt-4 text-lg text-slate-600">
				You deserve to know exactly who you’re talking to. Here’s what we do, and what we don’t.
			</p>
		</div>

		<div class="grid gap-6 mt-12 md:grid-cols-2">
			<Card class="bg-white border-slate-100">
				<CardContent class="pt-6">
					<h3 class="mb-4 text-lg font-bold text-slate-900">What We Do</h3>
					<ul class="space-y-3">
						{#each weDo as item}
							<li class="flex gap-3 items-start text-slate-700">
								<CheckCircle2 class="mt-0.5 w-5 h-5 text-brand-pink shrink-0" />
								{item}
							</li>
						{/each}
					</ul>
				</CardContent>
			</Card>
			<Card class="bg-white border-slate-100">
				<CardContent class="pt-6">
					<h3 class="mb-4 text-lg font-bold text-slate-900">What We Don’t Do</h3>
					<ul class="space-y-3">
						{#each weDont as item}
							<li class="flex gap-3 items-start text-slate-700">
								<XCircle class="mt-0.5 w-5 h-5 text-slate-500 shrink-0" />
								{item}
							</li>
						{/each}
					</ul>
				</CardContent>
			</Card>
		</div>

		<p class="mx-auto mt-6 max-w-2xl text-sm text-center text-slate-500">
			Any legal work is handled by {partners.legal}, under its own written agreement with you.
		</p>
	</div>
</section>

<!-- FAQ -->
<section class="py-16 bg-white sm:py-20 lg:py-24">
	<div class="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
				Questions People <span class="text-brand-gradient">Ask Us</span>
			</h2>
		</div>
		<div class="mt-10">
			<FaqList faqs={coreFaqs} />
		</div>
		<div class="mt-8 text-center">
			<a href={link('/faq')} class="text-sm font-semibold text-slate-600 hover:text-brand-pink">
				See all questions →
			</a>
		</div>
	</div>
</section>

<CtaSection href={formAnchor} />
