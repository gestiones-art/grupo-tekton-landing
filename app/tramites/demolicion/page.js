// app/tramites/demolicion/page.js

import Link from "next/link";

export const metadata = {
  title: "Permiso de Demolición Total — Grupo Tékton",
  description:
    "Gestión integral de expedientes de demolición total en Zona Norte. Incluye planificación, impacto ambiental, seguridad y presentación municipal completa.",
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
            En <strong>Grupo Tékton</strong> gestionamos integralmente la tramitación municipal para
            la demolición total de edificaciones en Zona Norte (San Isidro, Vicente López, San
            Fernando, Tigre y San Martín). Incluye coordinación técnica, documentación completa,
            visados y presentación ante el área de Obras Particulares.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Documentación requerida para la iniciación del expediente:
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Planilla de Inicio de Expediente.</strong>
            </li>
            <li>
              <strong>Certificación parcelaria</strong> vigente con plazo de obra firmado y foliatura
              completa (Plano visado por Catastro, título de propiedad y Certificado Libre Deuda).
            </li>
            <li>
              <strong>Planilla de Forestación.</strong>
            </li>
            <li>
              <strong>Planilla de Veredas.</strong>
            </li>
            <li>
              <strong>Planilla de Consideraciones generales de la etapa de obra.</strong>
            </li>
            <li>
              <strong>Planilla de estadísticas</strong>, por duplicado.
            </li>
            <li>
              <strong>Fotografías</strong> impresas según Decreto Nº 1934/09.
            </li>
            <li>
              <strong>Memoria descriptiva:</strong> descripción de las tareas a realizar, estimación
              de horarios, modalidades, nivel de ruido, cantidad de personas y datos que permitan
              comprender la actividad.
            </li>
            <li>
              <strong>Certificado de desratización.</strong>
            </li>
            <li>
              <strong>Copia certificada del antecedente.</strong>
            </li>
            <li>
              <strong>Lista de chequeo de contenido de planos.</strong>
            </li>
            <li>
              <strong>Copia de plano visado en el Colegio Profesional</strong> correspondiente.
            </li>
          </ol>
        </div>

        <div className="border-l-4 border-gray-300 pl-4 text-gray-700 italic">
          *Todo expediente debe presentarse en formato digital con su correspondiente foliatura y
          documentación respaldatoria. Grupo Tékton acompaña el proceso completo desde la preparación
          hasta la obtención del permiso municipal.
        </div>

        <div className="pt-6">
          <Link href="/" className="text-[#0e1524] font-medium hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
