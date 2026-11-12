<script lang="ts">
	import type { Faq } from '$lib/content';
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$lib/components/ui/accordion';

	let { faqs, prefix = 'faq' }: { faqs: Faq[]; prefix?: string } = $props();
</script>

<Accordion type="single">
	{#each faqs as faq, i}
		<AccordionItem value="{prefix}-{i}" class="border-slate-200">
			<AccordionTrigger
				class="py-4 text-lg font-bold leading-snug text-left hover:no-underline text-[#1e1452] **:data-[slot=accordion-trigger-icon]:mt-0.5 **:data-[slot=accordion-trigger-icon]:size-5"
			>
				{faq.question}
			</AccordionTrigger>
			<AccordionContent class="text-base font-medium leading-relaxed text-slate-800">
				{faq.answer}
			</AccordionContent>
		</AccordionItem>
	{/each}
</Accordion>
