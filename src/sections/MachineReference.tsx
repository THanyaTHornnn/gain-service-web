export default function MachineReference() {
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
  return (
    <section id="machine-reference" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
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

        {/* Brand Grid - แสดง 11 โลโก้ */}
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center">
            {machineBrands.map((brand, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center justify-center transition-all duration-300"
              >
                <div className="w-full aspect-[3/2] flex items-center justify-center p-4 rounded-2xl group-hover:bg-slate-50 transition-colors">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100"
                  />
                </div>
                <span className="mt-2 text-[10px] font-bold text-slate-300 group-hover:text-[#2a9c94] transition-colors uppercase tracking-widest">
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