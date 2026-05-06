export default function ProductCard({ id, anchorId, title, brand, image, description, specs }: any) {
  return (
    <div 
      id={anchorId} // สำคัญมาก: เพื่อให้เลื่อนมาจาก Navbar ได้ตรงจุด
      className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-[#2a9c94]/30 transition-all duration-500 hover:shadow-2xl scroll-mt-32"
    >
      {/* ส่วนรูปภาพสินค้า */}
      <div className="aspect-square overflow-hidden relative bg-slate-50">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain p-12 group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Brand Tag */}
        <div className="absolute top-6 left-6">
          {brand === "GAIN SERVICE" ? (
            <div className="bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm border border-slate-100">
              <img src="/logo.png" alt="Gain Service" className="h-6 object-contain" /> 
            </div>
          ) : (
            <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-black px-4 py-2 rounded-full shadow-sm border border-slate-100 uppercase tracking-wider">
              {brand}
            </span>
          )}
        </div>
      </div>
      
      {/* รายละเอียดสินค้า */}
      <div className="p-8">
        <div className="min-h-[140px]"> {/* ล็อกความสูงขั้นต่ำเพื่อให้ปุ่มอยู่แนวเดียวกัน */}
          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#2a9c94] transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>
        </div>
        
        {/* Specs List */}
        <div className="space-y-3 mb-8 min-h-[100px]">
          {specs.map((spec: string, i: number) => (
            <div key={i} className="flex items-start gap-3 text-xs font-bold text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f2e900] mt-1.5 shrink-0"></span>
              <span className="leading-tight">{spec}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <a 
          href={`#contact?product=${encodeURIComponent(title)}`} // ส่งชื่อสินค้าไปที่ฟอร์มติดต่อ
          className="block w-full py-4 rounded-2xl border-2 border-slate-100 text-slate-900 font-bold text-center hover:bg-[#2a9c94] hover:border-[#2a9c94] hover:text-white transition-all active:scale-95 shadow-sm"
        >
          ขอใบเสนอราคา (Quotation)
        </a>
      </div>
    </div>
  );
}