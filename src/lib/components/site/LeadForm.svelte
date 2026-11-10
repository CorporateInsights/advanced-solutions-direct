<script lang="ts">
	import { site, ctaClass, legalNav } from '$lib/site';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import CheckCircle2 from '@lucide/svelte/icons/check-circle-2';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Lock from '@lucide/svelte/icons/lock';

	let { id, submitLabel = 'Get My Free Consultation' }: { id: string; submitLabel?: string } =
		$props();

	// Fields follow the owner's application form spec. Ranges are for routing only.
	const states = [
		'Alabama',
		'Alaska',
		'Arizona',
		'Arkansas',
		'California',
		'Colorado',
		'Connecticut',
		'Delaware',
		'District of Columbia',
		'Florida',
		'Georgia',
		'Hawaii',
		'Idaho',
		'Illinois',
		'Indiana',
		'Iowa',
		'Kansas',
		'Kentucky',
		'Louisiana',
		'Maine',
		'Maryland',
		'Massachusetts',
		'Michigan',
		'Minnesota',
		'Mississippi',
		'Missouri',
		'Montana',
		'Nebraska',
		'Nevada',
		'New Hampshire',
		'New Jersey',
		'New Mexico',
		'New York',
		'North Carolina',
		'North Dakota',
		'Ohio',
		'Oklahoma',
		'Oregon',
		'Pennsylvania',
		'Rhode Island',
		'South Carolina',
		'South Dakota',
		'Tennessee',
		'Texas',
		'Utah',
		'Vermont',
		'Virginia',
		'Washington',
		'West Virginia',
		'Wisconsin',
		'Wyoming'
	];
	const totalDebtOptions = [
		'Under $10,000',
		'$10,000 – $24,999',
		'$25,000 – $49,999',
		'$50,000 – $99,999',
		'$100,000 or more'
	];
	const monthlyPaymentOptions = [
		'Under $250',
		'$250 – $499',
		'$500 – $999',
		'$1,000 – $1,999',
		'$2,000 or more'
	];
	const debtTypeOptions = [
		'Credit cards',
		'Personal loans',
		'Collections',
		'Medical bills',
		'Multiple types',
		'Other'
	];

	let formData = $state({
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		state: '',
		totalDebt: '',
		monthlyPayments: '',
		debtType: '',
		inDebtSettlement: ''
	});

	let submitted = $state(false);
	let submitting = $state(false);

	// TODO: wire to the real lead destination. This only simulates a submit.
	function handleSubmit(e: Event) {
		e.preventDefault();
		submitting = true;
		setTimeout(() => {
			submitting = false;
			submitted = true;
		}, 1500);
	}

	const labelClass = 'text-sm font-semibold text-slate-700';
	const fieldClass = 'h-11 border-slate-200';
	const selectClass =
		'flex w-full h-11 px-3 text-sm bg-white rounded-md border border-slate-200 shadow-xs outline-none text-slate-900 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 invalid:text-slate-500 [&>option]:text-slate-900';
</script>

{#if submitted}
	<div class="flex flex-col justify-center items-center py-8 text-center">
		<div class="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-brand-gradient">
			<CheckCircle2 class="w-8 h-8 text-white" />
		</div>
		<h3 class="mb-2 text-xl font-bold text-slate-900">Thanks. You’re all set.</h3>
		<p class="text-sm text-slate-600">
			A real person from our team will call you during business hours ({site.hours}).
		</p>
		<p class="mt-3 text-sm text-slate-600">
			Want to talk sooner?
			<a href={site.phoneHref} class="font-bold underline text-slate-900"
				>Call {site.phoneDisplay}</a
			>
		</p>
	</div>
{:else}
	<form {id} onsubmit={handleSubmit} class="space-y-3">
		<div class="grid grid-cols-2 gap-3">
			<div class="space-y-1.5">
				<Label for="{id}-first-name" class={labelClass}>First Name</Label>
				<Input
					id="{id}-first-name"
					type="text"
					autocomplete="given-name"
					required
					bind:value={formData.firstName}
					class={fieldClass}
				/>
			</div>
			<div class="space-y-1.5">
				<Label for="{id}-last-name" class={labelClass}>Last Name</Label>
				<Input
					id="{id}-last-name"
					type="text"
					autocomplete="family-name"
					required
					bind:value={formData.lastName}
					class={fieldClass}
				/>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
			<div class="space-y-1.5">
				<Label for="{id}-phone" class={labelClass}>Phone</Label>
				<Input
					id="{id}-phone"
					type="tel"
					placeholder="(555) 123-4567"
					autocomplete="tel"
					required
					bind:value={formData.phone}
					class={fieldClass}
				/>
			</div>
			<div class="space-y-1.5">
				<Label for="{id}-email" class={labelClass}>Email</Label>
				<Input
					id="{id}-email"
					type="email"
					placeholder="jane@email.com"
					autocomplete="email"
					required
					bind:value={formData.email}
					class={fieldClass}
				/>
			</div>
		</div>

		<div class="space-y-1.5">
			<Label for="{id}-state" class={labelClass}>State</Label>
			<select
				id="{id}-state"
				autocomplete="address-level1"
				required
				bind:value={formData.state}
				class={selectClass}
			>
				<option value="" disabled>Select your state</option>
				{#each states as s}
					<option value={s}>{s}</option>
				{/each}
			</select>
		</div>

		<div class="space-y-1.5">
			<Label for="{id}-total-debt" class={labelClass}>Estimated Total Debt</Label>
			<select id="{id}-total-debt" required bind:value={formData.totalDebt} class={selectClass}>
				<option value="" disabled>Select an amount</option>
				{#each totalDebtOptions as o}
					<option value={o}>{o}</option>
				{/each}
			</select>
		</div>

		<div class="space-y-1.5">
			<Label for="{id}-monthly-payments" class={labelClass}>Current Monthly Debt Payments</Label>
			<select
				id="{id}-monthly-payments"
				required
				bind:value={formData.monthlyPayments}
				class={selectClass}
			>
				<option value="" disabled>Select an amount</option>
				{#each monthlyPaymentOptions as o}
					<option value={o}>{o}</option>
				{/each}
			</select>
		</div>

		<div class="space-y-1.5">
			<Label for="{id}-debt-type" class={labelClass}>Type of Debt</Label>
			<select id="{id}-debt-type" required bind:value={formData.debtType} class={selectClass}>
				<option value="" disabled>Select a type</option>
				{#each debtTypeOptions as o}
					<option value={o}>{o}</option>
				{/each}
			</select>
		</div>

		<fieldset class="space-y-1.5">
			<legend class="mb-1.5 {labelClass}">Currently in Debt Settlement?</legend>
			<div class="grid grid-cols-2 gap-2">
				{#each ['Yes', 'No'] as option}
					<label
						class="flex justify-center items-center h-11 text-sm font-semibold rounded-lg border cursor-pointer transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-pink {formData.inDebtSettlement ===
						option
							? 'border-brand-pink bg-pink-50 text-slate-900'
							: 'border-slate-200 text-slate-600 hover:border-pink-200'}"
					>
						<input
							type="radio"
							name="{id}-in-debt-settlement"
							value={option}
							required
							bind:group={formData.inDebtSettlement}
							class="sr-only"
						/>
						{option}
					</label>
				{/each}
			</div>
		</fieldset>

		<!-- DRAFT consent language. MUST be replaced with counsel-approved TCPA wording before launch,
		     including whether partners are named and whether automated calls/texts are used. -->
		<p class="text-xs leading-relaxed text-slate-500">
			<span class="font-semibold">Draft, pending legal review:</span> By submitting, you agree that
			{site.name} and its partners may contact you at the number and email you provided, including by
			phone call or text message. Consent isn’t required to get help. Message and data rates may apply.
		</p>
		<Button
			type="submit"
			disabled={submitting}
			class="w-full h-12 text-base tracking-wide uppercase disabled:opacity-70 {ctaClass}"
		>
			{#if submitting}
				<span class="flex gap-2 items-center">
					<svg class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
						<circle
							class="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							stroke-width="4"
						/>
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
						/>
					</svg>
					Submitting...
				</span>
			{:else}
				{submitLabel}
				<ArrowRight class="ml-2 w-4 h-4" />
			{/if}
		</Button>
		<p class="pt-1 text-xs text-center text-slate-500">
			<Lock class="inline mr-1 w-3 h-3 align-[-1px]" />
			We use your information as described in our
			<a href={legalNav[0].href} class="underline hover:text-slate-700">Privacy Policy</a>.
		</p>
	</form>
{/if}
