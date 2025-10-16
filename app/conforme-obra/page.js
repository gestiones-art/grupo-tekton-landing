import Link from "next/link";

export const metadata = {
  title: "Conforme a Obra — Grupo Tékton",
  description:
    "Regularización de obras ya ejecutadas. Documentación requerida para obtener el plano conforme a obra municipal.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 md:px-8 py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Plano Conforme a Obra
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          En <strong>Grupo Tékton</strong> realizamos el relevamiento,
          documentación y presentación del{" "}
          <strong>plano conforme a obra</strong> para regularizar construcciones
          existentes ante el municipio.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Documentación que debe presentar el propietario:
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Plano en formato DWG</strong> relevado por profesional
            matriculado.
          </li>
          <li>
            <strong>Escritura inscripta</strong> en el Registro de la Propiedad
            Inmueble.
          </li>
          <li>
            <strong>Certificación parcelaria</strong> vigente emitida por
            Catastro.
          </li>
          <li>
            <strong>Libre deuda de ABL</strong> y tasas municipales.
          </li>
          <li>
            <strong>Fotografías</strong> del estado actual del inmueble.
          </li>
          <li>
            <strong>Planilla de estadística</strong> actualizada.
          </li>
          <li>
            <strong>Plano visado por el Colegio Profesional</strong>{" "}
            correspondiente (CAPBA / CAAITBA).
          </li>
        </ul>

        <p className="border-l-4 border-gray-200 pl-4 italic text-gray-700">
          Este trámite es fundamental para escrituras, subdivisiones y
          finalización de obras. Grupo Tékton acompaña el proceso completo hasta
          el registro municipal.
        </p>

        <div className="pt-6">
          <Link href="/" className="text-[#0e1524] font-medium hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
