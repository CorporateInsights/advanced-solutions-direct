<script lang="ts">
	// Who We Help follows the owner's approved mockup (copy and layout), spaced out so it reads
	// calmer. Don't change the wording without the owner's sign-off.
	import { site, consultationHref, ctaClass, link, inkText, accentText } from '$lib/site';
	import { Button } from '$lib/components/ui/button';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import Armchair from '@lucide/svelte/icons/armchair';
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import Coins from '@lucide/svelte/icons/coins';
	import PhoneCall from '@lucide/svelte/icons/phone-call';
	import PiggyBank from '@lucide/svelte/icons/piggy-bank';
	import RefreshCw from '@lucide/svelte/icons/refresh-cw';
	import CircleCheck from '@lucide/svelte/icons/circle-check';
	import ClipboardList from '@lucide/svelte/icons/clipboard-list';
	import FileText from '@lucide/svelte/icons/file-text';

	const heroPhoto = link('/images/who-we-help-family.webp');
	const heroPhotoAlt =
		'A smiling family of four at their kitchen table, looking over a letter and a laptop together';
	const realityPhoto = link('/images/who-we-help-older-couple.webp');
	const realityPhotoAlt = 'A worried older couple at their kitchen table reading a bill together';

	// Three icon colors, alternated across the cards like the mockup
	const tones = {
		purple: 'bg-purple-50 text-brand-purple',
		orange: 'bg-orange-50 text-[#D9480F]',
		pink: 'bg-pink-50 text-brand-pink'
	};

	const situations = [
		{
			icon: Armchair,
			tone: tones.purple,
			title: 'Nearing Retirement or Already Retired',
			text: 'You want more peace of mind and less financial stress in retirement.'
		},
		{
			icon: CalendarDays,
			tone: tones.orange,
			title: 'Trying to Lower Monthly Payments',
			text: 'You need more room in your budget and a payment you can manage.'
		},
		{
			icon: Coins,
			tone: tones.purple,
			title: 'Struggling to Keep Up With Bills',
			text: 'Food, gas, utilities, and everyday costs are taking a bigger toll.'
		},
		{
			icon: PhoneCall,
			tone: tones.pink,
			title: 'Getting Collection Calls or Harassing Letters',
			text: 'You’re tired of the constant pressure and want it to stop.'
		},
		{
			icon: PiggyBank,
			tone: tones.purple,
			title: 'No Savings Left From Hard-Earned Money',
			text: 'Your savings are depleted just to keep up with bills.'
		},
		{
			icon: RefreshCw,
			tone: tones.orange,
			title: 'Your Circumstances Have Changed',
			text: 'A job loss, health issue, or major expense has made your debt harder to manage.'
		}
	];

	const wants = [
		'Want to eliminate or reduce debt',
		'Need lower, more manageable monthly payments',
		'Want to protect more of their income',
		'A simpler financial plan they can afford',
		'Experts on their side, not against them'
	];

	const ink = inkText;
	const orange = accentText;
	// Orange-to-red gradient text, dark enough to read on white
	const warmText =
		'bg-gradient-to-r from-[#D9480F] to-[#E0115F] bg-clip-text text-transparent box-decoration-clone';
	const card = 'bg-white rounded-2xl border shadow-sm border-slate-200 shadow-purple-900/5';
	const agentLabel = 'Speak with a live U.S.-based agent now';
</script>

<svelte:head>
	<title>Who We Help | {site.name}</title>
	<meta
		name="description"
		content="You've worked hard for your money, and now it's time to take back control, reduce the financial pressure, and move forward with confidence."
	/>
</svelte:head>

<!-- Hero: copy on the left, photo on the right. Behind them, like the mockup: a lavender wash
     and two big crisp circles tucked behind the photo's top right corner (a light peach-to-lilac
     one, and a magenta-to-purple one in front of it). Large screens only, so the text on phones
     stays on plain white. -->
<section class="overflow-hidden relative bg-white">
	<!-- Lavender wash that fades back to white at the bottom, into the tagline row -->
	<div
		class="hidden absolute inset-0 bg-gradient-to-b to-white pointer-events-none lg:block from-purple-100/80 via-pink-50/70"
		aria-hidden="true"
	></div>

	<div
		class="grid relative gap-10 items-center px-4 pt-10 pb-14 mx-auto max-w-7xl sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pt-14 lg:pb-16"
	>
		<div class="@container mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
			<p
				class="inline-block py-1.5 px-4 text-sm font-extrabold tracking-[0.15em] uppercase bg-purple-50 rounded-full text-brand-purple"
			>
				Who We Help
			</p>
			<h1
				class="mt-5 text-[min(2.25rem,11cqi)] font-black tracking-tight leading-[1.05] text-balance sm:text-[min(3rem,11cqi)] lg:text-[min(3.4rem,11cqi)] {ink}"
			>
				If Any of This Sounds Like You, It’s Time to Explore a
				<span class="pr-[0.12em] italic uppercase {warmText}">New Solution.</span>
			</h1>
			<!-- Brush swoosh under the headline, same as the home page -->
			<svg
				class="mx-auto mt-3 w-56 max-w-full h-4 sm:w-72 lg:mx-0"
				viewBox="0 0 300 16"
				fill="none"
				aria-hidden="true"
			>
				<defs>
					<linearGradient
						id="wwh-swoosh"
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
				<path d="M4 12 C 80 2, 200 0, 296 8 C 210 5, 110 7, 30 14 Z" fill="url(#wwh-swoosh)" />
			</svg>

			<p class="mt-5 text-lg font-medium leading-relaxed sm:text-xl text-slate-800">
				You’ve worked hard for your money, and now it’s time to take back control, reduce the
				financial pressure, and move forward with confidence.
			</p>

			<Button
				href={site.phoneHref}
				class="py-3 px-7 mt-8 max-w-full h-auto text-base leading-tight text-center whitespace-normal rounded-full min-h-14 {ctaClass}"
			>
				{agentLabel}
				<ArrowRight class="ml-2 w-5 h-5" />
			</Button>
			<p class="mt-3 text-sm italic font-medium text-slate-800">
				Move to the front of the line. Call now for immediate assistance.
			</p>
		</div>

		<!-- Photo with the "on your side" badge over its corner -->
		<div class="isolate relative mx-auto w-full max-w-xl lg:max-w-none">
			<!-- Brand circles, sized and placed relative to the photo so they always sit behind
			     its top right corner. Smooth CSS gradients, no blur, so the edges stay crisp. -->
			<div class="hidden absolute inset-0 pointer-events-none -z-10 lg:block" aria-hidden="true">
				<!-- Warm glow on the photo's left side -->
				<div
					class="absolute top-[5%] -left-[8%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(255,170,120,0.45),rgba(255,170,120,0))]"
				></div>
				<!-- Large light circle -->
				<div
					class="absolute -top-[96%] left-[13%] w-[144%] aspect-square rounded-full bg-[linear-gradient(115deg,rgba(255,196,160,0.85)_0%,rgba(244,160,214,0.85)_35%,rgba(206,150,255,0.9)_70%)]"
				></div>
				<!-- Magenta-to-purple circle in front of it -->
				<div
					class="absolute -top-[57%] left-[35%] w-[100%] aspect-square rounded-full bg-[linear-gradient(115deg,#E23BC6_0%,#C21BD6_35%,#8A0BF5_75%,#7A00FF_100%)] shadow-[0_0_60px_rgba(209,0,187,0.35)]"
				></div>
			</div>
			<img
				src={heroPhoto}
				alt={heroPhotoAlt}
				width="1448"
				height="1086"
				fetchpriority="high"
				class="object-cover w-full rounded-3xl shadow-xl aspect-[4/3] shadow-purple-900/15"
			/>
			<div
				class="flex absolute right-4 -bottom-6 gap-3 items-center py-3 px-4 bg-white rounded-2xl ring-1 shadow-lg sm:right-auto sm:left-6 ring-slate-200 shadow-purple-900/10"
			>
				<span class="flex justify-center items-center w-10 h-10 bg-orange-50 rounded-xl shrink-0">
					<ShieldCheck class="w-5 h-5 {orange}" strokeWidth={2.25} />
				</span>
				<span class="text-left">
					<span class="block text-base font-extrabold leading-tight {ink}"
						>We are on your side.</span
					>
					<span class="block text-sm font-medium text-slate-800">We’re here to help.</span>
				</span>
			</div>
		</div>
	</div>
</section>

<!-- Tagline row -->
<section class="px-4 pt-6 pb-14 bg-white sm:px-6 lg:pb-16">
	<p
		class="flex flex-col gap-2 justify-center items-center text-2xl font-extrabold tracking-tight text-center sm:flex-row sm:gap-0 lg:text-[1.75rem]"
	>
		<span class={ink}>You have rights.</span>
		<span class="hidden mx-6 w-px h-7 sm:block bg-slate-300" aria-hidden="true"></span>
		<span class={ink}>You have options.</span>
		<span class="hidden mx-6 w-px h-7 sm:block bg-slate-300" aria-hidden="true"></span>
		<span class="relative pb-1.5 {orange}">
			You have us.
			<span
				class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#FF8A00] to-[#FF2D55] rounded-full"
				aria-hidden="true"
			></span>
		</span>
	</p>
</section>

<!-- Who we help: six situation cards on a soft tint -->
<section class="py-14 bg-gradient-to-b from-purple-50/70 to-white lg:py-20">
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<span
				class="block mx-auto w-12 h-1 bg-gradient-to-r from-[#FF8A00] to-[#FF2D55] rounded-full"
				aria-hidden="true"
			></span>
			<h2 class="mt-5 text-4xl font-black tracking-tight sm:text-5xl {ink}">Who We Help</h2>
			<p class="mt-4 text-lg font-medium sm:text-xl text-slate-800">
				Real people in real situations. See if one of these sounds familiar.
			</p>
		</div>

		<ul class="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
			{#each situations as s}
				<li class="@container flex flex-col gap-5 p-6 h-full sm:p-7 {card}">
					<span class="flex justify-center items-center w-14 h-14 rounded-full shrink-0 {s.tone}">
						<s.icon class="w-7 h-7" strokeWidth={2} />
					</span>
					<div>
						<h3 class="text-[min(1.25rem,10cqi)] font-extrabold leading-snug text-balance {ink}">
							{s.title}
						</h3>
						<p class="mt-2 text-base font-medium leading-relaxed text-slate-800">{s.text}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- The reality: photo and the list of what people want -->
<section class="py-14 bg-white lg:py-20">
	<div
		class="grid gap-10 items-center px-4 mx-auto max-w-7xl sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8"
	>
		<img
			src={realityPhoto}
			alt={realityPhotoAlt}
			width="1448"
			height="1086"
			loading="lazy"
			class="object-cover w-full rounded-3xl shadow-xl aspect-[4/3] shadow-purple-900/15"
		/>
		<div>
			<p class="text-sm font-extrabold tracking-[0.15em] uppercase {orange}">The Reality</p>
			<h2
				class="mt-3 text-3xl font-black tracking-tight leading-tight sm:text-4xl lg:text-[2.6rem] {ink}"
			>
				Why so many people feel stuck
			</h2>
			<p class="mt-5 text-lg font-medium leading-relaxed text-slate-800">
				People are trying to put food on the table, keep a roof over their heads, and manage rising
				costs, yet their debt keeps growing. Others have made difficult decisions, like enrolling in
				a costly debt settlement program, and still find themselves under financial strain.
			</p>
			<ul class="mt-7 space-y-3.5">
				{#each wants as want}
					<li class="flex gap-3 items-start text-lg font-bold leading-snug {ink}">
						<CircleCheck class="mt-0.5 w-6 h-6 shrink-0 {orange}" strokeWidth={2.25} />
						{want}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<!-- A different path, and the already-enrolled note -->
<section class="pb-14 bg-white lg:pb-20">
	<div class="px-4 mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_28rem]">
			<div class="flex flex-col gap-6 p-7 sm:flex-row sm:p-9 {card}">
				<span
					class="flex justify-center items-center w-16 h-16 bg-purple-50 rounded-2xl shrink-0 text-brand-purple"
				>
					<ClipboardList class="w-8 h-8" strokeWidth={2} />
				</span>
				<div class="@container min-w-0 w-full">
					<h2
						class="text-[min(1.875rem,12cqi)] font-black tracking-tight leading-tight text-balance sm:text-[min(2.1rem,12cqi)] {ink}"
					>
						Looking for a <span class={orange}>Different Path</span> to Financial Relief?
					</h2>
					<p class="mt-4 text-lg font-medium leading-relaxed text-slate-800">
						You don’t want another debt settlement program. You want a real solution that fits your
						situation, helps reduce the burden, and gives you a chance to move forward.
					</p>
				</div>
			</div>

			<div
				class="@container flex flex-col justify-center p-6 text-white bg-gradient-to-br rounded-2xl shadow-lg sm:p-9 from-[#2a0a6b] to-[#5b00c9] shadow-purple-900/20"
			>
				<p
					class="text-sm font-extrabold tracking-wider uppercase sm:tracking-[0.15em] text-purple-100"
				>
					A Smarter Alternative
				</p>
				<p class="mt-2 text-[min(2.1rem,12.5cqi)] font-black tracking-tight leading-tight">
					Without <span class="text-amber-300">bankruptcy.</span>
				</p>
				<Button
					href={site.phoneHref}
					class="py-3 px-6 mt-7 max-w-full h-auto text-base font-bold leading-tight text-center text-white whitespace-normal bg-gradient-to-r rounded-full shadow-md transition min-h-12 from-[#E8590C] to-[#E0115F] hover:brightness-110"
				>
					Call now to explore your options
					<ArrowRight class="ml-2 w-5 h-5" />
				</Button>
			</div>
		</div>

		<div
			class="flex flex-col gap-6 items-start p-7 rounded-2xl border sm:p-9 lg:flex-row lg:items-center border-brand-purple/15 bg-purple-50/70"
		>
			<span
				class="flex justify-center items-center w-16 h-16 bg-white rounded-2xl shadow-sm shrink-0 text-brand-purple"
			>
				<FileText class="w-8 h-8" strokeWidth={2} />
			</span>
			<div class="flex-1 min-w-0">
				<h2 class="text-2xl font-black tracking-tight sm:text-[1.75rem] {ink}">
					Already in a debt settlement program?
				</h2>
				<p class="mt-2 text-lg italic font-bold {orange}">
					If it’s not working, or the payments are too high, you may have another option.
				</p>
				<p class="mt-2 text-base font-medium leading-relaxed sm:text-lg text-slate-800">
					You enrolled for relief, and if it’s still creating financial pressure, it makes sense to
					see whether a different path may work better for you.
				</p>
			</div>
			<Button
				href={consultationHref}
				variant="outline"
				class="py-3 px-7 max-w-full h-auto text-base font-bold leading-tight text-center whitespace-normal bg-white rounded-full border-2 min-h-12 shrink-0 border-brand-purple text-brand-purple hover:bg-purple-50 hover:text-brand-purple"
			>
				Compare your options
				<ArrowRight class="ml-2 w-5 h-5" />
			</Button>
		</div>
	</div>
</section>

<!-- Closing band -->
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
				Find Out What Options May Be <span class="text-amber-300">Available for You.</span>
			</h2>
			<Button
				href={site.phoneHref}
				class="py-3 px-8 mt-8 max-w-full h-auto text-base font-bold leading-tight text-center text-white whitespace-normal bg-gradient-to-r rounded-full shadow-lg transition sm:text-lg min-h-14 from-[#E8590C] to-[#E0115F] hover:brightness-110"
			>
				{agentLabel}
				<ArrowRight class="ml-2 w-5 h-5" />
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
