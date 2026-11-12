<script lang="ts">
	// The site's checkmark for lists: a solid orange circle with a white check, as in the owner's
	// mockups. Use it everywhere a list has checkmarks (with checkItemClass) so they all match.
	import Check from '@lucide/svelte/icons/check';

	let { class: extra = '' }: { class?: string } = $props();
</script>

<span
	class="flex justify-center items-center w-6 h-6 bg-gradient-to-br from-[#F97316] to-[#E8590C] rounded-full shadow-sm shrink-0 {extra}"
	aria-hidden="true"
>
	<Check class="w-3.5 h-3.5 text-white" strokeWidth={3.5} />
</span>
