export default function ProductCard({ title, brand, image, description, specs }: any) {
  return (
    <div className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-[#2a9c94]/30 transition-all duration-500 hover:shadow-2xl">
      <div className="aspect-square overflow-hidden relative bg-white">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain p-10 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-6 left-6">
          <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-black px-4 py-2 rounded-full shadow-sm border border-slate-100">
            BRAND: {brand.toUpperCase()}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#2a9c94] transition-colors">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">{description}</p>
        
        <div className="space-y-2 mb-8">
          {specs.map((spec: string, i: number) => (
            <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f2e900]"></span>
              {spec}
            </div>
          ))}
        </div>

        <button className="w-full py-4 rounded-2xl border-2 border-slate-200 text-slate-900 font-bold hover:bg-[#2a9c94] hover:border-[#2a9c94] hover:text-white transition-all active:scale-95">
          ขอใบเสนอราคา (Quotation)
        </button>
      </div>
    </div>
  );
}