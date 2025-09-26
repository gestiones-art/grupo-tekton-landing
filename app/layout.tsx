export const metadata = {
  title: "Grupo Tékton — Gestoría Municipal + Six Sigma",
  description: "Permisos, demoliciones y regularizaciones para estudios de arquitectura en Zona Norte. Menos observaciones, más aprobaciones.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
