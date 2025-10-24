'use client';

export default function Page() {
  // Helper für Review-Slider
  const scroll = (dx: number) => {
    const el = document.querySelector<HTMLDivElement>('#reviews .scroller');
    el?.scrollBy({ left: dx, behavior: 'smooth' });
  };

  const REVIEWS = [
    { name: 'Tobias K.',  text: 'Der WhatsApp-Bot hat meine Terminbuchungen verdoppelt! Keine No-Shows mehr. Mega!' },
    { name: 'Sabrina M.', text: 'Ich war skeptisch, aber nach 2 Wochen schon 12% mehr Buchungen. Top Service!' },
    { name: 'Lukas F.',   text: 'Schnelle Einrichtung, super Support und wirklich professionell.' },
    { name: 'Marlene R.', text: 'Kunden lieben die WhatsApp-Buchung. Spart uns jeden Tag Zeit!' },
    { name: 'Jonas P.',   text: 'Binnen 48 Stunden online – genau wie versprochen. Empfehlung!' },
    { name: 'Denise H.',  text: 'Deutlich weniger Terminausfälle. Funktioniert perfekt.' },
    { name: 'Patrick L.', text: 'KI klang kompliziert – das hier ist extrem einfach im Alltag.' },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* TOP BANNER (sticky) */}
      <div className="w-full bg-emerald-600 text-white text-center py-3 px-4 sticky top-0 z-50 shadow">
        <div className="max-w-6xl mx-auto font-extrabold text-lg md:text-xl">
          🚀 Go-Live in <span className="underline decoration-white/70">48 Stunden</span> — oder die ersten <span className="underline decoration-white/70">2 Monate GRATIS</span>
        </div>
        <div className="text-xs opacity-80">*Nach Template-Freigabe durch Meta; Standard-Setup.</div>
      </div>

      {/* NAV */}
      <header className="border-b sticky top-[68px] z-40 bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-black text-white grid place-items-center font-bold">PE</div>
            <div className="font-semibold">PE-Automations</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#pricing" className="hover:opacity-70">Preise</a>
            <a href="#reviews" className="hover:opacity-70">Rezensionen</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
            <a href="#contact" className="hover:opacity-70">Kontakt</a>
          </nav>
          <div className="hidden md:block text-sm text-neutral-600 mr-3">☎︎ +43 664 422 5506</div>
          <a href="#contact" className="ml-2 inline-block rounded-2xl bg-black text-white px-4 py-2 text-sm">Kostenlose Demo</a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-500">AI • WhatsApp • Automation</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
            Mehr Buchungen. Weniger No-Shows. <span className="bg-amber-200 px-2 rounded">Automatisiert</span>.
          </h1>
          <p className="mt-4 text-neutral-600 md:text-lg">
            WhatsApp-Bots, die in Sekunden antworten, Termine buchen und Ihr Team entlasten. Ideal für Restaurants, Friseure, Studios & Handwerk.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-2xl bg-black text-white px-5 py-3 text-sm">Jetzt Demo anfragen →</a>
            <a href="#services" className="text-sm underline underline-offset-4">Was wir anbieten</a>
          </div>
          <div className="mt-6 text-sm text-neutral-500">Wien • D-A-CH • DSGVO-konform</div>
          <div className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-emerald-700">
            <span className="inline-block px-2 py-1 rounded-full bg-emerald-100">🚀 Go-Live in 24h*</span>
            <span className="text-neutral-400">(nach Template-Freigabe)</span>
          </div>
        </div>
        <div className="rounded-3xl p-6 border shadow-sm bg-white">
          <div className="font-semibold">WhatsApp Text-to-Book</div>
          <div className="text-sm text-neutral-600">Kunde: „Am Mo 14:00 frei?“ → Bot prüft Google Kalender & bucht.</div>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            <li>✅ 24/7 Antworten</li>
            <li>✅ Erinnerungen 24h/2h</li>
            <li>✅ No-Show Reduktion</li>
            <li>✅ Review-Booster</li>
          </ul>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-t bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-neutral-600">
          <div>✅ Offizielle WhatsApp-Schnittstelle</div>
          <div>🔒 DSGVO & Auftragsverarbeitung</div>
          <div>⚡ Antwort in Sekunden</div>
          <div>📅 Google/Cal.com-Sync</div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t bg-white scroll-mt-40">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Unsere Services</h2>
          <p className="mt-2 text-neutral-600">Modular buchbar – starten Sie klein und erweitern Sie bei Bedarf.</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-neutral-700">
            <div className="rounded-3xl border p-5 bg-white"><div className="font-semibold">WhatsApp Text-to-Book</div><p>Buchungen im Chat. Google/Cal.com Integration, Erinnerungen, Umbuchung.</p></div>
            <div className="rounded-3xl border p-5 bg-white"><div className="font-semibold">Speed-to-Lead</div><p>Website-Anfragen in 30s beantworten (WhatsApp/SMS/E-Mail). Mehr Abschlüsse.</p></div>
            <div className="rounded-3xl border p-5 bg-white"><div className="font-semibold">Social DM Agents</div><p>Instagram/FB DMs automatisch qualifizieren & Termine vergeben.</p></div>
            <div className="rounded-3xl border p-5 bg-white"><div className="font-semibold">AI Receptionist</div><p>Telefon-Assistent nimmt Anrufe an, beantwortet FAQs & bucht.</p></div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-t bg-neutral-50 scroll-mt-40">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Preise</h2>
          <p className="mt-2 text-neutral-600">Transparente Pakete. Monatlich kündbar.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border p-6">
              <div className="text-lg font-semibold">Starter</div>
              <div className="text-4xl font-extrabold">199€<span className="text-base font-normal text-neutral-500">/Mon</span></div>
              <ul className="mt-3 text-sm text-neutral-700 space-y-1">
                <li>✅ WhatsApp Buchung</li><li>✅ 1 Kalender</li><li>✅ Erinnerungen 24h/2h</li>
              </ul>
              <a href="#contact" className="block mt-4 w-full text-center rounded-2xl bg-black text-white py-2">Anfragen</a>
              <div className="mt-2 text-xs text-neutral-500">+ Einmalig 499€ Setup</div>
            </div>
            <div className="rounded-3xl border-2 border-amber-300 p-6 shadow">
              <div className="text-lg font-semibold">Growth</div>
              <div className="text-4xl font-extrabold">349€<span className="text-base font-normal text-neutral-500">/Mon</span></div>
              <ul className="mt-3 text-sm text-neutral-700 space-y-1">
                <li>✅ + Speed-to-Lead</li><li>✅ Review-Booster</li><li>✅ Reporting</li>
              </ul>
              <a href="#contact" className="block mt-4 w-full text-center rounded-2xl bg-black text-white py-2">Anfragen</a>
              <div className="mt-2 text-xs text-neutral-500">+ Einmalig 799€ Setup</div>
            </div>
            <div className="rounded-3xl border p-6">
              <div className="text-lg font-semibold">Pro</div>
              <div className="text-4xl font-extrabold">599€<span className="text-base font-normal text-neutral-500">/Mon</span></div>
              <ul className="mt-3 text-sm text-neutral-700 space-y-1">
                <li>✅ + DM-Agent (IG/FB)</li><li>✅ Kampagnen-Flows</li><li>✅ 2h Tuning/Mon</li>
              </ul>
              <a href="#contact" className="block mt-4 w-full text-center rounded-2xl bg-black text-white py-2">Anfragen</a>
              <div className="mt-2 text-xs text-neutral-500">+ Einmalig 1.200€ Setup</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS (Slider) */}
      <section id="reviews" className="py-20 bg-white text-gray-800 scroll-mt-40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-10 text-center">⭐ Kundenrezensionen</h2>
          <div className="relative">
            <div
              className="scroller flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4"
              style={{ scrollBehavior: 'smooth' }}
              aria-label="Kundenrezensionen"
            >
              {REVIEWS.map((r, i) => (
                <article
                  key={i}
                  className="min-w-[300px] md:min-w-[350px] bg-gray-50 border border-emerald-200 rounded-2xl p-6 snap-center shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-3" aria-hidden>
                    {'★★★★★'.split('').map((s, idx) => (
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
              onClick={() => scroll(-360)}
              className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-emerald-500 text-white shadow-md hover:bg-emerald-600"
              aria-label="Nach links scrollen"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scroll(360)}
              className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-emerald-500 text-white shadow-md hover:bg-emerald-600"
              aria-label="Nach rechts scrollen"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t bg-neutral-50 scroll-mt-40">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Häufige Fragen</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm text-neutral-700">
            <div><div className="font-semibold">Brauche ich eine neue Nummer?</div><p>Nein. Sie können Ihre bestehende WhatsApp-Business-Nummer verwenden oder wir richten eine neue ein.</p></div>
            <div><div className="font-semibold">Ist das DSGVO-konform?</div><p>Ja. Offizielle WhatsApp-Schnittstellen, Opt-out („Stop“), AV-Verträge & Löschkonzept.</p></div>
            <div><div className="font-semibold">Arbeitet das mit Google Kalender?</div><p>Ja. Termine können live geprüft, gebucht, erinnert und umgebucht werden.</p></div>
            <div><div className="font-semibold">Wie schnell sind wir live?</div><p>In der Regel <b>innerhalb von 24 Stunden</b> nach Vorlagen-Freigabe durch Meta (WhatsApp).</p></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t bg-white scroll-mt-40">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Kontakt & Demo</h2>
          <p className="mt-2 text-neutral-600">Schreiben Sie uns auf WhatsApp oder per E-Mail. Wir antworten in wenigen Minuten.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://wa.me/436644225506" target="_blank" rel="noreferrer" className="rounded-2xl bg-emerald-600 text-white px-4 py-2">WhatsApp Chat starten</a>
            <a href="mailto:pr_edinger@hotmail.com" className="rounded-2xl border px-4 py-2">E-Mail senden</a>
          </div>
          <div className="text-sm text-neutral-600 mt-2">Telefon: <a href="tel:+436644225506" className="underline">+43 664 422 5506</a> • E-Mail: <a className="underline" href="mailto:pr_edinger@hotmail.com">pr_edinger@hotmail.com</a></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-500">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} Patrick Edinger — Wien</div>
            <div className="flex gap-4">
              <a href="#impressum" className="underline">Impressum</a>
              <a href="#datenschutz" className="underline">Datenschutz</a>
            </div>
          </div>
          <div className="mt-2 text-xs text-neutral-400">* Go-Live in 24h/48h: Standard-Setups nach Meta-Freigabe & vollständigen Kundendaten.</div>
        </div>
      </footer>
    </div>
  );
}
