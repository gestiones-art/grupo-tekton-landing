import Link from "next/link";

export const metadata = {
  title:
    "Conforme a Obra (Final de Obra) en San Isidro | Planos Municipales — Grupo Tékton",
  description:
    "Trámite de Conforme a Obra o Final de Obra en San Isidro, Martínez y zona norte. Verificación y presentación final para obtener la aprobación municipal de las obras ejecutadas.",
  alternates: { canonical: "/tramites/conforme-a-obra" },
};


export default function TramitePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Encabezado uniforme */}
      <section className="bg-[#0b132b] text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-2">
          Conforme a Obra
        </h1>
        <p className="text-gray-300">
          Relevamiento, visado profesional y archivo del plano conforme a obra.
        </p>
      </section>

      {/* Introducción */}
      <section className="max-w-4xl mx-auto p-6 leading-relaxed">
        <p>
          En <strong>Grupo Tékton</strong> realizamos el <strong>Conforme a Obra</strong> para dejar
          regularizada la documentación construida respecto del plano aprobado. Incluye relevamiento en sitio,
          actualización de planos, visado profesional y <strong>archivo del plano final</strong> ante el municipio.
        </p>
      </section>

      {/* Documentación */}
      <section className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 border mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Documentación a presentar
        </h2>
        <p className="text-gray-700 mb-3">
          Nos ocupamos de reunir, completar y presentar toda la documentación ante el organismo correspondiente.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li><strong>Plano en formato DWG</strong> con el relevamiento final, firmado por profesional matriculado.</li>
          <li><strong>Relevamiento del inmueble</strong> (mediciones y verificación de superficies).</li>
          <li><strong>Escritura inscripta</strong> en el Registro de la Propiedad Inmueble.</li>
          <li><strong>Certificación parcelaria</strong> vigente emitida por Catastro.</li>
          <li><strong>Libre deuda de ABL</strong> y tasas municipales.</li>
          <li><strong>Fotografías</strong> del estado actual (fachada e interiores).</li>
          <li><strong>Memoria descriptiva</strong> con diferencias respecto del plano aprobado, si las hubiera.</li>
          <li><strong>Plano visado por el Colegio Profesional</strong> (CAPBA / CAAITBA), según corresponda.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto bg-green-600 text-white rounded-2xl p-6 text-center shadow-md">
        <h3 className="text-lg font-semibold mb-2">
          ¿Necesitás presentar el Conforme a Obra?
        </h3>
        <p className="text-sm mb-4">
          Nos ocupamos del relevamiento, el visado y la presentación completa ante el municipio.
        </p>
        <a
          href="https://wa.me/5491169988414"
          className="bg-white text-green-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition"
        >
          Consultar por WhatsApp
        </a>
      </section>
  <div className="mt-8 text-sm text-gray-700">
  <p className="mb-2">También gestionamos:</p>
  <ul className="list-disc pl-6">
    <li><a className="underline" href="/tramites/permiso-de-construccion">Permiso de Construcción</a></li>
    <li><a className="underline" href="/tramites/regularizacion">Regularización de Obra</a></li>
    <li><a className="underline" href="/tramites/conforme-a-obra">Conforme a Obra (Final de Obra)</a></li>
    <li><a className="underline" href="/tramites/electromecanica-ascensor">Habilitación de Ascensor</a></li>
    <li><a className="underline" href="/contacto">Contacto</a></li>
  </ul>
</div>


      {/* Volver */}
      <div className="text-center mt-8 mb-16">
        <a
          href="/"
          className="text-gray-600 hover:text-gray-800 text-sm underline"
        >
          ← Volver al inicio
        </a>
      </div>
    </main>
  );
}
