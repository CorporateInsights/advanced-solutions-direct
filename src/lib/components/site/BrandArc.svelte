<script lang="ts">
	// Decorative brand arc, traced from the ASD brand kit's arc icon. Purely visual.
	let { class: className = '' }: { class?: string } = $props();

	// Unique gradient ids so several arcs can share a page
	const uid = Math.random().toString(36).slice(2, 8);
</script>

<svg
	class={className}
	viewBox="44 0 263 74"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
	focusable="false"
>
	<defs>
		<linearGradient id="arc-{uid}" gradientUnits="userSpaceOnUse" x1="48" y1="40" x2="303" y2="40">
			<stop stop-color="#FF8A00" />
			<stop offset=".23" stop-color="#FFC83D" />
			<stop offset=".48" stop-color="#FF2D55" />
			<stop offset=".68" stop-color="#D100BB" />
			<stop offset="1" stop-color="#7A00FF" />
		</linearGradient>
		<linearGradient id="inner-{uid}" gradientUnits="userSpaceOnUse" x1="84" y1="60" x2="188" y2="25">
			<stop stop-color="#D91436" />
			<stop offset=".5" stop-color="#FF2D55" />
			<stop offset="1" stop-color="#FF8A00" />
		</linearGradient>
	</defs>
	<path
		d="M48 71 C88 22 138 2 177 3 C229 1 276 27 303 71 H276 C250 31 213 20 177 21 C139 20 100 39 75 71 Z"
		fill="url(#arc-{uid})"
	/>
	<path d="M84 71 C113 38 146 24 188 27 C149 27 119 41 96 71 Z" fill="url(#inner-{uid})" />
</svg>
