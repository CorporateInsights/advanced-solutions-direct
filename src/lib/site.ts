import { base } from '$app/paths';

// Prefix internal paths with the deploy base path (e.g. /repo-name on GitHub Pages).
export const link = (path: string) => `${base}${path}`;

// Central place for brand + contact details. Swap placeholders here once they're final.
export const site = {
	name: 'Advanced Solutions Direct',
	// Full logo with the arch, cropped tight for the header
	logo: link('/brand/asd-logo-header.svg'),
	logoPrimary: link('/brand/asd-logo-primary.svg'),
	icon: link('/favicon.ico'),
	appleIcon: link('/brand/apple-touch-icon.png'),
	// TODO: placeholder phone number; replace with the real line.
	phoneDisplay: '(800) 555-0123',
	phoneHref: 'tel:18005550123',
	// TODO: placeholder hours; confirm.
	hours: 'Mon–Fri 6am–6pm PT'
};

// How the site refers to the companies clients are matched with. We're a broker, so the copy
// never says "our attorneys" or that we do the work. Change these if the partner type changes.
export const partners = {
	// General phrase: hero, footer, "why us", anywhere broad
	general: 'independent partners',
	// Specific phrase: only where we explain who handles the legal work
	legal: 'an independent consumer rights law firm'
};

// TODO: placeholder. Replace with the company's Workable careers page once it's provided.
export const careersHref = 'https://apply.workable.com/';

// Menu, per the owner's latest mockups: Home | Who We Help | FAQ | Who We Are | Careers.
// External links open in a new tab.
export const nav: { href: string; label: string; external?: boolean }[] = [
	{ href: link('/'), label: 'Home' },
	{ href: link('/who-we-help'), label: 'Who We Help' },
	{ href: link('/faq'), label: 'FAQ' },
	{ href: link('/who-we-are'), label: 'Who We Are' },
	{ href: careersHref, label: 'Careers', external: true }
];

// Footer uses the same list
export const footerNav = nav;

// Main call to action label, used in the header, mobile bar and buttons
export const ctaLabel = 'Discover My Options';

// Legal pages. Each slug is served by src/routes/legal/[slug] (except Disclosures, which has its own page).
// TODO: final text for each page to be provided by counsel.
export const legalPages = [
	{ slug: 'privacy-policy', label: 'Privacy Policy' },
	{ slug: 'terms-and-conditions', label: 'Terms & Conditions' },
	{ slug: 'privacy-notice', label: 'Privacy Notice' },
	{ slug: 'california-privacy-notice', label: 'California Privacy Notice' },
	{ slug: 'communication-consent', label: 'Communication Consent' },
	{ slug: 'arbitration-agreement', label: 'Arbitration Agreement' }
];

export const legalNav = [
	...legalPages.map((p) => ({ href: link(`/legal/${p.slug}`), label: p.label })),
	{ href: link('/disclosures'), label: 'Disclosures' }
];

export const consultationHref = link('/free-consultation');

// Shared style for primary (gradient) buttons
export const ctaClass =
	'bg-brand-gradient-ui font-bold text-white shadow-md shadow-pink-500/20 transition hover:brightness-110 hover:shadow-lg hover:shadow-pink-500/30';

// Shared look, taken from the home page, so every page matches
export const inkText = 'text-[#1e1452]';
export const accentText = 'text-[#D9480F]';
export const sectionTitleClass = `text-3xl font-extrabold tracking-tight leading-tight text-balance sm:text-[2.25rem] lg:text-[2.6rem] ${inkText}`;
export const leadClass = 'text-lg font-medium leading-relaxed sm:text-xl text-slate-800';
export const cardClass =
	'bg-white rounded-2xl border shadow-md border-slate-200 shadow-purple-900/5';
export const iconBadgeClass =
	'flex justify-center items-center w-14 h-14 bg-purple-50 rounded-2xl shrink-0';
// Soft tinted band that sets a section apart from the white ones around it
export const bandClass = 'bg-gradient-to-b from-purple-50 to-pink-50/60';
