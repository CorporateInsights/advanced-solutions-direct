// Shared copy used on more than one page. Voice and rules: docs/VOICE_GUIDE.md
import { site, partners } from '$lib/site';
import TrendingUp from '@lucide/svelte/icons/trending-up';
import Stethoscope from '@lucide/svelte/icons/stethoscope';
import CalendarX from '@lucide/svelte/icons/calendar-x';
import PhoneCall from '@lucide/svelte/icons/phone-call';
import CreditCard from '@lucide/svelte/icons/credit-card';
import Gavel from '@lucide/svelte/icons/gavel';

export type Faq = { question: string; answer: string };

// Situations people recognize, in their own words. Broad first; collections is one among equals.
export const situations = [
	{
		icon: TrendingUp,
		title: 'The balance never seems to shrink',
		description: 'You pay every month, but interest and fees keep it right where it was.'
	},
	{
		icon: Stethoscope,
		title: 'Medical bills you didn’t see coming',
		description: 'An illness, injury, or hospital stay left you with bills you weren’t ready for.'
	},
	{
		icon: CalendarX,
		title: 'More bills than paycheck',
		description: 'Juggling due dates every month is wearing you down.'
	},
	{
		icon: PhoneCall,
		title: 'Calls you dread answering',
		description: 'Collectors calling and writing, sometimes about debts you don’t recognize.'
	},
	{
		icon: CreditCard,
		title: 'Collections on your credit report',
		description: 'Accounts in collections, and you want to understand what they mean for you.'
	},
	{
		icon: Gavel,
		title: 'Worried about being sued',
		description:
			'Letters or calls mentioning court. If you’ve been served, talk to an attorney right away.'
	}
];

// Debt types we can generally consider, and common exclusions (confirm with the partner)
export const debtTypes = [
	'Credit cards',
	'Medical bills',
	'Personal loans',
	'Store cards',
	'Private student loans',
	'Utility bills',
	'Other personal debts'
];
export const debtExclusions = 'Mortgages, federal student loans, and tax debt usually aren’t a fit.';

// Core objection-handling FAQs (shown on the home page and at the top of /faq)
export const coreFaqs: Faq[] = [
	{
		question: 'Is the call really free?',
		answer: `Yes. Talking with us is free, and you’re never obligated to do anything. If you choose to work with one of our ${partners.general}, any fees are set by that partner and explained in writing before you sign.`
	},
	{
		question: 'Are you a law firm?',
		answer: `No. ${site.name} is not a law firm and doesn’t give legal advice. We listen, explain how the process works, and, if it’s a fit, connect you with ${partners.legal} that handles the legal work directly.`
	},
	{
		question: 'What kinds of debt do people call you about?',
		answer: `Most types of personal debt, including credit cards, medical bills, and personal loans. ${debtExclusions} Not sure about yours? Ask us on the call.`
	},
	{
		question: 'How long does it take?',
		answer:
			'Every situation is different. The law firm can give you a better idea once it reviews your accounts.'
	},
	{
		question: 'What happens on the call?',
		answer:
			'You’ll talk with a real person on our team. We’re not lawyers and we’re not debt collectors. We’ll ask about your debts and what’s been going on, explain how the process works, and, if it’s a fit, connect you with a partner who can review your situation. No pressure, ever.'
	}
];

// Additional FAQs shown only on /faq
export const moreFaqs: Faq[] = [
	{
		question: 'Do you handle my debts yourselves?',
		answer: `No. ${site.name} doesn’t contact your creditors, validate your debts, or negotiate on your behalf. That work is done by ${partners.legal}, under its own written agreement with you.`
	},
	{
		question: 'What if debt collectors are already calling me?',
		answer:
			'You may have more rights than you realize. Collectors have rules they must follow, and if you dispute a debt, they generally have to verify it. The law firm can tell you what to expect for your accounts.'
	},
	{
		question: 'Do I have to sign anything on the call?',
		answer:
			'No. The call is just a conversation. If you choose to move forward, the law firm sends you its agreement to review on your own time before you sign.'
	},
	{
		question: 'Will this fix my credit?',
		answer:
			'No one can guarantee changes to your credit report, and we’re not a credit repair company.'
	},
	{
		question: 'What if I’m being sued over a debt?',
		answer:
			'Don’t ignore it. Court deadlines are strict, so speak with an attorney right away. You can call us too, and if our partner firm handles situations like yours, we can connect you. But don’t wait on us to respond to the court.'
	},
	{
		question: 'How do you get paid?',
		answer:
			'Talking with us is free. We may be paid by our partners when we refer someone to them. You’ll always know who you’re working with, and what they charge, before you sign anything.'
	}
];
