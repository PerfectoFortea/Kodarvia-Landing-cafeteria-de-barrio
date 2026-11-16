import Link from 'next/link';

import { hasShell, place, site } from '@/lib/site';

// The footer every route shares (rendered by layout.tsx).
export function SiteFooter() {
  if (!hasShell()) return null;
  return (
    <footer className="bg-oat text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-brand">
            {site.logo ? <img alt="" className="h-7 w-auto" src={site.logo} /> : null}
            {site.name}
            <span aria-hidden className="size-1.5 rounded-full bg-accent" />
          </p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-ink/75">
            Café de especialidad, desayunos y meriendas en un rincón luminoso de Madrid.
          </p>
        </div>
        <div className="text-sm leading-6">
          <p className="font-display font-semibold text-brand">Visítanos</p>
          <p className="mt-3 text-ink/80">
            {place.address}
            <br />
            {place.city}
          </p>
          <a
            className="mt-2 inline-block font-medium text-accent-deep underline underline-offset-4 transition-colors hover:text-brand"
            href={place.mapsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Cómo llegar
          </a>
        </div>
        <nav aria-label="Pie de página" className="text-sm">
          <p className="font-display font-semibold text-brand">Enlaces</p>
          <ul className="mt-3 grid gap-1">
            {site.nav.map((l) => (
              <li key={l.href}>
                <Link
                  className="inline-block py-1 text-ink/80 transition-colors hover:text-brand"
                  href={l.href}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-brand/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-ink/70 sm:px-6">
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
