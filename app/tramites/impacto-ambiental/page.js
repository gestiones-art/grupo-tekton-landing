import Link from "next/link";

export const metadata = {
  title: "Impacto Ambiental — Grupo Tékton",
  description:
    "Documentación requerida para tramitar estudios y permisos de impacto ambiental ante los municipios de Zona Norte.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 md:px-8 py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Impacto Ambiental
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          En <strong>Grupo Tékton</strong> elaboramos y presentamos la
          documentación técnica necesaria para cumplir con las exigencias de
          impacto ambiental según la tipología de obra o actividad.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Documentación a presentar:
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Memoria descriptiva</strong> de la obra o actividad.
          </li>
          <li>
            <strong>Plano en formato DWG</strong> y documentación técnica del
            proyecto.
          </li>
          <li>
            <strong>Escritura inscripta</strong> del inmueble.
          </li>
          <li>
            <strong>Certificado parcelario</strong> y libre deuda municipal.
          </li>
          <li>
            <strong>Fotografías y croquis</strong> de implantación.
          </li>
          <li>
            <strong>Planilla de datos ambientales</strong> según normativa local.
          </li>
        </ul>

        <p className="border-l-4 border-gray-200 pl-4 italic text-gray-700">
          Grupo Tékton asesora y acompaña al propietario durante todo el proceso
          hasta la obtención del certificado ambiental correspondiente.
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
