"use client";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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

export default function ServiceCard({ title, description, icon, badge, onClick, index = 0 }: any) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      <div
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group cursor-pointer relative bg-white border border-slate-100 rounded-[2.5rem] p-10 overflow-hidden h-full flex flex-col"
        style={{
          boxShadow: hovered
            ? "0 30px 60px -15px rgba(42,156,148,0.2), 0 0 0 1.5px rgba(42,156,148,0.25)"
            : "0 1px 4px rgba(0,0,0,0.04)",
          transform: hovered ? "translateY(-10px)" : "translateY(0)",
          transition: "box-shadow 0.45s ease, transform 0.45s ease",
        }}
      >
        {/* Animated background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top right, rgba(42,156,148,0.08) 0%, transparent 60%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* Moving light streak */}
        <div
          className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl pointer-events-none"
          style={{
            background: "#2a9c94",
            opacity: hovered ? 0.1 : 0.04,
            transform: hovered ? "scale(1.3)" : "scale(1)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        />

        {badge && (
          <span
            className="absolute top-7 right-7 text-slate-900 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm"
            style={{ background: "#f2e900" }}
          >
            {badge}
          </span>
        )}

        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl mb-8 shadow-xl relative z-10"
          style={{
            background: "linear-gradient(135deg, #2a9c94, #1e7a74)",
            transform: hovered ? "scale(1.1) rotate(6deg)" : "scale(1) rotate(0deg)",
            transition: "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
            boxShadow: hovered ? "0 15px 30px -5px rgba(42,156,148,0.4)" : "0 8px 20px -5px rgba(42,156,148,0.25)",
          }}
        >
          {icon}
        </div>

        <h3
          className="font-black text-2xl mb-4 tracking-tight transition-colors duration-300 relative z-10"
          style={{ color: hovered ? "#2a9c94" : "#0f172a" }}
        >
          {title}
        </h3>
        <p className="text-slate-500 leading-relaxed mb-8 font-medium flex-1 relative z-10">{description}</p>

        {/* CTA */}
        <div className="flex items-center text-[#2a9c94] font-black text-xs gap-3 uppercase tracking-widest relative z-10">
          <span>View Full Details</span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: hovered ? "#2a9c94" : "#f8fafc",
              color: hovered ? "white" : "#2a9c94",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
            }}
          >
            <ArrowRight size={14} />
          </div>
        </div>

        {/* Bottom border accent */}
        <div
          className="absolute bottom-0 left-0 h-1 rounded-b-[2.5rem]"
          style={{
            background: "linear-gradient(90deg, #2a9c94, #f2e900)",
            width: hovered ? "100%" : "0%",
            transition: "width 0.5s ease",
          }}
        />
      </div>
    </div>
  );
}