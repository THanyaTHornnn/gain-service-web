"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/Langcontext";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Reference() {
  const { ref: headerRef, inView: headerIn } = useInView();
  const { ref: gridRef, inView: gridIn } = useInView(0.1);
  const { t } = useLang();

  const machineBrands = [
    { name: "KYOWA NT", logo: "/logobrand/kyowa.png" },
    { name: "OHASHI TECHNICA,INC", logo: "/logobrand/ohashi.png" },
    { name: "DELTA", logo: "/logobrand/delta.jpg" },
    { name: "NIHON SEIKI", logo: "/logobrand/nihon-seiki.png" },
    { name: "E & H", logo: "/logobrand/eh.png" },
    { name: "YAMAZEN", logo: "/logobrand/yamazen.png" },
    { name: "BELTON TECHNOLOGY", logo: "/logobrand/belton.png" },
    { name: "DAIWA", logo: "/logobrand/daiwa.png" },
    { name: "RONDA", logo: "/logobrand/ronda.png" },

  ];

  const marqueeItems = [...machineBrands, ...machineBrands];

  return (
    <section id="reference" className="py-20 px-6 bg-slate-50/80 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6"
          style={{
            opacity: headerIn ? 1 : 0,
            transform: headerIn ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="max-w-2xl">
            <div className="accent-bar" />
            <h2
              className="text-[#2a9c94] font-bold tracking-widest text-sm uppercase mb-3 border-l-4 border-[#2a9c94] pl-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {t.reference.label}
            </h2>
            <p
              className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {t.reference.title1} <span className="text-[#2a9c94]">{t.reference.title2}</span>
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <p className="text-slate-500 text-sm md:max-w-xs leading-relaxed text-right">
              {t.reference.sub}
            </p>
            <div className="flex items-center gap-2 bg-[#2a9c94]/10 border border-[#2a9c94]/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2a9c94] animate-pulse inline-block" />
              <span
                className="text-[#2a9c94] text-xs font-bold uppercase tracking-widest"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {machineBrands.length}+ Global Brands
              </span>
            </div>
          </div>
        </div>

        {/* Brand showcase card */}
        <div
          ref={gridRef}
          className="bg-white rounded-[3rem] py-10 overflow-hidden"
          style={{
            opacity: gridIn ? 1 : 0,
            transform: gridIn ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            boxShadow: "0 4px 32px -8px rgba(42,156,148,0.12), 0 1px 4px rgba(0,0,0,0.04)",
            border: "1px solid rgba(226,232,240,0.8)",
          }}
        >
          {/* Infinite marquee row */}
          <div className="flex overflow-hidden relative">
            {/* fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, white, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, white, transparent)" }} />

            <div className="marquee-track">
              {marqueeItems.map((brand, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center mx-8 flex-shrink-0"
                  style={{ minWidth: "120px" }}
                >
                  <div className="w-28 h-16 flex items-center justify-center p-3 rounded-2xl transition-all duration-300 group-hover:bg-slate-50 group-hover:shadow-md">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span
                    className="mt-2 text-[9px] font-bold text-slate-400 group-hover:text-[#2a9c94] transition-colors uppercase tracking-widest text-center leading-tight"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Static grid for large screens */}
          <div className="hidden lg:grid grid-cols-6 gap-8 items-center px-16 mt-10 pt-8 border-t border-slate-100">
            {machineBrands.slice(0, 6).map((brand, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center"
                style={{
                  opacity: gridIn ? 1 : 0,
                  transform: gridIn ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${0.1 + index * 0.07}s, transform 0.5s ease ${0.1 + index * 0.07}s`,
                }}
              >
                <div className="w-full aspect-[3/2] flex items-center justify-center p-3 rounded-2xl group-hover:bg-slate-50 group-hover:shadow-sm transition-all duration-300">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span
                  className="mt-2 text-[9px] font-bold text-slate-400 group-hover:text-[#2a9c94] transition-colors uppercase tracking-widest"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}