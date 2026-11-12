// Shared copy used on more than one page. Voice and rules: docs/VOICE_GUIDE.md
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
export const debtExclusions =
	'Mortgages, federal student loans, and tax debt usually aren’t a fit.';

// FAQ page copy, word for word from the owner's Q&A document (Nov 2026). Don't change the
// wording without the owner's sign-off. Numbers run 1-22 across both groups.
export const faqGettingStarted: Faq[] = [
	{
		question: 'Is Advanced Solutions Direct a legitimate, licensed U.S. business?',
		answer:
			'Yes. Advanced Solutions Direct is a U.S.-based business dedicated to helping consumers explore alternative solutions to their financial challenges. We work with independent, highly vetted professional service providers who specialize in consumer rights and financial solutions.'
	},
	{
		question: 'Are you based in the United States?',
		answer:
			'Yes! Advanced Solutions Direct is based in the United States. Our headquarters are located in Tempe, Arizona, and our team is here to help consumers across the states we serve.'
	},
	{
		question: 'Which states do you serve?',
		answer: 'We can assist consumers nationwide.'
	},
	{
		question: 'Are you another debt settlement company or a lender?',
		answer:
			'No. We’re not a debt settlement company or a lender. We help consumers explore a different approach to addressing debt, one that many consumers have never been offered. We also have access to an extensive network of lenders and can help explore loan options you may qualify for. Our goal is simple: Helping our clients find ways to keep more of their hard-earned money.'
	},
	{
		question: 'Are you recommending bankruptcy?',
		answer:
			'No! Our focus is helping consumers explore alternatives to bankruptcy. You may have other options available that are worth considering before taking such a significant financial step.'
	},
	{
		question: 'Is there a consultation fee to speak with someone?',
		answer:
			'No! Your consultation with us is completely free, with no obligation to move forward. We’re here to help you explore your options.'
	},
	{
		question: 'Do I need to make a payment today?',
		answer:
			'No! There’s no payment required today. If you decide to move forward, we’ll arrange payment dates that work.'
	},
	{
		question: 'Will applying affect my credit score?',
		answer:
			'No, not at all. We don’t perform hard credit inquiries when you apply, so submitting an application won’t affect your credit score.'
	},
	{
		question: 'What do I need to do to get started?',
		answer:
			'Getting started is easy! Simply give us a call to be immediately assigned to your service agent, or complete our short online application, and a member of our team will contact you to discuss the options that may be available. There’s no obligation to move forward.'
	}
];

export const faqExistingDebt: Faq[] = [
	{
		question: 'I’m already enrolled in a debt settlement program. Can you still help me?',
		answer:
			'Absolutely! Many consumers are already enrolled in debt settlement programs and may be looking for an alternative option. Whether you’re frustrated with slow progress or payments that are difficult to afford, you may qualify for another option that may work better for your financial situation.'
	},
	{
		question: 'Will I have to start all over if I’m already enrolled in a debt settlement program?',
		answer:
			'No, not necessarily. Your existing debt situation and any progress you’ve already made will be reviewed to determine the best way to move forward.'
	},
	{
		question: 'What if I’ve already paid thousands of dollars into a debt settlement program?',
		answer:
			'You’re entitled to the remaining funds in your dedicated account, including any accrued interest, minus fees legitimately earned under FTC rules. Under applicable federal rules, refundable funds must be returned within 7 business days of your cancellation request.'
	},
	{
		question: 'Can my current debt settlement company charge me a penalty for canceling?',
		answer:
			'No, not under applicable federal rules for covered debt settlement services. You have the right to cancel without a cancellation penalty. Fees already legitimately earned are separate.'
	},
	{
		question: 'Can I qualify if I’m retired or living on a fixed income?',
		answer:
			'Absolutely! We understand that retirement, Social Security, and fixed incomes can make managing high monthly debt payments especially challenging.'
	},
	{
		question: 'What types of debt can you help with?',
		answer:
			'Our focus includes unsecured debts such as credit cards, personal loans, medical bills, certain collection accounts, private student loans, and eligible balances remaining after repossession. We may also be able to assist with other debts that traditional debt settlement programs cannot include.'
	},
	{
		question: 'Can you help if my accounts have already been sent to collections?',
		answer:
			'Yes! Even when accounts have been turned over to collection agencies, consumers have important rights under federal and state laws. We can help you explore what assistance may be available.'
	},
	{
		question: 'What if debt collectors are already calling me?',
		answer:
			'You may have more rights than you realize! Debt collectors must follow specific laws. If you are receiving calls from creditors, or are worried about those calls, be sure to bring them up when you speak with your agent. Knowing and protecting your rights is an important part of the solution.'
	},
	{
		question: 'Do I have legal rights when dealing with creditors and debt collectors?',
		answer:
			'Absolutely! Federal and state consumer protection laws provide important rights, even when you owe money. You may have protections you aren’t aware of, and understanding those rights can open the door to additional options. You will have a team working for you, not against you.'
	},
	{
		question: 'Will this replace my current debt settlement payment?',
		answer:
			'If you choose to leave your existing debt settlement program, you will want to cancel that agreement and request the return of any refundable funds. Under applicable federal rules, refundable funds must be returned within 7 business days of your cancellation request.'
	},
	{
		question:
			'Am I required to turn over my refunded money from my debt settlement company to the new plan?',
		answer:
			'No! Your remaining funds belong to you. You can put them into savings, use them toward your new payments, or decide how best to use that money.'
	},
	{
		question: 'Is there legal protection available?',
		answer:
			'Yes. When you retain a participating law firm, you’ll have an attorney dedicated to protecting your consumer rights within the scope of your legal agreement.'
	},
	{
		question: 'Can I invite friends or family members to apply?',
		answer:
			'Of course! If someone you know is struggling with high debt balances or looking for an alternative to traditional debt settlement, encourage them to explore their options. Every application is evaluated individually.'
	}
];
