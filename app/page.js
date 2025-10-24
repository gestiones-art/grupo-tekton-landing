// grupo-tekton-landing/app/page.js
import Link from "next/link";

// 🔹 SEO para la Home
export const metadata = {
  title:
    "Gestoría de Permisos de Construcción en San Isidro y Zona Norte | Grupo Tékton",
  description:
    "Gestión municipal de permisos de construcción, regularización y conforme a obra. Trámites ante San Isidro, Martínez, Boulogne y zona norte. Planos, visados y seguimiento completo.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* HERO */}
      <section className="bg-[#0b132b] text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-3">
          Gestoría de Permisos de Construcción en San Isidro y Zona Norte
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          En <strong>Grupo Tékton</strong> gestionamos{" "}
          <strong>permisos de construcción</strong>,{" "}
          <strong>regularización</strong> y <strong>conforme a obra</strong>{" "}
          ante los municipios de <strong>San Isidro, Martínez, Boulogne</strong>{" "}
          y <strong>zona norte</strong>. Nos ocupamos de planos, visados
          profesionales y presentación municipal hasta la aprobación final.
        </p>
        <div className="mt-6">
          <a
            href="https://wa.me/5491169988414"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto p-6 leading-relaxed">
        <p>
          Trabajamos con propietarios, estudios y desarrolladores para minimizar
          observaciones, cumplir el C.O.U. y acelerar los tiempos de aprobación.
          Coordinamos la documentación técnica y legal, el visado profesional
          (CAPBA / CAAITBA) y el seguimiento del expediente en el municipio.
        </p>
      </section>

      {/* TRÁMITES DESTACADOS */}
      <section className="max-w-5xl mx-auto grid gap-6 p-6 md:grid-cols-2">
        {/* Permiso de Construcción */}
        <article className="bg-white shadow-md rounded-2xl p-6 border">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Permiso de Construcción
          </h2>
          <p className="text-gray-700 mb-4">
            Presentación para obra nueva o ampliación. Planos municipales, cómputo
            de superficies, memoria descriptiva, visado y seguimiento hasta la
            aprobación.
          </p>
          <Link href="/tramites/permiso-de-construccion" className="text-green-700 underline">
            Ver trámite →
          </Link>
        </article>

        {/* Regularización */}
        <article className="bg-white shadow-md rounded-2xl p-6 border">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Regularización de Obra
          </h2>
          <p className="text-gray-700 mb-4">
            Relevamiento de construcciones existentes, plano de regularización y
            gestión del expediente para dejar la propiedad en regla.
          </p>
          <Link href="/tramites/regularizacion" className="text-green-700 underline">
            Ver trámite →
          </Link>
        </article>

        {/* Conforme a Obra */}
        <article className="bg-white shadow-md rounded-2xl p-6 border">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Conforme a Obra (Final de Obra)
          </h2>
          <p className="text-gray-700 mb-4">
            Verificación, documentación y presentación para obtener el Conforme
            a Obra / Final de Obra ante el municipio.
          </p>
          <Link href="/tramites/conforme-a-obra" className="text-green-700 underline">
            Ver trámite →
          </Link>
        </article>

        {/* Electromecánica y Ascensor */}
        <article className="bg-white shadow-md rounded-2xl p-6 border">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Electromecánica y Ascensor
          </h2>
          <p className="text-gray-700 mb-4">
            Habilitación de ascensores y montacargas. Memoria técnica, visado y
            gestión municipal completa hasta la resolución.
          </p>
          <Link href="/tramites/electromecanica-ascensor" className="text-green-700 underline">
            Ver trámite →
          </Link>
        </article>
      </section>

      {/* CTA PRINCIPAL */}
      <section className="max-w-3xl mx-auto bg-green-600 text-white rounded-2xl p-6 text-center shadow-md mb-10">
        <h3 className="text-lg font-semibold mb-2">
          ¿Querés que nos ocupemos de tu trámite municipal?
        </h3>
        <p className="text-sm mb-4">
          Asesoramiento inicial sin cargo. Coordinamos planos, visado y
          presentación hasta la aprobación.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://wa.me/5491169988414"
            className="bg-white text-green-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition"
          >
            Escribir por WhatsApp
          </a>
          <Link href="/contacto" className="underline text-white/90">
            O completar el formulario
          </Link>
        </div>
      </section>

      {/* ENLACES INTERNOS (SEO) */}
      <section className="max-w-4xl mx-auto p-6 text-sm text-gray-700">
        <p className="mb-2">También gestionamos:</p>
        <ul className="list-disc pl-6">
          <li>
            <Link href="/tramites/permiso-de-construccion" className="underline">
              Permiso de Construcción
            </Link>
          </li>
          <li>
            <Link href="/tramites/regularizacion" className="underline">
              Regularización de Obra
            </Link>
          </li>
          <li>
            <Link href="/tramites/conforme-a-obra" className="underline">
              Conforme a Obra (Final de Obra)
            </Link>
          </li>
          <li>
            <Link href="/tramites/electromecanica-ascensor" className="underline">
              Habilitación de Ascensor
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="underline">
              Contacto
            </Link>
          </li>
        </ul>
      </section>

      {/* FOOTER SIMPLE */}
      <div className="text-center mb-10">
        <span className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Grupo Tékton — Blanco Encalada 2229, La Horqueta, San Isidro
        </span>
      </div>
    </main>
  );
}
