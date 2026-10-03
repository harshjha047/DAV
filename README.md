# DAV Networks — Next.js + Tailwind

Next.js 14 (App Router, JavaScript) + Tailwind CSS 3.

## Run
```bash
npm install
cp .env.local.example .env.local   # optional — defaults are built in
npm run dev                        # http://localhost:3000
npm run build && npm start         # production
```

## Where things live
- `lib/site.js` — phone, email, Google Sheet endpoint, plans, FAQs, all copy/data
- `app/page.js` — page sections
- `components/Header.jsx` — sticky header + mobile menu
- `components/Faq.jsx` — accordion
- `components/LeadGate.jsx` — name/phone/email popup shown before any Call or WhatsApp click; posts to every Google Sheet in `SHEET_ENDPOINTS`, remembers the visitor in localStorage
- `tailwind.config.js` — brand colors, fonts, breakpoints (`sheet` 600, `nav` 900, `plans` 1100)

## Legal pages
`/privacy`, `/grievance`, `/cookies`, `/terms`, `/refund` — all content lives in `lib/policies.js`. Have a lawyer review before going live. The popup form requires the consent checkbox; `consent` and `consentAt` are sent to the sheets.

## Images
`hero.jpg`, `router.webp` and `why.jpg` live in `/public` (already in the repo).

## Deploy
Push to GitHub and import in Vercel. Set `NEXT_PUBLIC_PHONE` and `NEXT_PUBLIC_SHEET_ENDPOINTS` (comma-separated) in the project's environment variables if you want to override the defaults.

## Testimonials
Hidden until you add real quotes to `testimonials` in `lib/site.js` — the section then appears automatically.
