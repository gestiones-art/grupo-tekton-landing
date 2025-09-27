import './globals.css';

export const metadata = {
  title: 'Grupo Tékton — Gestoría Municipal + Six Sigma',
  description:
    'Permisos, demoliciones y regularizaciones para estudios de arquitectura en Zona Norte. Menos observaciones, más aprobaciones.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
