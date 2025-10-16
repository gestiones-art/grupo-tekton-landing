import Link from "next/link";

export const metadata = {
  title: "Permiso de Construcción — Grupo Tékton",
  description:
    "Documentación requerida para tramitar permisos de construcción o ampliación ante el municipio.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 md:px-8 py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Permiso de Construcción
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          En <strong>Grupo Tékton</strong> asesoramos a propietarios y
          profesionales en la presentación del{" "}
          <strong>permiso de obra nueva o ampliación</strong>, cumpliendo con
          toda la normativa vigente y los requisitos técnicos municipales.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Documentación a presentar:
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Plano en formato DWG</strong> (municipal), firmado por
            profesional matriculado.
          </li>
          <li>
            <strong>Certificación parcelaria</strong> vigente emitida por
            Catastro.
          </li>
          <li>
            <strong>Escritura inscripta en el Registro de la Propiedad
            Inmueble.</strong>
          </li>
          <li>
            <strong>Libre deuda de ABL</strong> y tasas municipales.
          </li>
          <li>
            <strong>Cómputo de superficies</strong> y planilla de estadística.
          </li>
          <li>
            <strong>Memoria descriptiva</strong> de obra, instalaciones y
            materiales.
          </li>
          <li>
            <strong>Certificado de Prefactibilidad de Servicios</strong> (AySA,
            Edenor, Metrogas, etc., según corresponda).
          </li>
          <li>
            <strong>Planilla de inicio de expediente</strong> y formularios
            firmados por propietario y profesional.
          </li>
        </ul>

        <p className="border-l-4 border-gray-200 pl-4 italic text-gray-700">
          Grupo Tékton gestiona la presentación completa ante el municipio y el
          seguimiento hasta la aprobación del permiso.
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
