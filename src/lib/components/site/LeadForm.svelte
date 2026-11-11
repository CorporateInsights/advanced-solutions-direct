<script lang="ts">
	import { site, ctaClass, link } from '$lib/site';
	import { Button } from '$lib/components/ui/button';
	import CheckCircle2 from '@lucide/svelte/icons/check-circle-2';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	let { id, submitLabel = 'Get Started' }: { id: string; submitLabel?: string } = $props();

	// Fields follow the owner's Page 1 mockup. Ranges are for routing only.
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
	const programOptions = ['Yes', 'No', 'Previously'];

	let formData = $state({
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		state: '',
		totalDebt: '',
		monthlyPayments: '',
		debtType: '',
		inDebtReliefProgram: ''
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

	// Labels sit inside the fields (placeholders); real labels stay for screen readers
	const fieldClass =
		'block w-full h-11 px-4 text-[0.95rem] font-semibold bg-white rounded-xl border-[1.5px] border-slate-300 text-slate-900 placeholder:font-semibold placeholder:text-slate-700 shadow-sm outline-none transition focus:border-brand-purple/60 focus:ring-[3px] focus:ring-brand-purple/15';
	const selectClass = `${fieldClass} appearance-none pr-10 invalid:text-slate-700 [&>option]:text-slate-900 bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23334155' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[length:1rem] bg-[position:right_1rem_center] bg-no-repeat`;
</script>

{#if submitted}
	<div class="flex flex-col justify-center items-center py-8 text-center">
		<div class="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-brand-gradient">
			<CheckCircle2 class="w-8 h-8 text-white" />
		</div>
		<h3 class="mb-2 text-xl font-bold text-slate-900">Thanks. You’re all set.</h3>
		<p class="text-sm text-slate-700">
			A real person from our team will call you during business hours ({site.hours}).
		</p>
		<p class="mt-3 text-sm text-slate-700">
			Want to talk sooner?
			<a href={site.phoneHref} class="font-bold underline text-slate-900"
				>Call {site.phoneDisplay}</a
			>
		</p>
	</div>
{:else}
	<form {id} onsubmit={handleSubmit} class="space-y-2.5">
		<div class="grid grid-cols-2 gap-2.5">
			<div>
				<label for="{id}-first-name" class="sr-only">First Name</label>
				<input
					id="{id}-first-name"
					type="text"
					placeholder="First Name"
					autocomplete="given-name"
					required
					bind:value={formData.firstName}
					class={fieldClass}
				/>
			</div>
			<div>
				<label for="{id}-last-name" class="sr-only">Last Name</label>
				<input
					id="{id}-last-name"
					type="text"
					placeholder="Last Name"
					autocomplete="family-name"
					required
					bind:value={formData.lastName}
					class={fieldClass}
				/>
			</div>
		</div>

		<div>
			<label for="{id}-phone" class="sr-only">Phone</label>
			<input
				id="{id}-phone"
				type="tel"
				placeholder="Phone"
				autocomplete="tel"
				required
				bind:value={formData.phone}
				class={fieldClass}
			/>
		</div>

		<div>
			<label for="{id}-email" class="sr-only">Email</label>
			<input
				id="{id}-email"
				type="email"
				placeholder="Email"
				autocomplete="email"
				required
				bind:value={formData.email}
				class={fieldClass}
			/>
		</div>

		<div>
			<label for="{id}-state" class="sr-only">State</label>
			<select
				id="{id}-state"
				autocomplete="address-level1"
				required
				bind:value={formData.state}
				class={selectClass}
			>
				<option value="" disabled>State</option>
				{#each states as s}
					<option value={s}>{s}</option>
				{/each}
			</select>
		</div>

		<div>
			<label for="{id}-total-debt" class="sr-only">Estimated Total Debt</label>
			<select id="{id}-total-debt" required bind:value={formData.totalDebt} class={selectClass}>
				<option value="" disabled>Estimated Total Debt</option>
				{#each totalDebtOptions as o}
					<option value={o}>{o}</option>
				{/each}
			</select>
		</div>

		<div>
			<label for="{id}-monthly-payments" class="sr-only">Current Monthly Payments</label>
			<select
				id="{id}-monthly-payments"
				required
				bind:value={formData.monthlyPayments}
				class={selectClass}
			>
				<option value="" disabled>Current Monthly Payments</option>
				{#each monthlyPaymentOptions as o}
					<option value={o}>{o}</option>
				{/each}
			</select>
		</div>

		<div>
			<label for="{id}-debt-type" class="sr-only">Type of Debt</label>
			<select id="{id}-debt-type" required bind:value={formData.debtType} class={selectClass}>
				<option value="" disabled>Type of Debt</option>
				{#each debtTypeOptions as o}
					<option value={o}>{o}</option>
				{/each}
			</select>
		</div>

		<fieldset class="pt-1.5">
			<legend class="mb-2 text-[0.95rem] font-extrabold text-slate-900">
				Currently enrolled in a debt relief program?
			</legend>
			<div class="flex flex-wrap gap-x-6 gap-y-2">
				{#each programOptions as option}
					<label
						class="inline-flex gap-2 items-center text-[0.95rem] font-semibold cursor-pointer text-slate-800"
					>
						<input
							type="radio"
							name="{id}-debt-relief-program"
							value={option}
							required
							bind:group={formData.inDebtReliefProgram}
							class="w-[1.1rem] h-[1.1rem] cursor-pointer accent-brand-purple"
						/>
						{option}
					</label>
				{/each}
			</div>
		</fieldset>

		<Button
			type="submit"
			disabled={submitting}
			class="mt-2 w-full h-12 text-base rounded-full disabled:opacity-70 {ctaClass}"
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

		<!-- Consent wording from the owner's mockup. TODO: counsel to approve before launch. -->
		<p class="pt-1 text-[0.75rem] leading-relaxed text-slate-700">
			By clicking “{submitLabel},” I agree that {site.name} may contact me regarding my inquiry by phone,
			text, or email. Marketing contact consent is not required as a condition of purchase. Message and
			data rates may apply. Reply STOP to opt out of texts. See our
			<a href={link('/legal/privacy-policy')} class="font-semibold underline text-brand-purple"
				>Privacy Policy</a
			>
			and
			<a
				href={link('/legal/terms-and-conditions')}
				class="font-semibold underline text-brand-purple">Terms &amp; Conditions</a
			>.
		</p>
	</form>
{/if}
