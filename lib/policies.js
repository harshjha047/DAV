// Single source for all legal pages. Used by Next.js routes and the design preview.
// Have a lawyer review before publishing.
const CO = 'DAV Networks';
const EMAIL = 'Davnetworks730@gmail.com';
const PHONE = '+91 70116 28810';
const ADDRESS = 'Khasra No. 92, Unit A, Tower 2, 1st Floor, Sai Enclave, Prem Vihar, Khoda Colony, Ghaziabad, Uttar Pradesh – 201020';
const OFFICER = 'Abhinaw Kumar';
const CITY = 'Ghaziabad, Uttar Pradesh';
const UPDATED = '3 October 2026';

export const policyMeta = { CO, EMAIL, PHONE, ADDRESS, OFFICER, UPDATED };

export const policies = [
  {
    slug: 'privacy',
    title: 'Privacy Notice',
    short: 'Privacy',
    intro: `This notice explains what personal data ${CO} (“we”, “us”) collects through davnetworks.in and our service, why we collect it, and the rights you have under India’s Digital Personal Data Protection Act, 2023 (DPDP Act) and the DPDP Rules, 2025.`,
    sections: [
      { h: '1. Who we are', p: [`${CO} is a fiber broadband internet service provider serving Noida Sector 62 and Khora, Ghaziabad, and is the Data Fiduciary for the personal data described here.`], ul: [`Address: ${ADDRESS}`, `Email: ${EMAIL}`, `Phone / WhatsApp: ${PHONE}`] },
      { h: '2. Personal data we collect', p: ['We collect only what we need:'], ul: [
        'Enquiry form: your name, mobile number and email address, plus the plan or topic you asked about and the page you were on.',
        'New connection: your installation address, identity and address proof (KYC) as required under our telecom licence, and your selected plan.',
        'Service use: account number, billing and payment records, router/ONT identifiers, IP address allocation and connection logs required by law.',
        'Support: details you share with us on calls, WhatsApp or email.',
      ] },
      { h: '3. Why we use it', p: ['Each purpose is listed separately. We do not use your data for any other purpose without asking you again.'], ul: [
        'To contact you about your enquiry and check fiber availability at your address.',
        'To install, activate, bill and support your connection.',
        'To meet legal obligations, including subscriber verification and record-keeping required by the Department of Telecommunications.',
        'To keep our network and your account secure.',
      ] },
      { h: '4. Legal basis', p: ['For enquiries, we rely on the consent you give when you tick the box in our form. For an active connection, we also process data where it is necessary to provide the service you asked for or to comply with Indian law.'] },
      { h: '5. Who we share it with', p: ['We never sell your personal data. We share it only with:'], ul: [
        'Google LLC (Google Sheets and Google Workspace), which stores enquiry form submissions on our behalf as a Data Processor.',
        'Meta Platforms (WhatsApp), when you choose to message us on WhatsApp.',
        'Our installation and field partners, who need your name, phone and address to set up your connection.',
        'Payment providers, if you pay online.',
        'Government or law-enforcement agencies, where required by law.',
      ] },
      { h: '6. How long we keep it', ul: [
        'Enquiries that do not become a connection: deleted within 12 months of your last contact with us.',
        'Customer records, KYC and connection logs: for the period required under our telecom licence and applicable law, then deleted.',
        'If you withdraw consent, we delete enquiry data within 30 days unless the law requires us to keep it.',
      ] },
      { h: '7. Your rights', p: ['Under the DPDP Act you can:'], ul: [
        'Access a summary of the personal data we hold about you and how we use it.',
        'Correct, complete or update inaccurate data.',
        'Ask us to erase data we no longer need.',
        'Withdraw your consent at any time — as easily as you gave it.',
        'Nominate another person to exercise your rights in case of death or incapacity.',
        'Raise a grievance with us, and then with the Data Protection Board of India.',
      ] },
      { h: '8. How to exercise your rights or withdraw consent', p: [`Email ${EMAIL} or WhatsApp ${PHONE} with the subject “Data request” and tell us what you need. We will verify your identity and respond within the timelines in our Grievance Redressal page. Withdrawing consent does not affect processing that already took place.`] },
      { h: '9. Security', p: ['We use reasonable security safeguards, including restricted access to form submissions, encrypted (HTTPS) transmission, and access logs. If a personal data breach occurs, we will inform affected users and the Data Protection Board of India as required by the DPDP Rules.'] },
      { h: '10. Children', p: ['Our service and enquiry form are meant for adults (18+). We do not knowingly collect personal data of children. If you believe a child has submitted data, contact us and we will delete it.'] },
      { h: '11. Complaints to the Data Protection Board', p: ['If you are not satisfied with our response to a grievance, you may file a complaint with the Data Protection Board of India through its official portal.'] },
      { h: '12. Changes to this notice', p: ['We will update this page when our practices change and revise the date below. Material changes will be communicated to existing customers.'] },
    ],
  },
  {
    slug: 'grievance',
    title: 'Grievance Redressal',
    short: 'Grievance',
    intro: `We want every issue resolved quickly. Use the contacts below for service complaints, billing disputes or any request about your personal data.`,
    sections: [
      { h: 'Grievance Officer', ul: [`Name: ${OFFICER}`, `Email: ${EMAIL}`, `Phone / WhatsApp: ${PHONE}`, `Address: ${ADDRESS}`, 'Hours: Monday–Sunday, 9 AM – 9 PM'] },
      { h: 'How to raise a grievance', ul: [
        'Email or WhatsApp us with your name, registered mobile number, account number (if a customer) and a short description of the issue.',
        'For personal-data requests, write “Data request” in the subject.',
        'You will receive a reference number when we acknowledge your complaint.',
      ] },
      { h: 'Response timelines', ul: [
        'Acknowledgement: within 24 hours.',
        'Service outages: we aim to restore service within 24–48 hours.',
        'Billing and general complaints: resolved within 7 working days.',
        'Personal-data requests and grievances under the DPDP Act: resolved within 30 days at the latest.',
      ] },
      { h: 'Escalation', p: ['If you are not satisfied with the resolution, reply to the same thread asking for escalation and it will be reviewed by our management. For personal-data grievances, you may then approach the Data Protection Board of India. For telecom service matters, you may approach the appropriate authority under TRAI regulations.'] },
    ],
  },
  {
    slug: 'cookies',
    title: 'Cookie Policy',
    short: 'Cookies',
    intro: 'This policy explains the small amount of information our website stores on your device.',
    sections: [
      { h: 'What we store', p: ['davnetworks.in does not use advertising or analytics cookies. We use one item of browser storage:'], ul: [
        '“dav_lead” (local storage): remembers the name, phone and email you entered in the enquiry form, so you are not asked again on your next click. It stays on your device until you clear it.',
      ] },
      { h: 'Third-party services', ul: [
        'WhatsApp: when you tap a WhatsApp button you leave our site, and WhatsApp’s own privacy and cookie policies apply.',
        'Google Fonts / hosting: our hosting provider may keep standard server logs (such as IP address and browser type) for security.',
      ] },
      { h: 'Managing storage', p: ['You can clear stored data at any time through your browser settings (Clear site data / Clear browsing data). The site will keep working; you will simply be asked for your details again.'] },
      { h: 'Changes', p: ['If we ever add analytics or advertising cookies, we will update this policy and ask for your consent before setting them.'] },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of Service',
    short: 'Terms',
    intro: `These terms govern your use of davnetworks.in and the broadband service provided by ${CO}. By requesting or using our service, you agree to them.`,
    sections: [
      { h: '1. Eligibility and KYC', p: ['You must be at least 18 years old. Every connection requires valid identity and address proof, as mandated by the Department of Telecommunications. We may refuse or suspend service if KYC is incomplete or false.'] },
      { h: '2. Service and speeds', ul: [
        'Plan speeds are “up to” speeds over a wired connection. Actual speeds on Wi-Fi depend on your device, distance from the router, walls and interference.',
        'All plans include unlimited data with no Fair Usage Policy, unless stated otherwise in your plan.',
        'Service is subject to technical feasibility at your address.',
        'We may carry out scheduled maintenance; where possible, we will notify you in advance.',
      ] },
      { h: '3. Installation and equipment', ul: [
        'Installation is scheduled after feasibility is confirmed.',
        'A router purchased from us (₹2,500) becomes your property and carries the manufacturer’s warranty.',
        'Fiber cabling, ONT and any equipment provided on loan remain our property and must be returned in good condition when service ends.',
        'You must allow our technicians reasonable access for installation and repairs.',
      ] },
      { h: '4. Billing and payment', ul: [
        'Plans are billed monthly in advance unless you choose a longer prepaid term. Prices are inclusive of applicable taxes unless stated otherwise.',
        'If payment is not received by the due date, service may be suspended until dues are cleared.',
        'We will give at least 30 days’ notice of any change to your plan price.',
      ] },
      { h: '5. Acceptable use', p: ['You agree not to use the service to:'], ul: [
        'Break any Indian law, including the Information Technology Act, 2000.',
        'Share, resell or redistribute the connection outside your premises without written permission.',
        'Send spam, malware, or attack other networks.',
        'Host or access unlawful content.',
      ] },
      { h: '6. Suspension and termination', p: ['You may cancel at any time as described in our Refund & Cancellation Policy. We may suspend or terminate service for non-payment, breach of these terms, or when required by law or a government direction.'] },
      { h: '7. Limitation of liability', p: ['We work to keep your connection reliable, but we do not guarantee uninterrupted service. To the extent allowed by law, our total liability for any claim is limited to the fees you paid for the affected billing period. We are not liable for indirect losses or for outages caused by events beyond our control (power failures, natural events, third-party network faults, cable cuts by others).'] },
      { h: '8. Privacy', p: ['Our handling of personal data is described in our Privacy Notice.'] },
      { h: '9. Governing law', p: [`These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts at ${CITY}.`] },
      { h: '10. Changes', p: ['We may update these terms. Continued use of the service after changes take effect means you accept them. Material changes will be notified to existing customers.'] },
      { h: '11. Contact', ul: [`Email: ${EMAIL}`, `Phone / WhatsApp: ${PHONE}`, `Address: ${ADDRESS}`] },
    ],
  },
  {
    slug: 'refund',
    title: 'Refund & Cancellation Policy',
    short: 'Refunds',
    intro: 'This policy explains how cancellations and refunds work for DAV Networks connections, plans and equipment.',
    sections: [
      { h: '1. Before installation', ul: [
        'If fiber is not feasible at your address, any amount you paid is refunded in full.',
        'If you cancel before installation is carried out, any advance is refunded in full.',
      ] },
      { h: '2. Monthly plans', ul: [
        'You can cancel at any time by calling or messaging us. Please give at least 7 days’ notice before your next billing date.',
        'Service continues until the end of the current paid month. Partial months are not refunded.',
      ] },
      { h: '3. Long-term prepaid plans', ul: [
        'If you cancel a 3-, 6- or 12-month plan early, we refund the unused full months, calculated at the standard monthly price (without the long-term discount).',
        'Any installation charge waived as part of the long-term offer may be deducted.',
      ] },
      { h: '4. Installation and router', ul: [
        'Installation charges are non-refundable once installation is complete.',
        'A router purchased from us can be returned unused, in original packaging, within 7 days for a full refund. After installation, the router is covered by the manufacturer’s warranty rather than refunds.',
        'Equipment provided on loan must be returned when you cancel; unreturned or damaged equipment may be charged.',
      ] },
      { h: '5. Service outages', p: ['If your connection is down for more than 72 continuous hours due to a fault on our side, you may request a pro-rata credit for the affected days on your next bill.'] },
      { h: '6. How refunds are paid', ul: [
        'Approved refunds are processed within 7–10 working days to the original payment method, or by bank transfer/UPI for cash payments.',
        'You will receive a confirmation once the refund is initiated.',
      ] },
      { h: '7. How to cancel or request a refund', p: [`WhatsApp or call ${PHONE}, or email ${EMAIL} with your name, registered mobile number and account number.`] },
    ],
  },
];

export const getPolicy = (slug) => policies.find((p) => p.slug === slug);
