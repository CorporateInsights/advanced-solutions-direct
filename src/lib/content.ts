// Shared copy used on more than one page.

export type Faq = { question: string; answer: string };

// Core objection-handling FAQs (shown on the home page and at the top of /faq)
export const coreFaqs: Faq[] = [
	{
		question: 'Is the consultation really free?',
		answer:
			'Yes. The consultation is free and there’s no obligation. If you decide to work with one of our partner law firms, any fees are set by the firm and explained in writing before you sign anything.'
	},
	{
		question: 'Are you a law firm?',
		answer:
			'No. Advanced Solutions Direct is not a law firm and doesn’t give legal advice. We connect you with independent consumer rights law firms, and their attorneys handle your legal matter directly.'
	},
	{
		question: 'Will the collection calls stop?',
		answer:
			'Once a debt collector knows an attorney represents you, they’re generally required to contact the attorney instead of you. Every situation is different, and we’ll go over yours on your free call.'
	},
	{
		question: 'How long does it take?',
		answer:
			'It depends on your accounts and how quickly collectors respond. On your free consultation, we can give you a better idea of what to expect for your situation.'
	},
	{
		question: 'What happens on the call?',
		answer:
			'It’s a quick, no-pressure conversation. We’ll ask who’s contacting you and what’s been going on, explain your options in plain English, and, if it’s a fit, connect you with a partner law firm.'
	}
];

// Additional FAQs shown only on /faq
export const moreFaqs: Faq[] = [
	{
		question: 'What kinds of debt can you help with?',
		answer:
			'We commonly hear from people dealing with credit cards, medical bills, personal loans, and other consumer debts that have gone to collections. Tell us what you’re dealing with on your free call and we’ll let you know if we can help.'
	},
	{
		question: 'Do I have to sign anything on the call?',
		answer:
			'No. The consultation is just a conversation. If you choose to move forward, you’ll receive the law firm’s agreement to review on your own time before you sign.'
	},
	{
		question: 'Will this fix my credit?',
		answer:
			'We’re not a credit repair company, and no one can guarantee changes to your credit report. The attorneys can review your situation, including how your accounts are being reported.'
	},
	{
		question: 'What if I’m being sued over a debt?',
		answer:
			'Don’t ignore it. Court deadlines matter. Call us right away so we can get you connected with a law firm as quickly as possible.'
	}
];
