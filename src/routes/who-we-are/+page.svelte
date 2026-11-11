<script lang="ts">
	// Who We Are follows the owner's approved mockup (copy and layout), spaced out so it reads
	// calmer, the same way as Who We Help. Don't change the wording without the owner's sign-off.
	import { site, link, inkText, accentText } from '$lib/site';
	import { Button } from '$lib/components/ui/button';
	import HeroArt from '$lib/components/site/HeroArt.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import Handshake from '@lucide/svelte/icons/handshake';
	import Users from '@lucide/svelte/icons/users';
	import MapIcon from '@lucide/svelte/icons/map';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Building2 from '@lucide/svelte/icons/building-2';
	import CircleCheck from '@lucide/svelte/icons/circle-check';

	// Office photo: an AI-generated likeness of the Tempe headquarters (Hayden Ferry Lakeside II),
	// made to match the owner's mockup. Swap in a real photo if one becomes available.
	const officePhoto = link('/images/who-we-are-office.webp');
	const officePhotoAlt =
		'The Advanced Solutions Direct headquarters building on Rio Salado Parkway in Tempe, Arizona';
	const specialistPhoto = link('/images/who-we-are-specialist.webp');
	const specialistPhotoAlt = 'A smiling Client Solutions Specialist wearing a headset at her desk';

	const tones = {
		purple: 'bg-purple-50 text-brand-purple',
		orange: 'bg-orange-50 text-[#D9480F]'
	};

	const highlights = [
		{
			icon: CalendarDays,
			tone: tones.orange,
			title: 'Proven Experience',
			text: 'Leadership with 20+ years in the financial and debt-related industry.'
		},
		{
			icon: Handshake,
			tone: tones.purple,
			title: 'Built on Trust',
			text: 'Established in 2020, with a strong foundation and multiple successful companies in the financial space.'
		},
		{
			icon: Users,
			tone: tones.orange,
			title: 'A Dedicated U.S.-Based Team',
			text: 'Our Client Solutions Specialists are highly trained, knowledgeable, and based in the United States.'
		},
		{
			icon: MapIcon,
			tone: tones.purple,
			title: 'Nationwide Support',
			text: 'Headquartered in Tempe, AZ with a branch in Irvine, CA, proudly helping individuals and families across all 50 states.'
		}
	];

	const ink = inkText;
	const orange = accentText;
	// Orange-to-red gradient text, same as the Who We Help headline
	const warmText =
		'bg-gradient-to-r from-[#D9480F] to-[#E0115F] bg-clip-text text-transparent box-decoration-clone';
	const card = 'bg-white rounded-2xl border shadow-sm border-slate-200 shadow-purple-900/5';
</script>

<svelte:head>
	<title>Who We Are | {site.name}</title>
	<meta
		name="description"
		content="At Advanced Solutions Direct, we bring real-world experience, industry knowledge, and a people-first approach to help Americans explore better options for financial relief."
	/>
</svelte:head>

{#snippet swoosh(id: string, extra = '')}
	<svg
		class="w-56 max-w-full h-4 sm:w-72 {extra}"
		viewBox="0 0 300 16"
		fill="none"
		aria-hidden="true"
	>
		<defs>
			<linearGradient {id} x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
				<stop stop-color="#FF8A00" />
				<stop offset="1" stop-color="#FF2D55" stop-opacity="0.85" />
			</linearGradient>
		</defs>
		<path d="M4 12 C 80 2, 200 0, 296 8 C 210 5, 110 7, 30 14 Z" fill="url(#{id})" />
	</svg>
{/snippet}

<!-- Hero: copy on the left, the office photo on the right with the same soft brand art as Who
     We Help behind it -->
<section class="overflow-hidden relative bg-white">
	<div
		class="hidden absolute inset-0 bg-gradient-to-b to-white pointer-events-none lg:block from-purple-50/70 via-white"
		aria-hidden="true"
	></div>

	<div
		class="grid relative gap-10 items-center px-4 pt-10 pb-14 mx-auto max-w-7xl sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pt-14 lg:pb-16"
	>
		<div class="@container mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
			<p
				class="inline-block py-1.5 px-4 text-sm font-extrabold tracking-[0.15em] uppercase bg-purple-50 rounded-full text-brand-purple"
			>
				Who We Are
			</p>
			<h1
				class="mt-5 text-[min(2.25rem,11cqi)] font-black tracking-tight leading-[1.05] text-balance sm:text-[min(3rem,11cqi)] lg:text-[min(3.4rem,11cqi)] {ink}"
			>
				20+ Years of Experience.
				<span class="block pr-[0.12em] mt-1 italic {warmText}"
					>A Genuine Commitment to Helping People.</span
				>
			</h1>
			{@render swoosh('wwa-swoosh-hero', 'mx-auto mt-3 lg:mx-0')}

			<p class="mt-5 text-lg font-medium leading-relaxed sm:text-xl text-slate-800">
				At {site.name}, we bring real-world experience, industry knowledge, and a people-first
				approach to help Americans explore better options for financial relief.
			</p>
		</div>

		<div class="isolate relative mx-auto w-full max-w-xl lg:max-w-none">
			<HeroArt />
			<img
				src={officePhoto}
				alt={officePhotoAlt}
				width="1200"
				height="900"
				fetchpriority="high"
				class="object-cover w-full rounded-3xl shadow-xl aspect-[4/3] shadow-purple-900/15 lg:[mask-image:linear-gradient(to_right,transparent,#000_14%)]"
			/>
		</div>
	</div>
</section>

<!-- Four highlights, as separate cards on a soft tint (the mockup's strip, given room to breathe) -->
<section class="py-14 bg-gradient-to-b from-purple-50/70 to-white lg:py-20">
	<ul
		class="grid grid-cols-1 gap-5 px-4 mx-auto max-w-7xl sm:grid-cols-2 sm:px-6 lg:px-8 xl:grid-cols-4 lg:gap-6"
	>
		{#each highlights as h}
			<li class="@container flex flex-col gap-5 p-5 h-full sm:p-7 {card}">
				<span class="flex justify-center items-center w-14 h-14 rounded-full shrink-0 {h.tone}">
					<h.icon class="w-7 h-7" strokeWidth={2} />
				</span>
				<div>
					<h2 class="text-[min(1.35rem,10cqi)] font-extrabold leading-snug text-balance {ink}">
						{h.title}
					</h2>
					<p
						class="mt-2 text-base font-medium leading-relaxed break-words hyphens-auto text-slate-800"
					>
						{h.text}
					</p>
				</div>
			</li>
		{/each}
	</ul>
</section>

<!-- Client Solutions Specialists -->
<section class="py-14 bg-white lg:py-20">
	<div
		class="grid gap-10 items-center px-4 mx-auto max-w-7xl sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:px-8"
	>
		<img
			src={specialistPhoto}
			alt={specialistPhotoAlt}
			width="1448"
			height="1086"
			loading="lazy"
			class="object-cover w-full rounded-3xl shadow-xl aspect-[4/3] object-[50%_30%] shadow-purple-900/15"
		/>
		<div class="@container">
			<h2
				class="text-[min(1.875rem,10cqi)] font-black tracking-tight leading-tight sm:text-[min(2.25rem,9cqi)] lg:text-[min(2.6rem,8cqi)] {ink}"
			>
				Client Solutions Specialists
				<span class="block mt-1"
					><span class="pr-[0.08em] italic {warmText}">DIRECTly</span> Focused on You.</span
				>
			</h2>
			{@render swoosh('wwa-swoosh-team', 'mt-3')}
			<ul class="mt-7 space-y-4">
				<li class="flex gap-3 items-start text-lg font-semibold leading-snug {ink}">
					<CircleCheck class="mt-0.5 w-6 h-6 shrink-0 {orange}" strokeWidth={2.25} />
					We understand the financial challenges so many Americans are facing.
				</li>
				<li class="flex gap-3 items-start text-lg font-semibold leading-snug {ink}">
					<CircleCheck class="mt-0.5 w-6 h-6 shrink-0 {orange}" strokeWidth={2.25} />
					<span
						>We listen, provide clear and honest information, and help you explore <span
							class="font-extrabold {orange}">Advanced</span
						> options that may fit your situation.</span
					>
				</li>
				<li class="flex gap-3 items-start text-lg font-semibold leading-snug {ink}">
					<CircleCheck class="mt-0.5 w-6 h-6 shrink-0 {orange}" strokeWidth={2.25} />
					We’re committed to working hard to help you move toward financial relief and a more stable future.
				</li>
			</ul>
		</div>
	</div>
</section>

<!-- Our locations -->
<section class="pb-14 bg-white lg:pb-20">
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div
			class="@container grid grid-cols-1 gap-8 p-6 rounded-2xl border sm:p-9 lg:grid-cols-[auto_1fr_1fr] lg:gap-10 lg:items-center border-brand-purple/15 bg-purple-50/70"
		>
			<div class="flex gap-4 items-center">
				<span
					class="flex justify-center items-center w-14 h-14 bg-white rounded-2xl shadow-sm shrink-0 text-brand-purple"
				>
					<MapPin class="w-7 h-7" strokeWidth={2} />
				</span>
				<h2 class="text-[min(1.875rem,9cqi)] font-black tracking-tight {ink}">Our Locations</h2>
			</div>
			<div class="flex gap-4 items-start lg:pl-10 lg:border-l border-brand-purple/15">
				<Building2 class="mt-1 w-7 h-7 shrink-0 {orange}" strokeWidth={2} />
				<div class="min-w-0 break-words">
					<h3 class="text-[min(1.25rem,8cqi)] font-extrabold {ink}">Headquarters</h3>
					<address class="mt-1 text-lg not-italic font-medium leading-snug text-slate-800">
						60 E Rio Salado Pkwy<br />Suite 900<br />Tempe, Arizona 85281
					</address>
				</div>
			</div>
			<div class="flex gap-4 items-start lg:pl-10 lg:border-l border-brand-purple/15">
				<Building2 class="mt-1 w-7 h-7 shrink-0 {orange}" strokeWidth={2} />
				<div class="min-w-0 break-words">
					<h3 class="text-[min(1.25rem,8cqi)] font-extrabold {ink}">Branch Office</h3>
					<p class="mt-1 text-lg font-medium leading-snug text-slate-800">Irvine, California</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Closing band, same look as Who We Help's -->
<section class="px-4 pb-16 bg-white sm:px-6 lg:px-8 lg:pb-20">
	<div
		class="@container overflow-hidden relative py-12 px-5 mx-auto max-w-7xl text-white bg-gradient-to-br rounded-3xl sm:px-10 lg:py-14 from-[#2a0a6b] via-[#5b00c9] to-[#a3008f]"
	>
		<div
			class="absolute -right-24 -bottom-24 w-80 h-80 rounded-full opacity-50 pointer-events-none bg-[#ff8a00] blur-3xl"
			aria-hidden="true"
		></div>
		<div
			class="flex relative flex-col gap-8 items-center text-center lg:flex-row lg:justify-between lg:text-left"
		>
			<h2
				class="max-w-2xl text-[min(1.875rem,10cqi)] font-black tracking-tight leading-tight text-balance sm:text-[min(2.25rem,8cqi)] lg:text-[2.6rem]"
			>
				Looking for <span class="text-amber-300">Advanced Options</span> That May Work Better for You?
			</h2>
			<Button
				href={site.phoneHref}
				class="py-3 px-8 max-w-full h-auto text-base font-bold leading-tight text-center text-white whitespace-normal bg-gradient-to-r rounded-full shadow-lg transition sm:text-lg min-h-14 shrink-0 from-[#E8590C] to-[#E0115F] hover:brightness-110"
			>
				Speak with a U.S.-Based Client Solutions Specialist Today
				<ArrowRight class="ml-2 w-5 h-5 shrink-0" />
			</Button>
		</div>
	</div>
</section>
