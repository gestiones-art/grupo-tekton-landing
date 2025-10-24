import Link from "next/link";

export const metadata = {
  title: "Electromecánica y Ascensor — Grupo Tékton",
  description:
    "Presentación y habilitación de ascensores, montacargas e instalaciones electromecánicas ante el municipio. Gestión técnica y legal completa hasta la aprobación final.",
  // (no estamos priorizando SEO de este trámite; dejamos metadata básico)
};

export default function TramitePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Encabezado uniforme */}
      <section className="bg-[#0b132b] text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-2">Electromecánica y Ascensor</h1>
        <p className="text-gray-300">
          Presentación y habilitación de ascensores, montacargas e instalaciones
          electromecánicas ante el municipio.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto p-6 leading-relaxed">
        <p>
          En <strong>Grupo Tékton</strong> realizamos la <strong>gestión integral</strong> para habilitar
          sistemas de elevación (ascensores y montacargas) y otras instalaciones
          electromecánicas, cumpliendo normativa municipal y requisitos técnicos del
          colegio profesional correspondiente.
        </p>
      </section>

      {/* ÚNICA tarjeta */}
      <section className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 border mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Documentación a presentar
        </h2>
        <p className="text-gray-700 mb-3">
          Reunimos y presentamos la documentación técnica y legal ante el organismo
          correspondiente, con seguimiento hasta la aprobación.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Plano municipal y/o croquis de ubicación del equipo (DWG/PDF) firmado por profesional.</li>
          <li>Memoria descriptiva y fichas técnicas del ascensor/montacargas.</li>
          <li>Certificados del instalador y del servicio de mantenimiento habilitado.</li>
          <li>Certificación parcelaria y libre deuda de tasas municipales.</li>
          <li>Escritura/título y datos del propietario.</li>
          <li>Visado del Colegio Profesional (CAPBA / CAAITBA), según corresponda.</li>
        </ul>
        <p className="text-sm text-gray-500 mt-3">
          *La lista puede variar según municipio y tipología del equipo.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto bg-green-600 text-white rounded-2xl p-6 text-center shadow-md">
        <h3 className="text-lg font-semibold mb-2">
          ¿Necesitás habilitar un ascensor o montacargas?
        </h3>
        <p className="text-sm mb-4">
          Nos ocupamos de la presentación completa y el seguimiento ante el municipio.
        </p>
        <a
          href="https://wa.me/5491169988414"
          className="bg-white text-green-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition"
        >
          Consultar por WhatsApp
        </a>
      </section>

      {/* Enlaces internos */}
      <div className="mt-8 text-sm text-gray-700 max-w-3xl mx-auto px-6">
        <p className="mb-2">También gestionamos:</p>
        <ul className="list-disc pl-6">
          <li><a className="underline" href="/tramites/permiso-de-construccion">Permiso de Construcción</a></li>
          <li><a className="underline" href="/tramites/regularizacion">Regularización de Obra</a></li>
          <li><a className="underline" href="/tramites/conforme-a-obra">Conforme a Obra (Final de Obra)</a></li>
          <li><a className="underline" href="/contacto">Contacto</a></li>
        </ul>
      </div>

      {/* Volver */}
      <div className="text-center mt-8 mb-16">
        <Link href="/" className="text-gray-600 hover:text-gray-800 text-sm underline">
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
