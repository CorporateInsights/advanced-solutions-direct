<script lang="ts">
	// Preview-only switch between the true brand palette and a high-contrast version.
	// The choice is applied to <html data-palette> (early script in app.html) and saved locally.
	import { onMount } from 'svelte';
	import Palette from '@lucide/svelte/icons/palette';

	type Choice = 'brand' | 'accessible';
	let palette = $state<Choice>('brand');

	onMount(() => {
		palette = document.documentElement.dataset.palette === 'accessible' ? 'accessible' : 'brand';
	});

	function choose(next: Choice) {
		palette = next;
		if (next === 'accessible') document.documentElement.dataset.palette = 'accessible';
		else delete document.documentElement.dataset.palette;
		try {
			localStorage.setItem('asd-palette', next);
		} catch {}
	}

	const options: { value: Choice; label: string }[] = [
		{ value: 'brand', label: 'Brand colors' },
		{ value: 'accessible', label: 'High contrast' }
	];
</script>

<div
	class="fixed left-3 bottom-20 z-50 flex items-center gap-1 rounded-full border border-slate-200 bg-white/95 p-1 text-xs shadow-lg backdrop-blur-md md:bottom-4"
	role="group"
	aria-label="Preview color palette"
>
	<Palette class="mx-1.5 h-4 w-4 text-slate-500" aria-hidden="true" />
	{#each options as option}
		<button
			type="button"
			aria-pressed={palette === option.value}
			onclick={() => choose(option.value)}
			class="rounded-full px-3 py-1.5 font-semibold transition-colors {palette === option.value
				? 'bg-slate-900 text-white'
				: 'text-slate-600 hover:bg-slate-100'}"
		>
			{option.label}
		</button>
	{/each}
</div>
