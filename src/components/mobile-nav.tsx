'use client';

import Link from 'next/link';
import { useState } from 'react';

export function MobileNav({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="shrink-0 md:hidden">
      <button
        aria-controls="menu-movil"
        aria-expanded={open}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        className="flex size-11 shrink-0 items-center whitespace-nowrap justify-center rounded-lg text-brand transition-colors hover:bg-oat focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:outline-none"
        onClick={() => setOpen((o) => !o)}
        type="button"
      >
        <svg aria-hidden className="size-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          ) : (
            <path d="M4 8h16M4 16h16" strokeLinecap="round" />
          )}
        </svg>
      </button>
      {open ? (
        <nav
          className="absolute inset-x-0 top-full border-b border-oat bg-cream px-4 pb-4 pt-1 shadow-sm"
          id="menu-movil"
        >
          <ul className="grid">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  className="flex min-h-12 items-center border-b border-oat/80 text-base font-medium text-brand last:border-0"
                  href={l.href}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
