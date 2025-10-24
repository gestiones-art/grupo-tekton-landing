import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Regularización de Obra y Plano Conforme | San Isidro y Zona Norte — Grupo Tékton",
  description:
    "Regularización de construcciones existentes y plano conforme en San Isidro y zona norte. Relevamiento, planos, visado profesional y presentación municipal.",
};


export default function TramitePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Encabezado uniforme */}
      <section className="bg-[#0b132b] text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-2">
          Regularización de Planos
        </h1>
        <p className="text-gray-300">
          Obras existentes sin permiso o con diferencias respecto al plano aprobado.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto p-6 leading-relaxed">
        <p>
          En <strong>Grupo Tékton</strong> asesoramos en la <strong>regularización de planos</strong>,
          gestionando ante el municipio las obras ejecutadas sin permiso o con diferencias respecto
          al plano aprobado, para dejar la propiedad en regla y evitar sanciones.
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
          <li><strong>Plano en formato DWG</strong> relevado (municipal), firmado por profesional matriculado.</li>
          <li><strong>Escritura inscripta</strong> en el Registro de la Propiedad Inmueble.</li>
          <li><strong>Certificación parcelaria</strong> vigente emitida por Catastro.</li>
          <li><strong>Libre deuda de ABL</strong> y tasas municipales.</li>
          <li><strong>Fotografías</strong> del estado actual de la propiedad (fachada e interiores).</li>
          <li><strong>Memoria descriptiva</strong> de obra, instalaciones y materiales.</li>
          <li><strong>Planilla de estadística</strong> y formularios municipales firmados.</li>
          <li><strong>Plano visado por el Colegio Profesional</strong> (CAPBA / CAAITBA), según corresponda.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto bg-green-600 text-white rounded-2xl p-6 text-center shadow-md">
        <h3 className="text-lg font-semibold mb-2">¿Necesitás regularizar tu propiedad?</h3>
        <p className="text-sm mb-4">
          Nos encargamos de todo el proceso ante el municipio para dejar tus planos en regla.
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
        <a href="/" className="text-gray-600 hover:text-gray-800 text-sm underline">
          ← Volver al inicio
        </a>
      </div>
    </main>
  );
}
