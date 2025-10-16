import Link from "next/link";

export const metadata = {
  title: "Electromecánica / Ascensor — Grupo Tékton",
  description:
    "Documentación para la presentación de expedientes electromecánicos o ascensores ante el municipio.",
};

export default function TramitePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Encabezado oscuro */}
      <section className="bg-[#0b132b] text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-2">
          Electromecánica / Ascensor
        </h1>
        <p className="text-gray-300">
          Trámite técnico y documental para ascensores, montacargas e instalaciones electromecánicas.
        </p>
      </section>

      {/* Texto introductorio */}
      <section className="max-w-4xl mx-auto p-6 leading-relaxed">
        <p>
          En <strong>Grupo Tékton</strong> gestionamos la documentación técnica y legal de
          <strong> ascensores y equipos electromecánicos</strong>, coordinando con profesionales
          matriculados y organismos de control para dejar la instalación en regla.
        </p>
      </section>

      {/* Caja de documentación */}
      <section className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 border mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Documentación a presentar
        </h2>
        <p className="text-gray-700 mb-3">
          Nos ocupamos de reunir, completar y presentar toda la documentación ante el organismo correspondiente.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>
            <strong>Plano en formato DWG</strong> de la instalación (foso, sala de máquinas, recorrido, tablero).
          </li>
          <li>
            <strong>Memoria técnica</strong> del equipo (componentes, parámetros y condiciones de seguridad).
          </li>
          <li>
            <strong>Certificados de ensayo y mantenimiento</strong> del elevador / montacargas.
          </li>
          <li>
            <strong>Libro de mantenimiento</strong> y registros del conservador habilitado.
          </li>
          <li>
            <strong>Declaraciones y formularios municipales</strong> firmados por propietario y profesional.
          </li>
          <li>
            <strong>Escritura inscripta</strong> en el Registro de la Propiedad Inmueble.
          </li>
          <li>
            <strong>Certificación parcelaria</strong> (Catastro) y <strong>Libre deuda</strong> de tasas.
          </li>
          <li>
            <strong>Plano visado por el Colegio Profesional</strong> (según corresponda).
          </li>
        </ul>
      </section>

      {/* Llamado a la acción */}
      <section className="max-w-3xl mx-auto bg-green-600 text-white rounded-2xl p-6 text-center shadow-md">
        <h3 className="text-lg font-semibold mb-2">
          ¿Necesitás regularizar o habilitar un ascensor?
        </h3>
        <p className="text-sm mb-4">
          Coordinamos con el conservador, el profesional y el municipio hasta completar el trámite.
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
