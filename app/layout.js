// app/layout.js
export const metadata = {
  title: "Mi Sitio",
  description: "Descripción de mi sitio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
