export default function TramitesPage() {
  return (
    <main style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1>Trámites Municipales</h1>
      <p>Seleccioná el trámite que necesitás:</p>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        <li><a href="/tramites/construccion">Permiso de Construcción</a></li>
        <li><a href="/tramites/regularizacion">Regularización de Obra</a></li>
        <li><a href="/tramites/conforme-obra">Conforme a Obra</a></li>
        <li><a href="/tramites/demolicion">Permiso de Demolición</a></li>
        <li><a href="/tramites/subdivision-ph">Subdivisión / PH</a></li>
        <li><a href="/tramites/impacto-ambiental">Impacto Ambiental</a></li>
        <li><a href="/tramites/electromecanica-ascensor">Electromecánica / Ascensor</a></li>
      </ul>
    </main>
  );
}
