// app/layout.js
import "./globals.css";
import Script from "next/script";

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
      <head>
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Grupo Tékton",
              "url": "https://www.estudiotekton.com",
              "telephone": "+54 11 6998 8414",
              "description":
                "Gestoría de permisos de construcción, regularización y conforme a obra en San Isidro y Zona Norte.",
              "areaServed": [
                "San Isidro",
                "Martínez",
                "Boulogne",
                "Vicente López",
                "San Fernando",
                "Zona Norte"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Blanco Encalada 2229",
                "addressLocality": "La Horqueta, San Isidro",
                "addressRegion": "Buenos Aires",
                "addressCountry": "AR"
              }
            })
          }}
        />
      </head>

      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
