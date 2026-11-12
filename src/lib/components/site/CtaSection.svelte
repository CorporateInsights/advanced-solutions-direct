<script lang="ts">
	import {
		site,
		consultationHref,
		ctaClass,
		inkText,
		leadClass,
		closingTitleClass
	} from '$lib/site';
	import { Button } from '$lib/components/ui/button';
	import Phone from '@lucide/svelte/icons/phone';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	let {
		title = 'Ready When You Are.',
		description = 'One free call with a real person. Straight answers, a clear next step, and no pressure.',
		href = consultationHref
	}: { title?: string; description?: string; href?: string } = $props();
</script>

<!-- Closing call to action at the bottom of inner pages. Same look as the home page's closing. -->
<section
	class="px-4 pt-14 pb-16 text-center bg-gradient-to-b from-white to-purple-50/70 sm:px-6 lg:pt-16 lg:pb-20"
>
	<div class="mx-auto max-w-4xl">
		<h2 class="{closingTitleClass} {inkText}">
			{title}
		</h2>
		<p class="mx-auto mt-4 max-w-2xl {leadClass}">{description}</p>
		<div class="flex flex-wrap gap-3 justify-center mt-8">
			<Button
				{href}
				class="py-3 px-8 max-w-full h-auto text-base tracking-wide leading-tight text-center uppercase whitespace-normal rounded-full min-h-14 {ctaClass}"
			>
				Get My Free Consultation
				<ArrowRight class="ml-2 w-5 h-5" />
			</Button>
			<Button
				href={site.phoneHref}
				variant="outline"
				class="py-3 px-8 max-w-full h-auto text-base font-bold leading-tight text-center whitespace-normal bg-white rounded-full border-2 min-h-14 border-brand-purple text-brand-purple hover:bg-purple-50 hover:text-brand-purple"
			>
				<Phone class="mr-2 w-5 h-5" />
				Or call {site.phoneDisplay}
			</Button>
		</div>
		<p class="mt-4 text-sm font-medium text-slate-800">{site.hours}</p>
	</div>
</section>
