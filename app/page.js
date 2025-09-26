export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-gray-900 text-white grid place-items-center text-lg font-bold">Τ</div>
            <div>
              <p className="text-xl font-semibold tracking-tight">Grupo Tékton</p>
              <p className="text-xs text-gray-500 -mt-1">Gestoría Municipal + Six Sigma</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:text-gray-900 text-gray-600">Servicios</a>
            <a href="#metodo" className="hover:text-gray-900 text-gray-600">Método Tékton</a>
            <a href="#proceso" className="hover:text-gray-900 text-gray-600">Proceso</a>
            <a href="#contacto" className="hover:text-gray-900 text-gray-600">Contacto</a>
            <a href="#checklist" className="px-3 py-2 rounded-xl bg-gray-900 text-white hover:opacity-90">Checklist COU</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Gestión municipal para <span className="underline decoration-gray-900/30">estudios de arquitectura</span>
              <br /> con disciplina <span className="px-2 rounded-xl bg-gray-900 text-white">Six Sigma</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Aceleramos permisos, demoliciones y regularizaciones en Zona Norte.
              Combinamos conocimiento profundo del COU con mejora de procesos para reducir observaciones y tiempos.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contacto" className="px-5 py-3 rounded-2xl bg-gray-900 text-white font-medium hover:opacity-90">Hablemos hoy</a>
              <a href="#servicios" className="px-5 py-3 rounded-2xl border border-gray-300 font-medium hover:border-gray-900">Ver servicios</a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              <p>Trabajamos en San Isidro · Vicente López · San Fernando · Tigre · San Martín</p>
            </div>
          </div>
          <div>
            <div className="relative rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {t:"Permiso demolición total", d:"Planificación + impacto + seguridad"},
                  {t:"Permiso de construcción", d:"Prefactibilidad FOT/FOS + cómputos"},
                  {t:"Conforme a obra", d:"Levantamientos + visado + archivo"},
                  {t:"Electromecánica/Ascensor", d:"Memorias + expedientes específicos"},
                  {t:"Subdivisión / PH", d:"Geodesia + catastro + escrituras"},
                  {t:"Impacto ambiental", d:"Gestión integral y seguimiento"}
                ].map((card,i)=> (
                  <div key={i} className="rounded-2xl border p-4 bg-white">
                    <p className="font-semibold">{card.t}</p>
                    <p className="text-sm text-gray-600 mt-1">{card.d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-500">+ FOT/FOS, prefactibilidad, informes técnicos y más.</p>
            </div>
          </div>
        </div>
      </section>

      {/* …resto de secciones, igual que antes… */}
    </div>
  );
}
