// app/tramites/demolicion/page.js

import Link from "next/link";

export const metadata = {
  title: "Permiso de Demolición en San Isidro | Trámites Municipales — Grupo Tékton",
  description:
    "Gestión completa del permiso de demolición ante el municipio de San Isidro y zona norte. Presentación de planos, certificados y visado profesional hasta la aprobación final.",
  alternates: { canonical: "/tramites/demolicion" },
};


export default function TramitePage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Encabezado oscuro */}
      <section className="bg-[#0b132b] text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-2">
          Permiso de Demolición Total
        </h1>
        <p className="text-gray-300">
          Presentación de documentación técnica y legal para demoliciones totales o parciales.
        </p>
      </section>

      {/* Texto introductorio */}
      <section className="max-w-4xl mx-auto p-6 leading-relaxed">
        <p>
          En <strong>Grupo Téktón</strong> asesoramos a propietarios y profesionales en la gestión del 
          <strong> permiso de demolición total</strong>, cumpliendo con la normativa vigente y los requisitos técnicos municipales.
        </p>
      </section>

      {/* Caja de documentación */}
      <section className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 border mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Documentación a presentar
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li><strong>Plano en formato DWG</strong> (municipal), firmado por profesional matriculado.</li>
          <li><strong>Certificación parcelaria</strong> vigente emitida por Catastro.</li>
          <li><strong>Escritura inscripta</strong> en el Registro de la Propiedad Inmueble.</li>
          <li><strong>Fotografías</strong> del estado actual de la propiedad.</li>
          <li><strong>Memoria descriptiva</strong> con detalle de las tareas a realizar y medidas de seguridad.</li>
          <li><strong>Certificado de desratización</strong> emitido por entidad habilitada.</li>
          <li><strong>Plano visado por el Colegio Profesional</strong> correspondiente.</li>
        </ul>
      </section>

      {/* Llamado a la acción */}
      <section className="max-w-3xl mx-auto bg-green-600 text-white rounded-2xl p-6 text-center shadow-md">
        <h3 className="text-lg font-semibold mb-2">
          ¿Necesitás gestionar tu permiso?
        </h3>
        <p className="text-sm mb-4">
          Nuestro equipo se encarga de la presentación completa y el seguimiento ante el municipio.
        </p>
        <a
          href="https://wa.me/54911XXXXXXXX" // cambiá por tu número de WhatsApp
          className="bg-white text-green-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition"
        >
          Consultar por WhatsApp
        </a>
      </section>
  <div className="mt-8 text-sm text-gray-700">
  <p className="mb-2">También gestionamos:</p>
  <ul className="list-disc pl-6">
    <li><a className="underline" href="/tramites/permiso-de-construccion">Permiso de Construcción</a></li>
    <li><a className="underline" href="/tramites/regularizacion">Regularización de Obra</a></li>
    <li><a className="underline" href="/tramites/conforme-a-obra">Conforme a Obra (Final de Obra)</a></li>
    <li><a className="underline" href="/tramites/electromecanica-ascensor">Habilitación de Ascensor</a></li>
    <li><a className="underline" href="/contacto">Contacto</a></li>
  </ul>
</div>


      {/* Botón volver */}
      <div className="text-center mt-8 mb-16">
        <a
          href="/"
          className="text-gray-600 hover:text-gray-800 text-sm underline"
        >
          ← Volver al inicio
        </a>
      </div>
    </main>
  );
}
