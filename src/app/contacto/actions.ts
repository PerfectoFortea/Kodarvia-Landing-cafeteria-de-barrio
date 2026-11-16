'use server';

import { db } from '@/db';
import { contacts } from '@/db/schema';

export type ContactState = { ok: boolean; error?: string; values?: { name: string; email: string; message: string } };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function sendContact(_prev: ContactState, form: FormData): Promise<ContactState> {
  // honeypot: real visitors never fill it; bots get a fake success
  if (String(form.get('website') ?? '')) return { ok: true };
  const started = Number(form.get('t') ?? 0);
  if (started && Date.now() - started < 2500) return { ok: true };

  const name = String(form.get('name') ?? '').trim();
  const email = String(form.get('email') ?? '').trim().toLowerCase();
  const message = String(form.get('message') ?? '').trim();
  const privacy = form.get('privacy') === 'on';

  if (!name || !email || !message) return { ok: false, values: { name, email, message }, error: 'Rellena nombre, email y mensaje.' };
  if (!EMAIL.test(email) || email.length > 200) return { ok: false, values: { name, email, message }, error: 'Escribe un email válido.' };
  if (name.length > 120 || message.length > 3000) return { ok: false, values: { name, email, message }, error: 'El texto es demasiado largo.' };
  if (!privacy) return { ok: false, values: { name, email, message }, error: 'Debes aceptar la política de privacidad.' };

  try {
    await db.insert(contacts).values({
      id: crypto.randomUUID(),
      name,
      email,
      message,
      privacy_accepted: true,
      created_at: new Date(),
    });
    console.log('contact saved');
  } catch (e) {
    console.error('contact save failed', e);
    return { ok: false, values: { name, email, message }, error: 'No hemos podido guardar tu mensaje. Inténtalo de nuevo.' };
  }
  return { ok: true };
}
