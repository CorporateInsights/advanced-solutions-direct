<script lang="ts">
	import { site, footerNav, legalNav, link } from '$lib/site';
	import Phone from '@lucide/svelte/icons/phone';

	const ink = 'text-[#1e1452]';
</script>

<!-- Compact footer: one row of brand + links + phone, the disclaimer, then a thin legal row -->
<footer class="bg-gradient-to-b from-white to-purple-50/60">
	<div class="h-1 bg-brand-gradient-ui"></div>

	<div class="px-4 pt-8 pb-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div
			class="flex flex-col gap-5 items-center text-center lg:flex-row lg:justify-between lg:text-left"
		>
			<a href={link('/')} class="shrink-0">
				<img src={site.logo} alt={site.name} width="357" height="182" class="w-auto h-12" />
			</a>

			<nav aria-label="Footer">
				<ul class="flex flex-wrap gap-y-2 gap-x-6 justify-center">
					{#each footerNav as item}
						<li>
							<a
								href={item.href}
								class="text-sm font-semibold transition-colors hover:text-brand-pink {ink}"
								>{item.label}</a
							>
						</li>
					{/each}
				</ul>
			</nav>

			<a
				href={site.phoneHref}
				class="inline-flex gap-2 items-center text-sm font-bold whitespace-nowrap transition-colors shrink-0 hover:text-brand-pink {ink}"
			>
				<span class="flex justify-center items-center w-8 h-8 rounded-full bg-brand-gradient-ui">
					<Phone class="w-4 h-4 text-white" />
				</span>
				{site.phoneDisplay}
				<span class="hidden font-normal xl:inline text-slate-700">· {site.hours}</span>
			</a>
		</div>

		<!-- Owner's approved disclaimer, verbatim. Shown on every page. -->
		<p
			class="pt-5 mt-6 text-[0.75rem] leading-relaxed text-center border-t lg:text-left border-slate-200/70 text-slate-700"
		>
			{site.name} is a marketing and enrollment company, not a law firm, and does not offer debt settlement
			services. Debt validation and legal services are provided by independent law firms under separate
			client agreements. ASD receives compensation for qualifying client referrals. Eligibility, fees,
			and results vary. No specific outcome is guaranteed. Available in
			{site.statesServed}
		</p>

		<div
			class="flex flex-col gap-3 items-center mt-4 text-[0.75rem] lg:flex-row lg:justify-between text-slate-700"
		>
			<p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
			<ul class="flex flex-wrap gap-y-1 gap-x-4 justify-center">
				{#each legalNav as item}
					<li>
						<a href={item.href} class="transition-colors hover:text-brand-pink">{item.label}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</footer>
