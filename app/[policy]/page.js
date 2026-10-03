import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Logo } from '@/components/Header';
import { policies, getPolicy, policyMeta } from '@/lib/policies';

export const dynamicParams = false;
export function generateStaticParams() {
  return policies.map((p) => ({ policy: p.slug }));
}
export function generateMetadata({ params }) {
  const p = getPolicy(params.policy);
  return p ? { title: `${p.title} — DAV Networks`, description: p.intro } : {};
}

export default function PolicyPage({ params }) {
  const p = getPolicy(params.policy);
  if (!p) notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 border-b border-line bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-16 max-w-site items-center justify-between gap-4 px-5 py-2.5">
          <Link href="/" aria-label="DAV Networks home"><Logo /></Link>
          <Link href="/" className="text-[15px] font-bold">← Back to home</Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-[820px] px-5 py-[clamp(40px,7vw,72px)]">
          <nav className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
            {policies.map((x) => (
              <Link
                key={x.slug}
                href={`/${x.slug}`}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-bold ${x.slug === p.slug ? 'border-navy bg-navy text-white hover:text-white' : 'border-line-strong bg-white text-ink hover:border-orange hover:text-ink'}`}
              >
                {x.short}
              </Link>
            ))}
          </nav>

          <div className="eyebrow mt-10">Legal</div>
          <h1 className="mt-3 font-display text-[clamp(36px,5vw,56px)] font-black leading-none tracking-[-1px]">{p.title}</h1>
          <div className="mt-4 text-sm text-muted">Last updated: {policyMeta.UPDATED}</div>
          <p className="mt-6 text-pretty text-[17px] leading-relaxed text-body">{p.intro}</p>

          <div className="mt-10 flex flex-col gap-9">
            {p.sections.map((s) => (
              <section key={s.h} className="border-t border-line-strong pt-7">
                <h2 className="font-display text-[22px] font-extrabold tracking-[-0.3px]">{s.h}</h2>
                {s.p?.map((t) => <p key={t} className="mt-3 text-pretty text-base leading-[1.7] text-body">{t}</p>)}
                {s.ul && (
                  <ul className="mt-3 flex flex-col gap-2.5">
                    {s.ul.map((t) => (
                      <li key={t} className="flex gap-3 text-base leading-[1.6] text-body">
                        <span className="mt-[9px] h-1.5 w-1.5 flex-none rotate-45 bg-orange" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-navy-deep text-navy-soft">
        <div className="mx-auto flex max-w-site flex-wrap justify-between gap-3 px-5 py-6 text-[13px]">
          <span>© {new Date().getFullYear()} DAV Networks. All rights reserved.</span>
          <span>{policyMeta.EMAIL} · {policyMeta.PHONE}</span>
        </div>
      </footer>
    </div>
  );
}
