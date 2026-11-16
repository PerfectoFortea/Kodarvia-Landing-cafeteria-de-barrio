import { ContactForm } from '@/components/contact-form';
import { place, site } from '@/lib/site';

const img = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

const photos = {
  hero: img('1760175445000-0e01e193d1cd'),
  room: img('1728761390316-935ffeb3fbcc', 900),
  cup: img('1550731358-491ded4af838', 800),
  barista: img('1579265898841-79c7890d69cf', 800),
  light: img('1593443320739-77f74939d0da', 800),
  corner: img('1564849744694-348ecd00c279', 1000),
};

const container = 'mx-auto max-w-6xl px-4 sm:px-6';

const offer = [
  {
    title: 'Espresso y filtrados',
    text: 'Granos de tostadores independientes que cambiamos cada temporada. Pregúntanos cuál es el del mes.',
    photo: photos.cup,
    alt: 'Una taza blanca de café con latte art sostenida con la mano',
    offset: '',
  },
  {
    title: 'Leche, espuma y paciencia',
    text: 'Flat white, cortado, capuchino. Vaporizamos despacio y servimos en taza de cerámica, siempre.',
    photo: photos.barista,
    alt: 'Barista vertiendo leche sobre un café en una taza blanca',
    offset: 'lg:mt-12',
  },
  {
    title: 'Desayunos y meriendas',
    text: 'Tostadas, bollería de obrador y algo dulce de la casa para acompañar el café, de la mañana a la tarde.',
    photo: photos.light,
    alt: 'Taza de café con espuma sobre una mesa de madera iluminada por el sol',
    offset: '',
  },
];

function Icon({ d }: { d: string }) {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-deep">
      <svg aria-hidden className="size-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d={d} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-14 sm:pt-20">
        <div className={`${container} text-center`}>
          <p className="font-display text-sm font-medium text-accent-deep">Café de especialidad en Madrid</p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance text-brand sm:text-6xl">
            El café de cada día, hecho con calma.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-ink/80 sm:text-lg sm:leading-8">
            {site.name} es una cafetería pequeña y luminosa donde el grano se elige con cuidado y la mesa grande
            siempre tiene un hueco para ti.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              className="flex h-14 w-full items-center justify-center rounded-lg bg-brand px-8 text-base font-semibold text-cream shadow-sm transition-colors hover:bg-ink focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:outline-none sm:w-auto"
              href="#contacto"
            >
              Escríbenos
            </a>
            <a
              className="flex h-14 w-full items-center justify-center rounded-lg px-6 text-base font-medium text-brand underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent-deep sm:w-auto"
              href="#donde-estamos"
            >
              Cómo llegar
            </a>
          </div>
        </div>
        <div className={`${container} mt-12 sm:mt-16`}>
          <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-lg shadow-brand/15 sm:aspect-[16/8]">
            <img
              alt="Taza de café con latte art sobre una mesa redonda de madera"
              className="size-full object-cover object-[62%_50%]"
              fetchPriority="high"
              src={photos.hero}
            />
          </div>
        </div>
      </section>

      {/* Presentación */}
      <section className="py-16 sm:py-24" id="inicio">
        <div className={`${container} grid items-center gap-10 md:grid-cols-2 lg:gap-20`}>
          <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-md shadow-brand/10 md:order-2">
            <img
              alt="Barra de madera junto a una gran ventana con la luz de la tarde y árboles al fondo"
              className="size-full object-cover"
              loading="lazy"
              src={photos.room}
            />
          </div>
          <div className="md:order-1">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-balance text-brand sm:text-4xl">
              Un rincón luminoso para quedarse un rato
            </h2>
            <div className="mt-6 grid max-w-prose gap-4 text-base leading-7 text-ink/85">
              <p>
                Abrimos {site.name} con una idea sencilla: un buen café no necesita ruido. Trabajamos con tostadores
                independientes, molemos al momento y servimos sin prisa.
              </p>
              <p>
                Ven a desayunar, a trabajar con el portátil junto a la ventana o a merendar con alguien. Y si quieres
                algo concreto, como una mesa para un grupo o un encargo, escríbenos.
              </p>
            </div>
            <ul className="mt-8 grid gap-4 border-t border-oat pt-8 text-base text-ink/90">
              {['Grano de temporada, molido al momento', 'Bollería y tostadas cada mañana', 'Mesa grande y wifi para trabajar'].map(
                (t) => (
                  <li className="flex items-center gap-3" key={t}>
                    <span aria-hidden className="size-2 shrink-0 rounded-full bg-accent" />
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Qué tomar */}
      <section className="bg-oat py-16 sm:py-24">
        <div className={container}>
          <h2 className="max-w-xl font-display text-2xl font-semibold tracking-tight text-balance text-brand sm:text-4xl">
            Lo que sale de nuestra barra
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {offer.map((o, i) => (
              <article className={`${o.offset} ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`} key={o.title}>
                <div
                  className={`overflow-hidden rounded-lg shadow-md shadow-brand/10 ${i === 2 ? 'aspect-[4/5] sm:aspect-[16/9] lg:aspect-[4/5]' : 'aspect-[4/5]'}`}
                >
                  <img alt={o.alt} className="size-full object-cover" loading="lazy" src={o.photo} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-brand">{o.title}</h3>
                <p className="mt-2 max-w-sm text-base leading-7 text-ink/80">{o.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dónde estamos */}
      <section className="scroll-mt-16 py-16 sm:py-24" id="donde-estamos">
        <div className={container}>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-brand sm:text-4xl">Dónde estamos</h2>
          <p className="mt-3 max-w-prose text-base leading-7 text-ink/80">
            En pleno barrio de Embajadores, a un paseo corto del centro.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md shadow-brand/10 lg:col-span-2 lg:aspect-auto">
              <img
                alt="Rincón del café con ventanal de madera, pared de ladrillo y butacas de terciopelo"
                className="size-full object-cover"
                loading="lazy"
                src={photos.corner}
              />
            </div>
            <div className="grid gap-5 lg:col-span-3">
              <div className="flex gap-4 rounded-lg border border-oat bg-white p-5 shadow-sm sm:p-6">
                <Icon d="M12 7v5l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-semibold text-brand">Horario</h3>
                  <dl className="mt-3 divide-y divide-oat text-base">
                    {place.hours.map((h) => (
                      <div className="flex flex-wrap justify-between gap-x-4 py-2.5 first:pt-0 last:pb-0" key={h.days}>
                        <dt className="text-ink/80">{h.days}</dt>
                        <dd className="font-medium tabular-nums text-ink">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex gap-4 rounded-lg border border-oat bg-white p-5 shadow-sm sm:p-6">
                  <Icon d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold text-brand">Dirección</h3>
                    <p className="mt-3 text-base leading-7 text-ink/85">
                      {place.address}
                      <br />
                      {place.city}
                    </p>
                    <a
                      className="mt-3 inline-flex min-h-11 items-center font-medium text-accent-deep underline underline-offset-4 transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:outline-none"
                      href={place.mapsUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Abrir en Google Maps
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 rounded-lg border border-oat bg-white p-5 shadow-sm sm:p-6">
                  <Icon d="M5 17h14M7 17V8a3 3 0 013-3h4a3 3 0 013 3v9M8 20v-3M16 20v-3M9 11h6" />
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold text-brand">Cómo llegar</h3>
                    <ul className="mt-3 grid gap-2 text-base leading-7 text-ink/85">
                      <li>Metro: Tirso de Molina (línea 1), a 5 minutos andando.</li>
                      <li>Autobús: líneas 17 y 27, parada en Ronda de Toledo.</li>
                      <li>En bici o a pie: desde la Plaza Mayor, unos 12 minutos.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="scroll-mt-16 bg-brand py-16 text-cream sm:py-24" id="contacto">
        <div className={container}>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              Escríbenos
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-7 text-cream/85 sm:text-lg">
              ¿Una mesa para un grupo, un encargo de bollería o una duda? Déjanos unas líneas y te respondemos en un
              día laborable.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
