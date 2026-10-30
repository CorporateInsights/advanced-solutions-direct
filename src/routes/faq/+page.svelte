<script lang="ts">
	import { site } from '$lib/site';
	import { coreFaqs, moreFaqs } from '$lib/content';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import FaqList from '$lib/components/site/FaqList.svelte';
	import CtaSection from '$lib/components/site/CtaSection.svelte';
</script>

<svelte:head>
	<title>FAQ | {site.name}</title>
	<meta
		name="description"
		content="Answers to common questions about Advanced Solutions Direct, our free consultation, and how we connect you with independent partners."
	/>
</svelte:head>

<PageHeader
	eyebrow="FAQ"
	title="Straight Answers to"
	highlight=" Common Questions."
	description="Here are the questions we hear most. For anything specific to your situation, the free consultation is the best place to start."
/>

<section class="pb-8">
	<div class="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
		<FaqList faqs={[...coreFaqs, ...moreFaqs]} />
	</div>
</section>

<CtaSection
	title="Still Have Questions?"
	description="We’re happy to answer them. Call us or request a free consultation. There’s no cost and no obligation."
/>
