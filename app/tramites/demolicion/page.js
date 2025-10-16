// app/tramites/demolicion/page.js

import Link from "next/link";

export const metadata = {
  title: "Permiso de Demolición Total — Grupo Tékton",
  description:
    "Gestión integral de permisos de demolición total en Zona Norte. Incluye planificación, impacto ambiental y seguridad.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 md:px-8 py-12">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Permiso de demolición total
        </h1>
        <p className="text-lg text-gray-700">
          En Grupo Tékton gestionamos integralmente los permisos de demolición total ante las
          municipalidades de Zona Norte (San Isidro, Vicente López, San Fernando, Tigre y San Martín).
        </p>

        <p className="text-gray-700 leading-relaxed">
          Nos ocupamos de coordinar la documentación técnica, el cálculo de impacto, los planos de
          seguridad y la presentación municipal completa. Acompañamos el proceso desde la solicitud
          inicial hasta la aprobación final, asegurando el cumplimiento de todas las normativas
          locales y provinciales.
        </p>

        <ul className="list-disc pl-6 text-gray-700">
          <li>Planificación de demolición</li>
          <li>Informe de impacto ambiental</li>
          <li>Seguridad y vallado perimetral</li>
          <li>Gestión ante Obras Particulares</li>
          <li>Presentación digital y seguimiento</li>
        </ul>

        <div className="pt-6">
          <Link href="/" className="text-[#0e1524] font-medium hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
