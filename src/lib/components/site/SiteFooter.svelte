<script lang="ts">
	import { site, nav, legalNav, consultationHref, link } from '$lib/site';
	import Phone from '@lucide/svelte/icons/phone';
</script>

<footer class="bg-white border-t border-slate-200">
	<div class="h-1 bg-brand-gradient"></div>
	<div class="py-12 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="grid gap-10 md:grid-cols-4">
			<div class="md:col-span-2">
				<img
					src={site.logoPrimary}
					alt={site.name}
					width="384"
					height="216"
					class="-ml-3 w-auto h-24"
				/>
				<p class="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
					The first call when debt gets overwhelming. We connect people with independent partners,
					including consumer rights law firms.
				</p>
				<a
					href={site.phoneHref}
					class="inline-flex gap-2 items-center mt-4 font-semibold transition-colors text-slate-700 hover:text-brand-pink"
				>
					<Phone class="w-4 h-4 text-brand-pink" />
					{site.phoneDisplay}
				</a>
				<p class="mt-1 text-xs text-slate-500">{site.hours}</p>
			</div>

			<div>
				<p class="mb-3 text-xs font-semibold tracking-widest uppercase text-slate-500">Company</p>
				<ul class="space-y-2 text-sm">
					{#each nav as item}
						<li>
							<a href={item.href} class="transition-colors text-slate-600 hover:text-slate-900"
								>{item.label}</a
							>
						</li>
					{/each}
					<li>
						<a href={consultationHref} class="transition-colors text-slate-600 hover:text-slate-900"
							>Free Consultation</a
						>
					</li>
				</ul>
			</div>

			<div>
				<p class="mb-3 text-xs font-semibold tracking-widest uppercase text-slate-500">Legal</p>
				<ul class="space-y-2 text-sm">
					{#each legalNav as item}
						<li>
							<a href={item.href} class="transition-colors text-slate-600 hover:text-slate-900"
								>{item.label}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="pt-8 mt-10 space-y-3 border-t border-slate-100">
			<!-- Owner's approved disclaimer, verbatim. Shown on every page. -->
			<p class="text-xs leading-relaxed text-slate-500">
				{site.name} is a marketing and enrollment company, not a law firm, and does not offer debt settlement
				services. Debt validation and legal services are provided by independent law firms under separate
				client agreements. ASD receives compensation for qualifying client referrals. Eligibility, fees,
				and results vary. No specific outcome is guaranteed. Available in
				{site.statesServed}
				<a href={link('/disclosures')} class="ml-1 underline hover:text-slate-600"
					>See full disclosures</a
				>
			</p>
			<p class="text-xs text-slate-500">
				© {new Date().getFullYear()}
				{site.name}. All rights reserved.
			</p>
		</div>
	</div>
</footer>
