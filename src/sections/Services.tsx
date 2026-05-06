import { useState, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
// เปลี่ยนมาใช้ Lucide เพื่อความ Modern และเบาครับ
import { Cpu, Settings2, RefreshCcw, X, PhoneCall, FileText, CheckCircle2 } from "lucide-react";

export default function Services() {
  const [activeDetail, setActiveDetail] = useState<any>(null);

  // การจัดการ Modal Scroll
  useEffect(() => {
    if (activeDetail) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("modal-open");
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.classList.remove("modal-open");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.classList.remove("modal-open");
    };
  }, [activeDetail]);

  const services = [
    {
      id: "repair",
      icon: <Cpu />,
      title: "ซ่อมคอนโทรลเครื่องจักร",
      badge: "Expertise",
      realImage: "/repair-room.png", 
      description: "ซ่อมแผงวงจร, บอร์ดคอนโทรล CNC และ Servo Drive ทุกรุ่น ทุกยี่ห้อ",
      fullDesc: "บริการรับซ่อมบอร์ดอิเล็กทรอนิกส์เครื่องจักร CNC โดยทีมช่างที่มีประสบการณ์กว่า 15 ปี ตรวจเช็คด้วยเครื่องมือทันสมัยผ่านการทดสอบ 100% ก่อนส่งมอบ",
      brands: ["/logobrand/fanuc.png", "/logobrand/mitsubishi.png", "/logobrand/yaskawa.png", "/logobrand/sanyo-denki.png", "/logobrand/okuma.png"],
      features: [
        "รับประกันงานซ่อมนานถึง 1 ปีเต็ม",
        "มีอะไหล่ให้ใช้งานชั่วคราวระหว่างรอซ่อม (On-loan)",
        "งานทุกชิ้นผ่านการทดสอบ (Test) ก่อนส่งมอบ",
        "ราคาเหมาะสม ยุติธรรม (Price-Performance)"
      ]
    },
    {
      id: "spareparts",
      icon: <Settings2 />,
      title: "จำหน่ายอะไหล่เครื่องจักร",
      badge: "Quality",
      realImage: "/stock-room.png", 
      description: "ตัวแทนจำหน่าย Collet Chuck, Guide Bush และอุปกรณ์สำหรับ Bar-Feeder",
      fullDesc: "ผู้นำเข้าและจำหน่ายอุปกรณ์ Tooling & Accessories สำหรับเครื่องกลึงอัตโนมัติ รวมถึงวัสดุสำหรับงานกลึงทุกประเภท",
      brands: ["/logobrand/citizen.png", "/logobrand/star.png", "/logobrand/tsugami.png", "/logobrand/miyano.png", "/logobrand/nomura.png"],
      features: [
        "นำเข้า Collet Chuck และ Guide Bush คุณภาพสูง",
        "รองรับเครื่อง Cincom, Tsugami, Star, Miyano",
        "รับสั่งทำ Special Collet ตามแบบการใช้งาน",
        "มีสต็อกพร้อมส่งเพื่อความรวดเร็วในการผลิต"
      ]
    },
    {
      id: "machine",
      icon: <RefreshCcw />,
      title: "เครื่องจักรมือสอง",
      badge: "Certified",
      realImage: "/machine-lathe.png", 
      description: "จัดหาและขายเครื่องจักรมือสอง พร้อมติดตั้งและการันตีคุณภาพ",
      fullDesc: "บริการจัดหาเครื่องจักร CNC มือสองสภาพดี (Second Hand Machine) พร้อมบริการ Overhaul ปรับสภาพ และโปรแกรม Training",
      brands: ["/logobrand/brother.png", "/logobrand/citizen.png", "/logobrand/miyano.png", "/logobrand/mori.png", "/logobrand/tsugami.png"],
      features: [
        "ตรวจเช็คระบบไฟและกลไก (Preventive Maintenance)",
        "บริการ Overhaul Machine ปรับสภาพเครื่องจักร",
        "หลักสูตรสอนการใช้งาน (Training Program)",
        "มีทีมช่างบริการติดตั้งและดูแลหลังการขาย"
      ]
    }
  ];

  return (
    <section id="services" className="relative py-24 px-6 bg-slate-50/50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2a9c94_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#2a9c94] font-bold tracking-[0.2em] text-xs uppercase border-b-2 border-[#f2e900] inline-block pb-1">
            Our Expertise
          </h2>
          <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Comprehensive <span className="text-[#2a9c94]">Solutions</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <ServiceCard key={item.id} {...item} onClick={() => setActiveDetail(item)} />
          ))}
        </div>

        {/* --- MODAL SECTION (Glassmorphism & Animation) --- */}
        {activeDetail && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity animate-in fade-in" onClick={() => setActiveDetail(null)}></div>
            
            <div className="relative bg-white rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row w-full max-w-5xl max-h-[90vh] overflow-hidden border border-white/20 animate-in zoom-in duration-300">
              
              {/* Image Side */}
              <div className="w-full md:w-1/2 h-[250px] md:h-auto relative">
                <img src={activeDetail.realImage} className="w-full h-full object-cover" alt={activeDetail.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent md:hidden"></div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-lg">
                  <img src="/logo.png" className="h-6 object-contain" alt="Logo" />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
                <button onClick={() => setActiveDetail(null)} className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all">
                  <X size={20} />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-[#2a9c94]/10 rounded-2xl text-[#2a9c94]">
                    {activeDetail.icon}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 leading-tight">{activeDetail.title}</h3>
                </div>

                <p className="text-slate-600 mb-8 leading-relaxed">{activeDetail.fullDesc}</p>

                {/* Brands Container */}
                <div className="mb-8 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <p className="text-[10px] font-black text-[#2a9c94] uppercase tracking-widest mb-4 text-center">Supported Major Brands</p>
                  <div className="grid grid-cols-3 gap-6 items-center">
                    {activeDetail.brands.map((logo: string, i: number) => (
                      <img key={i} src={logo} className="h-6 md:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mx-auto" alt="brand" />
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-10">
                  {activeDetail.features.map((feat: string, i: number) => (
                    <div key={i} className="flex gap-3 text-sm font-semibold text-slate-700">
                      <CheckCircle2 size={18} className="text-[#2a9c94] shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto grid grid-cols-2 gap-4">
                  <a href="tel:029469475" className="flex items-center justify-center gap-2 bg-[#2a9c94] text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-[#2a9c94]/30 hover:-translate-y-1 transition-all active:scale-95">
                    <PhoneCall size={18} /> โทรด่วน
                  </a>
                  <a href="#contact" onClick={() => setActiveDetail(null)} className="flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                    <FileText size={18} /> ติดต่อรับใบเสนอราคา
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* นโยบายบริษัท (Bottom Banner) */}
        <div className="mt-24 p-10 md:p-14 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden group">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#2a9c94]/20 rounded-full blur-[100px] transition-all group-hover:bg-[#2a9c94]/30"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-3xl font-black mb-4">The Best of the Job</h4>
              <p className="text-slate-400 text-lg max-w-xl">
                เรามุ่งมั่นสู่ความเป็นเลิศในงานบริการ จัดเตรียมสินค้าที่ผ่านการทดสอบด้วยเครื่องมือทันสมัยเพื่อส่งมอบสิ่งที่ดีที่สุด
              </p>
            </div>
            <div className="shrink-0 bg-[#f2e900] text-slate-900 px-12 py-6 rounded-3xl font-black text-xl shadow-xl hover:scale-105 active:scale-95 transition-all">
              รับประกันงานซ่อม 1 ปี
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}