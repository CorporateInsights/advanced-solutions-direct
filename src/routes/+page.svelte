<script lang="ts">
	// Landing page copy is the owner's approved wording. Do not edit the text without their sign-off.
	import { site, link } from '$lib/site';
	import { Button } from '$lib/components/ui/button';
	import LeadFormCard from '$lib/components/site/LeadFormCard.svelte';
	import BrandArc from '$lib/components/site/BrandArc.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
</script>

<svelte:head>
	<title>{site.name} | Drowning in Debt or Struggling with Debt Settlement Payments?</title>
	<meta
		name="description"
		content="Struggling with high-interest credit cards, unaffordable debt settlement payments, personal loans, collections, or medical bills? There's another way. Discover your options."
	/>
</svelte:head>

<!-- Hero: headline left, application form right -->
<section class="overflow-hidden relative bg-gradient-to-b from-orange-50/60 via-white to-white">
	<div class="absolute inset-0 pointer-events-none">
		<div
			class="absolute -top-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-purple-300/25 blur-3xl"
		></div>
		<div
			class="absolute -bottom-48 -left-40 w-[28rem] h-[28rem] rounded-full bg-orange-300/25 blur-3xl"
		></div>
		<BrandArc
			class="hidden absolute -right-24 top-10 w-[46rem] opacity-[0.13] lg:block xl:right-0"
		/>
		<BrandArc class="absolute -top-6 -right-28 w-[26rem] opacity-[0.10] lg:hidden" />
	</div>

	<div class="relative py-12 px-4 mx-auto max-w-7xl sm:py-20 sm:px-6 lg:py-24 lg:px-8">
		<div class="grid gap-10 items-start lg:grid-cols-2 lg:gap-16">
			<div class="text-center lg:text-left">
				<h1
					class="text-4xl font-extrabold tracking-tight leading-[1.1] text-balance sm:text-5xl lg:text-[3.25rem] text-slate-900"
				>
					Drowning in Debt or Struggling with Debt Settlement Payments?
				</h1>

				<p class="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl text-brand-gradient">
					There’s Another Way!
				</p>

				<p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed sm:text-xl lg:mx-0 text-slate-600">
					Struggling with high-interest credit cards, unaffordable debt settlement payments,
					personal loans, collections, or medical bills?
				</p>

				<p class="mt-8 text-2xl font-extrabold tracking-tight sm:text-3xl text-slate-900">
					We’re NOT Another Debt Settlement Company!
				</p>

				<p class="mx-auto mt-4 max-w-xl text-lg leading-relaxed sm:text-xl lg:mx-0 text-slate-600">
					Discover a different approach to debt relief that most people have never even heard of!
				</p>

				<p class="mx-auto mt-4 max-w-xl text-lg leading-relaxed lg:mx-0 text-slate-600">
					Your rights as a consumer may open the door to alternatives beyond traditional debt
					settlement, without filing bankruptcy, with the potential for significantly lower monthly
					payments, leaving more of your hard-earned money in your pocket.
				</p>

				<p
					class="py-4 px-5 mx-auto mt-6 max-w-xl text-lg font-semibold leading-relaxed text-left bg-white rounded-xl border border-pink-100 shadow-sm lg:mx-0 text-slate-800"
				>
					Already enrolled in debt settlement but struggling to afford your payments? You may
					qualify for a more affordable alternative!
				</p>
			</div>

			<div class="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
				<LeadFormCard
					id="lead-form"
					title="Discover Your Options!"
					description=""
					submitLabel="Explore My Options"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Band -->
<section class="py-12 px-4 bg-brand-gradient-ui sm:px-6 lg:px-8">
	<div
		class="flex flex-col gap-6 justify-between items-center mx-auto max-w-6xl text-center md:flex-row md:gap-8 md:text-left"
	>
		<img
			src={link('/images/band-couple-bills.webp')}
			alt="An older couple sorting through their bills together"
			width="1000"
			height="563"
			loading="lazy"
			class="object-cover w-full max-w-sm rounded-2xl ring-4 shadow-xl md:w-64 lg:w-72 aspect-[16/10] ring-white/30 shrink-0"
		/>
		<div class="md:flex-1">
			<p class="text-2xl font-extrabold text-white text-balance sm:text-3xl">
				Behind on Bills? In Collections? Debt Settlement Payments Too High?
			</p>
			<p class="mt-2 text-lg text-white/90">You may have more options than you realize.</p>
		</div>
		<Button
			size="lg"
			href={link('/how-it-works')}
			class="h-12 px-7 font-bold uppercase bg-white shadow-lg hover:bg-white/90 text-brand-pink shrink-0"
		>
			See How It Works
			<ArrowRight class="ml-2 w-4 h-4" />
		</Button>
	</div>
</section>

<!-- Disclaimer -->
<section class="py-10 px-4 bg-white sm:px-6 lg:px-8">
	<p class="mx-auto max-w-4xl text-sm leading-relaxed text-center text-slate-500">
		{site.name} is a marketing and enrollment company, not a law firm, and does not offer debt settlement
		services. Debt validation and legal services are provided by independent law firms under separate
		client agreements. ASD receives compensation for qualifying client referrals. Eligibility, fees, and
		results vary. No specific outcome is guaranteed. Available in {site.statesServed}
	</p>
</section>
