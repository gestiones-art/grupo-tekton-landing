export const metadata = {
  title: "Grupo Tékton — Gestión Municipal + Six Sigma",
  description:
    "Gestionamos permisos, demoliciones y regularizaciones para estudios de arquitectura en Zona Norte, con foco en cumplimiento normativo y mejora de procesos.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 py-14 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm font-medium text-gray-600">
              Gestoría Municipal + Six Sigma
            </p>

            <h1 className="mt-3 text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Gestión municipal para
              <br />
              estudios de
              <br />
              arquitectura
              <br />
              con disciplina <span className="inline-block rounded-lg bg-gray-900 px-3 py-1 text-white">Six</span>
              <span className="sr-only"> </span>
              <span className="inline-block rounded-lg bg-gray-900 px-3 py-1 text-white ml-2">Sigma</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-700">
              <strong>Gestionamos</strong> permisos, demoliciones y regularizaciones en Zona Norte.
              Combinamos conocimiento profundo del COU con mejora de procesos para
              minimizar observaciones y optimizar tiempos administrativos.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:sgogroup.info@gmail.com?subject=Consulta%20desde%20estudiotekton.com"
                className="inline-block rounded-xl bg-gray-900 text-white px-5 py-3 font-medium hover:opacity-90 text-center"
              >
                Hablemos hoy
              </a>
              <a
                href="#servicios"
                className="inline-block rounded-xl border border-gray-300 px-5 py-3 font-medium hover:bg-gray-50 text-center"
              >
                Ver servicios
              </a>
            </div>

            <p className="mt-8 text-sm text-gray-600">
              San Isidro · Vicente López · San Fernando · Tigre · San Martín
            </p>
          </div>

          {/* Tarjetas de servicios (lado derecho) */}
          <div className="grid gap-4" id="servicios">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5">
                <h3 className="font-semibold text-lg">Permiso demolición total</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Planificación + impacto + seguridad
                </p>
              </div>
              <div className="rounded-2xl border p-5">
                <h3 className="font-semibold text-lg">Permiso de construcción</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Prefactibilidad FOT/FOS + cómputos
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5">
                <h3 className="font-semibold text-lg">Conforme a obra</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Levantamientos + visado + archivo
                </p>
              </div>
              <div className="rounded-2xl border p-5">
                <h3 className="font-semibold text-lg">Electromecánica/Ascensor</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Memorias + expedientes específicos
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5">
                <h3 className="font-semibold text-lg">Subdivisión / PH</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Geodesia + catastro + escrituras
                </p>
              </div>
              <div className="rounded-2xl border p-5">
                <h3 className="font-semibold text-lg">Impacto ambiental</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Gestión integral y seguimiento
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              + FOT/FOS, prefactibilidad, informes técnicos y más.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
