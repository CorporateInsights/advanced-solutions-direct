<script lang="ts">
	import { site, partners, ctaClass, link } from '$lib/site';
	import { coreFaqs } from '$lib/content';
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
	import PhoneCall from '@lucide/svelte/icons/phone-call';
	import Handshake from '@lucide/svelte/icons/handshake';
	import CreditCard from '@lucide/svelte/icons/credit-card';
	import Gavel from '@lucide/svelte/icons/gavel';
	import MessageSquare from '@lucide/svelte/icons/message-square';
	import FileCheck from '@lucide/svelte/icons/file-check';
	import XCircle from '@lucide/svelte/icons/circle-x';
	import TrendingUp from '@lucide/svelte/icons/trending-up';
	import Stethoscope from '@lucide/svelte/icons/stethoscope';
	import CalendarX from '@lucide/svelte/icons/calendar-x';

	// Broad on purpose: general debt stress first, collections as one situation among several
	const painPoints = [
		{
			icon: TrendingUp,
			title: 'Balances That Keep Growing',
			description: 'Interest and fees pile up faster than you can pay them down.'
		},
		{
			icon: Stethoscope,
			title: 'Medical Bills Piling Up',
			description: 'Bills from a hospital stay or treatment you weren’t ready for.'
		},
		{
			icon: CalendarX,
			title: 'Falling Behind',
			description: 'Juggling due dates and struggling to keep up with what you owe.'
		},
		{
			icon: PhoneCall,
			title: 'Collectors Calling',
			description: 'Calls and letters about debts, sometimes ones you don’t recognize.'
		},
		{
			icon: CreditCard,
			title: 'Collections on Your Credit',
			description: 'Collection accounts on your credit report that you want to understand.'
		},
		{
			icon: Gavel,
			title: 'Worried About a Lawsuit',
			description: 'Letters or calls saying they’ll take you to court.'
		}
	];

	const steps = [
		{
			icon: MessageSquare,
			title: 'Tell Us What’s Going On',
			description: 'One free, no-pressure call about your debts and what you’re dealing with.'
		},
		{
			icon: Handshake,
			title: 'Get Matched',
			description: `If it’s a fit, we connect you with ${partners.legal}.`
		},
		{
			icon: Scale,
			title: 'You Decide',
			description:
				'The law firm explains its services and fees in writing. Whether to move forward is up to you.'
		}
	];

	const benefits = [
		{
			icon: Scale,
			title: 'Independent Attorneys',
			description: 'Legal work is done by an independent consumer rights law firm, not by us.'
		},
		{
			icon: Handshake,
			title: 'No Pressure',
			description: 'The consultation is free, and you decide whether to move forward.'
		},
		{
			icon: MessageSquare,
			title: 'Plain English',
			description: 'Straight answers about how this works. No jargon, no runaround.'
		},
		{
			icon: FileCheck,
			title: 'Fees in Writing',
			description: 'Any fees are set by the law firm and explained in writing before you commit.'
		}
	];

	// Honesty section: plain statement of a broker's role
	const weDo = [
		'Listen to what’s going on',
		'Explain how the process works',
		`Connect you with ${partners.general}`
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
		content="Overwhelmed by credit card bills, medical debt, or collection calls? Advanced Solutions Direct connects you with independent partners, including consumer rights law firms. Free, no-obligation consultation."
	/>
</svelte:head>

<!-- Hero Section -->
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

	<div class="relative py-14 px-4 mx-auto max-w-7xl sm:py-20 sm:px-6 lg:py-24 lg:px-8">
		<div class="grid gap-12 items-center lg:grid-cols-2 lg:gap-16">
			<div class="text-center lg:text-left">
				<Badge variant="outline" class="mb-6 bg-white border-pink-200 text-brand-pink">
					<Shield class="mr-1.5 w-3 h-3" />
					Free Consultation · Not a Law Firm
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
					Credit cards, medical bills, collection calls: whatever you’re dealing with, tell us
					what’s going on. If it’s a fit, we’ll connect you with {partners.legal} that may be able
					to help.
				</p>

				<div class="mx-auto mt-8 space-y-3 max-w-md text-left lg:mx-0">
					{#each ['Free, no-obligation consultation', 'Most types of personal debt considered', 'Connected with an independent consumer rights law firm'] as point}
						<div class="flex gap-3 items-start">
							<CheckCircle2 class="mt-0.5 w-5 h-5 text-brand-pink shrink-0" />
							<span class="text-slate-700">{point}</span>
						</div>
					{/each}
				</div>

				<div class="flex flex-wrap gap-6 justify-center items-center mt-10 lg:justify-start">
					<div class="flex gap-2 items-center text-slate-500">
						<Handshake class="w-4 h-4" />
						<span class="text-xs font-medium">No Obligation</span>
					</div>
					<div class="flex gap-2 items-center text-slate-500">
						<Scale class="w-4 h-4" />
						<span class="text-xs font-medium">Independent Law Firm</span>
					</div>
					<div class="flex gap-2 items-center text-slate-500">
						<MessageSquare class="w-4 h-4" />
						<span class="text-xs font-medium">No Pressure</span>
					</div>
				</div>
			</div>

			<div class="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
				<LeadFormCard id="lead-form" />
			</div>
		</div>
	</div>
</section>

<!-- Teaser band -->
<section class="py-10 px-4 bg-brand-gradient-ui sm:px-6 lg:px-8">
	<div
		class="flex flex-col gap-6 justify-between items-center mx-auto max-w-5xl text-center md:flex-row md:text-left"
	>
		<div>
			<p class="text-2xl font-extrabold text-white sm:text-3xl">
				You don’t have to figure this out alone.
			</p>
			<p class="mt-1 text-lg text-white/90">One free call can help you understand how this works.</p>
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
			<p class="mt-4 text-lg text-slate-600">Debt shows up in a lot of ways. If any of these sound like you, let’s talk.</p>
		</div>

		<div class="grid gap-4 mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
			{#each painPoints as point}
				<Card
					class="bg-white transition-all duration-300 hover:border-pink-200 hover:shadow-lg border-slate-100 hover:shadow-pink-50"
				>
					<CardContent class="pt-6">
						<div class="flex justify-center items-center mb-4 w-12 h-12 bg-orange-50 rounded-xl">
							<point.icon class="w-6 h-6 text-brand-orange" />
						</div>
						<h3 class="mb-2 text-base font-bold text-slate-900">{point.title}</h3>
						<p class="text-sm leading-relaxed text-slate-600">{point.description}</p>
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
				See who we help →
			</a>
		</div>
	</div>
</section>

<!-- How It Works -->
<section class="py-16 sm:py-20 lg:py-24 bg-slate-50">
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
				Getting Help Is <span class="text-brand-gradient">Simple</span>
			</h2>
			<p class="mt-4 text-lg text-slate-600">Three steps. One free phone call to get started.</p>
		</div>

		<div class="relative mt-14">
			<div
				class="hidden absolute top-16 h-0.5 opacity-30 right-[16.66%] left-[16.66%] bg-brand-gradient md:block"
			></div>
			<div class="grid gap-10 md:grid-cols-3">
				{#each steps as step, i}
					<div class="relative text-center">
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
					</div>
				{/each}
			</div>
		</div>

		<div class="mt-10 text-center">
			<a href={link('/how-it-works')} class="text-sm font-semibold text-slate-600 hover:text-brand-pink">
				Learn more about how it works →
			</a>
		</div>
	</div>
</section>

<!-- Why Us -->
<section class="py-16 bg-white sm:py-20 lg:py-24">
	<div class="grid gap-12 items-center px-4 mx-auto max-w-7xl sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
		<div class="text-center lg:col-span-2 lg:text-left">
			<h2 class="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl text-slate-900">
				Why Start With <span class="text-brand-gradient">Us?</span>
			</h2>
			<p class="mt-4 text-lg text-slate-600">
				Getting help shouldn’t feel like another fight. One call gets you straight answers about how this
				works.
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
			<p class="mt-4 text-lg text-slate-600">Here’s exactly what we do, and what we don’t.</p>
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
			Legal work is handled by {partners.legal}, under its own written agreement with you.
		</p>
		<div class="mt-8 text-center">
			<Button size="lg" href={formAnchor} class={ctaClass}>
				Get My Free Consultation
				<ArrowRight class="ml-2 w-4 h-4" />
			</Button>
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="py-16 bg-white sm:py-20 lg:py-24">
	<div class="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
				Common <span class="text-brand-gradient">Questions</span>
			</h2>
		</div>
		<div class="mt-10">
			<FaqList faqs={coreFaqs} />
		</div>
		<div class="mt-8 text-center">
			<a href={link('/faq')} class="text-sm font-semibold text-slate-600 hover:text-brand-pink">
				More questions →
			</a>
		</div>
	</div>
</section>

<CtaSection href={formAnchor} />
