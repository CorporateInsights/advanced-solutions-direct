<script lang="ts">
	// FAQ follows the owner's FAQ mockup and Q&A document (Nov 2026): hero with a "Popular
	// Topics" card, then numbered questions in two groups. Copy lives in $lib/content. Don't
	// change the wording without the owner's sign-off.
	import { site, inkText, cardClass, eyebrowClass, pageTitleClass, leadClass } from '$lib/site';
	import { faqGettingStarted, faqExistingDebt } from '$lib/content';
	import FaqList from '$lib/components/site/FaqList.svelte';
	import HeroArt from '$lib/components/site/HeroArt.svelte';
	import CheckDot from '$lib/components/site/CheckDot.svelte';
	import CtaSection from '$lib/components/site/CtaSection.svelte';

	const intro =
		'Find quick answers to common questions about getting started, your options, and situations involving existing debt settlement programs.';

	const pills = ['U.S.-Based Team', 'No Consultation Fee', 'No Hard Credit Inquiry'];

	// Each topic jumps to its part of the list. Consumer Rights starts at the collections question.
	const existingStart = faqGettingStarted.length + 1;
	const rightsQuestion =
		existingStart +
		faqExistingDebt.findIndex((f) => f.question.startsWith('Can you help if my accounts'));
	const topics = [
		{
			n: '01',
			title: 'Getting Started',
			text: 'Understand how to begin, what to expect, and whether there is any cost to speak with someone.',
			target: 'getting-started'
		},
		{
			n: '02',
			title: 'Existing Debt Settlement',
			text: 'See answers for consumers who are already enrolled in a debt settlement program and exploring another option.',
			target: 'existing-debt-settlement'
		},
		{
			n: '03',
			title: 'Consumer Rights',
			text: 'Learn more about common questions involving collections, creditors, and protections that may be available.',
			target: `faq-${rightsQuestion}`
		}
	];

	// When a topic jumps to a question, open that question too
	function openTarget(id: string) {
		const el = document.getElementById(id);
		if (el instanceof HTMLDetailsElement) el.open = true;
	}

	// Orange-to-red gradient text, the same as the Who We Help headline
	const warmText =
		'bg-gradient-to-r from-[#D9480F] to-[#E0115F] bg-clip-text text-transparent box-decoration-clone';
	const groupTitle = `flex gap-3 text-lg font-black leading-snug uppercase sm:text-2xl sm:tracking-wide ${inkText}`;
</script>

<svelte:head>
	<title>FAQ | {site.name}</title>
	<meta name="description" content={intro} />
</svelte:head>

<!-- Hero: copy on the left, the Popular Topics card on the right -->
<section class="overflow-hidden relative bg-white">
	<div
		class="absolute inset-0 bg-gradient-to-b to-white pointer-events-none from-purple-50/70 via-white"
		aria-hidden="true"
	></div>

	<div
		class="grid relative gap-10 items-center px-4 pt-10 pb-14 mx-auto max-w-7xl sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-10 lg:px-8 lg:pt-14 lg:pb-16 xl:gap-16"
	>
		<div class="@container mx-auto w-full max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
			<p
				class="inline-block py-1.5 px-4 bg-purple-50 rounded-full text-balance max-sm:rounded-2xl {eyebrowClass} text-brand-purple"
			>
				Helpful Answers, All in One Place
			</p>
			<!-- "Questions" on its own line, as in the owner's mockup -->
			<h1 class="mt-5 uppercase {pageTitleClass}">
				Frequently Asked<br /><span class="inline-block pr-[0.06em] {warmText}">Questions</span>
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
						id="faq-swoosh"
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
				<path d="M4 12 C 80 2, 200 0, 296 8 C 210 5, 110 7, 30 14 Z" fill="url(#faq-swoosh)" />
			</svg>

			<p class="mx-auto mt-5 max-w-2xl text-pretty lg:mx-0 {leadClass}">{intro}</p>

			<ul class="flex flex-wrap gap-2 justify-center mt-7 lg:justify-start">
				{#each pills as pill (pill)}
					<li
						class="inline-flex gap-2 items-center py-2 pr-3.5 pl-2 max-w-full text-base font-bold bg-white rounded-full border shadow-sm border-slate-200 shadow-purple-900/5 {inkText}"
					>
						<CheckDot />
						<span class="min-w-0">{pill}</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Popular Topics, with the same soft shapes behind it as the other page heroes -->
		<div class="isolate relative mx-auto w-full max-w-xl lg:max-w-none">
			<HeroArt />
			<aside
				class="@container overflow-hidden rounded-3xl shadow-xl {cardClass} shadow-purple-900/10"
				aria-labelledby="faq-topics-title"
			>
				<div class="h-1.5 bg-brand-gradient-ui" aria-hidden="true"></div>
				<div class="p-6 sm:p-7">
					<h2 id="faq-topics-title" class="{eyebrowClass} text-brand-purple">Popular Topics</h2>
					<ul class="mt-2 divide-y divide-slate-200">
						{#each topics as topic (topic.n)}
							<li class="group/topic">
								<a
									href="#{topic.target}"
									onclick={() => openTarget(topic.target)}
									class="flex gap-4 items-start py-4 rounded-xl group group-last/topic:pb-0 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
								>
									<span
										class="flex justify-center items-center w-11 h-11 text-sm font-extrabold text-white rounded-xl shadow-md bg-brand-gradient-ui shrink-0 shadow-pink-500/20"
										aria-hidden="true">{topic.n}</span
									>
									<span class="min-w-0 break-words hyphens-auto">
										<span
											class="block text-lg font-extrabold leading-snug transition-colors group-hover:text-brand-pink {inkText}"
											>{topic.title}</span
										>
										<span class="block mt-1 text-base font-medium leading-snug text-slate-800"
											>{topic.text}</span
										>
									</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</aside>
		</div>
	</div>
</section>

<!-- The questions, numbered 1-22 across both groups -->
<section class="px-4 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl">
		<div id="getting-started" class="scroll-mt-24 lg:scroll-mt-28">
			<h2 class="sr-only">Getting Started</h2>
			<FaqList faqs={faqGettingStarted} openFirst />
		</div>

		<div id="existing-debt-settlement" class="mt-14 scroll-mt-24 lg:mt-16 lg:scroll-mt-28">
			<h2 class={groupTitle}>
				<span
					class="self-stretch w-1.5 bg-gradient-to-b from-[#F97316] to-brand-pink rounded-full shrink-0"
					aria-hidden="true"
				></span>
				<span class="min-w-0 break-words hyphens-auto text-balance">
					Existing Debt Settlement &amp; Financial Situations
				</span>
			</h2>
			<div class="mt-6">
				<FaqList faqs={faqExistingDebt} start={existingStart} />
			</div>
		</div>
	</div>
</section>

<CtaSection
	title="Still Have Questions?"
	description="We’re happy to answer them. Call us or fill out the short form. It’s free, with no obligation."
/>
