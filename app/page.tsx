
export default function Page() {
  return (
    <div className=\"min-h-screen bg-white text-neutral-900\">
      <div className=\"w-full bg-emerald-600 text-white text-center py-3 px-4 sticky top-0 z-50 shadow\">
        <div className=\"max-w-6xl mx-auto font-extrabold text-lg md:text-xl\">
          🚀 Go‑Live in <span className=\"underline decoration-white/70\">48 Stunden</span> — oder die ersten <span className=\"underline decoration-white/70\">3 Monate GRATIS*</span>
        </div>
        <div className=\"text-xs opacity-80\">*Nach Template‑Freigabe durch Meta; gilt für Standard‑Setup.</div>
      </div>

      <header className=\"border-b\">
        <div className=\"max-w-6xl mx-auto px-4 py-3 flex items-center justify-between\">
          <div className=\"flex items-center gap-3\">
            <div className=\"h-9 w-9 rounded-2xl bg-black text-white grid place-items-center font-bold\">PE</div>
            <div className=\"font-semibold\">PE‑Automations</div>
          </div>
          <nav className=\"hidden md:flex items-center gap-6 text-sm\">
            <a href=\"#services\" className=\"hover:opacity-70\">Services</a>
            <a href=\"#pricing\" className=\"hover:opacity-70\">Preise</a>
            <a href=\"#faq\" className=\"hover:opacity-70\">FAQ</a>
            <a href=\"#contact\" className=\"hover:opacity-70\">Kontakt</a>
          </nav>
          <div className=\"hidden md:block text-sm text-neutral-600 mr-3\">☎︎ +43 664 422 5506</div>
          <a href=\"#contact\" className=\"ml-2 inline-block rounded-2xl bg-black text-white px-4 py-2 text-sm\">Kostenlose Demo</a>
        </div>
      </header>

      <section className=\"max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center\">
        <div>
          <p className=\"text-xs uppercase tracking-widest text-neutral-500\">AI • WhatsApp • Automation</p>
          <h1 className=\"text-4xl md:text-5xl font-extrabold leading-tight mt-2\">
            Mehr Buchungen. Weniger No‑Shows. <span className=\"bg-amber-200 px-2 rounded\">Automatisiert</span>.
          </h1>
          <p className=\"mt-4 text-neutral-600 md:text-lg\">
            Wir bauen WhatsApp‑Bots und AI‑Assistenten, die in Sekunden antworten, Termine buchen und Ihr Team entlasten. Ideal für Restaurants, Friseure, Studios & Handwerk.
          </p>
          <div className=\"mt-6 flex flex-wrap items-center gap-3\">
            <a href=\"#contact\" className=\"rounded-2xl bg-black text-white px-5 py-3 text-sm\">Jetzt Demo anfragen →</a>
            <a href=\"#services\" className=\"text-sm underline underline-offset-4\">Was wir anbieten</a>
          </div>
          <div className=\"mt-6 text-sm text-neutral-500\">Standort: Wien • D‑A‑CH Kunden • DSGVO‑konform</div>
          <div className=\"mt-2 inline-flex items-center gap-2 text-sm font-medium text-emerald-700\">
            <span className=\"inline-block px-2 py-1 rounded-full bg-emerald-100\">🚀 Go‑Live in 24h*</span>
            <span className=\"text-neutral-400\">(nach Template‑Freigabe)</span>
          </div>
        </div>
        <div className=\"rounded-3xl p-6 border shadow-sm bg-white\">
          <div className=\"font-semibold\">WhatsApp Text‑to‑Book</div>
          <div className=\"text-sm text-neutral-600\">Kunde: „Am Mo 14:00 frei?“ → Bot prüft Google Kalender & bucht.</div>
          <ul className=\"mt-3 grid grid-cols-2 gap-2 text-sm\">
            <li>✅ 24/7 Antworten</li>
            <li>✅ Erinnerungen 24h/2h</li>
            <li>✅ No‑Show Reduktion</li>
            <li>✅ Review‑Booster</li>
          </ul>
        </div>
      </section>

      <section id=\"services\" className=\"border-t bg-neutral-50\">
        <div className=\"max-w-6xl mx-auto px-4 py-16\">
          <h2 className=\"text-2xl md:text-3xl font-bold\">Unsere Services</h2>
          <p className=\"mt-2 text-neutral-600\">Modular buchbar – starten Sie klein und erweitern Sie bei Bedarf.</p>
          <div className=\"mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-neutral-700\">
            <div className=\"rounded-3xl border p-5 bg-white\"><div className=\"font-semibold\">WhatsApp Text‑to‑Book</div><p>Buchungen im Chat. Google/Cal.com Integration, Erinnerungen, Umbuchung.</p></div>
            <div className=\"rounded-3xl border p-5 bg-white\"><div className=\"font-semibold\">Speed‑to‑Lead</div><p>Website‑Anfragen in 30s beantworten (WhatsApp/SMS/E‑Mail). Mehr Abschlüsse.</p></div>
            <div className=\"rounded-3xl border p-5 bg-white\"><div className=\"font-semibold\">Social DM Agents</div><p>Instagram/FB DMs automatisch qualifizieren & Termine vergeben.</p></div>
            <div className=\"rounded-3xl border p-5 bg-white\"><div className=\"font-semibold\">AI Receptionist</div><p>Telefon‑Assistent nimmt Anrufe an, beantwortet FAQs & bucht.</p></div>
          </div>
        </div>
      </section>

      <section id=\"pricing\" className=\"border-t\">
        <div className=\"max-w-6xl mx-auto px-4 py-16\">
          <h2 className=\"text-2xl md:text-3xl font-bold\">Preise</h2>
          <p className=\"mt-2 text-neutral-600\">Transparente Pakete. Monatlich kündbar.</p>
          <div className=\"mt-8 grid md:grid-cols-3 gap-6\">
            <div className=\"rounded-3xl border p-6\">
              <div className=\"text-lg font-semibold\">Starter</div>
              <div className=\"text-4xl font-extrabold\">199€<span className=\"text-base font-normal text-neutral-500\">/Mon</span></div>
              <ul className=\"mt-3 text-sm text-neutral-700 space-y-1\">
                <li>✅ WhatsApp Buchung</li>
                <li>✅ 1 Kalender</li>
                <li>✅ Erinnerungen 24h/2h</li>
              </ul>
              <a href=\"#contact\" className=\"block mt-4 w-full text-center rounded-2xl bg-black text-white py-2\">Anfragen</a>
              <div className=\"mt-2 text-xs text-neutral-500\">+ Einmalig 499€ Setup</div>
            </div>
            <div className=\"rounded-3xl border-2 border-amber-300 p-6 shadow\">
              <div className=\"text-lg font-semibold\">Growth</div>
              <div className=\"text-4xl font-extrabold\">349€<span className=\"text-base font-normal text-neutral-500\">/Mon</span></div>
              <ul className=\"mt-3 text-sm text-neutral-700 space-y-1\">
                <li>✅ + Speed‑to‑Lead</li>
                <li>✅ Review‑Booster</li>
                <li>✅ Reporting</li>
              </ul>
              <a href=\"#contact\" className=\"block mt-4 w-full text-center rounded-2xl bg-black text-white py-2\">Anfragen</a>
              <div className=\"mt-2 text-xs text-neutral-500\">+ Einmalig 799€ Setup</div>
            </div>
            <div className=\"rounded-3xl border p-6\">
              <div className=\"text-lg font-semibold\">Pro</div>
              <div className=\"text-4xl font-extrabold\">599€<span className=\"text-base font-normal text-neutral-500\">/Mon</span></div>
              <ul className=\"mt-3 text-sm text-neutral-700 space-y-1\">
                <li>✅ + DM‑Agent (IG/FB)</li>
                <li>✅ Kampagnen‑Flows</li>
                <li>✅ 2h Tuning/Mon</li>
              </ul>
              <a href=\"#contact\" className=\"block mt-4 w-full text-center rounded-2xl bg-black text-white py-2\">Anfragen</a>
              <div className=\"mt-2 text-xs text-neutral-500\">+ Einmalig 1.200€ Setup</div>
            </div>
          </div>
        </div>
      </section>

      <section id=\"contact\" className=\"border-t bg-neutral-50\">
        <div className=\"max-w-6xl mx-auto px-4 py-16\">
          <h2 className=\"text-2xl md:text-3xl font-bold\">Kontakt & Demo</h2>
          <p className=\"mt-2 text-neutral-600\">Schreiben Sie uns auf WhatsApp oder per E‑Mail. Wir antworten in wenigen Minuten.</p>
          <div className=\"mt-6 flex flex-wrap gap-3\">
            <a href=\"https://wa.me/436644225506\" target=\"_blank\" rel=\"noreferrer\" className=\"rounded-2xl bg-emerald-600 text-white px-4 py-2\">WhatsApp Chat starten</a>
            <a href=\"mailto:pr_edinger@hotmail.com\" className=\"rounded-2xl border px-4 py-2\">E‑Mail senden</a>
          </div>
          <div className=\"text-sm text-neutral-600 mt-2\">Telefon: <a href=\"tel:+436644225506\" className=\"underline\">+43 664 422 5506</a> • E‑Mail: <a className=\"underline\" href=\"mailto:pr_edinger@hotmail.com\">pr_edinger@hotmail.com</a></div>
          <div className=\"mt-6 text-sm text-neutral-500\">Oder Termin direkt buchen: <a className=\"underline\" href=\"https://cal.com/\" target=\"_blank\" rel=\"noreferrer\">cal.com</a></div>
        </div>
      </section>

      <section id=\"impressum\" className=\"border-t bg-white\">
        <div className=\"max-w-6xl mx-auto px-4 py-16\">
          <h2 className=\"text-2xl md:text-3xl font-bold\">Impressum</h2>
          <div className=\"mt-4 text-sm text-neutral-700 space-y-2\">
            <p><b>Firma:</b> PE‑Automations</p>
            <p><b>Inhaber:</b> Patrick Edinger</p>
            <p><b>Anschrift:</b> Marburggasse 21, 1220 Wien, Österreich</p>
            <p><b>Telefon:</b> +43 664 422 5506</p>
            <p><b>E‑Mail:</b> pr_edinger@hotmail.com</p>
            <p><b>Unternehmensgegenstand:</b> IT‑Dienstleistungen, Automatisierung von Kommunikations‑ und Buchungssystemen</p>
            <p><b>UID‑Nr.:</b> 12 895/7347</p>
          </div>
        </div>
      </section>

      <section id=\"datenschutz\" className=\"border-t bg-neutral-50\">
        <div className=\"max-w-6xl mx-auto px-4 py-16\">
          <h2 className=\"text-2xl md:text-3xl font-bold\">Datenschutzerklärung (Kurzfassung)</h2>
          <div className=\"mt-4 text-sm text-neutral-700 space-y-3\">
            <p>Wir verarbeiten personenbezogene Daten ausschließlich zur Bearbeitung von Anfragen und Terminbuchungen (Art. 6 Abs. 1 lit. b/f DSGVO).</p>
            <p><b>WhatsApp Business:</b> Nutzung offizieller Schnittstellen (Meta). Alternativen: E‑Mail/Telefon.</p>
            <p><b>Speicherdauer:</b> Nur solange erforderlich bzw. gesetzlich geboten.</p>
            <p><b>Rechte:</b> Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch. Kontakt: pr_edinger@hotmail.com</p>
          </div>
        </div>
      </section>

      <footer className=\"border-t\">
        <div className=\"max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-500\">
          <div className=\"flex flex-wrap items-center justify-between gap-4\">
            <div>© {new Date().getFullYear()} PE‑Automations — Wien</div>
            <div className=\"flex gap-4\">
              <a href=\"#impressum\" className=\"underline\">Impressum</a>
              <a href=\"#datenschutz\" className=\"underline\">Datenschutz</a>
            </div>
          </div>
          <div className=\"mt-2 text-xs text-neutral-400\">* Go‑Live in 24h bzw. 48h‑Garantie: gilt für Standard‑Setups nach Meta‑Freigabe & vollständigen Kundendaten.</div>
        </div>
      </footer>
    </div>
  );
}
