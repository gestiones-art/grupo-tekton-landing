export const metadata = {
  title: "Electromecánica y Ascensor | Grupo Tékton",
  description:
    "Presentación y habilitación de ascensores, montacargas e instalaciones electromecánicas ante el municipio. Gestión técnica y legal completa hasta la aprobación final.",
};

export default function ElectromecanicaAscensor() {
  return (
    <main style={{ padding: "80px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Electromecánica y Ascensor</h1>
      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
        En <strong>Grupo Tékton</strong> realizamos la gestión integral para habilitar
        sistemas de elevación (ascensores y montacargas) y otras instalaciones
        electromecánicas, cumpliendo normativa municipal y requisitos técnicos de los
        colegios profesionales correspondientes.
      </p>

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Incluye</h2>
        <ul>
          <li>Coordinación de profesionales matriculados y presentación técnica completa.</li>
          <li>Revisión de planos y documentación técnica.</li>
          <li>Confección o ajuste de memoria técnica y planillas municipales.</li>
          <li>Visado ante el colegio profesional correspondiente (CAPBA / CAAITBA).</li>
          <li>Presentación y seguimiento del trámite ante el municipio.</li>
          <li>Gestión de la resolución y habilitación final.</li>
        </ul>
      </div>

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Documentación habitual</h2>
        <ul>
          <li>Plano municipal y croquis de ubicación del equipo.</li>
          <li>Memoria descriptiva y fichas técnicas.</li>
          <li>Certificación de instalador y mantenedor habilitado.</li>
          <li>Certificado parcelario y libre deuda de tasas municipales.</li>
          <li>Visado del colegio profesional correspondiente.</li>
        </ul>
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "#16a34a",
          color: "white",
          textAlign: "center",
          padding: "25px",
          borderRadius: "10px",
        }}
      >
        <h3>¿Necesitás habilitar un ascensor o montacargas?</h3>
        <p>
          Te acompañamos en todo el proceso, desde la verificación técnica hasta la aprobación municipal.
        </p>
        <a
          href="https://wa.me/5491135571551"
          style={{
            background: "white",
            color: "#16a34a",
            padding: "10px 20px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Consultar por WhatsApp
        </a>
      </div>

      <p style={{ marginTop: "20px", textAlign: "center" }}>
        — <a href="/">Volver al inicio</a>
      </p>
    </main>
  );
}
