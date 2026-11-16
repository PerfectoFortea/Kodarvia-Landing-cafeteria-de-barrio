'use client';

import Link from 'next/link';
import { useActionState, useEffect, useState } from 'react';

import { sendContact, type ContactState } from '@/app/contacto/actions';

const initial: ContactState = { ok: false };

const field =
  'block w-full rounded-lg border border-brand/30 bg-white px-4 text-base text-ink shadow-sm transition-colors placeholder:text-ink/45 hover:border-brand/60 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40';

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial);
  const [t, setT] = useState('');

  useEffect(() => setT(String(Date.now())), []);

  if (state.ok) {
    return (
      <div
        className="rounded-lg border border-oat bg-cream p-8 text-center shadow-sm sm:p-10"
        role="status"
      >
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent/15 text-accent-deep">
          <svg aria-hidden className="size-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-brand">¡Gracias!</h3>
        <p className="mx-auto mt-3 max-w-sm text-base leading-7 text-ink/80">
          ¡Gracias! Hemos recibido tu mensaje y te responderemos al email que nos has dejado lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form
      action={action}
      className="relative rounded-lg border border-oat bg-cream p-5 shadow-lg shadow-black/10 sm:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label className="text-sm font-medium text-brand" htmlFor="cf-name">
            Nombre
          </label>
          <input
            autoComplete="name"
            className={`${field} mt-2 h-12`}
            id="cf-name"
            maxLength={120}
            name="name"
            placeholder="Tu nombre"
            required
            type="text"
            defaultValue={state.values?.name}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-brand" htmlFor="cf-email">
            Email
          </label>
          <input
            autoComplete="email"
            className={`${field} mt-2 h-12`}
            id="cf-email"
            inputMode="email"
            maxLength={200}
            name="email"
            placeholder="tu@email.com"
            required
            type="email"
            defaultValue={state.values?.email}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-brand" htmlFor="cf-message">
            Mensaje
          </label>
          <textarea
            className={`${field} mt-2 min-h-36 resize-y py-3 leading-7`}
            id="cf-message"
            maxLength={3000}
            name="message"
            placeholder="Cuéntanos qué necesitas: una reserva, un encargo, una duda…"
            required
            rows={5}
            defaultValue={state.values?.message}
          />
        </div>

        {/* honeypot: people never see it */}
        <div aria-hidden className="sr-only">
          <input autoComplete="off" name="website" tabIndex={-1} type="text" />
        </div>
        <input name="t" type="hidden" value={t} />

        <label className="flex min-h-11 cursor-pointer items-start gap-3 text-sm leading-6 text-ink/85" htmlFor="cf-privacy">
          <input
            className="mt-0.5 size-5 shrink-0 cursor-pointer rounded-sm accent-brand focus-visible:ring-2 focus-visible:ring-accent/40"
            id="cf-privacy"
            name="privacy"
            required
            type="checkbox"
            value="on"
          />
          <span>
            He leído y acepto la{' '}
            <Link
              className="font-medium text-accent-deep underline underline-offset-4 transition-colors hover:text-brand"
              href="/privacidad"
              target="_blank"
            >
              política de privacidad
            </Link>
            .
          </span>
        </label>

        {state.error ? (
          <p
            className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800"
            role="alert"
          >
            {state.error}
          </p>
        ) : null}

        <button
          className="flex h-14 w-full items-center justify-center rounded-lg bg-brand px-6 text-base font-semibold text-cream shadow-sm transition-colors hover:bg-ink focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
          disabled={pending}
          type="submit"
        >
          {pending ? 'Enviando…' : 'Enviar mensaje'}
        </button>
      </div>
    </form>
  );
}
