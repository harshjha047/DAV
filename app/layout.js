import { Archivo, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const archivo = Archivo({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'], style: ['normal', 'italic'], variable: '--font-archivo', display: 'swap' });
const dm = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-dm', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

export const metadata = {
  title: 'DAV Networks — Fast, unlimited fiber broadband',
  description: 'Unlimited fiber internet plans from ₹499/month. 100–500 Mbps with a local DAV Networks team. Serving Noida Sector 62 and Khora, Ghaziabad. Call or WhatsApp +91 70116 28810.',
  metadataBase: new URL('https://davnetworks.in'),
  openGraph: { title: 'DAV Networks — Fiber broadband', description: 'Unlimited fiber plans from ₹499/month.', url: 'https://davnetworks.in', siteName: 'DAV Networks', locale: 'en_IN', type: 'website' },
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#12295C' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${dm.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
