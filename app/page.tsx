export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* TOP BANNER */}
      <div className="w-full bg-emerald-600 text-white text-center py-3 px-4 sticky top-0 z-50 shadow">
        <div className="max-w-6xl mx-auto font-extrabold text-lg md:text-xl">
          🚀 Go-Live in <span className="underline decoration-white/70">48 Stunden</span> — oder die ersten <span className="underline decoration-white/70">3 Monate GRATIS*</span>
        </div>
        <div className="text-xs opacity-80">*Nach Template-Freigabe durch Meta; gilt für Standard-Setup.</div>
      </div>

      {/* NAV */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-black text-white grid place-items-center font-bold">PE</div>
            <div className="font-semibold">PE-Automations</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#pricing" className="hover:opacity-70">Preise</a>
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
            Wir bauen WhatsApp-Bots und AI-Assistenten, die in Sekunden antworten, Termine buchen und Ihr Team entlasten. Ideal für Restaurants, Friseure, Studios & Handwerk.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-2xl bg-black text-white px-5 py-3 text-sm">Jetzt Demo anfragen →</a>
            <a href="#services" className="text-sm underline underline-offset-4">Was wir anbieten</a>
          </div>
          <div className="mt-6 text-sm text-neutral-500">Standort: Wien • D-A-CH Kunden • DSGVO-konform</div>
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

      {/* CONTACT */}
      <section id="contact" className="border-t bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Kontakt & Demo</h2>
          <p className="mt-2 text-neutral-600">Schreiben Sie uns auf WhatsApp oder per E-Mail. Wir antworten in wenigen Minuten.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://wa.me/436644225506" target="_blank" rel="noreferrer" className="rounded-2xl bg-emerald-600 text-white px-4 py-2">WhatsApp Chat starten</a>
            <a href="mailto:pr_edinger@hotmail.com" className="rounded-2xl border px-4 py-2">E-Mail senden</a>
          </div>
          <div className="text-sm text-neutral-600 mt-2">Telefon: <a href="tel:+436644225506" className="underline">+43 664 422 5506</a> • E-Mail: <a className="underline" href="mailto:pr_edinger@hotmail.com">pr_edinger@hotmail.com</a></div>
          <div className="mt-6 text-sm text-neutral-500">Oder Termin direkt buchen: <a className="underline" href="https://cal.com/" target="_blank" rel="noreferrer">cal.com</a></div>
        </div>
      </section>

      {/* LEGAL (Kurz) */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-500">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} PE-Automations — Wien</div>
            <div className="flex gap-4">
              <a href="#impressum" className="underline">Impressum</a>
              <a href="#datenschutz" className="underline">Datenschutz</a>
            </div>
          </div>
          <div className="mt-2 text-xs text-neutral-400">* Go-Live in 24h bzw. 48h-Garantie: gilt für Standard-Setups nach Meta-Freigabe & vollständigen Kundendaten.</div>
        </div>
      </footer>
    </div>
  );
}
