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

// The company's Workable careers page.
export const careersHref = 'https://apply.workable.com/corporate-insights/';

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
// Heading scale, shared by every page so titles match across the site. The min(..., cqi) part
// only kicks in on very narrow screens with large text, so long words never overflow.
// Page title (the h1 at the top of each inner page)
export const pageTitleClass = `text-[min(2.25rem,11cqi)] font-black tracking-tight leading-[1.05] text-balance sm:text-[min(3rem,11cqi)] lg:text-[min(3.5rem,11cqi)] ${inkText}`;
// Section heading (the big h2 that opens each section)
export const sectionTitleClass = `text-[min(1.875rem,10cqi)] font-black tracking-tight leading-tight text-balance sm:text-[2.25rem] lg:text-[2.75rem] ${inkText}`;
// Heading inside a panel or banner (one step down from a section heading)
export const panelTitleClass = `text-[min(1.75rem,10cqi)] font-black tracking-tight leading-tight text-balance sm:text-[2rem] lg:text-[2.25rem] ${inkText}`;
// Closing call-to-action heading (no color, so it works on white and on the purple band)
export const closingTitleClass =
	'text-[min(1.875rem,10cqi)] font-black tracking-tight leading-tight text-balance sm:text-[min(2.5rem,10cqi)] lg:text-5xl';
// Card title
export const cardTitleClass = `text-[min(1.25rem,10cqi)] font-extrabold leading-snug text-balance sm:text-[1.375rem] ${inkText}`;
// Checkmark list item (pair with <CheckDot />), same on every page
export const checkItemClass = `flex gap-3 items-start text-lg font-bold leading-snug break-words hyphens-auto ${inkText}`;
// Small uppercase label above a heading (add a color)
export const eyebrowClass =
	'text-sm font-extrabold tracking-wider uppercase sm:text-base sm:tracking-[0.15em]';
export const leadClass = 'text-lg font-medium leading-relaxed sm:text-xl text-slate-800';
export const cardClass =
	'bg-white rounded-2xl border shadow-md border-slate-200 shadow-purple-900/5';
export const iconBadgeClass =
	'flex justify-center items-center w-14 h-14 bg-purple-50 rounded-2xl shrink-0';
// Soft tinted band that sets a section apart from the white ones around it
export const bandClass = 'bg-gradient-to-b from-purple-50 to-pink-50/60';
