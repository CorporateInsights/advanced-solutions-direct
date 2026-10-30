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
			<AccordionTrigger class="text-base font-semibold text-left hover:no-underline text-slate-900">
				{faq.question}
			</AccordionTrigger>
			<AccordionContent class="text-base leading-relaxed sm:text-sm text-slate-600">
				{faq.answer}
			</AccordionContent>
		</AccordionItem>
	{/each}
</Accordion>
