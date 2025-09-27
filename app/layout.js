export const metadata = {
  title: "Grupo Tékton — Gestión Municipal para Estudios de Arquitectura",
  description:
    "Gestionamos permisos, demoliciones y regularizaciones en Zona Norte con enfoque en mejora de procesos y cumplimiento normativo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
