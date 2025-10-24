import Image from "next/image";
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
          En <strong>Grupo Tékton</strong> realizamos la{" "}
          <strong>gestión integral</strong> para habilitar sistemas de
          elevación (ascensores y montacargas) y otras instalaciones
          electromecánicas, cumpliendo normativa municipal y requisitos
          técnicos del colegio profesional correspondiente.
        </p>
      </section>

      {/* Alcance / Incluye */}
      <section className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 border mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Incluye</h2>
        <p className="text-gray-700 mb-3">
          Nos ocupamos de coordinar a profesionales matriculados y de presentar
          toda la documentación técnica y legal hasta la aprobación final.
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Revisión de planos y documentación técnica existente.</li>
          <li>
            Confección/ajuste de memoria técnica y planillas municipales del
            equipo de elevación.
          </li>
          <li>
            Visado del plano por el colegio profesional (CAPBA/CAAITBA), según
            corresponda.
          </li>
          <li>Presentación del trámite ante el municipio.</li>
          <li>Atención de observaciones y seguimiento del expediente.</li>
          <li>Gestión de la resolución y habilitación final.</li>
        </ul>
      </section>

      {/* Documentación habitual */}
      <section className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 border mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Documentación habitual
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>
            Plano municipal y/o croquis de ubicación del equipo (DWG/PDF)
            firmado por profesional.
          </li>
          <li>Memoria descriptiva y fichas técnicas del ascensor/montacargas.</li>
          <li>Certificados del instalador y de mantenimiento habilitado.</li>
          <li>Certificación parcelaria y libre deuda de tasas municipales.</li>
          <li>Escritura o título y datos del propietario.</li>
          <li>Visado del colegio profesional correspondiente.</li>
        </ul>
        <p className="text-sm text-gray-500 mt-3">
          *La lista exacta puede variar según municipio y tipología del equipo.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto bg-green-600 text-white rounded-2xl p-6 text-center shadow-md">
        <h3 className="text-lg font-semibold mb-2">
          ¿Necesitás habilitar un ascensor o montacargas?
        </h3>
        <p className="text-sm mb-4">
          Te acompañamos en todo el proceso: desde la verificación técnica hasta
          la aprobación municipal.
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
