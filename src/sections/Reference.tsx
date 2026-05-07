"use client";
import { useEffect, useRef, useState } from "react";

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

export default function MachineReference() {
  const { ref: headerRef, inView: headerIn } = useInView();
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  const machineBrands = [
    { name: "FANUC", logo: "/logobrand/fanuc.png" },
    { name: "MITSUBISHI ELECTRIC", logo: "/logobrand/mitsubishi.png" },
    { name: "SANYO DENKI", logo: "/logobrand/sanyo-denki.png" },
    { name: "TSUGAMI", logo: "/logobrand/tsugami.png" },
    { name: "STAR", logo: "/logobrand/star.png" },
    { name: "CITIZEN CINCOM", logo: "/logobrand/citizen.png" },
    { name: "MIYANO", logo: "/logobrand/miyano.png" },
    { name: "BROTHER", logo: "/logobrand/brother.png" },
    { name: "MORI SEIKI", logo: "/logobrand/mori.png" },
    { name: "GOODWAY", logo: "/logobrand/goodway.png" },
    { name: "YASKAWA", logo: "/logobrand/yaskawa.png" },
  ];

  // marquee: duplicate array เพื่อให้วน loop ได้ไม่สะดุด
  const marqueeItems = [...machineBrands, ...machineBrands];

  return (
    <section id="machine-reference" className="py-20 px-6 bg-slate-50 overflow-hidden">
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
            <h2 className="text-[#2a9c94] font-bold tracking-widest text-sm uppercase mb-3 border-l-4 border-[#2a9c94] pl-4">
              Authorized Service & Spare Parts
            </h2>
            <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Machines <span className="text-[#2a9c94]">Reference</span> Service
            </p>
          </div>
          <p className="text-slate-500 text-sm md:max-w-xs leading-relaxed">
            เชี่ยวชาญการซ่อมบำรุงและจัดหาอะไหล่สำหรับเครื่องจักร CNC แบรนด์ชั้นนำระดับโลก
          </p>
        </div>

        {/* Marquee Ticker */}
        <div
          ref={gridRef}
          className="bg-white rounded-[3rem] py-10 shadow-sm border border-slate-100 overflow-hidden"
          style={{
            opacity: gridIn ? 1 : 0,
            transform: gridIn ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
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
                      className="max-w-full max-h-full object-contain"
                      style={{
                        filter: "grayscale(1) opacity(0.5)",
                        transition: "filter 0.4s ease, transform 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLImageElement).style.filter = "grayscale(0) opacity(1)";
                        (e.target as HTMLImageElement).style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLImageElement).style.filter = "grayscale(1) opacity(0.5)";
                        (e.target as HTMLImageElement).style.transform = "scale(1)";
                      }}
                    />
                  </div>
                  <span className="mt-2 text-[9px] font-bold text-slate-300 group-hover:text-[#2a9c94] transition-colors uppercase tracking-widest text-center leading-tight">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Static grid สำหรับ screen ขนาดใหญ่ (ซ่อนได้ถ้าต้องการ marquee อย่างเดียว) */}
          <div className="hidden lg:grid grid-cols-6 gap-8 items-center px-16 mt-10 pt-8 border-t border-slate-50">
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
                <div className="w-full aspect-[3/2] flex items-center justify-center p-3 rounded-2xl group-hover:bg-slate-50 transition-colors">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain brand-logo"
                  />
                </div>
                <span className="mt-2 text-[9px] font-bold text-slate-300 group-hover:text-[#2a9c94] transition-colors uppercase tracking-widest">
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