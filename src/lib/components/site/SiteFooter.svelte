<script lang="ts">
	import { site, partners, nav, legalNav, consultationHref, link } from '$lib/site';
	import Phone from '@lucide/svelte/icons/phone';
</script>

<footer class="bg-white border-t border-slate-200">
	<div class="h-1 bg-brand-gradient"></div>
	<div class="py-12 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="grid gap-10 md:grid-cols-4">
			<div class="md:col-span-2">
				<img src={site.logoPrimary} alt={site.name} width="384" height="216" class="-ml-3 w-auto h-24" />
				<p class="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
					Connecting people dealing with debt to independent partners.
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
			<!-- TODO: have compliance/counsel review this disclaimer, including the referral
			     compensation sentence. -->
			<p class="text-xs leading-relaxed text-slate-500">
				{site.name} is not a law firm, does not provide legal advice, and is not a substitute for an
				attorney. We connect consumers with {partners.general}, including consumer rights law firms,
				which operate independently. Legal services are provided solely by those firms, and an
				attorney-client relationship is formed only through a written agreement between you and the law
				firm. Any fees for legal services are set by and payable to the law firm as described in that
				agreement. We may be paid by partners for referrals. Results vary and are not guaranteed.
				{site.name} is not a credit repair organization, a debt settlement or debt consolidation
				company, or a lender. Services are not available in all states.
				<a href={link('/disclosures')} class="underline hover:text-slate-600">See full disclosures</a>.
			</p>
			<p class="text-xs text-slate-500">
				© {new Date().getFullYear()}
				{site.name}. All rights reserved.
			</p>
		</div>
	</div>
</footer>
