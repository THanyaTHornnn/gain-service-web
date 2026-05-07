"use client";
import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";

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

export default function Contact() {
  const { ref, inView } = useInView();
  const [productName, setProductName] = useState("");

  // รับ custom event จาก ProductCard เมื่อกดขอใบเสนอราคา
  useEffect(() => {
    const handler = (e: any) => {
      setProductName(e.detail?.product || "");
    };
    window.addEventListener("product-quote", handler);
    return () => window.removeEventListener("product-quote", handler);
  }, []);

  const cardStyle = (delay: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* BG pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#2a9c94 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16" style={cardStyle(0)}>
          <h2 className="text-[#2a9c94] font-bold tracking-widest text-sm uppercase mb-3">Get In Touch</h2>
          <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Contact <span className="text-[#2a9c94]">Us</span>
          </p>
          {productName && (
            <div className="mt-4 inline-flex items-center gap-2 bg-[#2a9c94]/10 border border-[#2a9c94]/20 text-[#2a9c94] px-5 py-2 rounded-full text-sm font-bold">
              <span>📦</span>
              <span>สนใจสินค้า: {productName}</span>
              <button onClick={() => setProductName("")} className="ml-2 opacity-60 hover:opacity-100">✕</button>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1" style={cardStyle(0.1)}>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 h-full">
              <h3 className="text-xl font-bold text-slate-900 mb-8">ข้อมูลการติดต่อ</h3>

              <div className="space-y-6">
                <a
                  href="tel:029469475"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Call Us</p>
                    <p className="font-bold text-slate-700">02-9469475</p>
                  </div>
                </a>

                <a
                  href="mailto:gainservice@gmail.com"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Email Address</p>
                    <p className="font-bold text-slate-700">gainservice@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://line.me/R/ti/p/@gainservice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Line Official</p>
                    <p className="font-bold text-slate-700">@gainservice</p>
                  </div>
                </a>
              </div>

              <hr className="my-8 border-slate-100" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Business Hours</p>
                  <p className="font-bold text-slate-700 text-sm">จันทร์ - เสาร์: 08:30 - 17:30 น.</p>
                  <p className="text-slate-400 text-xs mt-1">หยุดทุกวันอาทิตย์</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address & Map */}
          <div className="lg:col-span-2" style={cardStyle(0.2)}>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 h-full flex flex-col">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#2a9c94]/10 flex items-center justify-center text-[#2a9c94] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">ที่ตั้งสำนักงานใหญ่</h3>
                  <p className="text-slate-500 leading-relaxed">
                    29/55 ถนนประเสริฐมนูกิจ แขวงนวลจันทร์ เขตบึงกุ่ม กรุงเทพฯ 10230
                  </p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="flex-grow bg-gradient-to-br from-slate-50 to-slate-100 rounded-[2rem] overflow-hidden min-h-[300px] relative border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.8!2d100.65!3d13.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ5JzEyLjAiTiAxMDDCsDM5JzAwLjAiRQ!5e0!3m2!1sth!2sth!4v1"
                  className="w-full h-full"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gain Service Location"
                />
                {/* Overlay fallback เผื่อ iframe โหลดไม่ได้ */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-2 pointer-events-none opacity-0">
                  <MapPin size={32} />
                  <p className="font-bold uppercase tracking-widest text-xs">Gain Service Co., Ltd</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:029469475"
                  className="btn-glow flex-1 min-w-[200px] bg-[#2a9c94] text-white py-4 rounded-2xl font-bold text-center hover:shadow-lg hover:shadow-[#2a9c94]/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Phone size={18} /> โทรหาเราทันที
                </a>
                <a
                  href="https://line.me/R/ti/p/@gainservice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow flex-1 min-w-[200px] bg-[#00B900] text-white py-4 rounded-2xl font-bold text-center hover:shadow-lg hover:shadow-green-500/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} /> ติดต่อผ่าน LINE
                </a>
              </div>

              {/* แสดงชื่อสินค้าที่กดมาจาก ProductCard */}
              {productName && (
                <div className="mt-4 p-4 rounded-2xl bg-[#2a9c94]/5 border border-[#2a9c94]/15 text-sm text-slate-600">
                  💬 กรุณาแจ้งเจ้าหน้าที่ว่าสนใจ <strong className="text-[#2a9c94]">{productName}</strong> เพื่อรับใบเสนอราคา
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}