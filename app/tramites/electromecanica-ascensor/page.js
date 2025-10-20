export const metadata = {
  title: "Trámite de Electromecánica y Ascensor | Estudio Tekton",
  description:
    "Presentación municipal y habilitación de instalaciones electromecánicas, ascensores y montacargas. Gestión completa ante los municipios de San Isidro, Martínez y zona norte.",
};

export default function ElectromecanicaAscensor() {
  return (
    <main style={{ padding: "80px 20px", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Electromecánica y Ascensor</h1>
      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
        En <strong>Estudio Tekton</strong> realizamos la presentación y gestión municipal
        para habilitar ascensores, montacargas e instalaciones electromecánicas.
      </p>

      <h2 style={{ marginTop: "30px" }}>Incluye:</h2>
      <ul style={{ lineHeight: "1.8" }}>
        <li>Revisión de planos y documentación técnica</li>
        <li>Presentación ante el municipio correspondiente</li>
        <li>Coordinación con profesionales matriculados</li>
        <li>Seguimiento hasta la aprobación final</li>
      </ul>

      <p style={{ marginTop: "30px" }}>
        Para más información, contactanos a{" "}
        <a href="/contacto" style={{ color: "#0070f3" }}>
          través del formulario de contacto
        </a>.
      </p>
    </main>
  );
}
