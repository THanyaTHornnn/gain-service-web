<style>
  {`
    @keyframes pulse-border {
      0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
      70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
      100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
    }
    .animate-download {
      animation: pulse-border 2s infinite;
    }
  `}
</style>
export default function CustomOrder() {
  return (
    <section id="custom-order" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* ลาย Engineering Grid พื้นหลัง */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%23ffffff'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-left">
            <span className="text-[#2a9c94] font-bold tracking-widest text-sm uppercase mb-4 block">Exclusive Manufacturing</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              สั่งจัดทำพิเศษ <br /> <span className="text-[#f2e900]">Customized Tooling</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              บริการออกแบบและผลิต Collet Chuck และชิ้นส่วนสั่งทำพิเศษตามแบบ Drawing หรือตัวอย่างชิ้นงานของลูกค้า โดยทีมวิศวกรผู้เชี่ยวชาญ 
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { t: "Special Shapes", d: "Square, Hexagon, Triangle" },
                { t: "Custom Bore", d: "Smooth / Grooved Bore" },
                { t: "Materials", d: "High Quality Carbide & HSS" },
                { t: "Precision", d: "ผลิตตามแบบมาตรฐานสากล" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border-l-2 border-[#2a9c94] pl-4 text-left">
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.t}</h4>
                    <p className="text-slate-500 text-xs">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ส่วนของปุ่มที่ปรับปรุงใหม่: ใช้ gap-4 และความเด่นที่แตกต่างกัน */}
            <div className="flex flex-col sm:flex-row gap-6 mt-4">
  
  {/* ปุ่มหลัก: ส่งแบบ Drawing (เด่นด้วยสีเขียว) */}
  <a 
    href="#contact"
    className="bg-[#2a9c94] text-white px-8 py-5 rounded-2xl font-black hover:bg-[#1e7c76] transition-all flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1 active:scale-95 group"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
    ส่งแบบ Drawing ประเมินราคา
  </a>

  {/* ปุ่มรองที่มีแอนิเมชั่น: Gain service catalouge.pdf */}
  <a 
    href="/Gain-service-catalouge.pdf"
    download="Gain-Service-Catalogue.pdf"
    target="_blank"
    className="relative border-2 border-white/30 text-white px-8 py-5 rounded-2xl font-black 
               hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-3 
               hover:border-white active:scale-95 animate-pulse-white group"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
    <span>Gain service catalouge.pdf</span>
    
    {/* จุดจุดจิ๋วสำหรับดึงสายตา */}
    <span className="absolute -top-1 -right-1 flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f2e900] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f2e900]"></span>
    </span>
  </a>
</div>
          </div>

          <div className="lg:w-1/2">
            <div className="flex flex-col sm:flex-row gap-8 mt-6">
  
  {/* ปุ่มหลัก: ส่งแบบ Drawing */}
  
</div>
 <div className="relative p-4 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-sm shadow-2xl">
                <img src="/custom-drawing.png" alt="Technical Drawing" className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" />
                <img src="/logo.png" alt="Gain Service" className="absolute bottom-10 right-10 h-8 opacity-50" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}