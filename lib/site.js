export const PHONE = process.env.NEXT_PUBLIC_PHONE || '+91 70116 28810';
export const EMAIL = 'Davnetworks730@gmail.com';
export const SITE_URL = 'https://davnetworks.in';
export const ADDRESS_LINES = ['Khasra No. 92, Unit A, Tower 2, 1st Floor', 'Sai Enclave, Prem Vihar, Khoda Colony', 'Ghaziabad, Uttar Pradesh – 201020'];
export const ADDRESS = ADDRESS_LINES.join(', ');
export const HOURS = 'Mon–Sun · 9 AM – 9 PM';
export const SHEET_ENDPOINTS = (
  process.env.NEXT_PUBLIC_SHEET_ENDPOINTS ||
  'https://script.google.com/macros/s/AKfycbx4J-SYWe5RtGU9er73WKqZn9UzZN03EF8E0bzPyn_EW5nvC0wi3t2hzSXqw9oSMAti/exec,https://script.google.com/macros/s/AKfycby94tMO3fNFxgyorTjuZNv9qW4YyqqwNu8b6wibr4EwPeE899sF6-LZpIa13cACMxxc/exec'
).split(/[\s,]+/).filter(Boolean);

const digits = PHONE.replace(/\D/g, '');
export const telHref = `tel:+${digits}`;
export const wa = (msg) => `https://wa.me/${digits}?text=${encodeURIComponent(msg)}`;
export const waHref = wa('Hi DAV Networks, I want a new broadband connection.');
export const waRouter = wa('Hi DAV Networks, I want to enquire about the Wi-Fi router.');
export const waArea = wa('Hi DAV Networks, please check fiber availability at my location.');

export const navLinks = [
  { href: '#plans', label: 'Plans' },
  { href: '#router', label: 'Wi-Fi Router' },
  { href: '#why', label: 'Why DAV' },
  { href: '#coverage', label: 'Coverage' },
  { href: '#faq', label: 'Help' },
];

export const plans = [
  { name: 'Essential', speed: 100, base: 499, popular: true, desc: 'Easy everyday speed for browsing, calls and entertainment.', features: ['3–5 connected devices', 'HD streaming and video calls', 'Local technical support'] },
  { name: 'Family', speed: 200, base: 599, desc: 'Standout value for families, smart TVs and busy homes.', features: ['6–10 connected devices', '4K streaming across rooms', 'Work and study together'] },
  { name: 'Performance', speed: 300, base: 799, desc: 'Confident speed for gaming, creators and hybrid work.', features: ['10–15 connected devices', 'Gaming and large downloads', 'Multiple 4K streams'] },
  { name: 'Ultra', speed: 500, base: 1999, desc: 'Maximum headroom for premium homes and heavy usage.', features: ['15+ connected devices', 'Heavy streaming and uploads', 'Premium performance tier'] },
].map((p) => {
  const price = p.base.toLocaleString('en-IN');
  return { ...p, price, wa: wa(`Hi DAV Networks, I'm interested in the ${p.speed} Mbps ${p.name} plan (₹${price}/month). Please check availability at my address.`) };
});

export const useCases = ['Work from home', 'Low-lag gaming', 'Whole-home Wi-Fi', '4K streaming'];

export const factors = [
  { k: '99%', t: 'Super-high consistency in performance' },
  { k: 'FTTH', t: 'Pure fiber-to-the-home technology' },
  { k: 'CDN', t: 'Excellent partner network for content' },
  { k: '24/7', t: 'Efficient local customer support' },
];

export const why = [
  { n: '01', tag: 'Coverage', t: 'Wi-Fi that belongs in every room.', d: 'Practical guidance on router placement and the right speed for your home size and device count.' },
  { n: '02', tag: 'Support', t: 'Local people. Clear answers.', d: 'Speak with a nearby team that understands your service area and your connection.' },
  { n: '03', tag: 'Setup', t: 'Quick feasibility. Simple installation.', d: 'Share your location, choose your plan and schedule installation for a convenient time.' },
];

export const areas = ['Noida Sector 62', 'Khora, Ghaziabad'];

export const steps = [
  { n: '01', t: 'Call or WhatsApp', d: `Contact ${PHONE} and share your address.` },
  { n: '02', t: 'Check availability', d: 'We confirm fiber feasibility for your building.' },
  { n: '03', t: 'Go online', d: 'Choose a plan and schedule your installation.' },
];

// Add real customer quotes here — the section appears automatically.
// e.g. { text: '…', who: 'Rohit S., Noida Sector 62' }
export const testimonials = [];

export const faqs = [
  { q: 'Which number is available on WhatsApp?', a: `Call or WhatsApp ${PHONE} for new connections, plan details and availability checks.` },
  { q: 'Which plan is best for a family?', a: 'The 200 Mbps Family plan comfortably handles 6–10 devices, 4K streaming on multiple TVs and work-from-home calls at the same time.' },
  { q: 'How quickly can installation happen?', a: 'Once feasibility is confirmed at your address, installation is usually scheduled within 24–48 hours at a time that suits you.' },
  { q: 'Is DAV Networks available at my exact address?', a: 'Share your location on WhatsApp and our team will confirm fiber feasibility for your building.' },
  { q: 'Is there a data limit?', a: 'No. Every DAV Networks plan comes with truly unlimited data — no FUP, no speed throttling.' },
];

export const SHOW_TESTIMONIALS = testimonials.length > 0;
