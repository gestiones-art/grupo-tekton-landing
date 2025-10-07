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
      <section className="mx-auto max-w-7xl px-6 md:px-8 py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
          
<p className="text-sm font-medium text-gray-600">
  Gestoría Municipal • Mejora de procesos
</p>

{/* Lockup: ícono + nombre + descriptor */}
<div className="mt-2 flex items-center gap-3">
  <img
    src="/logo-tekton-squad.svg"
    alt="Estudio Tekton"
    className="h-14 w-14 rounded-xl shadow-sm"  // ↑ de 12 a 14
  />
  <div className="flex items-center gap-2">
    <span className="text-2xl md:text-3xl font-semibold text-gray-800">
      Estudio Tekton
    </span>
    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
      Gestoría Municipal
    </span>
  </div>
</div>



<h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
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
  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white px-5 py-3 font-medium hover:opacity-90"
  aria-label="Abrir WhatsApp"
>
  {/* Ícono oficial (Simple Icons) */}
  <svg
    className="w-[18px] h-[18px]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16.001 3.2c-7.062 0-12.8 5.737-12.8 12.8 0 2.259.589 4.377 1.615 6.22L3.2 28.8l6.78-1.777a12.738 12.738 0 0 0 6.02 1.536h.001c7.062 0 12.799-5.737 12.799-12.8s-5.737-12.8-12.8-12.8zm7.546 17.316c-.33.934-1.627 1.71-2.245 1.735-.599.025-1.365.036-2.202-.14a9.944 9.944 0 0 1-4.35-1.927c-1.93-1.336-3.168-2.98-3.547-3.477-.378-.497-1.362-1.813-1.362-3.462s.86-2.448 1.167-2.783c.307-.335.668-.419.89-.419.221 0 .443 0 .64.012.205.01.48-.077.751.573.27.65.922 2.246 1.003 2.408.082.162.137.353.025.57-.112.216-.169.353-.335.541-.166.189-.352.422-.503.568-.166.162-.339.338-.145.662.194.324.867 1.429 1.862 2.314 1.281 1.12 2.362 1.466 2.686 1.63s.49.135.67-.083c.18-.218.773-.9.98-1.211.205-.31.422-.257.704-.153.282.103 1.79.844 2.099.997.31.153.515.223.59.346.074.123.074.709-.257 1.643z"/>
  </svg>
  WhatsApp
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
  type="tel"
  name="Teléfono / WhatsApp"
  placeholder="Ej: 5491169988414"
  required
  inputMode="numeric"
  autoComplete="tel"
  minLength={8}
  maxLength={15}
  pattern="[0-9]{8,15}"
  title="Ingresá solo números (8 a 15 dígitos), sin espacios ni guiones."
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

