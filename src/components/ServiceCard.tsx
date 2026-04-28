export default function ServiceCard({ title, description, icon, badge ,onClick }: any) {
  return (
    <div className="group relative border border-white/50 rounded-3xl p-8 bg-white/60 backdrop-blur-xl 
                    shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(42,156,148,0.15)] 
                    hover:-translate-y-3 transition-all duration-500 overflow-hidden">
      
      {/* แสงเรืองจางๆ มุม Card เพิ่มความเป็น High-Tech */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#2a9c94]/10 rounded-full blur-3xl group-hover:bg-[#2a9c94]/20 transition-colors"></div>

      {/* Badge เล็กๆ สำหรับจุดเด่น  */}
      {badge && (
        <span className="absolute top-6 right-6 bg-[#2a9c94]/10 text-[#2a9c94] text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
          {badge}
        </span>
      )}
      
      {/* ส่วน Icon: เปลี่ยนเป็น Gradient สวยๆ */}
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f3f12e] to-[#d98a09] flex items-center justify-center 
                      text-white text-3xl mb-8 shadow-[0_10px_20px_rgba(245,158,11,0.3)] group-hover:rotate-6 transition-transform">
        {icon}
      </div>

      <h3 className="font-bold text-2xl mb-4 text-slate-900 tracking-tight">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-base mb-8">{description}</p>
      
      {/* ปุ่มกดจำลองที่ดู Dynamic */}
      {/* แก้ไขเป็นปุ่มที่กดได้จริง */}
      <button 
        onClick={onClick}
        className="flex items-center text-[#2a9c94] font-bold text-sm gap-2 group/link cursor-pointer outline-none"
      >
         <span className="relative">
            Read Details
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2a9c94] transition-all duration-300 group-hover/link:w-full"></span>
         </span>
         <div className="w-8 h-8 rounded-full border border-[#2a9c94]/30 flex items-center justify-center group-hover/link:bg-[#2a9c94] group-hover/link:text-white transition-all">
            <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
         </div>
      </button>
    </div>
  );
}