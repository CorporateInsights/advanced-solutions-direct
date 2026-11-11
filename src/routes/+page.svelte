<script lang="ts">
	// Page 1 follows the owner's approved mockup (her rewrite: copy and layout). Don't change the
	// wording without the owner's sign-off.
	import { site, ctaClass, ctaLabel, link } from '$lib/site';
	import { Button } from '$lib/components/ui/button';
	import LeadFormCard from '$lib/components/site/LeadFormCard.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Check from '@lucide/svelte/icons/check';
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import Coins from '@lucide/svelte/icons/coins';
	import CreditCard from '@lucide/svelte/icons/credit-card';
	import PhoneCall from '@lucide/svelte/icons/phone-call';
	import HandCoins from '@lucide/svelte/icons/hand-coins';
	import Signpost from '@lucide/svelte/icons/signpost';
	import ClipboardCheck from '@lucide/svelte/icons/clipboard-check';

	const heroPhoto = link('/images/hero-couple-letter.webp');
	const heroPhotoAlt = 'A concerned couple at their kitchen table reading a letter together';

	const situations = [
		{ icon: CalendarDays, label: 'Behind on Bills' },
		{ icon: Coins, label: 'In Collections' },
		{ icon: CreditCard, label: 'Debt Settlement Payments Too High' }
	];

	const approaches = [
		{
			icon: HandCoins,
			title: 'Explore Lower Payment Options',
			text: 'See whether a different monthly payment structure may be available.'
		},
		{
			icon: Signpost,
			title: 'Explore Alternative Options',
			text: 'Learn about an approach beyond traditional debt programs.'
		},
		{
			icon: ClipboardCheck,
			title: 'Find a Fit for Your Situation',
			text: 'Explore options based on your accounts and circumstances.'
		}
	];

	const ink = 'text-[#1e1452]';
	const orange = 'text-[#D9480F]';
	const sectionTitle = `text-3xl font-extrabold tracking-tight leading-tight text-balance sm:text-[2.25rem] lg:text-[2.6rem] ${ink}`;
</script>

<svelte:head>
	<title>Drowning in Debt? | {site.name}</title>
	<meta
		name="description"
		content="Are your bills or debt settlement payments too high? We're not another debt settlement company. We connect you with alternative solutions that may be a better fit for your financial situation."
	/>
</svelte:head>

<!-- Hero: copy and form, with the photo behind them on large screens -->
<section class="overflow-hidden relative bg-white">
	<div
		class="relative px-4 pt-6 pb-10 mx-auto max-w-7xl sm:px-6 sm:pt-10 lg:px-8 lg:pt-12 lg:pb-12"
	>
		<!-- Large screens: the photo as the hero background. It bleeds to the top edge, fades into
		     white at the bottom and right, and is sized so both faces sit in the open space between
		     the copy and the form. A white glow keeps the copy readable. -->
		<div
			class="hidden absolute top-0 left-0 xl:block h-[35rem] aspect-[1672/941] pointer-events-none"
		>
			<img
				src={heroPhoto}
				alt={heroPhotoAlt}
				width="1672"
				height="941"
				fetchpriority="high"
				class="object-cover w-full h-full [mask-image:linear-gradient(to_right,#000_84%,transparent),linear-gradient(to_bottom,#000_70%,transparent)] [mask-composite:intersect]"
			/>
		</div>
		<div
			class="hidden absolute inset-y-0 left-0 xl:block w-[34rem] bg-gradient-to-r from-white from-65% to-transparent pointer-events-none"
		></div>

		<div
			class="@container/hero grid relative gap-10 items-center lg:grid-cols-[minmax(0,1fr)_26rem] xl:grid-cols-[minmax(0,1fr)_27rem]"
		>
			<div
				class="@container mx-auto w-full max-w-xl text-center lg:mx-0 lg:max-w-[31rem] lg:text-left"
			>
				<p class="text-xs font-bold tracking-wide uppercase sm:text-sm {ink}">
					Real Solutions. A Brighter Financial Future.
				</p>

				<h1
					class="mt-2 text-[min(3.25rem,15cqi)] font-black tracking-tight leading-[0.95] sm:mt-3 sm:text-[min(4.5rem,15cqi)] lg:text-[clamp(2.25rem,16.8cqi,5.25rem)] {ink}"
				>
					Drowning<br />in Debt?
				</h1>
				<!-- Brush swoosh under the headline -->
				<svg
					class="mx-auto mt-2 w-56 max-w-full h-4 sm:w-72 lg:mx-0"
					viewBox="0 0 300 16"
					fill="none"
					aria-hidden="true"
				>
					<defs>
						<linearGradient
							id="swoosh"
							x1="0"
							y1="0"
							x2="300"
							y2="0"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#FF8A00" />
							<stop offset="1" stop-color="#FF2D55" stop-opacity="0.85" />
						</linearGradient>
					</defs>
					<path d="M4 12 C 80 2, 200 0, 296 8 C 210 5, 110 7, 30 14 Z" fill="url(#swoosh)" />
				</svg>

				<!-- Phones, tablets and small laptops: photo as a rounded card; the banner overlaps its bottom edge -->
				<img
					src={heroPhoto}
					alt={heroPhotoAlt}
					width="1672"
					height="941"
					fetchpriority="high"
					class="object-cover mt-5 w-full rounded-3xl shadow-xl xl:hidden aspect-[4/3] object-[64%_40%] shadow-purple-900/15"
				/>

				<div
					class="inline-block relative py-3 px-6 max-w-full -mt-9 text-white rounded-2xl ring-4 ring-white shadow-lg sm:px-8 xl:mt-5 xl:ring-0 bg-brand-gradient-ui shadow-pink-500/25"
				>
					<p class="text-[clamp(0.7rem,6.6cqi,1.875rem)] font-extrabold leading-tight text-balance">
						We Have Another Way
					</p>
					<p class="text-[clamp(0.5rem,4.3cqi,1.25rem)] font-semibold text-balance">
						You May NOT Have Been Offered.
					</p>
				</div>

				<p
					class="mt-6 text-xl font-extrabold leading-tight uppercase sm:text-2xl lg:text-[1.6rem] {ink}"
				>
					Are Your Bills or Debt Settlement Payments Too High?
				</p>
				<p
					class="mt-1.5 text-3xl font-black tracking-tight uppercase sm:text-4xl lg:text-[2.1rem] {orange}"
				>
					We Need to Talk.
				</p>
				<p class="mt-1 text-base font-semibold sm:text-lg {ink}">
					We may have an alternative worth exploring.
				</p>

				<p class="mt-4 text-[0.95rem] leading-relaxed sm:text-base text-slate-800">
					<strong class="font-extrabold {ink}"
						>We’re <span class="italic {orange}">NOT</span> another debt settlement company.</strong
					>
					We connect you with alternative solutions that may be a better fit for your financial situation.
				</p>

				<div class="flex flex-wrap gap-3 justify-center mt-7 lg:justify-start">
					<Button
						href="#lead-form"
						class="grow h-auto min-h-12 py-2.5 px-5 max-w-full text-[0.9rem] leading-tight text-center whitespace-normal rounded-full sm:grow-0 sm:px-7 sm:text-base {ctaClass}"
					>
						{ctaLabel}
						<ArrowRight class="ml-2 w-4 h-4" />
					</Button>
					<Button
						href={link('/how-it-works')}
						variant="outline"
						class="grow h-auto min-h-12 py-2.5 px-5 max-w-full text-[0.9rem] font-bold leading-tight text-center whitespace-normal bg-white rounded-full border-2 sm:grow-0 sm:px-7 sm:text-base border-brand-purple text-brand-purple hover:bg-purple-50 hover:text-brand-purple"
					>
						See How It Works
					</Button>
				</div>
			</div>

			<div class="mx-auto w-full max-w-md lg:max-w-none">
				<LeadFormCard id="lead-form" />
			</div>

			<!-- Wide screens: round Call Now button in the open space under the photo, between the copy
			     and the form. It only shows when there's room for it (so not with very large text).
			     Phones have the Call Now bar at the bottom, and every screen has Call Now in the header. -->
			<a
				href={site.phoneHref}
				class="hidden absolute top-[64%] left-[calc(50%+2rem)] flex-col justify-center items-center w-36 h-36 text-center text-white rounded-full ring-[6px] ring-white shadow-2xl transition -translate-x-1/2 -translate-y-1/2 xl:@min-[72rem]/hero:flex hover:scale-105 bg-brand-gradient-ui shadow-pink-500/40"
			>
				<PhoneCall class="w-8 h-8" strokeWidth={2.25} />
				<span class="mt-1.5 text-lg font-black tracking-wide leading-none uppercase">Call Now</span>
				<span class="mt-1 text-[0.72rem] font-bold leading-none">{site.phoneDisplay}</span>
			</a>
		</div>
	</div>
</section>

<!-- Already enrolled, situations, and the phone line. Same width as the hero. -->
<!-- Sections below the hero share one rhythm: no top padding, the same bottom padding, so the
     gap between every block is even. -->
<section class="pb-14 bg-white lg:pb-16">
	<div class="px-4 mx-auto space-y-5 max-w-7xl sm:px-6 lg:px-8">
		<div
			class="flex flex-col gap-4 items-center py-5 px-5 text-center bg-gradient-to-r rounded-2xl border shadow-sm sm:flex-row sm:gap-5 sm:px-7 sm:text-left border-brand-purple/25 from-pink-50 via-purple-50 to-pink-50/40 shadow-purple-900/5"
		>
			<span
				class="flex justify-center items-center w-12 h-12 bg-white rounded-full border-2 border-brand-purple shrink-0"
			>
				<Check class="w-6 h-6 text-brand-purple" strokeWidth={3} />
			</span>
			<div>
				<h2 class="text-xl font-extrabold leading-snug sm:text-2xl {ink}">
					Already Enrolled in Debt Settlement? No Problem!
				</h2>
				<p class="mt-1 text-base font-medium sm:text-lg text-slate-800">
					You may still qualify for an alternative with lower monthly payments.
				</p>
			</div>
		</div>

		<ul class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:gap-5">
			{#each situations as s}
				<li
					class="flex gap-4 items-center py-4 px-5 bg-white rounded-2xl border shadow-md border-slate-200 shadow-purple-900/5"
				>
					<span class="flex justify-center items-center w-12 h-12 bg-purple-50 rounded-xl shrink-0">
						<s.icon class="w-6 h-6 text-brand-purple" strokeWidth={2} />
					</span>
					<span class="text-[1.05rem] font-extrabold leading-snug {ink}">{s.label}</span>
				</li>
			{/each}
			<li>
				<a
					href={site.phoneHref}
					class="flex gap-4 items-center py-4 px-5 h-full rounded-2xl border-2 shadow-md transition border-brand-purple/30 bg-purple-50/70 shadow-purple-900/5 hover:border-brand-purple/60 hover:shadow-lg"
				>
					<span
						class="flex justify-center items-center w-12 h-12 rounded-xl shadow-md shrink-0 bg-brand-gradient-ui shadow-pink-500/25"
					>
						<PhoneCall class="w-6 h-6 text-white" strokeWidth={2} />
					</span>
					<span>
						<span class="block text-[0.95rem] font-bold leading-snug {ink}"
							>Call to Speak Live With Us</span
						>
						<span class="block text-xl font-extrabold tracking-tight text-brand-purple"
							>{site.phoneDisplay}</span
						>
					</span>
				</a>
			</li>
		</ul>
	</div>
</section>

{#snippet sectionEyebrow(label: string)}
	<p
		class="inline-flex gap-3 items-center text-sm font-extrabold uppercase sm:text-base tracking-[0.18em] text-brand-pink"
	>
		<span class="w-8 h-0.5 rounded-full bg-brand-gradient-ui" aria-hidden="true"></span>
		{label}
		<span class="w-8 h-0.5 rounded-full bg-brand-gradient-ui" aria-hidden="true"></span>
	</p>
{/snippet}

<!-- Who we help: a soft tinted band, so it reads as its own section between two white ones -->
<section class="py-14 bg-gradient-to-b lg:py-16 from-purple-50 to-pink-50/60">
	<div class="px-4 mx-auto max-w-6xl text-center sm:px-6 lg:px-8">
		{@render sectionEyebrow('Who We Help')}
		<h2 class="mt-4 {sectionTitle}">
			Struggling With <span class="sm:whitespace-nowrap {orange}">$10,000 or More</span> in Debt?
		</h2>
		<p class="mx-auto mt-4 max-w-4xl text-lg font-medium leading-relaxed sm:text-xl text-slate-800">
			Credit cards, personal loans, <strong class="font-extrabold {ink}"
				>private student loans</strong
			>, medical bills, collection accounts, and other debts may be eligible for review.
		</p>
		<p class="mt-3 text-base font-semibold sm:text-lg {ink}">
			You do not have to be behind on your payments to explore your options.
		</p>

		<div
			class="flex gap-3 justify-center items-center py-5 px-6 mx-auto mt-8 max-w-4xl bg-white rounded-2xl ring-1 shadow-lg sm:gap-4 sm:px-8 sm:rounded-full ring-brand-purple/15 shadow-purple-900/5"
		>
			<PhoneCall class="w-7 h-7 text-brand-purple shrink-0" strokeWidth={2} />
			<p class="text-lg font-extrabold sm:text-xl text-balance {ink}">
				Are creditors calling? Are you receiving threatening letters?
			</p>
		</div>
	</div>
</section>

<!-- A different approach -->
<section class="py-14 bg-white lg:py-16">
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="mx-auto max-w-6xl text-center">
			{@render sectionEyebrow('A Different Approach')}
			<h2 class="mt-4 {sectionTitle}">
				Discover a Different Approach to Debt Relief <br class="hidden lg:block" /><span
					class={orange}>You May Not Have Been Offered.</span
				>
			</h2>
			<p
				class="mx-auto mt-4 max-w-4xl text-lg font-medium leading-relaxed sm:text-xl text-slate-800"
			>
				You have rights as a consumer that may open the door to alternatives beyond traditional debt
				programs, with the potential for <span class="font-bold {orange}"
					>lower monthly payments</span
				>.
			</p>
		</div>

		<!-- Same width as the situation cards above, so the edges line up -->
		<ul class="grid gap-4 mt-10 lg:grid-cols-3 lg:gap-5">
			{#each approaches as a}
				<li
					class="flex flex-col gap-4 p-6 bg-white rounded-2xl border shadow-md sm:flex-row sm:gap-5 border-slate-200 shadow-purple-900/5"
				>
					<span
						class="flex justify-center items-center w-14 h-14 bg-purple-50 rounded-2xl shrink-0"
					>
						<a.icon class="w-7 h-7 text-brand-purple" strokeWidth={2} />
					</span>
					<div class="min-w-0">
						<h3 class="text-xl font-extrabold leading-snug {ink}">{a.title}</h3>
						<p class="mt-1.5 text-base leading-relaxed text-slate-800">{a.text}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Closing line and button -->
<section class="pt-2 pb-16 text-center bg-gradient-to-b from-white to-purple-50/70 lg:pb-20">
	<div class="px-4 mx-auto max-w-6xl sm:px-6">
		<h2
			class="text-4xl font-black tracking-tight leading-tight sm:text-5xl lg:text-[3.25rem] {ink}"
		>
			<span class="inline-block">You Have <span class={orange}>Rights.</span></span>
			<span class="inline-block">You Have <span class={orange}>Options.</span></span>
			<br class="hidden sm:block" />
			<span class="inline-block">You Have <span class={orange}>Us.</span></span>
		</h2>
		<Button
			href="#lead-form"
			class="py-3 px-8 mt-8 max-w-full h-auto min-h-14 text-base tracking-wide leading-tight text-center uppercase whitespace-normal rounded-full sm:px-10 {ctaClass}"
		>
			{ctaLabel}
			<ArrowRight class="ml-2 w-5 h-5" />
		</Button>
	</div>
</section>
