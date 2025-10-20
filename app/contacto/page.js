export const metadata = {
  title: "Contacto | Estudio Tekton",
  description: "Contactanos para consultas sobre trámites municipales, permisos de obra, regularización y asesoramiento técnico. Estudio Tekton - San Isidro, Martínez y zona norte.",
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
        <p><strong>Teléfono:</strong> +54 9 11 0000-0000</p>
        <p><strong>Email:</strong> contacto@estudiotekton.com</p>
        <p><strong>Horario:</strong> Lunes a Viernes de 9:00 a 17:00 hs</p>
        <p><strong>Zona:</strong> San Isidro, Martínez, Boulogne, Vicente López y alrededores</p>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>📬 Formulario de contacto</h2>
        <form
          action="https://formspree.io/f/tu-codigo"  // reemplazá con tu link de Formspree o Google Form
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
    </main>
  );
}
