<script lang="ts">
	import { site, partners } from '$lib/site';
	import LegalPage from '$lib/components/site/LegalPage.svelte';
</script>

<!-- TODO: DRAFT. Have compliance/counsel review before launch, including whether the referral
     compensation statement below is accurate and required. -->
<LegalPage title="Disclosures">
	<p
		class="p-4 text-sm font-medium text-amber-800 bg-amber-50 rounded-lg border border-amber-200"
	>
		Draft: pending compliance review.
	</p>

	<h2>We Are Not a Law Firm</h2>
	<p>
		{site.name} is not a law firm, does not provide legal advice, and is not a substitute for an
		attorney. Information on this website is for general informational purposes only.
	</p>

	<h2>Independent Partners</h2>
	<p>
		{site.name} is a referral service. We connect consumers with {partners.general}, including
		consumer rights law firms. Our partners operate independently. Legal services are provided
		solely by the law firm, and an attorney-client relationship is formed only when you sign a
		written agreement directly with that firm. {site.name} is not a party to that agreement and
		does not control the advice or services a partner provides.
	</p>

	<h2>What We Do and Don’t Do</h2>
	<p>
		{site.name} does not contact your creditors or collectors, validate or dispute debts, negotiate
		on your behalf, or hold or pay money toward your debts. That work, if any, is done by the
		partner you choose to work with.
	</p>

	<h2>Fees and Compensation</h2>
	<p>
		The consultation with {site.name} is free. Any fees for a partner’s services are set by and
		payable to that partner, as described in its written agreement. Review that agreement carefully
		before signing. {site.name} may receive compensation from partners for referrals.
	</p>

	<h2>No Guarantee of Results</h2>
	<p>
		Every situation is different. Results vary and are not guaranteed. Not all debts qualify, and
		you may still owe debts that are valid. Disputing a debt does not prevent a creditor or collector
		from filing a lawsuit. No one can guarantee changes to your credit report.
	</p>

	<h2>What We Are Not</h2>
	<p>
		{site.name} is not a credit repair organization, a debt settlement company, a debt consolidation
		company, or a lender.
	</p>

	<h2>Availability</h2>
	<p>Services are not available in all states.</p>
</LegalPage>
