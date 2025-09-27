export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gray-900 text-white grid place-items-center text-lg font-bold">
              Τ
            </div>
            <div>
              <p className="text-xl font-semibold tracking-tight">Grupo Tékton</p>
              <p className="text-xs text-gray-500 -mt-1">Gestoría Municipal + Six Sigma</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:text-gray-900 text-gray-600">Servicios</a>
            <a href="#metodo" className="hover:text-gray-900 text-gray-600">Método</a>
            <a href="#proceso" className="hover:text-gray-900 text-gray-600">Proceso</a>
            <a href="#contacto" className="px-3 py-2 rounded-xl bg-gray-900 text-white hover:opacity-90">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Gestión municipal para <span className="underline decoration-gray-900/30">estudios de arquitectura</span>
              <br /> con disciplina <span className="px-2 rounded-xl bg-gray-900 text-white">Six Sigma</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Aceleramos permisos, demoliciones y regularizaciones en Zona Norte.
              Combinamos conocimiento del COU con mejora de procesos para reducir observaciones y tiempos.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contacto" className="px-5 py-3 rounded-2xl bg-gray-900 text-white font-medium hover:opacity-90">
                Hablemos hoy
              </a>
              <a href="#servicios" className="px-5 py-3 rounded-2xl border border-gray-300 font-medium hover:border-gray-900">
                Ver servicios
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Trabajamos en San Isidro · Vicente López · San Fernando · Tigre · San Martín
            </p>
          </div>

          <div className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              {[
                {t:"Permiso demolición total", d:"Planificación + impacto + seguridad"},
                {t:"Permiso de construcción", d:"Prefactibilidad FOT/FOS + cómputos"},
                {t:"Conforme a obra", d:"Levantamientos + visado + archivo"},
                {t:"Electromecánica/Ascensor", d:"Memorias + expedientes específicos"},
                {t:"Subdivisión / PH", d:"Geodesia + catastro + escrituras"},
                {t:"Impacto ambiental", d:"Gestión integral y seguimiento"}
              ].map((c,i)=>(
                <div key={i} className="rounded-2xl border p-4 bg-white">
                  <p className="font-semibold">{c.t}</p>
                  <p className="text-sm text-gray-600 mt-1">{c.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500">+ FOT/FOS, prefactibilidad, informes técnicos y más.</p>
          </div>
        </div>
      </section>

      {/* Método */}
      <section id="metodo" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">Método Tékton (Six Sigma)</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {t:"Definir", d:"Alcance, normativa, riesgos y plazos."},
              {t:"Medir", d:"Checklist COU, prefactibilidad y requerimientos."},
              {t:"Mejorar", d:"Solapamos tareas y reducimos observaciones."}
            ].map((s,i)=>(
              <div key={i} className="rounded-2xl border p-5">
                <p className="font-semibold">{s.t}</p>
                <p className="text-sm text-gray-600 mt-1">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">Contacto</h2>
          <p className="mt-3 text-gray-600">
            ¿Sos un estudio de arquitectura? Escribinos y te mandamos el checklist de inicio.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:gestoria@estudiotekton.com" className="px-5 py-3 rounded-2xl bg-gray-900 text-white hover:opacity-90">
              gestoria@estudiotekton.com
            </a>
            <a href="tel:+54911XXXXXXXX" className="px-5 py-3 rounded-2xl border border-gray-300 hover:border-gray-900">
              +54 9 11 XXX XXXX
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Grupo Tékton — Gestoría Municipal. Zona Norte.
        </div>
      </footer>
    </div>
  );
}
