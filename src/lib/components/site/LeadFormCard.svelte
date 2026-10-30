<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
	import Handshake from '@lucide/svelte/icons/handshake';
	import LeadForm from './LeadForm.svelte';

	let {
		id,
		title = 'Request Your Free Call',
		description = 'Takes about a minute. A real person will call you.'
	}: { id: string; title?: string; description?: string } = $props();
</script>

<div class="p-[2px] rounded-2xl shadow-2xl bg-brand-gradient shadow-pink-500/15">
	<Card class="border-0 rounded-[calc(1rem-2px)]">
		<CardHeader class="pb-4 text-center">
			<div
				class="flex justify-center items-center mx-auto mb-2 w-12 h-12 rounded-full bg-brand-gradient"
			>
				<Handshake class="w-6 h-6 text-white" />
			</div>
			<CardTitle class="text-xl text-slate-900">{title}</CardTitle>
			<CardDescription class="text-sm text-slate-500">{description}</CardDescription>
		</CardHeader>
		<CardContent>
			<LeadForm {id} />
		</CardContent>
	</Card>
</div>
