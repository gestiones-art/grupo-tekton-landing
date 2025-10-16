// app/tramites/demolicion/page.js

import Link from "next/link";

export const metadata = {
  title: "Permiso de Demolición Total — Grupo Tékton",
  description:
    "Documentación requerida para solicitar un permiso de demolición total ante el municipio. Asesoramiento completo para propietarios.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 md:px-8 py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Permiso de Demolición Total
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            En <strong>Grupo Tékton</strong> acompañamos al propietario en la
            preparación y presentación de la documentación necesaria para
            gestionar el <strong>permiso de demolición total</strong> ante el
            municipio correspondiente.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Documentación que debe presentar el propietario:
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Plano en formato DWG</strong> (formato municipal) firmado
              por profesional matriculado.
            </li>
            <li>
              <strong>Certificación parcelaria</strong> vigente, emitida por
              Catastro, con plazo de obra y foliatura completa.
            </li>
            <li>
              <strong>Escritura inscripta en el Registro de la Propiedad
              Inmueble</strong> que acredite titularidad (no se acepta boleto de
              compraventa).
            </li>
            <li>
              <strong>Libre deuda de ABL</strong> y tasas municipales.
            </li>
            <li>
              <strong>Planilla de inicio de expediente</strong> y formularios
              firmados por propietario y profesional interviniente.
            </li>
            <li>
              <strong>Certificado de desratización</strong> actualizado.
            </li>
            <li>
              <strong>Fotografías</strong> del estado actual del inmueble.
            </li>
            <li>
              <strong>Memoria descriptiva</strong> de los trabajos de
              demolición: método, medidas de seguridad y disposición final de
              residuos.
            </li>
            <li>
              <strong>Plano visado por el Colegio Profesional</strong>{" "}
              correspondiente (CAPBA / CAAITBA).
            </li>
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed border-l-4 border-gray-200 pl-4 italic">
          Una vez reunida la documentación, el municipio verifica su
          completitud y autoriza la apertura del expediente. Grupo Tékton se
          encarga de acompañar al propietario en todas las etapas hasta la
          obtención del permiso final.
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
