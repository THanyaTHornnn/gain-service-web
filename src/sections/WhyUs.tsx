import { ShieldCheck, Clock, Wrench, CheckCircle2 } from 'lucide-react';

export default function WhyUs() {
  const highlights = [
    { 
      icon: <Clock className="w-8 h-8" />, 
      text: "ประสบการณ์มากกว่า 15 ปี", 
      sub: "ทีมบริหารและช่างเทคนิคผู้เชี่ยวชาญด้านเครื่องจักร CNC โดยตรง", // 
      color: "bg-blue-50 text-blue-600"
    },
    { 
      icon: <ShieldCheck className="w-8 h-8" />, 
      text: "รับประกันงานซ่อมนาน 1 ปี", // [cite: 22]
      sub: "มั่นใจด้วยการรับประกันคุณภาพ พร้อมบริการหลังการขายที่รวดเร็ว",
      color: "bg-[#2a9c94]/10 text-[#2a9c94]"
    },
    { 
      // 2. เปลี่ยน Tool เป็น Wrench
      icon: <Wrench className="w-8 h-8" />, 
      text: "มีอะไหล่ให้ใช้ระหว่างซ่อม", // [cite: 21]
      sub: "ลด Downtime ของสายการผลิตด้วยบริการ Support onloan part", // [cite: 21]
      color: "bg-amber-50 text-amber-600"
    },
    { 
      icon: <CheckCircle2 className="w-8 h-8" />, 
      text: "ผ่านการทดสอบ 100%", // [cite: 23]
      sub: "มีเครื่อง Test ทดลองการทำงานจริงก่อนส่งมอบงานถึงมือลูกค้า", // [cite: 23, 27]
      color: "bg-slate-100 text-slate-800"
    }
  ];

  return (
    <section id="why-us" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-20 -z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-[#2a9c94] font-bold tracking-widest text-sm uppercase mb-3">
              Why Partner With Us
            </h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              ทำไมต้องเลือก <span className="text-[#2a9c94]">Gain Service?</span>
            </p>
          </div>
          <div className="hidden md:block h-20 w-px bg-slate-200" />
          <p className="text-slate-500 text-lg max-w-sm text-center md:text-left">
            เราไม่ใช่แค่ผู้ซ่อม แต่เราคือพาร์ทเนอร์ที่จะช่วยให้โรงงานของคุณทำงานได้อย่างไม่สะดุด
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <div 
              key={i} 
              className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Icon Box */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12 duration-500 ${item.color}`}>
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#2a9c94] transition-colors">
                {item.text}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.sub}
              </p>
              
              <div className="mt-6 w-10 h-1 bg-slate-100 group-hover:w-full group-hover:bg-[#f2e900] transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Trust Badge Bar (Optional) */}
        <div className="mt-20 py-8 border-y border-slate-100 flex flex-wrap justify-center items-center gap-12 grayscale opacity-40">
           <span className="font-black text-2xl tracking-tighter">QUALITY ASSURED</span>
           <span className="font-black text-2xl tracking-tighter">EXPERT TEAM</span>
           <span className="font-black text-2xl tracking-tighter">FAST DELIVERY</span>
           <span className="font-black text-2xl tracking-tighter">GENUINE PARTS</span>
        </div>
      </div>
    </section>
  );
}