import type { Metadata } from 'next';
import Link from 'next/link';

import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: `Cómo trata ${site.name} los datos personales que recibe a través del formulario de contacto.`,
};

const h2 = 'font-display text-xl font-semibold tracking-tight text-brand sm:text-2xl';
const p = 'mt-3 text-base leading-7 text-ink/85';

export default function Privacidad() {
  return (
    <main className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          className="inline-flex min-h-11 items-center text-sm font-medium text-accent-deep underline underline-offset-4 transition-colors hover:text-brand"
          href="/"
        >
          ← Volver al inicio
        </Link>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-brand sm:text-5xl">
          Política de privacidad
        </h1>
        <p className="mt-4 rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm leading-6 text-ink/90">
          Texto orientativo: los datos entre corchetes deben completarse y el texto revisarse con un profesional antes
          de publicarlo.
        </p>

        <div className="mt-10 grid gap-10">
          <section>
            <h2 className={h2}>1. Responsable del tratamiento</h2>
            <p className={p}>
              El responsable de los datos que nos envías es {site.name}: [razón social o nombre del titular], con NIF
              [NIF] y domicilio en Calle del Olivar, 14, 28012 Madrid. Para cualquier cuestión sobre privacidad puedes
              escribirnos a [email de contacto] o usar el{' '}
              <Link className="font-medium text-accent-deep underline underline-offset-4" href="/#contacto">
                formulario de contacto
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className={h2}>2. Qué datos recogemos y para qué</h2>
            <p className={p}>
              A través del formulario de contacto recogemos tu nombre, tu dirección de email y el mensaje que
              escribes. Los usamos únicamente para atender tu consulta y responderte. No los utilizamos para enviarte
              publicidad ni para elaborar perfiles.
            </p>
          </section>

          <section>
            <h2 className={h2}>3. Base legal</h2>
            <p className={p}>
              Tratamos tus datos con tu consentimiento, que nos das al marcar la casilla de aceptación de esta
              política antes de enviar el formulario. Puedes retirarlo en cualquier momento, sin que ello afecte a lo
              ya tratado.
            </p>
          </section>

          <section>
            <h2 className={h2}>4. Conservación</h2>
            <p className={p}>
              Conservamos tus datos el tiempo necesario para resolver tu consulta y, después, durante [plazo, por
              ejemplo 12 meses] por si surge alguna reclamación. Pasado ese plazo los eliminamos o los anonimizamos.
            </p>
          </section>

          <section>
            <h2 className={h2}>5. Destinatarios</h2>
            <p className={p}>
              No cedemos tus datos a terceros salvo obligación legal. Pueden acceder a ellos los proveedores que nos
              prestan servicios de alojamiento web y gestión del sitio, con contrato de encargado del tratamiento.
            </p>
          </section>

          <section>
            <h2 className={h2}>6. Tus derechos</h2>
            <p className={p}>
              Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y
              portabilidad escribiéndonos a [email de contacto], indicando qué derecho quieres ejercer. Si crees que
              no hemos tratado bien tus datos, puedes presentar una reclamación ante la Agencia Española de
              Protección de Datos (aepd.es).
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
