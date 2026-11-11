<script lang="ts">
	import { site, partners } from '$lib/site';
	import LeadFormCard from '$lib/components/site/LeadFormCard.svelte';
	import Phone from '@lucide/svelte/icons/phone';
	import Check from '@lucide/svelte/icons/check';
	import Clock from '@lucide/svelte/icons/clock';

	const expect = [
		{
			title: 'We listen',
			description: 'Tell us about your debts and what’s been going on.'
		},
		{
			title: 'We explain how it works',
			description: 'Straight answers, no jargon, and no pressure into anything.'
		},
		{
			title: 'We connect you',
			description: `If it’s a fit, we match you with ${partners.legal}. That’s where our part ends.`
		}
	];
</script>

<svelte:head>
	<title>Free Consultation | {site.name}</title>
	<meta
		name="description"
		content="Request a free, no-obligation consultation with Advanced Solutions Direct. Talk to a real person about overwhelming debt and find your next step."
	/>
</svelte:head>

<section class="overflow-hidden relative bg-gradient-to-b from-orange-50/60 via-white to-white">
	<div class="absolute inset-0 pointer-events-none">
		<div
			class="absolute -top-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-purple-300/20 blur-3xl"
		></div>
		<div
			class="absolute -bottom-56 -left-40 w-[28rem] h-[28rem] rounded-full bg-orange-300/20 blur-3xl"
		></div>
	</div>

	<div class="relative py-14 px-4 mx-auto max-w-7xl sm:py-20 sm:px-6 lg:px-8">
		<div
			class="grid gap-10 items-start lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-10"
		>
			<div class="text-center lg:text-left">
				<h1
					class="text-4xl font-extrabold tracking-tight leading-tight text-balance sm:text-5xl text-slate-900"
				>
					Talk to a
					<span class="text-brand-gradient">Real Person.</span>
				</h1>
				<p class="mx-auto mt-5 max-w-xl text-lg leading-relaxed lg:mx-0 text-slate-800">
					Fill out the short form and we’ll call you during business hours, or call us now. It’s
					free, and there’s no obligation.
				</p>

				<a
					href={site.phoneHref}
					class="inline-flex gap-3 items-center py-3 px-5 mt-8 bg-white rounded-xl border border-pink-100 shadow-sm transition hover:shadow-md"
				>
					<span class="flex justify-center items-center w-10 h-10 rounded-full bg-brand-gradient">
						<Phone class="w-5 h-5 text-white" />
					</span>
					<span class="text-left">
						<span class="block text-xs font-medium text-slate-800">Prefer to talk now?</span>
						<span class="block text-lg font-bold text-slate-900">{site.phoneDisplay}</span>
					</span>
				</a>
				<p
					class="flex gap-1.5 justify-center items-center mt-3 text-sm lg:justify-start text-slate-800"
				>
					<Clock class="w-4 h-4" />
					{site.hours}
				</p>
			</div>

			<!-- Form comes right after the intro on mobile; sits in the right column on desktop -->
			<div
				class="mx-auto w-full max-w-md lg:row-span-2 lg:mx-0 lg:ml-auto lg:col-start-2 lg:row-start-1"
			>
				<LeadFormCard id="consultation-form" title="Request Your Free Call" />
			</div>

			<div class="lg:col-start-1">
				<div class="mx-auto max-w-md text-left lg:mx-0">
					<h2 class="mb-4 text-lg font-bold text-slate-900">What to Expect on the Call</h2>
					<ol class="space-y-4">
						{#each expect as item, i}
							<li class="flex gap-3">
								<span
									class="flex justify-center items-center w-7 h-7 text-xs font-bold text-white rounded-full bg-brand-gradient-ui shrink-0"
								>
									{i + 1}
								</span>
								<div>
									<p class="font-semibold text-slate-900">{item.title}</p>
									<p class="text-sm text-slate-800">{item.description}</p>
								</div>
							</li>
						{/each}
					</ol>
					<div class="flex flex-wrap gap-x-5 gap-y-2 mt-6">
						{#each ['No cost', 'No obligation', 'No pressure'] as point}
							<span class="flex gap-1.5 items-center text-sm font-medium text-slate-800">
								<Check class="w-4 h-4 text-brand-pink" />
								{point}
							</span>
						{/each}
					</div>

					<div
						class="p-4 mt-8 text-sm leading-relaxed rounded-xl border border-pink-100 bg-pink-50/40 text-slate-800"
					>
						<p class="font-semibold text-slate-900">Who you’ll talk to</p>
						<p class="mt-1">
							A member of the {site.name} team. We’re not lawyers and we’re not debt collectors. Our job
							is to understand your situation and help you find your next step.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
