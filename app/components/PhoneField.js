"use client";

export default function PhoneField() {
  // Esta función elimina lo que no está permitido
  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9+()\-.\s]/g, "");
  };

  return (
    <input
      type="tel"
      inputMode="tel"
      autoComplete="tel"
      name="Teléfono / WhatsApp"
      placeholder="Teléfono / WhatsApp"
      required
      maxLength={20}
      pattern="^[0-9()+\\-.\\s]{6,20}$"
      title="Ingresá solo números o símbolos + ( ) - . espacio (mín. 6, máx. 20)"
      className="w-full rounded border px-4 py-3"
      onInput={handleInput}
    />
  );
}

