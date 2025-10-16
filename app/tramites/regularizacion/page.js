import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Regularización de Obra — Grupo Tékton",
  description:
    "Documentación para regularizar obras existentes ante el municipio",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-900">
      {/* Encabezado con color + imagen opcional */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden bg-[#0e1524]">
        {/* Si aún no tenés imagen, dejá este Image: no rompe aunque el archivo no esté */}
        <Image
          src="/images/regularizacion.jpg" // opcional: /public/images/regularizacion.jpg
          alt="Regularización de obra - Grupo Tékton"
          fill
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1524]/80 to-[#0e1524]/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl">
            Regularización de Obra
          </h1>
          <p className="mt-3 text-gray-200 text-lg max-w-2xl mx-auto">
            Para obras existentes sin permiso o con diferencias respecto al plano aprobado.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <div className="px-6 md:px-10 py-12 mx-auto max-w-4xl space-y-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          En <strong>Grupo Tékton</strong> realizamos el relevamiento y la presentación municipal
          para regularizar construcciones existentes (total o parcial), obtener el{" "}
          <strong>plano </strong> y dejar la propiedad en regla para escriturar, subdividir
          o vender.
        </p>

        <div className="bg-white border-l-4 border-emerald-600 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Documentación a presentar

          </h2>
            
  <p className="text-gray-700 mb-4">
    Nos ocupamos de reunir, completar y presentar toda la documentación ante el organismo correspondiente.
  </p>
  <ul className="list-disc pl-6 space-y-1 text-gray-800">
    <li><strong>Plano en formato DWG</strong> relevado (municipal), firmado por profesional matriculado.</li>
    <li><strong>Escritura inscripta</strong> en el Registro de la Propiedad Inmueble.</li>
    <li><strong>Certificación parcelaria</strong> vigente emitida por Catastro.</li>
    <li><strong>Libre deuda de ABL</strong> y tasas municipales.</li>
    <li><strong>Fotografías</strong> del estado actual de la propiedad (fachada e interiores).</li>
    <li><strong>Planilla de estadística</strong> y formularios municipales firmados.</li>
    <li><strong>Plano visado por el Colegio Profesional</strong> (CAPBA / CAAITBA), según corresponda.</li>
    <li><strong>Planilla de revaluos</strong> </li> 
  </ul>
</div>

        <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-2">¿Tenés una obra para regularizar?</h3>
          <p className="text-emerald-50 mb-4">
            Te acompañamos en el relevamiento, la documentación y la presentación hasta el registro
            municipal.
          </p>
          <a
            href="https://wa.me/5491169988414?text=Hola!%20Quisiera%20regularizar%20una%20obra.%20%C2%BFMe%20asesoran%3F"
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
