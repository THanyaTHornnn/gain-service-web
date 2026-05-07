"use client";
import { useState, useEffect, useRef } from "react";
import { Send, ChevronRight } from "lucide-react";

// Hook: ตรวจจับเมื่อ element เข้ามาใน viewport
function useInView(threshold = 0.15) {
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

export default function ProductCard({ id, anchorId, title, brand, image, description, specs }: any) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);

  // คลิกปุ่ม "ขอใบเสนอราคา" → scroll ไปหน้า contact พร้อมชื่อสินค้า
  const handleQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      // ส่งชื่อสินค้าผ่าน custom event (Contact form สามารถรับได้)
      window.dispatchEvent(new CustomEvent("product-quote", { detail: { product: title } }));
    }
  };

  return (
    <div
      ref={ref}
      id={anchorId}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="scroll-mt-32"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(40px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div
        className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 transition-all duration-500 flex flex-col h-full"
        style={{
          boxShadow: hovered
            ? "0 25px 50px -12px rgba(42, 156, 148, 0.15), 0 0 0 1px rgba(42, 156, 148, 0.2)"
            : "0 1px 3px rgba(0,0,0,0.05)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          transition: "box-shadow 0.4s ease, transform 0.4s ease",
        }}
      >
        {/* รูปภาพสินค้า */}
        <div className="aspect-square overflow-hidden relative bg-gradient-to-br from-slate-50 to-slate-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-12 transition-transform duration-700"
            style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
          />

          {/* Shimmer overlay เวลา hover */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, transparent 40%, rgba(42,156,148,0.06) 100%)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />

          {/* Brand Tag */}
          <div className="absolute top-5 left-5">
            {brand === "GAIN SERVICE" ? (
              <div className="bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-md border border-slate-100">
                <img src="/logo.png" alt="Gain Service" className="h-6 object-contain" />
              </div>
            ) : (
              <span className="bg-white/95 backdrop-blur-sm text-slate-900 text-[10px] font-black px-4 py-2 rounded-full shadow-md border border-slate-100 uppercase tracking-wider">
                {brand}
              </span>
            )}
          </div>

          {/* Teal accent corner */}
          <div
            className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-[2rem]"
            style={{
              background: "linear-gradient(135deg, transparent 50%, rgba(42,156,148,0.12) 100%)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
        </div>

        {/* รายละเอียด */}
        <div className="p-8 flex flex-col flex-1">
          <div className="flex-1">
            <h3
              className="text-xl font-bold text-slate-900 mb-3 leading-tight transition-colors duration-300"
              style={{ color: hovered ? "#2a9c94" : "#0f172a" }}
            >
              {title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">{description}</p>

            {/* Specs */}
            <div className="space-y-2.5 mb-8">
              {specs.map((spec: string, i: number) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-xs font-semibold text-slate-600"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(-10px)",
                    transition: `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s`,
                  }}
                >
                  <ChevronRight size={14} className="text-[#2a9c94] mt-0.5 shrink-0" />
                  <span className="leading-tight">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ปุ่มขอใบเสนอราคา */}
          <button
            onClick={handleQuote}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 active:scale-95 mt-auto"
            style={{
              background: hovered ? "#2a9c94" : "transparent",
              color: hovered ? "white" : "#0f172a",
              border: hovered ? "2px solid #2a9c94" : "2px solid #e2e8f0",
              boxShadow: hovered ? "0 10px 25px -5px rgba(42,156,148,0.3)" : "none",
            }}
          >
            <Send size={15} />
            ขอใบเสนอราคา (Quotation)
          </button>
        </div>
      </div>
    </div>
  );
}