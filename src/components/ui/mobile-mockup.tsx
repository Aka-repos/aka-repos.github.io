"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MOCKUP_STYLES = `
  .mm-ipad-bezel {
    background: #0d0d0d;
    box-shadow:
      inset 0 0 0 2px #3f3f46,
      inset 0 0 0 7px #000,
      0 50px 100px -14px rgba(0,0,0,0.95),
      0 18px 40px -6px rgba(0,0,0,0.8);
  }
  .mm-iphone-bezel {
    background: #111;
    box-shadow:
      inset 0 0 0 2px #52525B,
      inset 0 0 0 6px #000,
      0 30px 60px -10px rgba(0,0,0,0.95),
      0 12px 24px -6px rgba(0,0,0,0.8);
  }
  .mm-btn {
    background: linear-gradient(90deg, #404040 0%, #171717 100%);
    box-shadow: -2px 0 4px rgba(0,0,0,0.8);
  }
  .mm-glare {
    background: linear-gradient(115deg, rgba(255,255,255,0.06) 0%, transparent 40%);
  }
  .mm-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
  }
  .mm-badge {
    background: rgba(12,12,18,0.92);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 16px 40px -8px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.1);
  }
  .mm-contact {
    background: linear-gradient(135deg, rgba(79,70,229,0.45) 0%, rgba(59,130,246,0.28) 100%);
    border: 1px solid rgba(99,102,241,0.55);
    box-shadow: 0 0 24px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.1);
  }
  .mm-stat {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.09);
  }
  .mm-home-btn {
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.15);
  }
`;

export function MobileMockup() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".mm-ipad", { x: -50, autoAlpha: 0, rotationY: 18 });
      gsap.set(".mm-phone", { y: 60, x: 20, autoAlpha: 0, rotationY: -12 });
      gsap.set([".mm-badge-top", ".mm-badge-bot"], { autoAlpha: 0, scale: 0.82 });
      gsap.set(".mm-w", { autoAlpha: 0, y: 12 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: rootRef.current, start: "top 78%", once: true },
      });

      tl.to(".mm-ipad", { x: 0, autoAlpha: 1, rotationY: 0, duration: 1.2, ease: "expo.out" })
        .to(".mm-phone", { y: 0, x: 0, autoAlpha: 1, rotationY: 0, duration: 1.1, ease: "expo.out" }, "-=0.8")
        .to(".mm-w", { autoAlpha: 1, y: 0, stagger: 0.07, duration: 0.75, ease: "back.out(1.2)" }, "-=0.65")
        .to(".mm-badge-top", { autoAlpha: 1, scale: 1, duration: 0.7, ease: "back.out(1.5)" }, "-=0.85")
        .to(".mm-badge-bot", { autoAlpha: 1, scale: 1, duration: 0.7, ease: "back.out(1.5)" }, "-=0.4");
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative w-full h-full" style={{ perspective: "1200px" }}>
      <style dangerouslySetInnerHTML={{ __html: MOCKUP_STYLES }} />

      {/* inner canvas: 480 × 540, centered */}
      <div
        className="absolute"
        style={{
          width: 480,
          height: 540,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Badge — top */}
        <div className="mm-badge-top absolute -top-10 left-2 mm-badge rounded-2xl px-3 py-2 flex items-center gap-2.5 z-40">
          <span className="text-lg">🔥</span>
          <div>
            <p className="text-white text-[11px] font-bold leading-none mb-0.5">1 Year Streak</p>
            <p className="text-orange-200/50 text-[9px]">Milestone unlocked 🏆</p>
          </div>
        </div>

        {/* ── iPad: left-anchored, wide tablet aspect ratio ── */}
        <div
          className="mm-ipad mm-ipad-bezel absolute left-0 top-0"
          style={{
            width: 318,
            height: 460,
            borderRadius: "1.6rem",
            transformStyle: "preserve-3d",
            zIndex: 10,
          }}
        >
          {/* volume buttons — left side */}
          <div className="mm-btn absolute top-[70px]  -left-[3px] w-[3px] h-[20px] rounded-l-sm" />
          <div className="mm-btn absolute top-[100px] -left-[3px] w-[3px] h-[36px] rounded-l-sm" />
          <div className="mm-btn absolute top-[146px] -left-[3px] w-[3px] h-[36px] rounded-l-sm" />
          {/* power button — right side */}
          <div className="mm-btn absolute top-[90px] -right-[3px] w-[3px] h-[50px] rounded-r-sm" />
          {/* top camera */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-zinc-800 z-50" />

          {/* screen */}
          <div
            className="absolute bg-[#060c1a] text-white overflow-hidden z-10"
            style={{ inset: 7, borderRadius: "1.35rem" }}
          >
            <div className="absolute inset-0 mm-glare z-20 pointer-events-none" />
            <div className="relative w-full h-full flex flex-col p-3.5 gap-2.5">

              {/* browser bar */}
              <div className="mm-w flex items-center gap-2 bg-white/5 rounded-xl px-3 py-1.5 border border-white/6 flex-shrink-0">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                </div>
                <p className="flex-1 text-center text-[9px] text-neutral-400 font-mono tracking-wider">andresvega.dev</p>
              </div>

              {/* header row */}
              <div className="mm-w flex items-center justify-between flex-shrink-0">
                <div>
                  <p className="text-[7px] text-neutral-500 font-mono uppercase tracking-widest mb-0.5">Portfolio</p>
                  <p className="text-[18px] font-bold text-white tracking-tight leading-none">Andrés Vega</p>
                  <p className="text-[9px] text-neutral-400 mt-0.5">Full-Stack · Mobile · AI 🤖</p>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-indigo-500/20 border border-indigo-400/20 flex items-center justify-center text-2xl">👨‍💻</div>
              </div>

              {/* stats row — 3 cols */}
              <div className="mm-w grid grid-cols-3 gap-2 flex-shrink-0">
                {[
                  { e: "🚀", v: "12+", l: "Proyectos" },
                  { e: "📱", v: "8+",  l: "Apps" },
                  { e: "⭐", v: "20+", l: "Clientes" },
                ].map(({ e, v, l }) => (
                  <div key={l} className="mm-stat rounded-xl p-2 text-center">
                    <p className="text-base leading-none mb-0.5">{e}</p>
                    <p className="text-[14px] font-bold text-white leading-none">{v}</p>
                    <p className="text-[7px] text-neutral-500 mt-0.5">{l}</p>
                  </div>
                ))}
              </div>

              {/* tech pills */}
              <div className="mm-w flex flex-wrap gap-1.5 flex-shrink-0">
                {["React", "Flutter", "Node.js", "AI/ML"].map((s) => (
                  <span key={s} className="text-[8px] font-mono text-blue-300/80 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md">{s}</span>
                ))}
              </div>

              {/* two-column project grid — iPad-style layout */}
              <div className="mm-w grid grid-cols-2 gap-2 flex-1 min-h-0">
                {[
                  { e: "🚀", t: "SaaS Platform", s: "React · Node · AWS",     c: "indigo" },
                  { e: "📱", t: "Mobile App",    s: "Flutter · Firebase",      c: "blue" },
                  { e: "🤖", t: "AI Tool",       s: "Claude · OpenAI",         c: "purple" },
                  { e: "🌐", t: "Web App",       s: "Next.js · Tailwind",      c: "teal" },
                ].map(({ e, t, s }) => (
                  <div key={t} className="mm-card rounded-xl p-2.5 flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-base">{e}</span>
                      <span className="text-[9px] text-indigo-400">→</span>
                    </div>
                    <p className="text-[10px] font-semibold text-white leading-tight">{t}</p>
                    <p className="text-[7px] text-neutral-500 font-mono">{s}</p>
                  </div>
                ))}
              </div>

              {/* CONTÁCTAME */}
              <button className="mm-w mm-contact w-full rounded-2xl py-2.5 flex items-center justify-center gap-2.5 flex-shrink-0">
                <span className="text-base">📩</span>
                <div className="text-left">
                  <p className="text-[10px] font-bold tracking-widest text-indigo-200 uppercase leading-none">CONTÁCTAME</p>
                  <p className="text-[7px] text-indigo-300/55 mt-0.5">¡Trabajemos juntos!</p>
                </div>
              </button>

            </div>
          </div>
        </div>

        {/* ── iPhone: bottom-right corner, partially overlapping iPad ── */}
        <div
          className="mm-phone mm-iphone-bezel absolute right-0 bottom-0"
          style={{
            width: 168,
            height: 340,
            borderRadius: "2.1rem",
            transformStyle: "preserve-3d",
            zIndex: 20,
          }}
        >
          {/* hardware buttons */}
          <div className="mm-btn absolute top-[68px]  -left-[3px] w-[3px] h-[14px] rounded-l-sm" />
          <div className="mm-btn absolute top-[92px]  -left-[3px] w-[3px] h-[26px] rounded-l-sm" />
          <div className="mm-btn absolute top-[128px] -left-[3px] w-[3px] h-[26px] rounded-l-sm" />
          <div className="mm-btn absolute top-[96px]  -right-[3px] w-[3px] h-[40px] rounded-r-sm" />

          {/* screen */}
          <div
            className="absolute bg-[#050914] text-white overflow-hidden z-10"
            style={{ inset: 6, borderRadius: "1.75rem" }}
          >
            <div className="absolute inset-0 mm-glare z-20 pointer-events-none" />

            {/* dynamic island */}
            <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[58px] h-[16px] bg-black rounded-full z-30 flex items-center justify-end px-2">
              <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
            </div>

            <div className="relative w-full h-full pt-7 px-2.5 pb-4 flex flex-col gap-1.5">

              {/* header */}
              <div className="mm-w flex justify-between items-center flex-shrink-0">
                <div>
                  <p className="text-[6px] text-neutral-500 font-mono uppercase tracking-widest mb-0.5">Hoy ✨</p>
                  <p className="text-[12px] font-bold text-white leading-none">Mi Portafolio</p>
                </div>
                <div className="w-6 h-6 rounded-xl bg-indigo-500/20 border border-indigo-400/20 flex items-center justify-center text-xs">🧑‍🚀</div>
              </div>

              {/* chips */}
              <div className="mm-w flex gap-1 flex-shrink-0">
                {["React", "Flutter", "AI"].map((s) => (
                  <span key={s} className="text-[5.5px] font-mono text-blue-300/70 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded">{s}</span>
                ))}
              </div>

              {/* notification cards */}
              <div className="space-y-1 flex-1 min-h-0">
                {[
                  { e: "🎯", t: "Nuevo Proyecto", s: "SaaS · React · Node", b: "⭐" },
                  { e: "💡", t: "Mobile App",      s: "Flutter · Firebase",  b: "✅" },
                  { e: "🤖", t: "AI Integration",  s: "Claude · OpenAI",     b: "🔥" },
                ].map(({ e, t, s, b }) => (
                  <div key={t} className="mm-w mm-card rounded-xl p-1.5 flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-xs flex-shrink-0">{e}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[8px] font-semibold text-white leading-none truncate">{t}</p>
                      <p className="text-[6px] text-neutral-500 font-mono mt-0.5 truncate">{s}</p>
                    </div>
                    <span className="text-[9px] flex-shrink-0">{b}</span>
                  </div>
                ))}
              </div>

              {/* CONTÁCTAME */}
              <button className="mm-w mm-contact w-full rounded-xl py-2 flex items-center justify-center gap-1.5 flex-shrink-0">
                <span className="text-xs">📩</span>
                <div>
                  <p className="text-[7px] font-bold tracking-widest text-indigo-200 uppercase leading-none">CONTÁCTAME</p>
                  <p className="text-[5.5px] text-indigo-300/50 mt-0.5">¡Trabajemos juntos! 🚀</p>
                </div>
              </button>

              {/* home bar */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[52px] h-[3px] bg-white/15 rounded-full" />
            </div>
          </div>
        </div>

        {/* Badge — bottom */}
        <div className="mm-badge-bot absolute -bottom-10 right-2 mm-badge rounded-2xl px-3 py-2 flex items-center gap-2.5 z-40">
          <span className="text-lg">🤝</span>
          <div>
            <p className="text-white text-[11px] font-bold leading-none mb-0.5">Colaboremos 🎉</p>
            <p className="text-indigo-200/50 text-[9px]">andresvega.dev</p>
          </div>
        </div>
      </div>
    </div>
  );
}
