<script lang="ts">
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import Handshake from '@lucide/svelte/icons/handshake';
	import LeadForm from './LeadForm.svelte';

	let {
		id,
		title = 'Request Your Free Call',
		description = 'Takes about a minute. A real person will call you.',
		submitLabel,
		image
	}: {
		id: string;
		title?: string;
		description?: string;
		submitLabel?: string;
		// Optional photo strip across the top of the card, in place of the icon
		image?: { src: string; alt: string; position?: string };
	} = $props();
</script>

<div class="p-[2px] rounded-2xl shadow-2xl bg-brand-gradient shadow-pink-500/15">
	<Card class="border-0 rounded-[calc(1rem-2px)] {image ? 'overflow-hidden pt-0' : ''}">
		{#if image}
			<img
				src={image.src}
				alt={image.alt}
				width="1920"
				height="1080"
				fetchpriority="high"
				class="object-cover w-full h-32 sm:h-36"
				style:object-position={image.position ?? 'center'}
			/>
		{/if}
		<CardHeader class="pb-4 text-center">
			{#if !image}
				<div
					class="flex justify-center items-center mx-auto mb-2 w-12 h-12 rounded-full bg-brand-gradient"
				>
					<Handshake class="w-6 h-6 text-white" />
				</div>
			{/if}
			<CardTitle class="text-xl text-slate-900">{title}</CardTitle>
			{#if description}
				<CardDescription class="text-sm text-slate-500">{description}</CardDescription>
			{/if}
		</CardHeader>
		<CardContent>
			<LeadForm {id} {submitLabel} />
		</CardContent>
	</Card>
</div>
