export default function Hero() {
  return (
    // เปลี่ยน text-white เป็น text-slate-900 เพื่อให้เห็นตัวหนังสือบนพื้นหลังสว่าง
    <section id="home" className="relative pt-32 pb-20 px-6 bg-[#f8fafc] text-slate-900 overflow-hidden">
      
      {/* ปรับแสงพื้นหลังให้เป็นสี Teal/Amber แทนสีขาว (เพราะพื้นหลังขาวอยู่แล้ว) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2a9c94]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f59e0b]/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* 1. ฝั่งซ้าย: โลโก้ลอยตัว */}
          <div className="flex items-center justify-center p-6 min-h-[300px] md:min-h-[450px] order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-[#2a9c94] rounded-full blur-[60px] opacity-20 animate-pulse"></div>
              <img 
                src="/logo.png" 
                alt="Gain Service Logo" 
                className="relative z-10 w-56 h-56 md:w-80 md:h-80 object-contain 
                           animate-float-glow rounded-full bg-white/40 p-8 backdrop-blur-sm
                           border border-[#2a9c94]/10 shadow-xl"
              />
            </div>
          </div>

          {/* 2. ฝั่งขวา: ข้อความ (เปลี่ยนสีให้เข้มขึ้น) [cite: 9, 29] */}
          <div className="text-center md:text-left order-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2a9c94]/10 text-xs font-semibold mb-5 text-[#2a9c94] border border-[#2a9c94]/20 uppercase tracking-widest">
              Industrial Automation Specialist 
            </span>
            <h2 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-slate-900">
              THE BEST<br/> <span className="text-[#2a9c94]">OF THE JOB</span> 
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              ผู้นำด้านการซ่อมคอนโทรลเครื่องจักร CNC และจำหน่ายอะไหล่อุตสาหกรรม 
              ด้วยประสบการณ์ทีมช่างกว่า 15 ปี พร้อมให้บริการด้วยความรวดเร็วและแม่นยำ 
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-5 mb-16">
              <a href="tel:029469475" // [cite: 3]
                 className="bg-[#f2e900] text-slate-950 px-10 py-4 rounded-2xl font-black 
                            hover:bg-[#d9d100] transition-all shadow-lg hover:-translate-y-1 active:scale-95">
                ปรึกษาช่างเทคนิค
              </a>
              <a href="#services" 
                 className="border-2 border-[#2a9c94]/20 bg-white px-10 py-4 
                            rounded-2xl font-bold text-[#2a9c94] hover:bg-[#2a9c94] hover:text-white transition-all">
                ดูบริการทั้งหมด
              </a>
            </div>

            {/* 3. Trust Badges [cite: 7, 9, 22] */}
            <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-10">
              <div>
                <div className="text-[#2a9c94] text-3xl font-black mb-1">15+ Years </div>
                <div className="text-slate-500 text-xs uppercase font-bold tracking-widest">Experience</div>
              </div>
              <div>
                <div className="text-[#2a9c94] text-3xl font-black mb-1">1 Year</div>
                <div className="text-slate-500 text-xs uppercase font-bold tracking-widest">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}