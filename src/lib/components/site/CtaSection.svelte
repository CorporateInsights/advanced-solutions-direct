<script lang="ts">
	import BrandArc from './BrandArc.svelte';
	import { site, consultationHref, ctaClass } from '$lib/site';
	import { Button } from '$lib/components/ui/button';
	import Phone from '@lucide/svelte/icons/phone';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	let {
		title = 'Ready When You Are.',
		description = 'One free call with a real person. Straight answers, a clear next step, and no pressure.',
		href = consultationHref
	}: { title?: string; description?: string; href?: string } = $props();
</script>

<section class="py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
	<div class="p-[2px] mx-auto max-w-5xl rounded-3xl bg-brand-gradient shadow-xl shadow-pink-500/10">
		<div
			class="overflow-hidden relative py-12 px-6 text-center bg-white sm:py-16 sm:px-12 rounded-[calc(1.5rem-2px)]"
		>
			<div class="absolute inset-0 pointer-events-none">
				<div
					class="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-orange-200/30 blur-3xl"
				></div>
				<div
					class="absolute -right-24 -bottom-24 w-72 h-72 rounded-full bg-purple-200/30 blur-3xl"
				></div>
				<BrandArc
					class="absolute -bottom-2 left-1/2 w-[48rem] max-w-none -translate-x-1/2 opacity-[0.10]"
				/>
			</div>
			<div class="relative">
				<h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
					<span class="text-brand-gradient">{title}</span>
				</h2>
				<p class="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-700">{description}</p>
				<div class="flex flex-col gap-4 justify-center items-center mt-8 sm:flex-row">
					<Button size="lg" {href} class="h-12 px-8 text-base {ctaClass}">
						Get My Free Consultation
						<ArrowRight class="ml-2 w-4 h-4" />
					</Button>
					<a
						href={site.phoneHref}
						class="flex gap-2 items-center font-semibold transition-colors text-slate-700 hover:text-brand-pink"
					>
						<Phone class="w-5 h-5 text-brand-pink" />
						Or call {site.phoneDisplay}
					</a>
				</div>
				<p class="mt-4 text-sm text-slate-700">{site.hours}</p>
			</div>
		</div>
	</div>
</section>
