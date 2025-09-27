export default function Page() {
  return (
    <div className="min-h-screen">

      {/* Header */}
      <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-brand text-white grid place-items-center text-lg font-bold">
              Τ
            </div>
            <div>
              <p className="text-xl font-semibold tracking-tight">Grupo Tékton</p>
              <p className="text-xs text-gray-500 -mt-1">Gestoría Municipal + Six Sigma</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:text-brand text-gray-600">Servicios</a>
            <a href="#metodo" className="hover:text-brand text-gray-600">Método</a>
            <a href="#contacto" className="px-3 py-2 rounded-xl bg-brand text-white hover:opacity-90">
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
              Gestión municipal para <span className="underline decoration-brand/30">estudios de arquitectura</span>
              <br /> con disciplina <span className="px-2 rounded-xl bg-brand text-white">Six Sigma</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Aceleramos permisos, demoliciones y regularizaciones en Zona Norte.
              Combinamos conocimiento del COU con mejora de procesos para reducir observaciones y tiempos.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contacto" className="px-5 py-3 rounded-2xl bg-brand text-white font-medium hover:opacity-90">
                Hablemos hoy
              </a>
              <a href="#servicios" className="px-5 py-3 rounded-2xl border border-gray-300 font-medium hover:border-brand">
                Ver servicios
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              San Isidro · Vicente López · San Fernando · Tigre · San Martín
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm">
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
      <section id="metodo" className="border-t bg-gray-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">Método Tékton (Six Sigma)</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {t:"Definir", d:"Alcance, normativa, riesgos y plazos."},
              {t:"Medir", d:"Checklist COU, prefactibilidad y requerimientos."},
              {t:"Mejorar", d:"Solapamos tareas y reducimos observaciones."}
            ].map((s,i)=>(
              <div key={i} className="rounded-2xl border p-5 bg-white">
                <p className="font-semibold">{s.t}</p>
                <p className="text-sm text-gray-600 mt-1">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">Servicios</h2>
          <ul className="mt-6 grid md:grid-cols-2 gap-4 text-gray-700">
            {[
              'Permisos de obra y demoliciones',
              'Regularizaciones / Conforme a Obra',
              'Prefactibilidad FOT/FOS + cómputos',
              'Subdivisión y PH',
              'Electromecánica y Ascensores',
              'Estudios de impacto y habilitaciones'
            ].map((s,i)=>(
              <li key={i} className="rounded-2xl border bg-white p-4">{s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">Contacto</h2>
          <p className="mt-3 text-gray-600">
            ¿Sos un estudio de arquitectura? Enviá tu consulta y te compartimos nuestro checklist de inicio.
          </p>

          {/* FORM: reemplazá la acción por tu endpoint de Formspree o similar */}
          <form
            className="mt-6 grid md:grid-cols-2 gap-4"
            action="https://formspree.io/f/tu_form_id" method="POST"
          >
            <input name="nombre" required placeholder="Nombre y estudio"
                   className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-brand/30" />
            <input name="email" type="email" required placeholder="Email"
                   className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-brand/30" />
            <input name="telefono" placeholder="Teléfono / WhatsApp"
                   className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-brand/30 md:col-span-2" />
            <textarea name="mensaje" required placeholder="Contanos brevemente qué necesitás"
                      rows={4}
                      className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-brand/30 md:col-span-2" />
            <button className="rounded-xl bg-brand text-white px-5 py-3 font-medium hover:opacity-90">
              Enviar consulta
            </button>
            <a
              href="https://wa.me/54911XXXXXXXX?text=Hola%20Grupo%20T%C3%A9kton%2C%20somos%20un%20estudio%20y%20queremos%20iniciar%20un%20tr%C3%A1mite"
              className="rounded-xl border border-gray-300 px-5 py-3 text-center hover:border-brand"
            >
              Escribir por WhatsApp
            </a>
          </form>

          <div className="mt-6 text-sm text-gray-500">
            O escribinos a <a className="underline" href="mailto:gestoria@estudiotekton.com">gestoria@estudiotekton.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Grupo Tékton — Gestoría Municipal. Zona Norte.
        </div>
      </footer>
    </div>
  );
}
