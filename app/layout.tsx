import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PE-Automations — WhatsApp & AI Booking',
  description: 'Mehr Buchungen. Weniger No‑Shows. Automatisiert.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
