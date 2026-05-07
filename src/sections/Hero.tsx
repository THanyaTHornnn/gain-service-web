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

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.5);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 px-6 overflow-hidden"
      style={{ fontFamily: "'Sarabun', sans-serif" }}
    >
      {/* Animated background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 20%, rgba(42,156,148,0.13) 0%, transparent 65%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 80%, rgba(242,233,0,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Geometric accent lines */}
      <div className="absolute top-32 left-8 w-px h-32 bg-gradient-to-b from-transparent via-[#2a9c94]/30 to-transparent hidden lg:block" />
      <div className="absolute top-52 left-16 w-px h-20 bg-gradient-to-b from-transparent via-[#2a9c94]/15 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Logo animation */}
          <div className="flex items-center justify-center p-6 min-h-[300px] md:min-h-[450px] order-1" style={fadeIn(0.1)}>
            <div className="relative">
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, rgba(42,156,148,0.2), rgba(242,233,0,0.1), rgba(42,156,148,0.2))",
                  transform: "scale(1.35)",
                  animation: "spin 12s linear infinite",
                }}
              />
              {/* Glow */}
              <div className="absolute inset-0 bg-[#2a9c94] rounded-full blur-[70px] opacity-15 animate-pulse" />
              <img
                src="/logo.png"
                alt="Gain Service Logo"
                className="relative z-10 w-56 h-56 md:w-80 md:h-80 object-contain animate-float-glow rounded-full bg-white/60 p-8 backdrop-blur-sm border border-[#2a9c94]/15 shadow-2xl"
              />
              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 bg-[#f2e900] text-slate-900 text-xs font-black px-4 py-2 rounded-full shadow-lg"
                style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "0.05em" }}
              >
                15+ YRS
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center md:text-left order-2">
            <div style={fadeIn(0.2)}>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2a9c94]/10 text-xs font-bold mb-6 text-[#2a9c94] border border-[#2a9c94]/20 uppercase tracking-widest"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2a9c94] animate-pulse inline-block" />
                {t.hero.badge}
              </span>
            </div>

            <h2
              className="text-5xl md:text-7xl font-black mb-6 leading-[1.02] tracking-[-0.03em] text-slate-900"
              style={{ fontFamily: "'Outfit', sans-serif", ...fadeIn(0.3) }}
            >
              {t.hero.title1}<br />
              <span
                className="shimmer-text"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {t.hero.title2}
              </span>
            </h2>

            <p
              className="text-lg text-slate-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed"
              style={fadeIn(0.4)}
            >
              {t.hero.desc}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-16" style={fadeIn(0.5)}>
              <a
                href="tel:029469475"
                className="btn-glow bg-[#f2e900] text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-[#d9d100] transition-all shadow-lg shadow-yellow-200/60 hover:-translate-y-1 active:scale-95"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {t.hero.cta1}
              </a>
              <a
                href="#services"
                className="border-2 border-[#2a9c94]/20 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl font-bold text-[#2a9c94] hover:bg-[#2a9c94] hover:text-white hover:border-[#2a9c94] transition-all"
                style={{ fontFamily: "'Outfit', sans-serif" }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t.hero.cta2}
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-8 border-t border-slate-200/80 pt-10" style={fadeIn(0.6)}>
              <div>
                <div
                  className="text-[#2a9c94] text-3xl font-black mb-1"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <Counter target={15} suffix="+" />{t.hero.years}
                </div>
                <div
                  className="text-slate-400 text-xs uppercase font-bold tracking-widest"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {t.hero.experience}
                </div>
              </div>
              <div>
                <div
                  className="text-[#2a9c94] text-3xl font-black mb-1"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  1 {t.hero.warranty}
                </div>
                <div
                  className="text-slate-400 text-xs uppercase font-bold tracking-widest"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Warranty
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: scale(1.35) rotate(0deg); }
          to   { transform: scale(1.35) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}