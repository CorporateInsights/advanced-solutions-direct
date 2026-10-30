// Shared copy used on more than one page.
import { site, partners } from '$lib/site';

export type Faq = { question: string; answer: string };

// Core objection-handling FAQs (shown on the home page and at the top of /faq)
export const coreFaqs: Faq[] = [
	{
		question: 'Is the consultation really free?',
		answer: `Yes. Talking with us is free and there’s no obligation. If you choose to work with one of our ${partners.general}, any fees are set by that partner and explained in writing before you sign anything.`
	},
	{
		question: 'Are you a law firm?',
		answer: `No. ${site.name} is not a law firm and doesn’t give legal advice. We listen, explain your options, and connect you with ${partners.legal} that handles the legal work directly.`
	},
	{
		question: 'Will the collection calls stop?',
		answer:
			'Once a debt collector knows an attorney represents you, they’re generally required to contact the attorney instead of you. Every situation is different, and the law firm can tell you what to expect in yours.'
	},
	{
		question: 'How long does it take?',
		answer:
			'It depends on your accounts and how quickly collectors respond. The law firm you’re matched with can give you a better idea once it reviews your situation.'
	},
	{
		question: 'What happens on the call?',
		answer:
			'It’s a quick, no-pressure conversation with a member of our team. We’re not lawyers and we’re not debt collectors. We’ll ask about your debts and what’s been going on, walk you through your options, and, if it’s a fit, connect you with a partner that can help.'
	}
];

// Additional FAQs shown only on /faq
export const moreFaqs: Faq[] = [
	{
		question: 'Do you handle my debts yourselves?',
		answer: `No. ${site.name} doesn’t contact your creditors, validate your debts, or negotiate on your behalf. That work is done by ${partners.legal}, under its own written agreement with you.`
	},
	{
		question: 'What kinds of debt can you help with?',
		answer:
			'We commonly hear from people dealing with credit cards, medical bills, personal loans, and other consumer debts that have gone to collections. Tell us what you’re dealing with on your free call and we’ll let you know if we can help.'
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
			'Don’t ignore it. Court deadlines matter. Call us right away so we can get you connected as quickly as possible.'
	}
];
