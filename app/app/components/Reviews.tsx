'use client';
import { useRef } from 'react';

type Review = { name: string; text: string; rating?: number };

const REVIEWS: Review[] = [
  { name: 'Tobias K.',  text: 'Der WhatsApp-Bot hat meine Terminbuchungen verdoppelt! Keine No-Shows mehr. Mega!', rating: 5 },
  { name: 'Sabrina M.', text: 'Ich war skeptisch, aber nach 2 Wochen schon 12% mehr Buchungen. Top Service!',   rating: 5 },
  { name: 'Lukas F.',   text: 'Schnelle Einrichtung, super Support und wirklich professionell.',                   rating: 5 },
  { name: 'Marlene R.', text: 'Kunden lieben die WhatsApp-Buchung. Spart uns jeden Tag Zeit!',                    rating: 5 },
  { name: 'Jonas P.',   text: 'Binnen 48 Stunden online – genau wie versprochen. Empfehlung!',                     rating: 5 },
  { name: 'Denise H.',  text: 'Deutlich weniger Terminausfälle. Funktioniert perfekt.',                            rating: 5 },
  { name: 'Patrick L.', text: 'KI klang kompliziert – das hier ist extrem einfach im Alltag.',                     rating: 5 },
];

export default function Reviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dx: number) =>
    scrollerRef.current?.scrollBy({ left: dx, behavior: 'smooth' });

  return (
    <section id="reviews" className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-10 text-center">
          ⭐ Kundenrezensionen
        </h2>

        <div className="relative">
          {/* Slider */}
          <div
            ref={scrollerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4"
            style={{ scrollBehavior: 'smooth' }}
            aria-label="Kundenrezensionen"
          >
            {REVIEWS.map((r, i) => (
              <article
                key={i}
                className="min-w-[300px] md:min-w-[350px] bg-gray-50 border border-emerald-200 rounded-2xl p-6 snap-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-3" aria-hidden>
                  {Array.from({ length: r.rating ?? 5 }).map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">“{r.text}”</p>
                <h4 className="text-emerald-700 font-semibold text-center">{r.name}</h4>
              </article>
            ))}
          </div>

          {/* Pfeile (nur Desktop) */}
          <button
            type="button"
            onClick={() => scrollBy(-360)}
            className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-emerald-500 text-white shadow-md hover:bg-emerald-600"
            aria-label="Nach links scrollen"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollBy(360)}
            className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-emerald-500 text-white shadow-md hover:bg-emerald-600"
            aria-label="Nach rechts scrollen"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
