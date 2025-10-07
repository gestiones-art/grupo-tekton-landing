// CONFIG: poné tu número de WhatsApp (formato internacional, sin +, ni espacios)
// Ejemplo: Argentina (11) -> 54911XXXXXXXX
const WHATSAPP = "5491169988414"; // ← REEMPLAZAR

// CONFIG: pegá acá tu endpoint de Formspree (ej: https://formspree.io/f/abcd1234)
const FORM_ENDPOINT = "https://script.google.com/macros/s/AAAAAAAAAAAAAAAAAAAA/exec"; // tu URL

export const metadata = {
  title: "Grupo Tékton — Gestión Municipal",
  description:
    "Gestiones municipales de Obras. Mejora de procesos para minimizar observaciones y optimizar tiempos, con estricto cumplimiento normativo.",
};

export default function Page() {
  const waText = encodeURIComponent(
    "Hola, vengo de estudiotekton.com y necesito ayuda con una gestión municipal."
  );
  const waHref = WHATSAPP
    ? `https://wa.me/${WHATSAPP}?text=${waText}`
    : `https://wa.me/?text=${waText}`; // fallback si aún no cargaste número

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
              minimizar observaciones y <strong>optimizar tiempos administrativos</strong>,
              siempre con estricto cumplimiento normativo.
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
      <section id="contacto" className="mx-auto max-w-5xl px-6 md:px-8 pb-24">
        <div className="rounded-2xl border p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold">Contacto</h2>
          <p className="mt-2 text-gray-600">
            Escribinos y te respondemos a la brevedad. También podés mandar un correo a{" "}
            <a className="underline" href="mailto:gestiones@estudiotekton.com">
              gestiones@estudiotekton.com
            </a>
            .
          </p>

          <form
            className="mt-6 grid md:grid-cols-2 gap-4"
            action={FORM_ENDPOINT}
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="Nueva consulta — estudiotekton.com"
            />
            <input type="hidden" name="_redirect" value="/gracias" />
            <input
              name="nombre"
              required
              placeholder="Nombre y estudio"
              className="rounded-xl border px-4 py-3"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="rounded-xl border px-4 py-3"
            />
            <input
              name="telefono"
              placeholder="Teléfono / WhatsApp"
              className="rounded-xl border px-4 py-3 md:col-span-2"
            />
            <textarea
              name="mensaje"
              required
              rows={4}
              placeholder="Contanos brevemente qué necesitás"
              className="rounded-xl border px-4 py-3 md:col-span-2"
            />
            {/* anti-spam */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
            <button className="rounded-xl bg-gray-900 text-white px-5 py-3 font-medium hover:opacity-90">
              Enviar consulta
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
