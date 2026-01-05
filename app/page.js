import PhoneField from "./components/PhoneField";

// CONFIG: WhatsApp en formato internacional sin + ni espacios
const WHATSAPP = "5491169988414";

export const metadata = {
  title: "Estudio Tekton — Gestión Municipal",
  description:
    "Asesoría Integral de Obra & Proyectos + Gestión Municipal. Acompañamos todas las etapas de obra y gestionamos permisos y trámites municipales en Zona Norte.",
};

export default function Page() {
  const waText = encodeURIComponent(
    "Hola, vengo de estudiotekton.com y necesito ayuda con una gestión municipal."
  );
  const waHref = `https://wa.me/${WHATSAPP}?text=${waText}`;

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* HERO (1 columna) */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 py-10 md:py-16">
        <div className="grid gap-10 items-start">
          <div>
            {/* Lockup: logo + nombre */}
            <div className="mt-2 flex items-center gap-3">
              <img
                src="/logo-tekton-squad.svg"
                alt="Estudio Tekton"
                className="h-16 w-16 rounded-xl shadow-sm"
              />
              <span className="text-2xl md:text-3xl font-semibold text-gray-800">
                Estudio Tekton
              </span>
            </div>

            {/* Título */}
            <h1 className="mt-4 text-2xl md:text-4xl font-bold leading-snug text-gray-900">
              Asesoría Integral de Obra &amp; Proyectos + Gestión Municipal
            </h1>

            {/* Texto */}
            <div className="mt-6 max-w-3xl text-lg text-gray-700">
              <p className="mt-3">
                En Estudio Tekton acompañamos a nuestros clientes en todas las etapas de
                su obra, desde el análisis inicial del proyecto hasta la gestión completa
                de permisos y trámites municipales en toda la Zona Norte.
              </p>

              <p className="mt-4">Nuestra experiencia técnica incluye:</p>

              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>
                  Asesoría de obra y dirección técnica, garantizando calidad y cumplimiento
                  normativo.
                </li>
                <li>
                  Desarrollo de proyectos arquitectónicos y estructurales, con soluciones a
                  medida para cada necesidad.
                </li>
                <li>
                  Análisis de prefactibilidad (FOT/FOS, restricciones urbanísticas y de
                  impacto).
                </li>
                <li>
                  Interpretación y aplicación del Código de Ordenamiento Urbano de todos los
                  municipios de Zona Norte, asegurando que tu proyecto cumpla con todas las
                  normas vigentes.
                </li>
                <li>
                  Gestión integral de trámites municipales, incluyendo permisos de
                  construcción, subdivisiones, regularizaciones, conforme a obra y más.
                </li>
              </ul>

              <p className="mt-4">
                Trabajamos con un enfoque técnico y estratégico para optimizar tiempos
                administrativos y minimizar observaciones, velando por un proceso ágil y
                transparente desde el inicio hasta la finalización de tu proyecto.
              </p>
            </div>

            {/* WhatsApp (NO se estira) */}
            <div className="mt-8">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white px-5 py-3 font-medium hover:opacity-90 w-fit"
                aria-label="Abrir WhatsApp"
              >
                <svg
                  className="w-[18px] h-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16.001 3.2c-7.062 0-12.8 5.737-12.8 12.8 0 2.259.589 4.377 1.615 6.22L3.2 28.8l6.78-1.777a12.738 12.738 0 0 0 6.02 1.536h.001c7.062 0 12.799-5.737 12.799-12.8s-5.737-12.8-12.8-12.8zm7.546 17.316c-.33.934-1.627 1.71-2.245 1.735-.599.025-1.365.036-2.202-.14a9.944 9.944 0 0 1-4.35-1.927c-1.93-1.336-3.168-2.98-3.547-3.477-.378-.497-1.362-1.813-1.362-3.462s.86-2.448 1.167-2.783c.307-.335.668-.419.89-.419.221 0 .443 0 .64.012.205.01.48-.077.751.573.27.65.922 2.246 1.003 2.408.082.162.137.353.025.57-.112.216-.169.353-.335.541-.166.189-.352.422-.503.568-.166.162-.339.338-.145.662.194.324.867 1.429 1.862 2.314 1.281 1.12 2.362 1.466 2.686 1.63s.49.135.67-.083c.18-.218.773-.9.98-1.211.205-.31.422-.257.704-.153.282.103 1.79.844 2.099.997.31.153.515.223.59.346.074.123.074.709-.257 1.643z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <p className="mt-8 text-sm text-gray-600">
              San Isidro • Vicente López • San Fernando • Tigre • San Martín
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS (cards abajo del hero) */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 pb-10 md:pb-14" id="servicios">
        <div className="grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="/tramites/regularizacion"
              className="rounded-2xl border bg-white p-5 hover:bg-gray-50 transition block"
            >
              <h3 className="font-semibold text-lg">Regularización de planos</h3>
              <p className="mt-1 text-sm text-gray-600">
                Obras existentes sin permiso o con diferencias.
              </p>
            </a>

            <a
              href="/tramites/demolicion"
              className="rounded-2xl border bg-white p-5 hover:bg-gray-50 transition block"
            >
              <h3 className="font-semibold text-lg">Permiso demolición total</h3>
              <p className="mt-1 text-sm text-gray-600">
                Planificación + impacto + seguridad
              </p>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="/tramites/construccion"
              className="rounded-2xl border bg-white p-5 hover:bg-gray-50 transition block"
            >
              <h3 className="font-semibold text-lg">Permiso de construcción</h3>
              <p className="mt-1 text-sm text-gray-600">
                Prefactibilidad FOT/FOS + cómputos
              </p>
            </a>

            <a
              href="/tramites/conforme-obra"
              className="rounded-2xl border bg-white p-5 hover:bg-gray-50 transition block"
            >
              <h3 className="font-semibold text-lg">Conforme a obra</h3>
              <p className="mt-1 text-sm text-gray-600">
                Levantamientos + visado + archivo
              </p>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="/tramites/electromecanica-ascensor"
              className="rounded-2xl border bg-white p-5 hover:bg-gray-50 transition block"
            >
              <h3 className="font-semibold text-lg">Electromecánica / Ascensor</h3>
              <p className="mt-1 text-sm text-gray-600">
                Memorias + expedientes específicos
              </p>
            </a>

            <a
              href="/tramites/subdivision-ph"
              className="rounded-2xl border bg-white p-5 hover:bg-gray-50 transition block"
            >
              <h3 className="font-semibold text-lg">Subdivisión / PH</h3>
              <p className="mt-1 text-sm text-gray-600">
                Geodesia + catastro + escrituras
              </p>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="/tramites/impacto-ambiental"
              className="rounded-2xl border bg-white p-5 hover:bg-gray-50 transition block"
            >
              <h3 className="font-semibold text-lg">Impacto ambiental</h3>
              <p className="mt-1 text-sm text-gray-600">
                Gestión integral y seguimiento
              </p>
            </a>
          </div>

          <p className="text-xs text-gray-500">
            + FOT/FOS, prefactibilidad, informes técnicos y más.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-8 px-6 md:px-8 mx-auto max-w-4xl">
        <div className="mb-6 rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            ¿Cómo querés hacer tu consulta?
          </h3>
          <p className="text-gray-700">
            Si ya sabés cuál es el trámite que necesitás,{" "}
            <strong>entrá y completá el formulario específico</strong> para adjuntar la
            documentación y agilizar el análisis.
            <br />
            <br />
            Si no, <strong>dejanos tu consulta acá</strong> y te guiamos. Tené a mano
            información de la propiedad a consultar:
            <strong> domicilio completo, plano antecedente o cualquier dato que sea de utilidad.</strong>
          </p>
        </div>

        <form
          action="https://formsubmit.co/gestiones@estudiotekton.com"
          method="POST"
          encType="multipart/form-data"
          className="space-y-4"
        >
          <input type="hidden" name="_subject" value="Nueva consulta — estudiotekton.com" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://estudiotekton.com/#gracias" />
          <input
            type="hidden"
            name="_autoresponse"
            value="¡Gracias! Recibimos tu consulta y te responderemos a la brevedad."
          />
          <input type="text" name="_honey" style={{ display: "none" }} />

          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="Nombre / Estudio"
              placeholder="Nombre"
              required
              className="w-full rounded border px-4 py-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full rounded border px-4 py-3"
            />
          </div>

          <PhoneField />

          <textarea
            name="Mensaje"
            placeholder="Contanos brevemente qué necesitás"
            rows={5}
            required
            className="w-full rounded border px-4 py-3"
          ></textarea>

          <div className="space-y-2">
            <label className="block text-sm text-gray-700">
              Adjuntar archivos (PDF / DWG / DXF / ZIP — máx. 10 MB c/u)
            </label>
            <input
              type="file"
              name="attachment"
              accept=".pdf,.dwg,.dxf,.zip"
              multiple
              className="w-full rounded border px-4 py-3
                         file:mr-4 file:rounded file:border-0
                         file:bg-gray-100 file:px-4 file:py-2"
            />
            <p className="text-xs text-gray-500">
              Si el archivo es muy pesado, subilo como .zip o compartí un enlace (Drive/WeTransfer).
            </p>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto rounded bg-[#0e1524] px-6 py-3 text-white"
          >
            Enviar consulta
          </button>
        </form>
      </section>

      {/* Cartel de Gracias */}
      <div
        id="gracias"
        className="fixed inset-x-0 top-4 mx-auto w-fit rounded-md bg-emerald-600 text-white px-4 py-2 shadow-lg"
      >
        ¡Gracias! Recibimos tu consulta.
      </div>
    </main>
  );
}
