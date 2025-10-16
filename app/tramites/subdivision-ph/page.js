import Link from "next/link";

export const metadata = {
  title: "Subdivisión / PH — Grupo Tékton",
  description:
    "Documentación requerida para tramitar subdivisiones o propiedades horizontales en Zona Norte.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 md:px-8 py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Subdivisión / Propiedad Horizontal
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          En <strong>Grupo Tékton</strong> gestionamos integralmente la
          subdivisión o propiedad horizontal de inmuebles, coordinando la
          documentación entre municipio, Catastro, Geodesia, agrimensor y
          escribanía.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Documentación que debe aportar el propietario:
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Plano en formato DWG</strong> con delimitación de unidades.
          </li>
          <li>
            <strong>Escritura inscripta</strong> en el Registro de la Propiedad
            Inmueble.
          </li>
          <li>
            <strong>Certificación parcelaria</strong> actualizada y plano de
            mensura del agrimensor.
          </li>
          <li>
            Libre deuda de tasas municipales y servicios.
          </li>
          <li>
            <strong>Plano visado por el Colegio Profesional</strong> y agrimensor
            interviniente.
          </li>
        </ul>

        <p className="border-l-4 border-gray-200 pl-4 italic text-gray-700">
          Grupo Tékton coordina todas las instancias del proceso hasta la
          obtención de la escritura final.
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
