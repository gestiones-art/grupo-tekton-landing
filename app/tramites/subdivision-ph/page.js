import Link from "next/link";

export const metadata = {
  title: "Subdivisión / PH — Grupo Tékton",
  description:
    "Documentación requerida para tramitar subdivisiones o propiedades horizontales en Zona Norte.",
};

export default function TramitePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Encabezado oscuro */}
      <section className="bg-[#0b132b] text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-2">
          Subdivisión / Propiedad Horizontal (PH)
        </h1>
        <p className="text-gray-300">
          Gestiones técnicas y legales para subdividir inmuebles y preparar escrituras.
        </p>
      </section>

      {/* Texto introductorio */}
      <section className="max-w-4xl mx-auto p-6 leading-relaxed">
        <p>
          En <strong>Grupo Tékton</strong> coordinamos la <strong>subdivisión en PH</strong> y
          fraccionamientos, integrando el trabajo de mensura, catastro y documentación municipal,
          para que puedas avanzar con las <strong>escrituras</strong> sin demoras.
        </p>
      </section>

      {/* Caja de documentación */}
      <section className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 border mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Documentación a presentar
        </h2>
        <p className="text-gray-700 mb-3">
          Nos ocupamos de reunir, completar y presentar toda la documentación ante los organismos correspondientes.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>
            <strong>Plano en formato DWG</strong> municipal de arquitectura (plantas, cortes, superficies).
          </li>
          <li>
            <strong>Plano de mensura y subdivisión</strong> (agrimensor), con estado parcelario vigente.
          </li>
          <li>
            <strong>Escritura inscripta</strong> en el Registro de la Propiedad Inmueble.
          </li>
          <li>
            <strong>Certificación parcelaria</strong> (Catastro) y <strong>libre deuda</strong> de tasas.
          </li>
          <li>
            <strong>Planilla de superficies</strong> por unidad funcional y partes comunes.
          </li>
          <li>
            <strong>Memoria descriptiva</strong> y documentación técnica requerida por el municipio.
          </li>
          <li>
            <strong>Formulario y expediente municipal</strong> firmados por propietario y profesional.
          </li>
          <li>
            <strong>Plano visado por el Colegio Profesional</strong> (CAPBA / CAAITBA), según corresponda.
          </li>
        </ul>
      </section>

      {/* Llamado a la acción */}
      <section className="max-w-3xl mx-auto bg-green-600 text-white rounded-2xl p-6 text-center shadow-md">
        <h3 className="text-lg font-semibold mb-2">
          ¿Necesitás subdividir en PH?
        </h3>
        <p className="text-sm mb-4">
          Coordinamos mensura, catastro y municipio hasta la documentación final para escriturar.
        </p>
        <a
          href="https://wa.me/5491169988414"
          className="bg-white text-green-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition"
        >
          Consultar por WhatsApp
        </a>
      </section>

      {/* Botón volver */}
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
