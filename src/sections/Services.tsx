import { useState,useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import { HiOutlineCpuChip, HiOutlineCog6Tooth, HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";

export default function Services() {
  const [activeDetail, setActiveDetail] = useState<any>(null);

  useEffect(() => {
  if (activeDetail) {
    // เมื่อ Modal เปิด: ห้าม scroll หน้าจอหลัก และซ่อน Navbar ผ่านสัญญาณ class
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("modal-open");
  } else {
    // เมื่อ Modal ปิด: ให้ scroll ได้ปกติ และแสดง Navbar
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
      icon: <HiOutlineCpuChip />,
      title: "ซ่อมคอนโทรลเครื่องจักร",
      badge: "Expertise",
      realImage: "/repair-room.png", 
      description: "ซ่อมแผงวงจร, บอร์ดคอนโทรล CNC และ Servo Drive ทุกรุ่น ทุกยี่ห้อ",
      fullDesc: "บริการรับซ่อมบอร์ดอิเล็กทรอนิกส์เครื่องจักร CNC โดยทีมช่างที่มีประสบการณ์กว่า 15 ปี เราตรวจเช็คอย่างละเอียดด้วยเครื่องมือทันสมัย",
      brands: "Fanuc, Mitsubishi, Yaskawa, Sanyo Denki, Brother, Okuma",
      features: [
        "รับประกันงานซ่อม 1 ปีเต็ม",
        "มีอะไหล่ Support ระหว่างรอซ่อม (On-loan)",
        "ทดสอบการทำงาน 100% ก่อนส่งมอบ",
        "ราคาเหมาะสม ยุติธรรม"
      ]
    },
    {
      id: "spareparts",
      icon: <HiOutlineCog6Tooth />,
      title: "จำหน่ายอะไหล่เครื่องจักร",
      badge: "Quality",
      realImage: "/stock-room.png", 
      description: "ตัวแทนจำหน่าย Collet Chuck, Guide Bush และอุปกรณ์สำหรับ Bar-Feeder",
      fullDesc: "ผู้นำเข้าและจำหน่ายอุปกรณ์ Tooling & Accessories แบรนด์ SQ Singapore สำหรับเครื่องกลึง CNC",
      brands: "Citizen, Star, Tsugami, Miyano, Tornos, Nomura",
      features: [
        "วัสดุคุณภาพสูง Carbide และ HSS",
        "รองรับการสั่งทำ Special Collet ตามแบบ",
        "สินค้าแบรนด์ SQ Singapore แท้ 100%",
        "มีสต็อกพร้อมส่ง รวดเร็ว"
      ]
    },
    {
      id: "machine",
      icon: <HiOutlineArrowPathRoundedSquare />,
      title: "เครื่องจักรมือสอง",
      badge: "Certified",
      realImage: "/machine-lathe.png", 
      description: "จัดหาและขายเครื่องจักรมือสอง (CNC Lathe) พร้อมทีมงานติดตั้งและสอนใช้งาน",
      fullDesc: "บริการจัดหาเครื่องจักร CNC มือสองสภาพดี พร้อมบริการ Overhaul ปรับสภาพเครื่องให้เหมือนใหม่",
      brands: "Brother, Citizen, Miyano, Mori Seiki, Tsugami",
      features: [
        "ตรวจเช็คระบบไฟและกลไกก่อนส่งมอบ",
        "มีทีมช่างบริการติดตั้งหน้างาน",
        "สอนการใช้งาน (Training Program)",
        "การันตีคุณภาพหลังการขาย"
      ]
    }
  ];

  return (
    <section id="services" className="relative py-24 px-6 bg-[#f8fafc] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%232a9c94' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4v4H4V4H0V2h4V0h2v2h4v2H6zM36 4v4h-2V4h-4V2h4V0h2v2h4v2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#2a9c94] font-bold tracking-widest text-sm uppercase mb-3 text-center">Our Expertise</h2>
          <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight text-center">
            Comprehensive <span className="text-[#2a9c94]">Solutions</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((item) => (
            <ServiceCard
              key={item.id}
              {...item}
              onClick={() => setActiveDetail(item)}
            />
          ))}
        </div>

        {/* --- MODAL SECTION --- */}
        {activeDetail && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-10">
    {/* Overlay */}
    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setActiveDetail(null)}></div>
    
    {/* Modal Box: เพิ่ม max-h-[90vh] และ shadow ให้ดูมีมิติ */}
    <div className="relative bg-white rounded-[2.5rem] overflow-hidden 
                    w-[90vw] sm:w-[85vw] md:w-full max-w-4xl 
                    shadow-2xl flex flex-col md:flex-row border border-white/20 
                    animate-in zoom-in duration-300 
                    max-h-[85vh] my-auto">
      
      {/* 1. ฝั่งรูปภาพ: ปรับความสูงบนมือถือให้เหลือประมาณ 35% ไม่ให้เบียดเนื้อหา */}
      <div className="w-full md:w-5/12 h-[30vh] md:h-auto relative bg-slate-100 border-b md:border-b-0 md:border-r border-slate-100">
        <img 
          src={activeDetail.realImage} 
          className="w-full h-full object-cover"
          alt={activeDetail.title}
          onError={(e:any) => e.target.src = '/logo.png'} 
        />
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/20 backdrop-blur-md px-1 py-1 rounded-2xl shadow-lg border border-white/50 animate-in fade-in duration-500">
    <img 
      src="/logo.png" 
      alt="Gain Service Logo" 
      className="h-6 md:h-8 object-contain" 
    />
  </div>
</div>

      {/* 2. ฝั่งเนื้อหา: เพิ่ม Padding บน-ล่าง (py-10) และใช้ gap-6 เพื่อระยะห่างที่พอดี */}
      <div className="w-full md:w-7/12 p-6 sm:p-10 md:p-12 overflow-y-auto flex flex-col gap-6 text-left">
        <button 
          onClick={() => setActiveDetail(null)}
          className="absolute top-6 right-6 z-20 text-slate-400 hover:text-slate-900 transition-colors bg-white/50 rounded-full p-1"
        >✕</button>
        
        <div className="flex items-center gap-4">
          <span className="p-3 bg-[#2a9c94]/10 rounded-2xl text-[#2a9c94] text-3xl">
            {activeDetail.icon}
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">{activeDetail.title}</h3>
        </div>

        <div className="space-y-6">
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">{activeDetail.fullDesc}</p>
          
          {/* Supported Brands: เพิ่มระยะห่างภายใน */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <span className="text-[10px] font-bold text-[#2a9c94] uppercase block mb-2 tracking-widest">Supported Brands</span>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">{activeDetail.brands}</p>
          </div>

          {/* Features: ปรับให้ดูสะอาดตา ไม่เบียดขอบล่าง */}
          <div className="grid grid-cols-1 gap-3">
            {activeDetail.features.map((feat: string, i: number) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                <span className="text-[#2a9c94] font-bold">✓</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Button: เพิ่ม Margin Top เล็กน้อยเพื่อให้ห่างจากเนื้อหาด้านบน */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a href="tel:029469475" className="flex-1 bg-[#2a9c94] text-white text-center py-4 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95">
              โทรสอบถามด่วน
            </a>
            <a href="#contact" onClick={() => setActiveDetail(null)} className="flex-1 border-2 border-[#2a9c94] text-[#2a9c94] text-center py-4 rounded-xl font-bold hover:bg-[#2a9c94] hover:text-white transition-all">
              ขอใบเสนอราคา
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

        {/* นโยบายบริษัท */}
        <div className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-[#0f172a] text-white flex flex-wrap items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2a9c94] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 text-left">
            <h4 className="text-2xl font-bold mb-3">พร้อมแบ่งเบาภาระของลูกค้า</h4>
            <p className="text-slate-400 text-base max-w-xl">เรามีอะไหล่ให้ใช้งานชั่วคราวระหว่างรอซ่อม และทดสอบงานทุกชิ้นด้วยเครื่องมือทันสมัยก่อนส่งมอบถึงมือคุณ</p>
          </div>
          <button className="relative z-10 bg-[#f2e900] text-slate-900 px-10 py-5 rounded-2xl font-black text-lg shadow-xl transition-all hover:-translate-y-1 hover:bg-[#d9d100] active:scale-95">
            รับประกันงานซ่อม 1 ปี
          </button>
        </div>
      </div>
    </section>
  );
}