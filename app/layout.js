// ⬅️ IMPORTANTE: esta línea carga Tailwind y tus estilos globales
import "./globals.css";

export const metadata = {
  title: "Grupo Tékton — Gestión Municipal para Estudios de Arquitectura",
  description:
    "Gestionamos permisos, demoliciones y regularizaciones en Zona Norte con enfoque en mejora de procesos y cumplimiento normativo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">

  <head>
    <link rel="canonical" href="https://estudiotekton.com/" />
  </head>
  <body>{children}</body>
</html>


    
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
