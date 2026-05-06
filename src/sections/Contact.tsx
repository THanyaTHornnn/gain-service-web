import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#2a9c94] font-bold tracking-widest text-sm uppercase mb-3">
            Get In Touch
          </h2>
          <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Contact <span className="text-[#2a9c94]">Us</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 1. Contact Information Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-8">ข้อมูลการติดต่อ</h3>
              
              <div className="space-y-6">
                <a href="tel:029469475" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Call Us</p>
                    <p className="font-bold text-slate-700">02-9469475</p>
                  </div>
                </a>

                <a href="mailto:gainservice@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Email Address</p>
                    <p className="font-bold text-slate-700">gainservice@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Line Official</p>
                    <p className="font-bold text-slate-700">@gainservice</p>
                  </div>
                </div>
              </div>

              <hr className="my-8 border-slate-100" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Business Hours</p>
                  <p className="font-bold text-slate-700 text-sm">จันทร์ - เสาร์: 08:30 - 17:30 น.</p>
                  <p className="text-slate-400 text-xs mt-1">หยุดทุกวันอาทิตย์</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Address & Map Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 h-full flex flex-col">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#2a9c94]/10 flex items-center justify-center text-[#2a9c94] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">ที่ตั้งสำนักงานใหญ่</h3>
                  <p className="text-slate-500 leading-relaxed">
                    29/55 ถนนประเสริฐมนูกิจ แขวงนวลจันทร์ เขตบึงกุ่ม กรุงเทพฯ 10230 
                  </p>
                </div>
              </div>

              {/* Map Placeholder - สามารถนำ Google Maps Embed มาใส่ตรงนี้ได้ */}
              <div className="flex-grow bg-slate-100 rounded-[2rem] overflow-hidden min-h-[300px] relative border border-slate-200">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-2">
                   <p className="font-bold uppercase tracking-widest text-xs">Google Maps Integration</p>
                   <p className="text-[10px]">Gain Service Co., Ltd (Head Office)</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="tel:029469475"
                  className="flex-1 min-w-[200px] bg-[#2a9c94] text-white py-4 rounded-2xl font-bold text-center hover:shadow-lg hover:shadow-[#2a9c94]/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Phone size={18} /> โทรหาเราทันที
                </a>
                <a 
                  href="https://line.me/R/ti/p/@gainservice" 
                  target="_blank"
                  className="flex-1 min-w-[200px] bg-[#00B900] text-white py-4 rounded-2xl font-bold text-center hover:shadow-lg hover:shadow-green-500/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} /> ติดต่อผ่าน LINE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}