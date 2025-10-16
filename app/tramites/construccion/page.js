import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Permiso de Construcción — Grupo Tékton",
  description:
    "Documentación requerida para tramitar permisos de construcción o ampliación ante el municipio.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-900">
      {/* Encabezado con fondo de color + imagen */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden bg-[#0e1524]">
        {/* Imagen semitransparente opcional */}
        <Image
          src="/images/construccion.jpg" // asegurate que exista /public/images/construccion.jpg
          alt="Permiso de construcción - Grupo Tékton"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1524]/80 to-[#0e1524]/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl">
            Permiso de Construcción
          </h1>
          <p className="mt-3 text-gray-200 text-lg max-w-2xl mx-auto">
            Presentación de documentación técnica y legal para obras nuevas o
            ampliaciones.
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="px-6 md:px-10 py-12 mx-auto max-w-4xl space-y-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          En <strong>Grupo Tékton</strong> asesoramos a propietarios y
          profesionales en la presentación del{" "}
          <strong>permiso de obra nueva o ampliación</strong>, cumpliendo con la
          normativa vigente y los requisitos técnicos municipales.
        </p>

        <div className="bg-white border-l-4 border-emerald-600 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
              <strong>Escritura inscripta</strong> en el Registro de la
              Propiedad Inmueble.
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

        {/* Llamado a la acción */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-2">
            ¿Necesitás gestionar tu permiso?
          </h3>
          <p className="text-emerald-50 mb-4">
            Nuestro equipo se encarga de la presentación completa y el
            seguimiento ante el municipio.
          </p>
          <a
            href="https://wa.me/5491169988414?text=Hola!%20Quisiera%20más%20información%20sobre%20permiso%20de%20construcción."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-700 font-semibold px-6 py-3 rounded-full hover:bg-emerald-50 transition"
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
