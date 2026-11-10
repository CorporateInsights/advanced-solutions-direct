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

	const heroPhoto = link('/images/hero-couple-bills.webp');
	const heroPhotoAlt = 'A couple going through their bills together at home';

	const situations = [
		{ icon: CalendarDays, label: 'Behind on Bills', color: 'text-brand-purple' },
		{ icon: Coins, label: 'In Collections', color: 'text-brand-pink' },
		{ icon: CreditCard, label: 'Debt Settlement Payments Too High', color: 'text-brand-purple' }
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
	<!-- Desktop: photo sits between the copy and the form and fades out at its edges -->
	<div class="hidden absolute inset-y-0 lg:block left-[30%] right-[16%] pointer-events-none">
		<img
			src={heroPhoto}
			alt={heroPhotoAlt}
			width="1800"
			height="1013"
			fetchpriority="high"
			class="object-cover w-full h-full object-[50%_40%] [mask-image:linear-gradient(to_right,transparent,#000_25%,#000_80%,transparent),linear-gradient(to_bottom,#000_70%,transparent)] [mask-composite:intersect]"
		/>
	</div>
	<!-- Soft glow so the copy always sits on a light background -->
	<div
		class="hidden absolute inset-y-0 left-0 lg:block w-[52%] bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none"
	></div>

	<!-- Phones: photo across the top, fading into the page -->
	<img
		src={heroPhoto}
		alt={heroPhotoAlt}
		width="1800"
		height="1013"
		fetchpriority="high"
		class="object-cover w-full h-48 sm:h-64 lg:hidden object-[50%_35%] [mask-image:linear-gradient(to_bottom,#000_60%,transparent)]"
	/>

	<div
		class="relative px-4 pb-14 mx-auto max-w-7xl -mt-6 sm:px-6 lg:pt-14 lg:pb-16 lg:mt-0 lg:px-8"
	>
		<div
			class="grid gap-10 items-center lg:grid-cols-[minmax(0,1fr)_26rem] xl:grid-cols-[minmax(0,1fr)_27rem]"
		>
			<div class="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-[34rem] lg:text-left">
				<p class="text-xs font-bold tracking-wide uppercase sm:text-sm italic {ink}">
					Real Solutions. A Brighter Financial Future.
				</p>

				<h1
					class="mt-3 text-6xl font-black tracking-tight italic leading-[0.95] sm:text-7xl xl:text-[5.25rem] {ink}"
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

				<div
					class="inline-block py-3 px-7 mt-6 text-white rounded-full shadow-lg sm:px-9 bg-brand-gradient-ui shadow-pink-500/25"
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

				<p class="mt-7 text-lg font-bold italic leading-snug sm:text-xl {ink}">
					We’re <span
						class="underline decoration-2 underline-offset-4 text-brand-orange decoration-brand-orange"
						>NOT</span
					>
					another debt settlement company! We connect you with alternative solutions that may be a better
					fit for your financial situation.
				</p>

				<div
					class="mx-auto mt-6 max-w-md h-0.5 bg-gradient-to-r rounded-full lg:mx-0 from-brand-orange via-brand-pink to-transparent"
				></div>

				<p class="mt-5 text-xl font-extrabold italic sm:text-2xl text-brand-orange">
					Know Your Consumer Protection Rights.
				</p>
				<p class="mt-1 text-base italic sm:text-lg {ink}">
					There May Be Another Option Worth Exploring.
				</p>

				<div class="flex flex-col gap-3 justify-center mt-8 sm:flex-row lg:justify-start">
					<Button href="#lead-form" class="h-12 px-7 text-base rounded-full {ctaClass}">
						{ctaLabel}
						<ArrowRight class="ml-2 w-4 h-4" />
					</Button>
					<Button
						href={link('/how-it-works')}
						variant="outline"
						class="h-12 px-8 text-base font-bold bg-white rounded-full border-2 border-brand-purple text-brand-purple hover:bg-purple-50 hover:text-brand-purple"
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
<section class="relative px-4 pb-14 bg-white sm:px-6 lg:px-8">
	<ul class="grid gap-4 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
		{#each situations as s}
			<li
				class="flex gap-4 items-center py-5 px-6 bg-white rounded-2xl border shadow-lg border-slate-100 shadow-purple-900/5"
			>
				<s.icon class="w-9 h-9 shrink-0 {s.color}" strokeWidth={1.75} />
				<span class="w-px h-10 bg-gradient-to-b from-brand-orange to-brand-pink shrink-0"></span>
				<span class="text-lg font-bold leading-snug {ink}">{s.label}</span>
			</li>
		{/each}
		<li>
			<a
				href={site.phoneHref}
				class="flex gap-4 items-center py-5 px-6 h-full bg-white rounded-2xl border shadow-lg transition border-slate-100 shadow-purple-900/5 hover:shadow-xl hover:border-pink-200"
			>
				<PhoneCall class="w-9 h-9 shrink-0 text-brand-pink" strokeWidth={1.75} />
				<span class="w-px h-10 bg-gradient-to-b from-brand-orange to-brand-pink shrink-0"></span>
				<span>
					<span class="block text-base font-bold leading-snug {ink}"
						>Call Now to Speak Live With Us</span
					>
					<span class="block text-xl font-extrabold text-brand-orange">{site.phoneDisplay}</span>
				</span>
			</a>
		</li>
	</ul>
</section>

<!-- Gradient wave into the footer -->
<svg
	class="block -mb-px w-full h-14 sm:h-20"
	viewBox="0 0 1440 100"
	preserveAspectRatio="none"
	aria-hidden="true"
>
	<defs>
		<linearGradient id="wave" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
			<stop stop-color="#5B0FD0" />
			<stop offset=".45" stop-color="#D100BB" />
			<stop offset=".75" stop-color="#FF2D55" />
			<stop offset="1" stop-color="#FF8A00" />
		</linearGradient>
	</defs>
	<path
		d="M0 60 C 300 10, 600 10, 900 45 C 1150 75, 1300 70, 1440 40 V100 H0 Z"
		fill="url(#wave)"
	/>
</svg>
