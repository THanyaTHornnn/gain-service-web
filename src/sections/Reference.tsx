export default function Reference() {
    const references = [
  { name: "Kyowa NT", industry: "Automotive Parts", logo: "/logobrand/kyowa.png" },
  { name: "OHASHI", industry: "Automotive Parts", logo: "/logobrand/ohashi.png" },
  { name: "DELTA", industry: "Electronics", logo: "/logobrand/delta.jpg" },
  { name: "NIHON SEIKI", industry: "Precision Components", logo: "/logobrand/nihon-seiki.png" },
  { name: "E & H", industry: "Automotive Parts", logo: "/logobrand/eh.png" },
  { name: "YAMAZEN", industry: "Industrial Machinery", logo: "/logobrand/yamazen.png" },
  { name: "BELTON TECHNOLOGY", industry: "Electronics", logo: "/logobrand/belton.png" },
  { name: "DAIWA", industry: "Precision Parts", logo: "/logobrand/daiwa.png" },
  { name: "RONDA", industry: "Electronics & Precision", logo: "/logobrand/ronda.png" },
];
  return (
    <section id="reference" className="py-24 px-6 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#2a9c94] font-bold tracking-widest text-sm uppercase mb-3 border-b-2 border-[#f2e900] inline-block pb-1">
            Customer Reference
          </h2>
          <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-4">
            Trusted <span className="text-[#2a9c94]">Partners</span>
          </p>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
            ความไว้วางใจจากบริษัทชั้นนำในอุตสาหกรรมชิ้นส่วนยานยนต์และอิเล็กทรอนิกส์ 
            คือเครื่องยืนยันคุณภาพมาตรฐานการบริการของ Gain Service
          </p>
        </div>

        {/* Logo Grid - ปรับขนาดให้แสดงโลโก้ได้ชัดเจนและเป็นระเบียบ */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {references.map((client, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center justify-center p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-[#2a9c94]/30 transition-all duration-500"
            >
              {/* Logo Container */}
              <div className="w-full aspect-video flex items-center justify-center mb-4">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 scale-95 group-hover:scale-110"
                />
              </div>
              
              {/* Tooltip หรือชื่อบริษัทที่จะปรากฏตอน Hover */}
              <div className="text-center">
                <span className="text-[10px] font-bold text-[#2a9c94] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {client.industry}
                </span>
                <h4 className="font-bold text-slate-800 text-sm block">{client.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* ข้อมูลความน่าเชื่อถือเพิ่มเติมจากหน้า 2 */}
    
      </div>
    </section>
  );
}