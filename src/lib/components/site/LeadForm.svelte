<script lang="ts">
	import { ctaClass } from '$lib/site';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import CheckCircle2 from '@lucide/svelte/icons/check-circle-2';
	import Phone from '@lucide/svelte/icons/phone';
	import Mail from '@lucide/svelte/icons/mail';
	import User from '@lucide/svelte/icons/user';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Lock from '@lucide/svelte/icons/lock';

	let { id }: { id: string } = $props();

	const collectorOptions = ['Yes', 'No', 'Not sure'];

	let formData = $state({
		contacted: '',
		name: '',
		phone: '',
		email: ''
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
</script>

{#if submitted}
	<div class="flex flex-col justify-center items-center py-8 text-center">
		<div class="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-brand-gradient">
			<CheckCircle2 class="w-8 h-8 text-white" />
		</div>
		<h3 class="mb-2 text-xl font-bold text-slate-900">Thanks, We Got It!</h3>
		<p class="text-sm text-slate-600">
			A member of our team will reach out soon to set up your free consultation.
		</p>
	</div>
{:else}
	<form {id} onsubmit={handleSubmit} class="space-y-3">
		<!-- Easy first question to start the form; optional -->
		<fieldset class="space-y-1.5">
			<legend class="mb-1.5 text-xs font-semibold text-slate-600">
				Is a debt collector contacting you?
			</legend>
			<div class="grid grid-cols-3 gap-2">
				{#each collectorOptions as option}
					<label
						class="flex justify-center items-center h-10 text-sm font-semibold rounded-lg border cursor-pointer transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-pink {formData.contacted ===
						option
							? 'border-brand-pink bg-pink-50 text-slate-900'
							: 'border-slate-200 text-slate-600 hover:border-pink-200'}"
					>
						<input
							type="radio"
							name="{id}-contacted"
							value={option}
							bind:group={formData.contacted}
							class="sr-only"
						/>
						{option}
					</label>
				{/each}
			</div>
		</fieldset>
		<div class="space-y-1.5">
			<Label for="{id}-name" class="text-xs font-semibold text-slate-600">Full Name</Label>
			<div class="relative">
				<User class="absolute left-3 top-1/2 w-4 h-4 -translate-y-1/2 text-slate-500" />
				<Input
					id="{id}-name"
					type="text"
					placeholder="Jane Smith"
					autocomplete="name"
					required
					bind:value={formData.name}
					class="pl-9 h-11 border-slate-200"
				/>
			</div>
		</div>
		<div class="space-y-1.5">
			<Label for="{id}-phone" class="text-xs font-semibold text-slate-600">Phone Number</Label>
			<div class="relative">
				<Phone class="absolute left-3 top-1/2 w-4 h-4 -translate-y-1/2 text-slate-500" />
				<Input
					id="{id}-phone"
					type="tel"
					placeholder="(555) 123-4567"
					autocomplete="tel"
					required
					bind:value={formData.phone}
					class="pl-9 h-11 border-slate-200"
				/>
			</div>
		</div>
		<div class="space-y-1.5">
			<Label for="{id}-email" class="text-xs font-semibold text-slate-600">Email Address</Label>
			<div class="relative">
				<Mail class="absolute left-3 top-1/2 w-4 h-4 -translate-y-1/2 text-slate-500" />
				<Input
					id="{id}-email"
					type="email"
					placeholder="jane@email.com"
					autocomplete="email"
					required
					bind:value={formData.email}
					class="pl-9 h-11 border-slate-200"
				/>
			</div>
		</div>
		<!-- TODO: add TCPA consent language (calls/texts) reviewed by compliance before going live. -->
		<Button
			type="submit"
			disabled={submitting}
			class="w-full h-12 text-base tracking-wide disabled:opacity-70 {ctaClass}"
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
				Get My Free Consultation
				<ArrowRight class="ml-2 w-4 h-4" />
			{/if}
		</Button>
		<p class="flex gap-1.5 justify-center items-center pt-1 text-xs text-slate-500">
			<Lock class="w-3 h-3" />
			Your information is kept private and secure
		</p>
	</form>
{/if}
