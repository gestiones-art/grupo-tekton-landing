import Link from "next/link";

export const metadata = {
  title: "Electromecánica y Ascensores — Grupo Tékton",
  description:
    "Gestión municipal para habilitar ascensores, montacargas e instalaciones electromecánicas. Presentación completa ante el municipio y seguimiento hasta la aprobación.",
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

      {/* Introducción */}
      <section className="max-w-4xl mx-auto p-6 leading-relaxed">
        <p>
          En <strong>Grupo Tékton</strong> asesoramos y gestionamos la{" "}
          <strong>habilitación de sistemas de elevación</strong> (ascensores y
          montacargas) y otras instalaciones electromecánicas, cumpliendo la
          normativa municipal y los requisitos técnicos del colegio profesional.
        </p>
      </section>

      {/* ÚNICA tarjeta (mismo estilo que Permiso de Construcción) */}
      <section className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 border mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Documentación a presentar
        </h2>
        <p className="text-gray-700 mb-3">
          Reunimos y presentamos la documentación técnica y legal ante el
          organismo correspondiente, y hacemos el seguimiento hasta la aprobación.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Plano municipal / croquis de ubicación del equipo (DWG/PDF) firmado.</li>
          <li>Memoria descriptiva y fichas técnicas del ascensor/montacargas.</li>
          <li>Certificados del instalador y del servicio de mantenimiento habilitado.</li>
          <li>Certificación parcelaria y libre deuda de tasas municipales.</li>
          <li>Escritura o título y datos del propietario.</li>
          <li>Plano visado por el Colegio Profesional (CAPBA / CAAITBA), según corresponda.</li>
          <li>Atención de observaciones municipales y seguimiento del expediente.</li>
          <li>Gestión de la resolución y habilitación final.</li>
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
        <p className="text-white/80 text-xs mt-3">
          ¿Preferís formulario?{" "}
          <Link href="/contacto" className="underline">
            Escribinos acá
          </Link>
          .
        </p>
      </section>

      {/* Volver */}
      <div className="text-center mt-8 mb-16">
        <a href="/" className="text-gray-600 hover:text-gray-800 text-sm underline">
          ← Volver al inicio
        </a>
      </div>
    </main>
  );
}
