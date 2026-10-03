import Image from 'next/image';
import Link from 'next/link';
import { policies } from '@/lib/policies';
import Header, { Logo } from '@/components/Header';
import Faq from '@/components/Faq';
import LeadGate from '@/components/LeadGate';
import {
  PHONE, EMAIL, SITE_URL, ADDRESS, ADDRESS_LINES, HOURS, telHref, waHref, waRouter, waArea,
  plans, useCases, factors, why, areas, steps, testimonials, SHOW_TESTIMONIALS,
} from '@/lib/site';

function SectionHead({ eyebrow, title, accent, text, br = false }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="h2 text-[clamp(34px,4.6vw,56px)]">
          {title}{br ? <br /> : ' '}<span className="italic text-navy">{accent}</span>
        </h2>
      </div>
      <p className="m-0 max-w-[380px] text-base leading-relaxed text-body">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top bar (desktop) */}
      <div className="hidden bg-navy text-[13px] text-navy-pale nav:block">
        <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-[9px]">
          <span className="flex items-center gap-2"><span className="h-[7px] w-[7px] rounded-full bg-wa-dot" />New fiber connections open in your area</span>
          <div className="flex flex-wrap gap-5">
            <a href={telHref} className="whitespace-nowrap text-navy-pale hover:text-white">Call {PHONE}</a>
            <a href={waHref} target="_blank" rel="noopener" className="whitespace-nowrap text-wa-light hover:text-white">WhatsApp {PHONE}</a>
          </div>
        </div>
      </div>

      <Header />

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pb-3">
          <div className="mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-center gap-9 px-5 pb-[clamp(48px,7vw,72px)] pt-[clamp(32px,6vw,64px)]">
            <div>
              <div className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-orange-soft px-3 py-[7px] text-xs font-bold uppercase tracking-[1.6px] text-orange-ink">DAV Networks · Local fiber ISP</div>
              <h1 className="mt-[22px] text-balance font-display text-[clamp(42px,6.4vw,80px)] font-black leading-[0.95] tracking-[-1px] [word-spacing:0.08em]">
                Your world.<br /><span className="italic text-orange">Better connected.</span>
              </h1>
              <p className="mt-5 max-w-[520px] text-pretty text-[clamp(17px,2vw,19px)] leading-[1.55] text-body">From the first video call to the last episode. Bring fast, unlimited fiber internet home with your local DAV Networks team.</p>
              <div className="mt-7 flex max-w-[520px] flex-wrap gap-2.5">
                <a href={waHref} target="_blank" rel="noopener" className="btn-wa flex-[1_1_220px] px-6 py-4 text-base"><span className="wa-dot" />Chat on WhatsApp</a>
                <a href={telHref} className="btn-navy flex-[1_1_220px] px-6 py-4 text-base">Call {PHONE}</a>
              </div>
              <div className="mt-3.5 flex flex-wrap gap-[18px] text-sm text-muted">
                <span>Replies in minutes, 9 AM – 9 PM</span>
                <a href="#plans" className="font-bold">See plans →</a>
              </div>
              <div className="mt-9 grid max-w-[520px] grid-cols-3 gap-3">
                {[['₹499', 'Starting / month'], ['500', 'Top speed', ' Mbps'], ['Local', 'Service team']].map(([v, l, u]) => (
                  <div key={l} className="border-l-[3px] border-orange pl-3">
                    <div className="font-display text-[clamp(22px,3vw,30px)] font-extrabold">{v}{u && <span className="text-[0.55em]">{u}</span>}</div>
                    <div className="mt-0.5 text-[13px] text-muted">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] border border-line-strong bg-sand">
                <Image src="/hero.jpg" alt="Family enjoying fast home internet" fill priority sizes="(min-width: 1000px) 600px, 100vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-[18px] left-3 flex items-center gap-3.5 rounded-[18px] bg-navy px-5 py-4 text-white shadow-[0_18px_40px_rgba(18,41,92,0.25)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange font-display font-black italic">∞</div>
                <div><div className="text-[15px] font-bold">Truly unlimited data</div><div className="text-[13px] text-navy-soft">No FUP. No caps.</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="border-y border-line bg-white">
          <div className="mx-auto grid max-w-site grid-cols-[repeat(auto-fit,minmax(150px,1fr))] items-center gap-x-6 gap-y-3.5 px-5 py-[18px]">
            {useCases.map((u) => (
              <span key={u} className="flex items-center gap-2.5 text-[15px] font-bold"><span className="h-2 w-2 rotate-45 bg-orange" />{u}</span>
            ))}
          </div>
        </section>

        {/* Power factors */}
        <section className="bg-orange text-white">
          <div className="mx-auto max-w-site px-5 py-[clamp(48px,8vw,64px)]">
            <h2 className="m-0 text-center font-display text-[clamp(30px,4vw,44px)] font-black uppercase tracking-[-0.5px]">Our power factors</h2>
            <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-x-4 gap-y-7">
              {factors.map((f) => (
                <div key={f.k} className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white font-display text-[22px] font-black italic text-orange">{f.k}</div>
                  <div className="max-w-[220px] text-[15px] font-bold leading-[1.35]">{f.t}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans */}
        <section id="plans" className="scroll-mt-20">
          <div className="container-site section-y">
            <SectionHead eyebrow="Find your speed" title="Your home. Your speed." accent="Find your perfect fit." br text="From everyday browsing to a fully connected home. Find a plan that keeps up with you." />
            <div className="mt-10 flex items-center gap-3.5">
              <span className="font-display text-[clamp(28px,3.4vw,40px)] font-black uppercase italic tracking-[-0.5px] text-navy">Unlimited fiber plans</span>
              <span className="h-0.5 flex-1 bg-line" />
              <span className="whitespace-nowrap text-[13px] font-bold text-muted plans:hidden">Swipe →</span>
            </div>
            <div className="-mx-5 mt-6 grid snap-x snap-mandatory scroll-px-5 auto-cols-[minmax(min(80%,290px),1fr)] grid-flow-col items-start gap-4 overflow-x-auto px-5 pb-2 pt-[18px] plans:auto-cols-[minmax(0,1fr)] plans:overflow-visible">
              {plans.map((p) => (
                <div key={p.name} className="relative flex snap-start flex-col rounded-[22px] border border-line-strong bg-white pb-6 shadow-[0_1px_0_#ECE6DE]">
                  {p.popular && (
                    <div className="absolute -top-[13px] left-1/2 z-[2] -translate-x-1/2 whitespace-nowrap rounded-full bg-wa-dot px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[1px] text-[#0B3B20]">Recommended for you</div>
                  )}
                  <div className="rounded-t-[21px] bg-navy px-[22px] pb-[18px] pt-5 text-center text-white">
                    <div className="text-xs font-bold uppercase tracking-[2px] text-orange-peach">— Upto —</div>
                    <div className="mt-1 font-display text-[42px] font-black italic leading-[1.05]">{p.speed} <span className="text-[22px]">Mbps</span></div>
                  </div>
                  <div className="-mx-2 rounded-[10px] bg-orange px-4 py-3 text-center text-white shadow-[0_8px_16px_rgba(232,102,26,0.25)]">
                    <div className="font-display text-lg font-extrabold tracking-[0.3px]">{p.name}</div>
                  </div>
                  <div className="flex flex-col px-[22px] pt-[18px]">
                    <div className="flex items-baseline gap-1 border-b border-dashed border-line-strong pb-4 pt-1.5">
                      <span className="font-display text-[40px] font-black tracking-[-1px]">₹{p.price}</span>
                      <span className="text-[15px] text-muted">/month</span>
                    </div>
                    <div className="mt-4 text-sm leading-normal text-body">{p.desc}</div>
                    <div className="mt-3.5 flex flex-col gap-2">
                      {p.features.map((ft) => (
                        <div key={ft} className="flex items-start gap-2.5 text-sm"><span className="font-extrabold text-orange">✓</span><span>{ft}</span></div>
                      ))}
                    </div>
                    <a href={p.wa} target="_blank" rel="noopener" className="mt-[22px] rounded-full bg-orange p-[13px] text-center text-[15px] font-bold text-white hover:bg-orange-dark hover:text-white">Choose {p.speed} Mbps →</a>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-7 text-center text-[13px] text-muted">Plan availability, installation and router terms may vary by building. T&amp;C apply.</p>
          </div>
        </section>

        {/* Router */}
        <section id="router" className="scroll-mt-20 bg-navy text-white">
          <div className="container-site section-y grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-14">
            <div className="relative aspect-square w-full max-w-[460px] overflow-hidden rounded-3xl border border-navy-line bg-navy-deep">
              <Image src="/router.webp" alt="DAV Networks dual-band Wi-Fi router" fill sizes="(min-width: 900px) 460px, 100vw" className="object-contain p-6" />
            </div>
            <div>
              <div className="eyebrow text-orange-peach">Meet your next router</div>
              <h2 className="h2 text-[clamp(34px,4.4vw,52px)]">A better-connected home <span className="italic text-orange-light">starts here.</span></h2>
              <p className="mt-[22px] max-w-[520px] text-[17px] leading-relaxed text-navy-text">Dual-band Wi-Fi ONT router with XPON WAN and four LAN ports — strong signal across rooms for every everyday device.</p>
              <div className="mt-7 grid max-w-[480px] grid-cols-2 gap-3.5">
                {[['Dual-band', '2.4 + 5 GHz Wi-Fi'], ['4 LAN ports', 'For TV, PC, console']].map(([t, d]) => (
                  <div key={t} className="rounded-[14px] border border-navy-line px-4 py-3.5"><div className="font-bold">{t}</div><div className="mt-0.5 text-[13px] text-navy-mute">{d}</div></div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-[22px]">
                <div className="font-display text-[38px] font-black">₹2,500<span className="text-[15px] font-medium text-navy-mute"> / piece</span></div>
                <a href={waRouter} target="_blank" rel="noopener" className="btn bg-orange px-6 py-3.5 text-[15px] text-white hover:bg-orange-light hover:text-white">Enquire about the router</a>
              </div>
            </div>
          </div>
        </section>

        {/* Why */}
        <section id="why" className="scroll-mt-20">
          <div className="container-site section-y">
            <SectionHead eyebrow="The DAV experience" title="Less waiting." accent="More living." br text="Thoughtful local service and fiber performance, designed around real homes — not generic promises." />
            <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
              {why.map((w) => (
                <div key={w.n} className="flex flex-col gap-3.5 rounded-[22px] border border-line-strong bg-white px-7 py-[30px] transition-colors hover:border-orange">
                  <div className="font-mono text-xs text-orange">{w.n} / {w.tag}</div>
                  <div className="font-display text-2xl font-extrabold leading-[1.15] tracking-[-0.3px]">{w.t}</div>
                  <div className="text-[15px] leading-relaxed text-body">{w.d}</div>
                </div>
              ))}
            </div>
            <div className="mt-20 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-12">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line-strong bg-sand">
                <Image src="/why.jpg" alt="Happy DAV Networks customer" fill sizes="(min-width: 1000px) 600px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="m-0 font-display text-[26px] font-extrabold">We always deliver.</h3>
                  <p className="mt-2.5 text-pretty text-base leading-[1.65] text-body">Peering with leading content networks means YouTube, Netflix, gaming servers and your everyday apps load fast — so streaming, calls and downloads stay smooth, even at peak hours.</p>
                </div>
                <div>
                  <h3 className="m-0 font-display text-[26px] font-extrabold">We practice empathy.</h3>
                  <p className="mt-2.5 text-pretty text-base leading-[1.65] text-body">Early morning or late at night — if something isn&apos;t right, call or WhatsApp us. A real person from your local team picks up and gets you back online.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section id="coverage" className="scroll-mt-20 border-y border-line bg-white">
          <div className="container-site section-y grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-12">
            <div>
              <div className="eyebrow">Local network</div>
              <h2 className="h2 text-[clamp(34px,4.6vw,52px)]">Connected across <span className="italic text-navy">your neighbourhood.</span></h2>
              <p className="mt-5 max-w-[520px] text-base leading-relaxed text-body">DAV Networks serves homes, apartments and small offices across these areas. Share your exact location for a quick feasibility check.</p>
              <div className="mt-[26px] flex flex-wrap gap-2.5">
                {areas.map((a) => (
                  <span key={a} className="rounded-full border border-line-strong bg-cream px-3.5 py-2 text-sm font-semibold">{a}</span>
                ))}
              </div>
              <a href={waArea} target="_blank" rel="noopener" className="btn-wa mt-[30px] px-6 py-3.5 text-[15px]">Share location on WhatsApp</a>
            </div>
            <div className="flex flex-col gap-3 rounded-[26px] bg-orange px-9 py-10 text-white">
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white"><span className="h-4 w-4 rounded-full bg-orange" /></div>
              <div className="mt-4 text-sm text-orange-pale">DAV Networks office</div>
              <div className="font-display text-2xl font-extrabold leading-[1.2]">{ADDRESS_LINES[0]}, {ADDRESS_LINES[1]}</div>
              <div className="text-[15px] text-orange-pale">{ADDRESS_LINES[2]}</div>
              <div className="my-3.5 h-px bg-white/30" />
              <div className="text-[15px]">{HOURS}</div>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noopener" className="text-[15px] font-bold text-white underline underline-offset-4 hover:text-orange-pale">Open in Google Maps →</a>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section>
          <div className="container-site section-y">
            <SectionHead eyebrow="Getting connected" title="From “hello” to" accent="online." text="Three clear steps. One local team helping you from availability check to installation." />
            <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
              {steps.map((s) => (
                <div key={s.n} className="border-t-[3px] border-orange pt-[22px]">
                  <div className="font-display text-[56px] font-black italic leading-none text-orange-ghost">{s.n}</div>
                  <div className="mt-3 font-display text-[22px] font-extrabold">{s.t}</div>
                  <div className="mt-1.5 text-[15px] leading-relaxed text-body">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {SHOW_TESTIMONIALS && (
          <section className="bg-sand">
            <div className="mx-auto max-w-site px-5 py-[clamp(56px,9vw,80px)]">
              <h2 className="m-0 text-center font-display text-[clamp(28px,3.6vw,40px)] font-black uppercase tracking-[-0.5px]">What our users say</h2>
              <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-[22px]">
                {testimonials.map((q, i) => (
                  <figure key={i} className="relative m-0 rounded-[22px] bg-navy px-[30px] pb-[26px] pt-[34px] text-white">
                    <div className="absolute -top-[22px] left-[30px] font-display text-[64px] font-black leading-none text-orange">“</div>
                    <blockquote className="m-0 text-base leading-[1.65] text-navy-pale">{q.text}</blockquote>
                    <figcaption className="mt-[18px] font-bold text-orange-peach">— {q.who}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20">
          <div className="container-site section-y grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-12">
            <div>
              <div className="eyebrow">Common questions</div>
              <h2 className="h2 text-[clamp(34px,4.4vw,52px)]">Everything you need <span className="italic text-navy">before you connect.</span></h2>
              <p className="mt-5 max-w-[420px] text-base leading-relaxed text-body">Still unsure? Call our office and we&apos;ll help you choose.</p>
              <div className="mt-[22px]">
                <div className="text-[13px] text-muted">Office calling number</div>
                <div className="mt-1 font-display text-2xl font-extrabold">{PHONE}</div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <a href={waHref} target="_blank" rel="noopener" className="btn-wa px-5 py-3 text-[15px]">Ask on WhatsApp</a>
                <a href={telHref} className="btn-outline-navy px-5 py-2.5 text-[15px]">Call us</a>
              </div>
            </div>
            <Faq />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange text-white">
          <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-7 px-5 py-[clamp(44px,7vw,56px)]">
            <div>
              <div className="text-sm text-orange-pale">Ready when you are.</div>
              <h2 className="mt-2 font-display text-[clamp(30px,4vw,46px)] font-black leading-[1.05] tracking-[-1px] [word-spacing:0.08em]">Bring full-speed living home.</h2>
              <p className="mt-2.5 text-base text-orange-pale">Check fiber availability and find the right DAV Networks plan today.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={waHref} target="_blank" rel="noopener" className="btn-wa px-[26px] py-[15px] text-base">WhatsApp us</a>
              <a href={telHref} className="btn border-[1.5px] border-white px-[25px] py-3.5 text-base font-extrabold text-white hover:bg-white hover:text-orange">Call {PHONE}</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy-deep pb-[76px] text-navy-soft nav:pb-0">
        <div className="mx-auto max-w-site px-5 pb-7 pt-14">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10">
            <div className="min-w-0 max-w-[360px]">
              <Logo sub={false} dark />
              <p className="mt-[18px] text-sm leading-relaxed">Fast, reliable fiber internet for homes and small businesses — from your local team.</p>
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              <div className="mb-1 font-bold text-white">Explore</div>
              {[['#plans', 'Broadband plans'], ['#router', 'Wi-Fi router'], ['#why', 'Why DAV'], ['#coverage', 'Coverage areas'], ['#faq', 'Help & FAQs']].map(([h, l]) => (
                <a key={h} href={h} className="text-navy-soft hover:text-white">{l}</a>
              ))}
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              <div className="mb-1 font-bold text-white">Contact</div>
              <a href={telHref} className="text-navy-soft hover:text-white">Call: {PHONE}</a>
              <a href={waHref} target="_blank" rel="noopener" className="text-wa-light hover:text-white">WhatsApp: {PHONE}</a>
              <span className="leading-normal">{ADDRESS}</span>
              <a href={`mailto:${EMAIL}`} className="text-navy-soft hover:text-white">{EMAIL}</a>
              <a href={SITE_URL} className="text-orange-peach">davnetworks.in</a>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-navy-rule pt-[22px] text-[13px]">
            <span>© {new Date().getFullYear()} DAV Networks. All claims reserved.</span>
            <nav className="flex flex-wrap gap-x-[18px] gap-y-2">
              {policies.map((x) => (
                <Link key={x.slug} href={`/${x.slug}`} className="text-navy-soft hover:text-white">{x.title}</Link>
              ))}
            </nav>
            <span>{"</>"} Powered by DIV.</span>

          </div>
        </div>
      </footer>

      {/* Floating dock (desktop) */}
      <div className="fixed bottom-5 right-5 z-50 hidden flex-col items-end gap-2.5 nav:flex">
        <a href={telHref} className="btn-navy px-5 py-[13px] text-[15px] shadow-[0_10px_24px_rgba(18,41,92,0.3)]">Call now</a>
        <a href={waHref} target="_blank" rel="noopener" className="btn-wa px-[22px] py-3.5 text-[15px] shadow-[0_10px_24px_rgba(37,211,102,0.4)]"><span className="wa-dot" />WhatsApp us</a>
      </div>

      {/* Bottom bar (mobile) */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[1fr_1.4fr] gap-2.5 border-t border-line-strong bg-white px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-8px_24px_rgba(18,41,92,0.08)] nav:hidden">
        <a href={telHref} className="flex min-h-[50px] items-center justify-center whitespace-nowrap rounded-[14px] bg-navy text-base font-bold text-white hover:text-white">Call now</a>
        <a href={waHref} target="_blank" rel="noopener" className="flex min-h-[50px] items-center justify-center gap-2.5 whitespace-nowrap rounded-[14px] bg-wa text-base font-extrabold text-wa-ink hover:text-wa-ink"><span className="wa-dot" />WhatsApp us</a>
      </div>

      <LeadGate />
    </div>
  );
}
