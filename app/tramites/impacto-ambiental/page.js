import Link from "next/link";

export const metadata = {
  title: "Impacto Ambiental — Grupo Tékton",
  description:
    "Documentación requerida para tramitar estudios y permisos de impacto ambiental ante los municipios de Zona Norte.",
};

export default function TramitePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Encabezado (marcador de cambio) */}
      <section className="bg-emerald-700 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-2">
          Impacto Ambiental <span className="text-emerald-200">(actualizado)</span>
        </h1>
        <p className="text-emerald-100">
          Evaluación y gestión de requisitos ambientales municipales y provinciales.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto p-6 leading-relaxed">
        <p>
          En <strong>Grupo Tékton</strong> realizamos la <strong>gestión integral de impacto ambiental</strong> para obras
          y actividades alcanzadas por normativa municipal o provincial. Incluye asesoramiento técnico,
          preparación de documentación, coordinación con profesionales y seguimiento del expediente
          hasta su resolución.
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
          <li><strong>Memoria técnica y ambiental</strong> (procesos, insumos, efluentes).</li>
          <li><strong>Planos en formato DWG</strong> (implantación, arquitectura e instalaciones).</li>
          <li><strong>Plano de ubicación y accesos</strong> con usos del entorno inmediato.</li>
          <li><strong>Descripción de emisiones, efluentes y residuos</strong> y su gestión.</li>
          <li><strong>Certificaciones y habilitaciones existentes</strong> (si las hubiera).</li>
          <li><strong>Escritura inscripta</strong> y <strong>certificación parcelaria</strong> (Catastro).</li>
          <li><strong>Formularios y DDJJ</strong> exigidos por el municipio/provincia.</li>
          <li><strong>Estudios específicos</strong> (ruido, efluentes, suelo/aire) si la autoridad lo requiere.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto bg-green-600 text-white rounded-2xl p-6 text-center shadow-md">
        <h3 className="text-lg font-semibold mb-2">
          ¿Tu obra o actividad requiere impacto ambiental?
        </h3>
        <p className="text-sm mb-4">
          Te asesoramos en requisitos, preparamos la documentación y hacemos el seguimiento del expediente.
        </p>
        <a
          href="https://wa.me/5491169988414"
          className="bg-white text-green-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition"
        >
          Consultar por WhatsApp
        </a>
      </section>

      {/* Volver */}
      <div className="text-center mt-8 mb-16">
        <a href="/" className="text-gray-600 hover:text-gray-800 text-sm underline">
          ← Volver al inicio
        </a>
      </div>
    </main>
  );
}
