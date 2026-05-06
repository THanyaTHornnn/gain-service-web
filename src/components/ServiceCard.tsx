import { ArrowRight } from "lucide-react";

export default function ServiceCard({ title, description, icon, badge, onClick }: any) {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer relative bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
    >
      {/* Accent Light Effect */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#2a9c94]/5 rounded-full blur-3xl group-hover:bg-[#2a9c94]/15 transition-all"></div>

      {badge && (
        <span className="absolute top-8 right-8 bg-[#f2e900] text-slate-900 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
          {badge}
        </span>
      )}
      
      {/* Icon with Floating Animation */}
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2a9c94] to-[#1e7a74] flex items-center justify-center text-white text-3xl mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
        {icon}
      </div>

      <h3 className="font-black text-2xl mb-4 text-slate-900 tracking-tight group-hover:text-[#2a9c94] transition-colors">{title}</h3>
      <p className="text-slate-500 leading-relaxed mb-8 font-medium">{description}</p>
      
      <div className="flex items-center text-[#2a9c94] font-black text-xs gap-3 uppercase tracking-widest">
        <span>View Full Details</span>
        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#2a9c94] group-hover:text-white transition-all duration-300">
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}