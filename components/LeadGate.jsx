'use client';
import { useEffect, useState } from 'react';
import { PHONE, SHEET_ENDPOINTS } from '@/lib/site';

const STORAGE_KEY = 'dav_lead';
const msgFrom = (href) => { const m = href.match(/[?&]text=([^&]*)/); return m ? decodeURIComponent(m[1]) : ''; };

function logLead(data) {
  const payload = { ...data, page: window.location.href, submittedAt: new Date().toISOString() };
  if (!SHEET_ENDPOINTS.length) { console.info('[DAV lead] endpoint not set:', payload); return Promise.resolve(); }
  const body = JSON.stringify(payload);
  return Promise.allSettled(
    SHEET_ENDPOINTS.map((u) => fetch(u, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body }))
  ).then((r) => { if (r.every((x) => x.status === 'rejected')) throw new Error('All sheet requests failed'); });
}

const inputCls = 'min-h-[50px] rounded-xl border-[1.5px] border-line-strong bg-white px-4 py-3.5 text-base text-ink outline-none focus:border-orange';

// Intercepts every tel: and wa.me link on the page and asks for details first (once per browser).
export default function LeadGate() {
  const [modal, setModal] = useState(null); // { kind, href }
  const [step, setStep] = useState('form');
  const [lead, setLead] = useState({ name: '', phone: '', email: '', consent: false });
  const [err, setErr] = useState({});
  const [saving, setSaving] = useState(false);
  const [sendError, setSendError] = useState('');

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.('a[href]');
      if (!a || a.dataset.direct) return;
      const href = a.getAttribute('href') || '';
      const kind = href.startsWith('tel:') ? 'call' : href.startsWith('https://wa.me/') ? 'whatsapp' : null;
      if (!kind) return;
      e.preventDefault(); e.stopPropagation();
      let saved = null;
      try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); } catch {}
      if (saved?.name) {
        logLead({ ...saved, action: kind, message: msgFrom(href) });
        if (kind === 'call') window.location.href = href; else window.open(href, '_blank');
        return;
      }
      setModal({ kind, href }); setStep('form'); setErr({}); setSendError('');
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  useEffect(() => {
    if (!modal) return;
    const onKey = (e) => e.key === 'Escape' && setModal(null);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modal]);

  if (!modal) return null;
  const isCall = modal.kind === 'call';
  const close = () => setModal(null);

  async function submit(e) {
    e.preventDefault();
    const e2 = {};
    const name = lead.name.trim(), email = lead.email.trim();
    const digits = lead.phone.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '');
    if (name.length < 2) e2.name = 'Please enter your name.';
    if (!/^[6-9]\d{9}$/.test(digits)) e2.phone = 'Enter a valid 10-digit mobile number.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e2.email = 'Enter a valid email address.';
    if (!lead.consent) e2.consent = 'Please tick the box to continue.';
    if (Object.keys(e2).length) return setErr(e2);
    const clean = { name, email, phone: digits, consent: true, consentAt: new Date().toISOString() };
    setErr({}); setSaving(true); setSendError('');
    try {
      await logLead({ ...clean, action: modal.kind, message: msgFrom(modal.href) });
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(clean)); } catch {}
      setStep('done');
    } catch {
      setSendError('Could not save right now. Please try again.');
    } finally { setSaving(false); }
  }

  const kicker = step === 'done' ? 'You’re all set' : isCall ? 'Before we call' : 'Before we chat';
  const title = step === 'done' ? (isCall ? 'Ready to call us' : 'Continue on WhatsApp') : 'Tell us about you';

  return (
    <div onClick={close} className="fixed inset-0 z-[100] flex items-end justify-center bg-[rgba(14,31,71,0.55)] backdrop-blur-[4px] sheet:items-center">
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        className="max-h-[92vh] w-full max-w-[440px] overflow-y-auto rounded-t-3xl bg-cream px-[22px] pb-[calc(24px+env(safe-area-inset-bottom))] pt-[26px] shadow-[0_-20px_60px_rgba(14,31,71,0.3)] sheet:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-[1.6px] text-orange">{kicker}</div>
            <div className="mt-1.5 font-display text-[26px] font-black leading-[1.1] tracking-[-0.5px]">{title}</div>
          </div>
          <button onClick={close} aria-label="Close" className="h-11 w-11 flex-none rounded-full border-[1.5px] border-line-strong bg-white text-[22px] leading-none text-ink">×</button>
        </div>

        {step === 'form' ? (
          <>
            <p className="mt-2.5 text-[15px] leading-[1.55] text-body">Share your details so our team can follow up. It takes 10 seconds.</p>
            <form onSubmit={submit} noValidate className="mt-5 flex flex-col gap-3.5">
              <Field label="Name" error={err.name}>
                <input type="text" name="name" autoComplete="name" placeholder="Your full name" value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} className={inputCls} />
              </Field>
              <Field label="Phone number" error={err.phone}>
                <input type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="10-digit mobile number" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} className={inputCls} />
              </Field>
              <Field label="Email" error={err.email}>
                <input type="email" name="email" autoComplete="email" placeholder="you@example.com" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} className={inputCls} />
              </Field>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" checked={lead.consent} onChange={(e) => setLead({ ...lead, consent: e.target.checked })} className="mt-px h-[22px] w-[22px] flex-none accent-orange" />
                <span className="text-[13px] leading-normal text-body">
                  I agree to DAV Networks storing my details and contacting me about a broadband connection, as described in the{' '}
                  <a href="/privacy" target="_blank" className="font-bold">Privacy Notice</a>. I am 18 or older and can withdraw consent anytime.
                </span>
              </label>
              {err.consent && <span className="text-[13px] text-error">{err.consent}</span>}
              {sendError && <span className="text-[13px] text-error">{sendError}</span>}
              <button type="submit" disabled={saving} className="mt-1.5 min-h-[52px] rounded-[14px] border-0 bg-orange text-base font-extrabold text-white disabled:opacity-70">
                {saving ? 'Saving…' : isCall ? 'Continue to call' : 'Continue to WhatsApp'}
              </button>
              <span className="text-center text-xs text-muted">Data is stored securely with Google Sheets. <a href="/grievance" target="_blank">Grievance contact</a></span>
            </form>
          </>
        ) : (
          <>
            <p className="mb-5 mt-2.5 text-[15px] leading-[1.55] text-body">Thanks, {lead.name.trim()}! Tap below to continue.</p>
            {isCall ? (
              <a href={modal.href} data-direct="1" onClick={close} className="flex min-h-[54px] items-center justify-center rounded-[14px] bg-navy text-[17px] font-extrabold text-white hover:text-white">Call {PHONE}</a>
            ) : (
              <a href={modal.href} data-direct="1" target="_blank" rel="noopener" onClick={close} className="flex min-h-[54px] items-center justify-center gap-2.5 rounded-[14px] bg-wa text-[17px] font-extrabold text-wa-ink hover:text-wa-ink"><span className="wa-dot" />Open WhatsApp chat</a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-bold text-ink">{label}</span>
      {children}
      {error && <span className="text-[13px] text-error">{error}</span>}
    </label>
  );
}
