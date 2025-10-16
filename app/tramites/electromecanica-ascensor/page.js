import Link from "next/link";

export const metadata = {
  title: "Electromecánica / Ascensor — Grupo Tékton",
  description:
    "Documentación para la presentación de expedientes electromecánicos o ascensores ante el municipio.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 md:px-8 py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Electromecánica / Ascensor
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          En <strong>Grupo Tékton</strong> realizamos la gestión y seguimiento
          de expedientes electromecánicos y ascensores ante el área municipal
          correspondiente.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Documentación a presentar:
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Memoria descriptiva técnica del equipo.</li>
          <li>
            <strong>Plano en formato DWG</strong> con detalles del pozo y
            cabina.
          </li>
          <li>Certificación del fabricante y ficha técnica del equipo.</li>
          <li>
            <strong>Escritura inscripta</strong> o autorización del propietario.
          </li>
          <li>
            <strong>Plano visado por el Colegio Profesional</strong> y firmado
            por ingeniero habilitado.
          </li>
        </ul>

        <p className="border-l-4 border-gray-200 pl-4 italic text-gray-700">
          Se realiza la presentación, visado y seguimiento hasta la aprobación
          definitiva del permiso.
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
