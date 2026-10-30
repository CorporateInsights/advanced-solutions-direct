// Shared copy used on more than one page.
import { site, partners } from '$lib/site';

export type Faq = { question: string; answer: string };

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
		question: 'Is the consultation really free?',
		answer: `Yes. Talking with us is free and there’s no obligation. If you choose to work with one of our ${partners.general}, any fees are set by that partner and explained in writing before you sign anything.`
	},
	{
		question: 'Are you a law firm?',
		answer: `No. ${site.name} is not a law firm and doesn’t give legal advice. We listen, explain how the process works, and connect you with ${partners.legal} that handles the legal work directly.`
	},
	{
		question: 'What kinds of debt can you help with?',
		answer: `Most types of personal debt, including credit cards, medical bills, and personal loans. ${debtExclusions} Tell us what you’re dealing with on your free call and we’ll let you know if it’s a fit.`
	},
	{
		question: 'How long does it take?',
		answer:
			'It depends on your accounts and your situation. The law firm can give you a better idea once it reviews them.'
	},
	{
		question: 'What happens on the call?',
		answer:
			'It’s a short, no-pressure conversation with a member of our team. We’re not lawyers and we’re not debt collectors. We’ll ask about your debts and what’s been going on, explain how the process works, and, if it’s a fit, connect you with a partner who can review your situation.'
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
			'You may have more rights than you realize. Collectors have rules they must follow, and they have to be able to back up what they say you owe. If you hire an attorney, collectors are generally required to contact the attorney instead of you. Original creditors may follow different rules. The law firm can tell you what to expect for your accounts.'
	},
	{
		question: 'Do I have to sign anything on the call?',
		answer:
			'No. The consultation is just a conversation. If you choose to move forward, the law firm will send you its agreement to review on your own time before you sign.'
	},
	{
		question: 'Will this fix my credit?',
		answer:
			'No one can guarantee changes to your credit report, and we’re not a credit repair company. The law firm can review your situation, including how your accounts are being reported.'
	},
	{
		question: 'What if I’m being sued over a debt?',
		answer:
			'Don’t ignore it. Court deadlines are strict, so speak with an attorney right away. You can call us too, and if our partner firm handles situations like yours, we’ll connect you quickly.'
	},
	{
		question: 'How do you get paid?',
		answer:
			'Talking with us is free. We may be paid by our partners when we refer someone to them. That never changes what we tell you on the call.'
	}
];
