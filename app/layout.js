import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Grupo Tékton — Gestoría Municipal + Six Sigma',
  description:
    'Gestión municipal para estudios de arquitectura en Zona Norte. Menos observaciones, menos tiempo, más aprobaciones.',
  metadataBase: new URL('https://estudiotekton.com'),
  openGraph: {
    title: 'Grupo Tékton — Gestoría Municipal + Six Sigma',
    description:
      'Gestión municipal para estudios de arquitectura en Zona Norte.',
    url: 'https://estudiotekton.com',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
