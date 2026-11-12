<script lang="ts">
	// Numbered FAQ cards from the owner's FAQ mockup: a gradient number, the question, and a
	// plus that turns into a minus when the answer is open. Native <details>, so it works without
	// JavaScript, with the keyboard, and with the browser's find-in-page.
	import type { Faq } from '$lib/content';
	import { cardClass, inkText } from '$lib/site';

	let {
		faqs,
		start = 1,
		openFirst = false
	}: { faqs: Faq[]; start?: number; openFirst?: boolean } = $props();

	const pad = (n: number) => String(n).padStart(2, '0');
</script>

<div class="flex flex-col gap-3 sm:gap-4">
	{#each faqs as faq, i (faq.question)}
		{@const n = start + i}
		<details
			id="faq-{n}"
			open={openFirst && i === 0}
			class="group scroll-mt-24 lg:scroll-mt-28 {cardClass} transition-shadow open:shadow-lg open:border-brand-purple/25"
		>
			<summary
				class="flex gap-3 items-center py-4 px-3 list-none rounded-2xl cursor-pointer sm:gap-5 sm:py-5 sm:px-6 focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-brand-purple [&::-webkit-details-marker]:hidden"
			>
				<span
					class="flex justify-center items-center w-9 h-9 text-xs font-extrabold text-white rounded-full sm:w-11 sm:h-11 sm:text-sm shadow-md bg-brand-gradient-ui shrink-0 shadow-pink-500/20"
					aria-hidden="true">{pad(n)}</span
				>
				<span
					class="flex-1 min-w-0 text-base font-bold leading-snug break-words hyphens-auto sm:text-lg {inkText}"
					>{faq.question}</span
				>
				<!-- Plus, which turns into a minus when the answer is open -->
				<span
					class="relative w-6 h-6 rounded-full border-2 sm:w-7 sm:h-7 transition-colors border-slate-300 shrink-0 group-open:border-brand-purple/50"
					aria-hidden="true"
				>
					<span
						class="absolute top-1/2 left-1/2 w-3 h-0.5 rounded-full -translate-x-1/2 -translate-y-1/2 bg-brand-purple"
					></span>
					<span
						class="absolute top-1/2 left-1/2 w-0.5 h-3 rounded-full transition-transform -translate-x-1/2 -translate-y-1/2 motion-reduce:transition-none bg-brand-purple group-open:rotate-90"
					></span>
				</span>
			</summary>
			<div class="px-3 pb-5 sm:pr-[4.25rem] sm:pb-6 sm:pl-[5.5rem]">
				<p
					class="pt-4 text-base font-medium leading-relaxed border-t sm:text-lg border-slate-200 text-slate-800"
				>
					{faq.answer}
				</p>
			</div>
		</details>
	{/each}
</div>
