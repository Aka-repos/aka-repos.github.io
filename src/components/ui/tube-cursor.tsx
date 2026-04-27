import { useEffect, useRef } from "react";

type TubesCursorProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  caption?: string;
  initialColors?: string[];
  lightColors?: string[];
  lightIntensity?: number;
  titleSize?: string;
  subtitleSize?: string;
  captionSize?: string;
  enableRandomizeOnClick?: boolean;
  className?: string;
};

function randomColors(count: number) {
  return new Array(count).fill(0).map(
    () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
  );
}

export function TubesCursor({
  id,
  title = "Tubes",
  subtitle = "Cursor",
  caption = "WebGPU / WebGL",
  initialColors = ["#f967fb", "#53bc28", "#6958d5"],
  lightColors = ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
  lightIntensity = 200,
  titleSize = "text-[80px]",
  subtitleSize = "text-[60px]",
  captionSize = "text-base",
  enableRandomizeOnClick = true,
  className = "",
}: TubesCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const appRef = useRef<unknown>(null);

  useEffect(() => {
    let removeClick: (() => void) | null = null;
    let destroyed = false;

    (async () => {
      const mod = await import(
        /* @vite-ignore */
        // @ts-expect-error CDN URL, not a local module
        "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const TubesCursorCtor = (mod as any).default ?? mod;

      if (!canvasRef.current || destroyed) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const app = TubesCursorCtor(canvasRef.current, {
        tubes: {
          colors: initialColors,
          lights: { intensity: lightIntensity, colors: lightColors },
        },
      }) as any; // eslint-disable-line @typescript-eslint/no-explicit-any

      appRef.current = app;

      if (enableRandomizeOnClick) {
        const handler = () => {
          app.tubes.setColors(randomColors(initialColors.length));
          app.tubes.setLightsColors(randomColors(lightColors.length));
        };
        document.body.addEventListener("click", handler);
        removeClick = () => document.body.removeEventListener("click", handler);
      }
    })();

    return () => {
      destroyed = true;
      if (removeClick) removeClick();
      try {
        (appRef.current as any)?.dispose?.(); // eslint-disable-line @typescript-eslint/no-explicit-any
        appRef.current = null;
      } catch {
        // ignore disposal errors
      }
    };
  }, [initialColors, lightColors, lightIntensity, enableRandomizeOnClick]);

  return (
    <div
      id={id}
      className={`relative h-screen w-full overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3 select-none pointer-events-none">
        <h1
          className={`m-0 p-0 text-white font-bold uppercase leading-none drop-shadow-[0_2px_32px_rgba(0,0,0,0.9)] tracking-tight ${titleSize}`}
        >
          {title}
        </h1>
        <h2
          className={`m-0 p-0 text-white/80 font-medium uppercase leading-none drop-shadow-[0_2px_32px_rgba(0,0,0,0.9)] ${subtitleSize}`}
        >
          {subtitle}
        </h2>
        <p
          className={`m-0 p-0 text-white/50 font-mono tracking-widest leading-none drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)] ${captionSize}`}
        >
          {caption}
        </p>
      </div>
    </div>
  );
}
