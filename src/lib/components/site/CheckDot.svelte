<script lang="ts">
	// The site's checkmark for lists: a solid orange circle with a white check, as in the owner's
	// mockups. Use it everywhere a list has checkmarks so they all match.
	import Check from '@lucide/svelte/icons/check';

	let { size = 'md', class: extra = '' }: { size?: 'sm' | 'md'; class?: string } = $props();
</script>

<span
	class="flex justify-center items-center bg-gradient-to-br from-[#F97316] to-[#E8590C] rounded-full shadow-sm shrink-0 {size ===
	'sm'
		? 'w-[1.125rem] h-[1.125rem]'
		: 'w-6 h-6'} {extra}"
	aria-hidden="true"
>
	<Check
		class={size === 'sm' ? 'w-3 h-3 text-white' : 'w-3.5 h-3.5 text-white'}
		strokeWidth={3.5}
	/>
</span>
