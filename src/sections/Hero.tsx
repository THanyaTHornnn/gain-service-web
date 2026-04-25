export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-[#0f172a] text-white overflow-hidden">
      {/* ตกแต่งพื้นหลังด้วยแสงสีแบบล้ำสมัย */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2a9c94] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f59e0b] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* 1. ฝั่งซ้าย: อนิเมชั่นโลโก้ลอยตัว (Floating & Glow) */}
          <div className="flex items-center justify-center p-6 min-h-[300px] md:min-h-[450px] order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-[#2a9c94] rounded-full blur-[60px] opacity-40 animate-pulse"></div>
              <img 
                src="/logo.png" 
                alt="Gain Service Logo" 
                className="relative z-10 w-56 h-56 md:w-80 md:h-80 object-contain 
                           animate-float-glow rounded-full bg-[#1e293b]/50 p-8 backdrop-blur-sm
                           border border-white/10 shadow-2xl"
              />
            </div>
          </div>

          {/* 2. ฝั่งขวา: ข้อความพาดหัวและจุดปิดการขาย */}
          <div className="text-center md:text-left order-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2a9c94]/10 text-xs font-semibold mb-5 text-[#38b2ac] border border-[#2a9c94]/20 uppercase tracking-widest">
              Industrial Automation Specialist 
            </span>
            <h2 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              THE BEST<br/> <span className="text-[#2a9c94]">OF THE JOB</span> 
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              ผู้นำด้านการซ่อมคอนโทรลเครื่องจักร CNC และจำหน่ายอะไหล่อุตสาหกรรม 
              ด้วยประสบการณ์ทีมช่างกว่า 15 ปี พร้อมให้บริการด้วยความรวดเร็วและแม่นยำ 
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-5 mb-16">
              <a href="tel:029469475" // ใส่เบอร์จาก Profile [cite: 3]
                 className="bg-[#f2e900] text-slate-950 px-10 py-4 rounded-2xl font-black 
                            hover:bg-[#d9d100] transition-all shadow-[0_10px_20px_rgba(242,233,0,0.3)] 
                            hover:-translate-y-1 active:scale-95">
                ปรึกษาช่างเทคนิค
              </a>
              <a href="#services" 
                 className="border-2 border-white/20 bg-white/5 backdrop-blur-sm px-10 py-4 
                            rounded-2xl font-bold hover:bg-white hover:text-slate-950 transition-all">
                ดูบริการทั้งหมด
              </a>
            </div>

            {/* 3. Trust Badges: ข้อมูลจริงที่สร้างความเชื่อมั่น [cite: 7, 9, 22, 29] */}
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
              <div>
                <div className="text-[#2a9c94] text-3xl font-black mb-1">15+ Years </div>
                <div className="text-slate-400 text-xs uppercase font-bold tracking-widest">Experience</div>
              </div>
              <div>
                <div className="text-[#2a9c94] text-3xl font-black mb-1">1 Year </div>
                <div className="text-slate-400 text-xs uppercase font-bold tracking-widest">Warranty</div>
              </div>
              <div className="hidden md:block">
                <div className="text-[#2a9c94] text-3xl font-black mb-1">5 Million </div>
                <div className="text-slate-400 text-xs uppercase font-bold tracking-widest">Capital (THB)</div>
              </div>
              <div className="hidden md:block">
                <div className="text-[#2a9c94] text-3xl font-black mb-1">100% Test </div>
                <div className="text-slate-400 text-xs uppercase font-bold tracking-widest">Before Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}