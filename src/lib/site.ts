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
	// Number from the owner's Page 1 mockup. TODO: confirm it's the live line before launch.
	phoneDisplay: '(855) 410-7368',
	phoneHref: 'tel:18554107368',
	// TODO: placeholder hours; confirm.
	hours: 'Mon–Fri 6am–6pm PT',
	// TODO: list of states served, from the owner. Shown in the landing page disclaimer.
	statesServed: '[states served]',
	// TODO: set to false at launch. Shows the brand / high-contrast palette switch for reviewers.
	showPaletteToggle: true
};

// How the site refers to the companies clients are matched with. We're a broker, so the copy
// never says "our attorneys" or that we do the work. Change these if the partner type changes.
export const partners = {
	// General phrase: hero, footer, "why us", anywhere broad
	general: 'independent partners',
	// Specific phrase: only where we explain who handles the legal work
	legal: 'an independent consumer rights law firm'
};

// Header menu, per the owner's Page 1 mockup (the logo links home)
export const nav = [
	{ href: link('/how-it-works'), label: 'How It Works' },
	{ href: link('/who-we-help'), label: 'Who We Help' },
	{ href: link('/faq'), label: 'FAQ' }
];

// Footer keeps the full list of pages
export const footerNav = [
	{ href: link('/'), label: 'Home' },
	{ href: link('/how-it-works'), label: 'How It Works' },
	{ href: link('/who-we-help'), label: 'Who We Help' },
	{ href: link('/about'), label: 'About' },
	{ href: link('/faq'), label: 'FAQ' }
];

// Main call to action label, used in the header, mobile bar and buttons
export const ctaLabel = 'Explore My Options';

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
