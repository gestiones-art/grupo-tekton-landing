export const metadata = {
  title: "Contacto | Estudio Tekton",
  description:
    "Contactanos para consultas sobre trámites municipales, permisos de obra, regularización y asesoramiento técnico. Estudio Tekton - San Isidro, Martínez y zona norte.",
  alternates: { canonical: "https://estudiotekton.com/contacto" },
  openGraph: {
    title: "Contacto | Estudio Tekton",
    description:
      "Gestiones municipales en Zona Norte. Escribinos para permisos de obra, regularización y asesoramiento.",
    url: "https://estudiotekton.com/contacto",
    siteName: "Estudio Tekton",
    type: "website",
    locale: "es_AR",
  },
  robots: { index: true, follow: true },
};

export default function ContactoPage() {
  return (
    <main style={{ padding: "80px 20px", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Contacto</h1>
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Si necesitás comunicarte con <strong>Estudio Tekton</strong> para gestionar un trámite o solicitar asesoramiento, completá el formulario o escribinos directamente.
      </p>

      <section style={{ marginTop: "40px", lineHeight: "1.6" }}>
        <h2>📞 Datos de contacto</h2>
        <p><strong>Teléfono:</strong> +54 9 11 6998-8414</p>
        <p><strong>Email:</strong> gestiones@estudiotekton.com</p>
        <p><strong>Horario:</strong> Lunes a Viernes de 9:00 a 17:00 hs</p>
        <p><strong>Zona:</strong> San Isidro, y alrededores</p>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>📬 Formulario de contacto</h2>
        <form
          action="https://formspree.io/f/tu-codigo"
          method="POST"
          style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}
        >
          <input type="text" name="nombre" placeholder="Tu nombre" required style={{ padding: "10px" }} />
          <input type="email" name="email" placeholder="Tu correo electrónico" required style={{ padding: "10px" }} />
          <textarea name="mensaje" placeholder="Escribí tu consulta..." rows="5" required style={{ padding: "10px" }} />
          <button type="submit" style={{ padding: "12px", backgroundColor: "#000", color: "#fff", border: "none", cursor: "pointer" }}>
            Enviar mensaje
          </button>
        </form>
      </section>
                    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Estudio Tekton",
            url: "https://estudiotekton.com",
            image: "https://estudiotekton.com/logo.png",
            telephone: "+54 9 11 6998-8414",
            email: "gestiones@estudiotekton.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Blanco Encalada 2229",
              addressLocality: "La Horqueta, San Isidro",
              addressRegion: "Buenos Aires",
              postalCode: "1643",
              addressCountry: "AR",
            },
            openingHours: "Mo-Fr 09:00-17:00",
            areaServed: "San Isidro, Martínez y zona norte",
            sameAs: [
              "https://www.instagram.com/estudiotekton",
              "https://www.linkedin.com/company/estudiotekton"
            ],
          }),
        }}
      />

    </main>
  );
}
