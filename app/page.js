// app/page.js

// CONFIG: WhatsApp en formato internacional sin + ni espacios
const WHATSAPP = "5491169988414";

// (FormSubmit ya no requiere endpoint propio, va directo al email en action)
export const metadata = {
  title: "Grupo Tékton — Gestión Municipal",
  description:
    "Gestiones municipales de Obras. Mejora de procesos para minimizar observaciones y optimizar tiempos, con estricto cumplimiento normativo.",
};

export default function Page() {
  const waText = encodeURIComponent(
    "Hola, vengo de estudiotekton.com y necesito ayuda con una gestión municipal."
  );
  const waHref = `https://wa.me/${WHATSAPP}?text=${waText}`;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 py-14 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm font-medium text-gray-600">
              Gestoría Municipal • Mejora de procesos
            </p>

            <h1 className="mt-3 text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Gestiones municipales para Obras
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-700">
              <strong>Gestionamos</strong> permisos, demoliciones y regularizaciones en
              Zona Norte. Enfocamos el trabajo en <strong>mejorar procesos</strong> para
              minimizar observaciones y{" "}
              <strong>optimizar tiempos administrativos</strong>, siempre con estricto
              cumplimiento normativo.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-green-600 text-white px-5 py-3 font-medium hover:opacity-90 text-center"
              >
                WhatsApp
              </a>

              <a
                href="#contacto"
                className="inline-block rounded-xl border border-gray-300 px-5 py-3 font-medium hover:bg-gray-50 text-center"
              >
                Enviar consulta
              </a>
            </div>

            <p className="mt-8 text-sm text-gray-600">
              San Isidro · Vicente López · San Fernando · Tigre · San Martín
            </p>
          </div>

          {/* Tarjetas (servicios) */}
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
                <h3 className="font-semibold text-lg">Electromecánica / Ascensor</h3>
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

      {/* CONTACTO */}
     <section id="contacto" className="py-8 px-6 md:px-8 mx-auto max-w-4xl">
  <form
    action="https://formsubmit.co/gestiones@estudiotekton.com"
    method="POST"
    className="space-y-4"
  >
    {/* Opcionales útiles */}
    <input type="hidden" name="_subject" value="Nueva consulta — estudiotekton.com" />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_next" value="https://estudiotekton.com/#gracias" />

    {/* Auto-respuesta al remitente (cliente) */}
    <input
      type="hidden"
      name="_autoresponse"
      value="¡Gracias! Recibimos tu consulta y te responderemos a la brevedad."
    />

    {/* Remitente del email que recibís (escapamos < > para JSX) */}
    <input
      type="hidden"
      name="_from"
      value="Estudio Téktón &lt;gestiones@estudiotekton.com&gt;"
    />

    {/* Honeypot anti-spam */}
    <input type="text" name="_honey" style={{ display: "none" }} />

    <div className="grid gap-4 md:grid-cols-2">
      <input
        type="text"
        name="Nombre / Estudio"
        placeholder="Nombre y estudio"
        required
        className="w-full rounded border px-4 py-3"
      />
      <input
        type="email"
        name="email"     /* IMPORTANTE: que se llame "email" para el auto-reply */
        placeholder="Email"
        required
        className="w-full rounded border px-4 py-3"
      />
    </div>

    <input
      type="text"
      name="Teléfono / WhatsApp"
      placeholder="Teléfono / WhatsApp"
      className="w-full rounded border px-4 py-3"
    />

    <textarea
      name="Mensaje"
      placeholder="Contanos brevemente qué necesitás"
      rows={5}
      required
      className="w-full rounded border px-4 py-3"
    />

    <button
      type="submit"
      className="w-full md:w-auto rounded bg-[#0e1524] px-6 py-3 text-white"
    >
      Enviar consulta
    </button>
  </form>
</section>

      {/* Cartel de Gracias (aparece cuando la URL termina en #gracias) */}
      <div
        id="gracias"
        className="fixed inset-x-0 top-4 mx-auto w-fit rounded-md bg-emerald-600 text-white px-4 py-2 shadow-lg"
      >
        ¡Gracias! Recibimos tu consulta.
      </div>
   
    </main>
  );
}

