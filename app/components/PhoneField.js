"use client";

export default function PhoneField(props) {
  return (
    <input
      type="tel"
      inputMode="tel"
      autoComplete="tel"
      {...props}
      onInput={(e) => {
        e.target.value = e.target.value.replace(/[^0-9+()\-.\s]/g, "");
      }}
    />
  );
}
