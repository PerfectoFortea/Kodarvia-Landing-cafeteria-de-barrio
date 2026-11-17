import Link from 'next/link';

import { MobileNav } from '@/components/mobile-nav';
import { hasShell, site } from '@/lib/site';

// The header every route shares (rendered by layout.tsx): edit the links in `src/lib/site.ts`.
export function SiteHeader() {
  if (!hasShell()) return null;
  return (
    <header className="sticky top-0 z-20 border-b border-oat bg-cream/90 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          className="flex shrink-0 items-center gap-2 whitespace-nowrap font-display text-lg font-semibold tracking-tight text-brand focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:outline-none"
          href="/"
        >
          {site.logo ? <img alt="" className="h-9 w-auto" src={site.logo} /> : null}
          {site.name}
          <span aria-hidden className="size-1.5 rounded-full bg-accent" />
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {site.nav.map((l) => (
            <Link
              className={
                l.href === '/#contacto'
                  ? 'ml-2 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-ink focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:outline-none'
                  : 'rounded-lg px-3 py-2 text-sm font-medium text-ink/75 transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:outline-none'
              }
              href={l.href}
              key={l.href}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <MobileNav links={site.nav} />
      </div>
    </header>
  );
}
