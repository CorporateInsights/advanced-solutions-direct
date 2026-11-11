<script lang="ts">
	import {
		site,
		partners,
		link,
		inkText,
		accentText,
		sectionTitleClass,
		leadClass,
		cardClass,
		iconBadgeClass,
		bandClass
	} from '$lib/site';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import CtaSection from '$lib/components/site/CtaSection.svelte';
	import MessageSquare from '@lucide/svelte/icons/message-square';
	import Handshake from '@lucide/svelte/icons/handshake';
	import Scale from '@lucide/svelte/icons/scale';
	import Check from '@lucide/svelte/icons/check';
	import FileText from '@lucide/svelte/icons/file-text';
	import Users from '@lucide/svelte/icons/users';
	import Clock from '@lucide/svelte/icons/clock';

	const steps = [
		{
			icon: MessageSquare,
			title: 'Talk to Us',
			description:
				'Call us or fill out the short form. A real person on our team will ask about your debts and what’s been going on, then explain how the process works in plain English.',
			points: ['Free', 'No obligation', 'No pressure']
		},
		{
			icon: Handshake,
			title: 'Get Connected',
			description: `If it’s a fit, we introduce you to ${partners.legal}. The firm reviews your situation and, if it can help, sends you its agreement, including any fees, in writing.`,
			points: ['Consumer rights attorneys', 'Everything in writing']
		},
		{
			icon: Scale,
			title: 'You Decide',
			description:
				'Take your time. If you choose to sign with the firm, it handles the legal work under its own agreement with you. Our part ends once you’re connected.',
			points: ['Nothing happens without your say', 'The law firm handles the legal work']
		}
	];

	const bringToCall = [
		{ icon: FileText, text: 'Recent statements or letters from creditors or collectors' },
		{ icon: Users, text: 'A rough list of who you owe and how much' },
		{ icon: Clock, text: 'A few quiet minutes to talk' }
	];
</script>

<svelte:head>
	<title>How It Works | {site.name}</title>
	<meta
		name="description"
		content="Three simple steps, starting with one free call with a real person. If it's a fit, we'll connect you with an independent consumer rights law firm. You decide what happens next."
	/>
</svelte:head>

<PageHeader
	eyebrow="How It Works"
	title="Getting Help Starts"
	highlight=" With One Call."
	description="Here’s exactly what happens, step by step, and where our part ends."
/>

<!-- Steps. Same cards and type as the home page. -->
<section class="pb-14 lg:pb-16">
	<div class="px-4 mx-auto space-y-5 max-w-5xl sm:px-6 lg:px-8">
		<img
			src={link('/images/how-it-works-couple-laptop.webp')}
			alt="An older couple smiling while looking at a laptop together at home"
			width="1400"
			height="788"
			class="object-cover w-full rounded-3xl shadow-xl aspect-[16/9] sm:aspect-[21/9] object-[50%_35%] shadow-purple-900/15"
		/>
		{#each steps as step, i}
			<div class="flex flex-col gap-5 p-6 sm:flex-row sm:gap-7 sm:p-8 {cardClass}">
				<div class="flex gap-4 items-center sm:flex-col sm:gap-3 sm:w-20 shrink-0">
					<span class={iconBadgeClass}>
						<step.icon class="w-7 h-7 text-brand-purple" strokeWidth={2} />
					</span>
					<span class="text-sm font-extrabold tracking-[0.15em] uppercase text-brand-pink">
						Step {i + 1}
					</span>
				</div>
				<div class="min-w-0">
					<h2 class="text-2xl font-extrabold leading-snug sm:text-[1.75rem] {inkText}">
						{step.title}
					</h2>
					<p class="mt-2 text-base font-medium leading-relaxed sm:text-lg text-slate-800">
						{step.description}
					</p>
					<ul class="flex flex-wrap gap-x-6 gap-y-2 mt-4">
						{#each step.points as point}
							<li class="flex gap-2 items-center text-base font-bold {inkText}">
								<Check class="w-5 h-5 text-brand-purple shrink-0" strokeWidth={3} />
								{point}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- What to have handy: on a tinted band, like Who We Help on the home page -->
<section class="py-14 lg:py-16 {bandClass}">
	<div class="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class={sectionTitleClass}>
				What to Have <span class={accentText}>Handy</span>
			</h2>
			<p class="mt-4 {leadClass}">
				Don’t have everything? Call anyway. We’ll work through it together.
			</p>
		</div>
		<ul class="grid gap-4 mt-10 sm:grid-cols-3 lg:gap-5">
			{#each bringToCall as item}
				<li class="flex flex-col gap-4 items-center p-6 text-center {cardClass}">
					<span class={iconBadgeClass}>
						<item.icon class="w-7 h-7 text-brand-purple" strokeWidth={2} />
					</span>
					<p class="text-lg font-bold leading-snug {inkText}">{item.text}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<CtaSection />
