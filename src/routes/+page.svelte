<script lang="ts">
	// Page 1 follows the owner's approved mockup (copy and layout). Don't change the wording
	// without the owner's sign-off.
	import { site, ctaClass, ctaLabel, link } from '$lib/site';
	import { Button } from '$lib/components/ui/button';
	import LeadFormCard from '$lib/components/site/LeadFormCard.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import Coins from '@lucide/svelte/icons/coins';
	import CreditCard from '@lucide/svelte/icons/credit-card';
	import PhoneCall from '@lucide/svelte/icons/phone-call';

	const heroPhoto = link('/images/hero-senior-couple.webp');
	const heroPhotoAlt = 'A worried older couple at their kitchen table going over their bills';

	const situations = [
		{ icon: CalendarDays, label: 'Behind on Bills' },
		{ icon: Coins, label: 'In Collections' },
		{ icon: CreditCard, label: 'Debt Settlement Payments Too High' }
	];

	const ink = 'text-[#1e1452]';
</script>

<svelte:head>
	<title>Drowning in Debt? | {site.name}</title>
	<meta
		name="description"
		content="We're not another debt settlement company. We connect you with alternative solutions that may be a better fit for your financial situation. Explore your options."
	/>
</svelte:head>

<section class="overflow-hidden relative bg-white">
	<div
		class="relative px-4 pt-6 pb-12 mx-auto max-w-7xl sm:px-6 sm:pt-10 lg:pt-14 lg:pb-16 lg:px-8"
	>
		<!-- Large screens: the photo framed in an arch (the shape of the logo's arch) with a gradient
		     outline, sitting between the copy and the form. The form card overlaps its right edge. -->
		<div
			class="hidden absolute top-1/2 p-[3px] rounded-t-full rounded-b-3xl shadow-2xl -translate-y-1/2 xl:block left-[44%] w-[20rem] bg-brand-gradient-ui shadow-purple-900/20"
		>
			<img
				src={heroPhoto}
				alt={heroPhotoAlt}
				width="1300"
				height="1950"
				fetchpriority="high"
				class="object-cover w-full rounded-t-full rounded-b-[calc(1.5rem-3px)] aspect-[5/7] object-[50%_30%]"
			/>
		</div>

		<div
			class="grid relative gap-10 items-center lg:grid-cols-[minmax(0,1fr)_26rem] xl:grid-cols-[minmax(0,1fr)_27rem]"
		>
			<div class="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-[31rem] lg:text-left">
				<p class="text-xs font-bold tracking-wide uppercase sm:text-sm italic {ink}">
					Real Solutions. A Brighter Financial Future.
				</p>

				<h1
					class="mt-2 text-[3.25rem] font-black tracking-tight italic leading-[0.95] sm:mt-3 sm:text-7xl xl:text-[5.25rem] {ink}"
				>
					Drowning<br />in Debt?
				</h1>
				<!-- Brush swoosh under the headline -->
				<svg
					class="mx-auto mt-2 w-56 h-4 sm:w-72 lg:mx-0"
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
					width="1300"
					height="1866"
					fetchpriority="high"
					class="object-cover mt-5 w-full rounded-3xl ring-[3px] ring-brand-purple/70 shadow-xl xl:hidden aspect-[4/3] object-[50%_32%] shadow-purple-900/15"
				/>

				<div
					class="inline-block relative py-3 px-7 -mt-9 text-white rounded-full ring-4 ring-white shadow-lg sm:px-9 xl:mt-6 xl:ring-0 bg-brand-gradient-ui shadow-pink-500/25"
				>
					<p
						class="text-[1.35rem] font-extrabold italic leading-tight whitespace-nowrap sm:text-3xl"
					>
						We Have Another Way
					</p>
					<p class="text-[0.95rem] font-bold italic whitespace-nowrap sm:text-xl">
						You May Not Have Been Offered!
					</p>
				</div>

				<p class="mt-6 text-[1.05rem] font-bold italic leading-snug sm:mt-7 sm:text-xl {ink}">
					We’re <span
						class="underline decoration-2 underline-offset-4 text-[#D9480F] decoration-[#D9480F]"
						>NOT</span
					>
					another debt settlement company! We connect you with alternative solutions that may be a better
					fit for your financial situation.
				</p>

				<div
					class="mx-auto mt-6 max-w-md h-0.5 bg-gradient-to-r rounded-full lg:mx-0 from-brand-orange via-brand-pink to-transparent"
				></div>

				<p
					class="mt-5 text-xl font-extrabold italic sm:text-2xl lg:text-[1.3rem] xl:text-[1.4rem] text-[#D9480F]"
				>
					Know Your Consumer Protection Rights.
				</p>
				<p class="mt-1 text-base italic sm:text-lg {ink}">
					There May Be Another Option Worth Exploring.
				</p>

				<div class="grid grid-cols-2 gap-3 mt-7 sm:flex sm:justify-center sm:mt-8 lg:justify-start">
					<Button
						href="#lead-form"
						class="h-12 px-3 text-[0.85rem] rounded-full sm:px-7 sm:text-base {ctaClass}"
					>
						{ctaLabel}
						<ArrowRight class="ml-2 w-4 h-4" />
					</Button>
					<Button
						href={link('/how-it-works')}
						variant="outline"
						class="h-12 px-3 text-[0.85rem] font-bold bg-white rounded-full border-2 sm:px-8 sm:text-base border-brand-purple text-brand-purple hover:bg-purple-50 hover:text-brand-purple"
					>
						How It Works
					</Button>
				</div>
			</div>

			<div class="mx-auto w-full max-w-md lg:max-w-none">
				<LeadFormCard id="lead-form" />
			</div>
		</div>
	</div>
</section>

<!-- Situations, plus the phone line -->
<!-- Same width and side padding as the hero, so the cards line up with the copy and the form -->
<section class="relative pb-14 bg-white">
	<ul
		class="grid gap-4 px-4 mx-auto max-w-7xl sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-5 lg:px-8"
	>
		{#each situations as s}
			<li
				class="p-[2px] rounded-2xl shadow-xl transition bg-brand-gradient-ui shadow-purple-900/10 hover:-translate-y-0.5 hover:shadow-2xl"
			>
				<div class="flex gap-4 items-center py-5 px-5 h-full bg-white rounded-[calc(1rem-2px)]">
					<span
						class="flex justify-center items-center w-14 h-14 rounded-2xl shadow-md shrink-0 bg-brand-gradient-ui shadow-pink-500/25"
					>
						<s.icon class="w-7 h-7 text-white" strokeWidth={2} />
					</span>
					<span class="text-[1.05rem] font-extrabold leading-snug {ink}">{s.label}</span>
				</div>
			</li>
		{/each}
		<li>
			<a
				href={site.phoneHref}
				class="flex gap-4 items-center py-5 px-5 h-full text-white rounded-2xl shadow-xl transition bg-brand-gradient-ui shadow-pink-500/30 hover:-translate-y-0.5 hover:shadow-2xl"
			>
				<span
					class="flex justify-center items-center w-14 h-14 bg-white rounded-2xl shadow-md shrink-0"
				>
					<PhoneCall class="w-7 h-7 text-brand-pink" strokeWidth={2} />
				</span>
				<span>
					<span class="block text-[0.95rem] font-bold leading-snug"
						>Call Now to Speak Live With Us</span
					>
					<span class="block text-2xl font-extrabold tracking-tight">{site.phoneDisplay}</span>
				</span>
			</a>
		</li>
	</ul>
</section>

<!-- Gradient bar above the footer -->
<section class="py-10 px-4 sm:px-6 lg:px-8 bg-brand-gradient-ui">
	<div
		class="flex flex-col gap-5 justify-between items-center mx-auto max-w-6xl text-center md:flex-row md:text-left"
	>
		<p class="text-2xl font-extrabold italic text-white text-balance sm:text-3xl">
			You may have more options than you realize.
		</p>
		<Button
			href={link('/how-it-works')}
			class="h-12 px-8 font-bold uppercase bg-white rounded-full shadow-lg hover:bg-white/90 text-brand-pink shrink-0"
		>
			See How It Works
			<ArrowRight class="ml-2 w-4 h-4" />
		</Button>
	</div>
</section>
