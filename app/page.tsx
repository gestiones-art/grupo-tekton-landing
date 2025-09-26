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

      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-6">
            <p className="text-sm uppercase tracking-wide text-gray-500">Equipo</p>
            <p className="mt-2 font-semibold">Fernando López — MMO</p>
            <p className="text-gray-600">Ejecución y documentación técnica.</p>
          </div>
          <div className="rounded-2xl border p-6">
            <p className="text-sm uppercase tracking-wide text-gray-500">Especialidad</p>
            <p className="mt-2 font-semibold">Silvina Ontiveros — Six Sigma</p>
            <p className="text-gray-600">Optimización de procesos (DMAIC) aplicada a expedientes.</p>
          </div>
          <div className="rounded-2xl border p-6">
            <p className="text-sm uppercase tracking-wide text-gray-500">Propuesta</p>
            <p className="mt-2 font-semibold">Gestoría + Ingeniería de procesos</p>
            <p className="text-gray-600">Menos observaciones, más aprobaciones en menos tiempo.</p>
          </div>
        </div>
      </section>

      <section id="servicios" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Servicios para estudios</h2>
          <p className="mt-2 text-gray-600">Paquetes pensados para integrarnos a tu flujo de trabajo.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {t:"Pack Demolición Total", b:"Relevamiento, plan de demolición, presentación y seguimiento hasta finalización."},
              {t:"Pack Permiso de Construcción", b:"Prefactibilidad FOT/FOS, cómputos, planos, presentación y gestión de observaciones."},
              {t:"Pack Regularización", b:"Levantamiento, conformidad, visados y archivo final."},
              {t:"Pack Electromecánica", b:"Ascensores, montacargas, ventilaciones, memorias y trámites específicos."},
              {t:"Pack Subdivisión/PH", b:"Geodesia, catastro, coordinación notarial y expedientes."},
              {t:"Pack ‘Trámite Integral’", b:"Nos ocupamos de punta a punta con tablero de control compartido."}
            ].map((c,i)=> (
              <div key={i} className="rounded-2xl border p-6 bg-white shadow-sm">
                <p className="font-semibold text-lg">{c.t}</p>
                <p className="mt-2 text-sm text-gray-600">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Método Tékton · Six Sigma (DMAIC)</h2>
          <p className="mt-2 text-gray-600">Estandarizamos el proceso de expedientes para bajar tiempos y rechazos.</p>
          <div className="mt-8 grid md:grid-cols-5 gap-4">
            {[
              {t:"Definir", d:"Alcance, municipio, plazos, riesgos y checklists."},
              {t:"Medir", d:"SLA por municipio, tiempos de ciclo y cuellos de botella."},
              {t:"Analizar", d:"Causas raíz de observaciones y retrabajos."},
              {t:"Mejorar", d:"Plantillas y documentación estándar; secuencia crítica."},
              {t:"Controlar", d:"Tablero semanal + auditoría final antes de presentar."}
            ].map((s,i)=> (
              <div key={i} className="rounded-2xl border p-5 bg-white">
                <p className="font-semibold">{s.t}</p>
                <p className="text-sm text-gray-600 mt-1">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Cómo trabajamos con tu estudio</h2>
        <ol className="mt-6 grid md:grid-cols-5 gap-4 text-sm">
            {[
              "Brief inicial + checklist municipal",
              "Prefactibilidad FOT/FOS y cronograma",
              "Presentaciones y seguimiento",
              "Gestión de observaciones y auditoría",
              "Aprobación y cierre documental"
            ].map((step,i)=> (
              <li key={i} className="rounded-2xl border p-4 bg-white">
                <p className="text-xs text-gray-500">Paso {i+1}</p>
                <p className="font-medium mt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="checklist" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Checklist rápido COU · Zona Norte</h2>
          <p className="mt-2 text-gray-600">Útil para brief y prefactibilidad (San Isidro, Vicente López, San Fernando, Tigre).</p>
          <ul className="mt-6 grid md:grid-cols-2 gap-3 text-sm">
            {[
              "Partida municipal + nomenclatura catastral actualizada",
              "Zonificación (RB, RM, R, etc.) y restricciones (barranca, APH)",
              "Medidas del lote, retiro de frente, lateral y fondo",
              "FOS/FOT aplicables y superficies existentes",
              "Antecedentes: planos aprobados, certificados, expedientes",
              "Servicios e infraestructura (electromecánica, ascensor, ventilaciones)",
              "Impacto ambiental requerido y tipo de estudio",
              "Condiciones de PH/subdivisión (geodesia/catastro)",
              "Documentación del comitente y del profesional (CAPBA/CAAITBA)",
              "Requisitos municipales específicos (carátulas, planillas, tasas)"
            ].map((item,i)=> (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gray-900"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-4">¿Querés este checklist en PDF con campos para completar? Pedilo en el contacto y te lo enviamos.</p>
        </div>
      </section>

      <section id="contacto" className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Co-creemos un flujo de permisos sin fricción</h2>
            <p className="mt-2 text-gray-600">Contanos sobre tu estudio y proyecto. Respuesta en 24 hs.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <a href="mailto:gestion@grupotekton.com" className="rounded-2xl border bg-white p-4 hover:border-gray-900">
                <p className="font-medium">gestion@grupotekton.com</p>
                <p className="text-gray-600">Correo de contacto</p>
              </a>
              <a href="tel:+5491100000000" className="rounded-2xl border bg-white p-4 hover:border-gray-900">
                <p className="font-medium">+54 9 11 0000-0000</p>
                <p className="text-gray-600">Llamanos / WhatsApp*</p>
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-500">*Reemplazar por el número real de WhatsApp para activar el CTA.</p>
          </div>
          <form className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <input className="w-full rounded-xl border p-3" placeholder="Nombre y estudio" />
              <input className="w-full rounded-xl border p-3" placeholder="Email" type="email" />
              <textarea className="w-full rounded-xl border p-3" placeholder="Municipio y tipo de trámite" rows={4}></textarea>
              <button type="button" className="rounded-2xl bg-gray-900 text-white px-5 py-3 font-medium hover:opacity-90">Enviar consulta</button>
              <p className="text-xs text-gray-500">Este formulario es de muestra. Para activarlo podés conectarlo a Formspree/Google Forms.</p>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Grupo Tékton · Gestión Municipal + Six Sigma</p>
          <p>San Isidro · Zona Norte GBA</p>
        </div>
      </footer>
    </div>
  );
}
