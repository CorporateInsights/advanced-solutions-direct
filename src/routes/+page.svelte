<script lang="ts">
	import { site, consultationHref, ctaClass, link } from '$lib/site';
	import { coreFaqs } from '$lib/content';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import LeadFormCard from '$lib/components/site/LeadFormCard.svelte';
	import FaqList from '$lib/components/site/FaqList.svelte';
	import CtaSection from '$lib/components/site/CtaSection.svelte';
	import Shield from '@lucide/svelte/icons/shield';
	import CheckCircle2 from '@lucide/svelte/icons/check-circle-2';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Star from '@lucide/svelte/icons/star';
	import Scale from '@lucide/svelte/icons/scale';
	import Lock from '@lucide/svelte/icons/lock';
	import PhoneCall from '@lucide/svelte/icons/phone-call';
	import Eye from '@lucide/svelte/icons/eye';
	import Handshake from '@lucide/svelte/icons/handshake';
	import CreditCard from '@lucide/svelte/icons/credit-card';
	import Gavel from '@lucide/svelte/icons/gavel';
	import MessageSquare from '@lucide/svelte/icons/message-square';
	import FileCheck from '@lucide/svelte/icons/file-check';
	import Users from '@lucide/svelte/icons/users';

	const painPoints = [
		{
			icon: PhoneCall,
			title: 'Calls That Won’t Stop',
			description: 'Collectors calling your cell, your home, even your job.'
		},
		{
			icon: Eye,
			title: 'A Debt You Don’t Recognize',
			description: 'A collector you’ve never heard of says you owe them money.'
		},
		{
			icon: CreditCard,
			title: 'Collections on Your Credit',
			description: 'Collection accounts showing up on your credit report.'
		},
		{
			icon: Gavel,
			title: 'Threats of a Lawsuit',
			description: 'Letters or calls saying they’ll take you to court.'
		}
	];

	const steps = [
		{
			icon: MessageSquare,
			title: 'Free Consultation',
			description: 'Tell us what’s going on. No cost, no obligation, no pressure.'
		},
		{
			icon: Handshake,
			title: 'Get Matched',
			description: 'If it’s a fit, we connect you with an independent consumer rights law firm.'
		},
		{
			icon: Scale,
			title: 'Attorneys Step In',
			description: 'The attorneys take it from there and deal with the collectors for you.'
		}
	];

	const benefits = [
		{
			icon: Scale,
			title: 'Real Attorneys',
			description: 'You’re matched with a licensed consumer rights law firm, not a form letter.'
		},
		{
			icon: Handshake,
			title: 'No Pressure',
			description: 'The consultation is free, and you decide whether to move forward.'
		},
		{
			icon: MessageSquare,
			title: 'Plain English',
			description: 'Straight answers about your options. No jargon, no runaround.'
		},
		{
			icon: FileCheck,
			title: 'No Surprises',
			description: 'Any legal fees are explained in writing before you commit to anything.'
		}
	];

	// PLACEHOLDER testimonials: replace only with real, verified client reviews (with permission).
	const testimonials = [
		{ name: 'Client Name', location: 'City, ST' },
		{ name: 'Client Name', location: 'City, ST' },
		{ name: 'Client Name', location: 'City, ST' }
	];
</script>

<svelte:head>
	<title>{site.name} | Debt Collectors Have to Prove It.</title>
	<meta
		name="description"
		content="Being contacted by debt collectors? Advanced Solutions Direct connects you with independent consumer rights attorneys. Free, no-obligation consultation."
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
	</div>

	<div class="relative py-14 px-4 mx-auto max-w-7xl sm:py-20 sm:px-6 lg:py-24 lg:px-8">
		<div class="grid gap-12 items-center lg:grid-cols-2 lg:gap-16">
			<div class="text-center lg:text-left">
				<Badge variant="outline" class="mb-6 bg-white border-pink-200 text-brand-pink">
					<Shield class="mr-1.5 w-3 h-3" />
					You Have Rights
				</Badge>

				<h1
					class="text-4xl font-extrabold tracking-tight leading-tight sm:text-5xl lg:text-6xl text-slate-900"
				>
					Debt Collectors Have to Prove It.
					<span class="block mt-1 text-brand-gradient">We Help Make Sure They Do.</span>
				</h1>

				<p
					class="mx-auto mt-6 max-w-xl text-lg leading-relaxed sm:text-xl lg:mx-0 text-slate-600"
				>
					If a debt collector is coming after you, you may have more options than you think. We
					connect you with consumer rights attorneys who can step in on your behalf.
				</p>

				<div class="mx-auto mt-8 space-y-3 max-w-md text-left lg:mx-0">
					{#each ['Free, no-obligation consultation', 'Matched with experienced consumer rights attorneys', 'Let the attorneys deal with the collectors'] as point}
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
						<span class="text-xs font-medium">Partner Law Firms</span>
					</div>
					<div class="flex gap-2 items-center text-slate-500">
						<Lock class="w-4 h-4" />
						<span class="text-xs font-medium">Private & Secure</span>
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
<section class="py-10 px-4 bg-brand-gradient sm:px-6 lg:px-8">
	<div
		class="flex flex-col gap-6 justify-between items-center mx-auto max-w-5xl text-center md:flex-row md:text-left"
	>
		<div>
			<p class="text-2xl font-extrabold text-white sm:text-3xl">
				Collectors have rules they must follow.
			</p>
			<p class="mt-1 text-lg text-white/90">Not all of them do. Find out if yours did.</p>
		</div>
		<Button
			size="lg"
			href={consultationHref}
			class="h-12 px-7 font-bold bg-white shadow-lg hover:bg-white/90 text-brand-pink shrink-0"
		>
			Talk to Us Free
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
			<p class="mt-4 text-lg text-slate-600">You’re not alone, and you don’t have to handle it alone.</p>
		</div>

		<div class="grid gap-4 mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
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
			<Button size="lg" href={consultationHref} class={ctaClass}>
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
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
				Why Start With <span class="text-brand-gradient">Us?</span>
			</h2>
			<p class="mt-4 text-lg text-slate-600">
				Getting help shouldn’t feel like another fight.
			</p>
		</div>

		<div class="grid gap-4 mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
			{#each benefits as benefit}
				<Card class="bg-white border-slate-100">
					<CardContent class="pt-6">
						<div class="flex justify-center items-center mb-4 w-12 h-12 bg-pink-50 rounded-xl">
							<benefit.icon class="w-6 h-6 text-brand-pink" />
						</div>
						<h3 class="mb-2 text-base font-bold text-slate-900">{benefit.title}</h3>
						<p class="text-sm leading-relaxed text-slate-600">{benefit.description}</p>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- Testimonials (PLACEHOLDERS) -->
<section class="py-16 sm:py-20 lg:py-24 bg-slate-50">
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
				What Our <span class="text-brand-gradient">Clients Say</span>
			</h2>
		</div>

		<div class="grid gap-6 mt-12 lg:grid-cols-3 lg:gap-8">
			{#each testimonials as testimonial}
				<Card class="bg-white border-2 border-dashed border-slate-200">
					<CardContent class="pt-6">
						<Badge variant="outline" class="mb-4 text-amber-700 bg-amber-50 border-amber-200">
							Placeholder: add verified review
						</Badge>
						<div class="flex gap-1 mb-4">
							{#each Array(5) as _}
								<Star class="w-4 h-4 text-slate-200 fill-slate-200" />
							{/each}
						</div>
						<p class="mb-6 text-sm italic leading-relaxed text-slate-400">
							A real client review goes here. Only use genuine reviews from actual clients, shared
							with their permission.
						</p>
						<div class="flex gap-3 items-center pt-4 border-t border-slate-100">
							<div
								class="flex justify-center items-center w-10 h-10 rounded-full bg-slate-100 text-slate-400"
							>
								<Users class="w-4 h-4" />
							</div>
							<div>
								<p class="text-sm font-semibold text-slate-400">{testimonial.name}</p>
								<p class="text-xs text-slate-400">{testimonial.location}</p>
							</div>
						</div>
					</CardContent>
				</Card>
			{/each}
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

<CtaSection />
