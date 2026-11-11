<script lang="ts">
	// Who We Are follows the owner's approved mockup (copy and layout, her second version), spaced
	// out so it reads calmer, the same way as Who We Help. Don't change the wording without the
	// owner's sign-off.
	import { site, link, consultationHref, inkText, accentText } from '$lib/site';
	import { Button } from '$lib/components/ui/button';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Clock from '@lucide/svelte/icons/clock';
	import UsersRound from '@lucide/svelte/icons/users-round';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import Globe from '@lucide/svelte/icons/globe';
	import Building2 from '@lucide/svelte/icons/building-2';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import CircleCheck from '@lucide/svelte/icons/circle-check';

	const specialistPhoto = link('/images/who-we-are-specialist.webp');
	const specialistPhotoAlt = 'A smiling Client Solutions Specialist wearing a headset at her desk';
	// TODO: placeholder. Her mockup has two people celebrating on a rock at sunset; swap that in
	// once it's generated.
	const promisePhoto = link('/images/who-we-help-family.webp');
	const promisePhotoAlt = 'A smiling family looking over a letter together at their kitchen table';
	// An AI-generated likeness of the Tempe headquarters (Hayden Ferry Lakeside II), no signs or logos
	const officePhoto = link('/images/who-we-are-office.webp');
	const officePhotoAlt =
		'The Advanced Solutions Direct headquarters building on Rio Salado Parkway in Tempe, Arizona';

	const tones = {
		purple: 'bg-purple-50 text-brand-purple',
		orange: 'bg-orange-50 text-[#D9480F]'
	};

	const highlights = [
		{
			icon: Clock,
			tone: tones.purple,
			title: 'Experience That Matters',
			text: 'Industry knowledge shaped by over 20 years of helping consumers understand their financial options.'
		},
		{
			icon: UsersRound,
			tone: tones.orange,
			title: 'Client Solutions Specialists',
			text: 'Highly trained, U.S.-based professionals who listen carefully and provide clear, personal guidance.'
		},
		{
			icon: ShieldCheck,
			tone: tones.purple,
			title: 'Ethics Come First',
			text: 'Honest communication, respect, and transparency guide every interaction with our team.'
		},
		{
			icon: Globe,
			tone: tones.orange,
			title: 'Nationwide Support',
			text: 'Headquartered in Arizona, with a California office, and helping consumers across all 50 states.'
		}
	];

	const promises = [
		'Put ethics, respect, and transparency first.',
		'Provide clear, honest information.',
		'Listen without judgment or unnecessary pressure.',
		'Help you explore the best, fastest, and less expensive way to resolve your debt.',
		'Treat every client with care and professionalism.'
	];

	const ink = inkText;
	const orange = accentText;
	// Orange-to-pink gradient text, like her mockup's "Count On." and "to You."
	const warmText =
		'bg-gradient-to-r from-[#D9480F] to-[#E0115F] bg-clip-text text-transparent box-decoration-clone';
	const card = 'bg-white rounded-2xl border shadow-sm border-slate-200 shadow-purple-900/5';
	const eyebrow = `text-sm font-extrabold tracking-[0.15em] uppercase ${orange}`;
</script>

<svelte:head>
	<title>Who We Are | {site.name}</title>
	<meta
		name="description"
		content="At Advanced Solutions Direct, we combine decades of industry knowledge with a genuine understanding of the financial challenges Americans face."
	/>
</svelte:head>

<!-- Hero: copy on the left, the specialist photo on the right -->
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
				About Us / Who We Are
			</p>
			<h1
				class="mt-5 text-[min(2.25rem,11cqi)] font-black tracking-tight leading-[1.05] text-balance sm:text-[min(3rem,11cqi)] lg:text-[min(3.4rem,11cqi)] {ink}"
			>
				Experience You Can Trust.
				<span class="block mt-1"
					>Guidance You Can <span class="pr-[0.08em] {warmText}">Count On.</span></span
				>
			</h1>
			<!-- Brush swoosh under the headline, same as the other pages -->
			<svg
				class="mx-auto mt-3 w-56 max-w-full h-4 sm:w-72 lg:mx-0"
				viewBox="0 0 300 16"
				fill="none"
				aria-hidden="true"
			>
				<defs>
					<linearGradient
						id="wwa-swoosh"
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
				<path d="M4 12 C 80 2, 200 0, 296 8 C 210 5, 110 7, 30 14 Z" fill="url(#wwa-swoosh)" />
			</svg>

			<div class="mt-5 space-y-4 text-lg font-medium leading-relaxed sm:text-xl text-slate-800">
				<p>
					At {site.name}, we combine decades of industry knowledge with a genuine understanding of
					the financial challenges Americans face.
				</p>
				<p>
					Our highly trained, U.S.-based <strong class="font-extrabold {ink}"
						>Client Solutions Specialists</strong
					> are here to listen, answer questions, and help you explore options that may fit your situation.
				</p>
			</div>
		</div>

		<div class="mx-auto w-full max-w-xl lg:max-w-none">
			<img
				src={specialistPhoto}
				alt={specialistPhotoAlt}
				width="1448"
				height="1086"
				fetchpriority="high"
				class="object-cover w-full rounded-3xl shadow-xl aspect-[4/3] object-[50%_30%] shadow-purple-900/15"
			/>
		</div>
	</div>
</section>

<!-- Founded in 2020, and the four highlights -->
<section class="pb-14 bg-white lg:pb-20">
	<div class="px-4 mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
		<div
			class="@container grid grid-cols-1 gap-6 items-center p-7 bg-gradient-to-r rounded-2xl border sm:p-9 lg:grid-cols-2 lg:gap-12 border-brand-purple/15 from-purple-50 via-purple-50/60 to-pink-50/50"
		>
			<h2
				class="text-[min(1.875rem,10cqi)] font-black tracking-tight leading-tight sm:text-[min(2.25rem,8cqi)] lg:text-[min(2.4rem,5cqi)] {ink}"
			>
				Founded in 2020.<br />
				Backed by <span class="pr-[0.06em] {warmText}">20+ Years</span><br
					class="hidden sm:block"
				/>
				of Industry Experience.
			</h2>
			<p
				class="text-lg font-medium leading-relaxed lg:pl-12 lg:border-l-2 text-slate-800 lg:border-brand-purple/30"
			>
				Our founding members bring more than two decades of experience in the financial and
				debt-related industry and have assisted <strong class="font-extrabold {ink}"
					>thousands of clients</strong
				> looking to improve their financial situations.
			</p>
		</div>

		<ul class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 lg:gap-6">
			{#each highlights as h}
				<li class="@container flex flex-col gap-5 p-5 h-full sm:p-7 {card}">
					<span class="flex justify-center items-center w-14 h-14 rounded-full shrink-0 {h.tone}">
						<h.icon class="w-7 h-7" strokeWidth={2} />
					</span>
					<div>
						<h3 class="text-[min(1.3rem,10cqi)] font-extrabold leading-snug text-balance {ink}">
							{h.title}
						</h3>
						<p
							class="mt-2 text-base font-medium leading-relaxed break-words hyphens-auto text-slate-800"
						>
							{h.text}
						</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Our promise -->
<section class="py-14 bg-gradient-to-b from-purple-50/70 to-white lg:py-20">
	<div
		class="grid gap-10 items-center px-4 mx-auto max-w-7xl sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8"
	>
		<img
			src={promisePhoto}
			alt={promisePhotoAlt}
			width="1448"
			height="1086"
			loading="lazy"
			class="object-cover w-full rounded-3xl shadow-xl aspect-[4/3] shadow-purple-900/15"
		/>
		<div class="@container">
			<p class={eyebrow}>Our Promise</p>
			<h2
				class="mt-3 text-[min(1.875rem,11cqi)] font-black tracking-tight leading-tight sm:text-4xl lg:text-[2.6rem] {ink}"
			>
				Our Commitment <span class="pr-[0.06em] {warmText}">to You.</span>
			</h2>
			<p class="mt-5 text-lg font-medium leading-relaxed text-slate-800">
				Our founding members believe financial challenges should be met with integrity and
				compassion. We’re committed to helping you understand your options and make informed
				decisions without pressure.
			</p>
			<ul class="mt-7 space-y-3.5">
				{#each promises as promise}
					<li
						class="flex gap-3 items-start text-lg font-bold leading-snug break-words hyphens-auto {ink}"
					>
						<CircleCheck class="mt-0.5 w-6 h-6 shrink-0 {orange}" strokeWidth={2.25} />
						<span class="min-w-0">{promise}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<!-- Our locations -->
<section class="py-14 bg-white lg:py-20">
	<div
		class="grid gap-10 items-center px-4 mx-auto max-w-7xl sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8"
	>
		<img
			src={officePhoto}
			alt={officePhotoAlt}
			width="1200"
			height="900"
			loading="lazy"
			class="object-cover w-full rounded-3xl shadow-xl aspect-[4/3] shadow-purple-900/15"
		/>
		<div class="@container">
			<p class={eyebrow}>Here for You, Nationwide</p>
			<h2
				class="mt-3 text-[min(1.875rem,11cqi)] font-black tracking-tight leading-tight sm:text-4xl lg:text-[2.6rem] {ink}"
			>
				Our Locations
			</h2>
			<p class="mt-5 text-lg font-medium leading-relaxed text-slate-800">
				We’re headquartered in Tempe, Arizona, with a second office in Irvine, California. Our
				U.S.-based team assists consumers across the country.
			</p>
			<div class="mt-8 space-y-6">
				<div class="flex gap-4 items-start">
					<span
						class="flex justify-center items-center w-12 h-12 bg-purple-50 rounded-xl shrink-0 text-brand-purple"
					>
						<Building2 class="w-6 h-6" strokeWidth={2} />
					</span>
					<div class="min-w-0 break-words">
						<h3 class="text-xl font-extrabold {ink}">Headquarters</h3>
						<address class="mt-1 text-lg not-italic font-medium leading-snug text-slate-800">
							60 E Rio Salado Pkwy, Suite 900<br />Tempe, Arizona 85281
						</address>
					</div>
				</div>
				<div class="flex gap-4 items-start">
					<span
						class="flex justify-center items-center w-12 h-12 bg-orange-50 rounded-xl shrink-0 {orange}"
					>
						<MapPin class="w-6 h-6" strokeWidth={2} />
					</span>
					<div class="min-w-0 break-words">
						<h3 class="text-xl font-extrabold {ink}">Branch Office</h3>
						<p class="mt-1 text-lg font-medium leading-snug text-slate-800">Irvine, California</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Closing band, same look as Who We Help's -->
<section class="px-4 pb-16 bg-white sm:px-6 lg:px-8 lg:pb-20">
	<div
		class="@container overflow-hidden relative py-14 px-5 mx-auto max-w-7xl text-center text-white bg-gradient-to-br rounded-3xl sm:px-10 lg:py-16 from-[#2a0a6b] via-[#5b00c9] to-[#a3008f]"
	>
		<div
			class="absolute -right-24 -bottom-24 w-80 h-80 rounded-full opacity-50 pointer-events-none bg-[#ff8a00] blur-3xl"
			aria-hidden="true"
		></div>
		<div class="relative">
			<h2
				class="mx-auto max-w-4xl text-[min(1.875rem,10cqi)] font-black tracking-tight leading-tight text-balance sm:text-[min(2.25rem,10cqi)] lg:text-5xl"
			>
				Looking for a More <span class="text-amber-300">Direct Path</span> to Better Options?
			</h2>
			<Button
				href={site.phoneHref}
				class="py-3 px-8 mt-8 max-w-full h-auto text-base font-bold leading-tight text-center text-white whitespace-normal bg-gradient-to-r rounded-full shadow-lg transition sm:text-lg min-h-14 from-[#E8590C] to-[#E0115F] hover:brightness-110"
			>
				Speak with a U.S.-Based Client Solutions Specialist
				<ArrowRight class="ml-2 w-5 h-5 shrink-0" />
			</Button>
			<p class="mt-5">
				<a
					href={consultationHref}
					class="text-base font-semibold underline underline-offset-4 hover:text-amber-200"
				>
					Prefer to start online? Complete our short application.
				</a>
			</p>
		</div>
	</div>
</section>
