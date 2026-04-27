import { useLang } from "@/contexts/LangContext";

export function Hero() {
  const { lang } = useLang();

  const role =
    lang === "es"
      ? "Ingeniero de Software · Full-Stack Web & Mobile"
      : "Software Engineer · Full-Stack Web & Mobile Developer";

  return (
    <div
      id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-center gap-4 select-none px-6 text-center"
    >
      <h1
        className="m-0 p-0 text-white uppercase leading-none"
        style={{
          fontSize: "clamp(2.4rem,12vw,14rem)",
          fontFamily: "'StormGust', sans-serif",
          fontWeight: "normal",
          letterSpacing: "0.03em",
          lineHeight: 0.9,
        }}
      >
        Andrés Vega
      </h1>
      <p
        className="m-0 p-0 font-mono uppercase tracking-widest leading-tight"
        style={{
          fontSize: "clamp(0.75rem,1.8vw,1.1rem)",
          color: "rgba(255,255,255,0.55)",
          letterSpacing: "0.18em",
          maxWidth: "700px",
        }}
      >
        {role}
      </p>
    </div>
  );
}
