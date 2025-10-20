// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Estudio Tékton",
  description: "Gestión municipal y procesos técnicos en Zona Norte.",
  // 👇 canónica explícita
  alternates: {
    canonical: "https://estudiotekton.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
