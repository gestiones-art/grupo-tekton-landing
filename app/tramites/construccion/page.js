import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Permiso de Construcción — Grupo Tékton",
  description:
    "Documentación requerida para tramitar permisos de construcción o ampliación ante el municipio.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Sección con imagen de fondo */}
      <section className="relative h-64 md:h-80 w-full">
        <Image
          src="/images/tramites/construccion.jpg"
          alt="Permiso de construcción - Grupo Tékton"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
            Permiso de Construcción
          </h1>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="px-6 md:px-8 py-12 mx-auto max-w-3xl space-y-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          En <strong>Grupo Tékton</strong> asesoramos a propietarios y
          profesionales en la presentación del{" "}
          <strong>permiso de obra nueva o ampliación</strong>, cumpliendo con
          toda la normativa vigente y los requisitos técnicos municipales.
        </p>

        <div className="bg-gray-50 border-l-4 border-emerald-500 p-4 rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Documentación a presentar
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
              <strong>Escritura inscripta</strong> en el Registro de la Propiedad
              Inmueble.
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
              <strong>Certificado de Prefactibilidad de Servicios</strong>{" "}
              (AySA, Edenor, Metrogas, etc., según corresponda).
            </li>
          </ul>
        </div>

        <p className="border-l-4 border-gray-200 pl-4 italic text-gray-700">
          Grupo Tékton gestiona la presentación completa ante el municipio y el
          seguimiento hasta la aprobación del permiso.
        </p>

        {/* Botón de WhatsApp */}
        <div className="pt-6 flex justify-center">
          <a
            href="https://wa.me/5491169988414?text=Hola!%20Quisiera%20más%20información%20sobre%20permiso%20de%20construcción."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
          >
            Consultar por WhatsApp
          </a>
        </div>

        <div className="pt-6 text-center">
          <Link href="/" className="text-[#0e1524] font-medium hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
