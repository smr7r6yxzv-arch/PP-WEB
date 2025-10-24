import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PE-Automations – Mehr Buchungen. Weniger No-Shows.",
  description:
    "WhatsApp-Bots & AI-Automationen für lokale Betriebe: Termine buchen, Erinnerungen senden, No-Shows reduzieren.",
  openGraph: {
    title: "PE-Automations – Mehr Buchungen. Weniger No-Shows.",
    description:
      "WhatsApp-Bots & AI-Automationen für lokale Betriebe: Termine buchen, Erinnerungen senden, No-Shows reduzieren.",
    url: "https://pp-web-iota.vercel.app",
    siteName: "PE-Automations",
    locale: "de_AT",
    type: "website",
  },
  metadataBase: new URL("https://pp-web-iota.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
