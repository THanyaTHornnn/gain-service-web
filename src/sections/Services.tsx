import ServiceCard from "../components/ServiceCard";
// แนะนำให้ติดตั้ง react-icons (npm install react-icons)
import { HiOutlineCpuChip, HiOutlineCog6Tooth, HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6 bg-[#f8fafc] overflow-hidden">
      {/* ตกแต่งพื้นหลังด้วยลวดลาย Grid วิศวกรรม */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%232a9c94' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4v4H4V4H0V2h4V0h2v2h4v2H6zM36 4v4h-2V4h-4V2h4V0h2v2h4v2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#2a9c94] font-bold tracking-widest text-sm uppercase mb-3">Our Expertise</h2>
          <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a9c94] to-[#f59e0b]">Solutions</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<HiOutlineCpuChip />}
            badge="Expertise"
            title="ซ่อมคอนโทรลเครื่องจักร"
            description="ซ่อมแผงวงจรอิเล็กทรอนิกส์, บอร์ดคอนโทรล CNC และ Servo Drive ทุกรุ่นทุกยี่ห้อ มั่นใจด้วยประสบการณ์กว่า 15 ปี "
          />

          <ServiceCard
            icon={<HiOutlineCog6Tooth />}
            badge="Quality"
            title="จำหน่ายอะไหล่เครื่องจักร"
            description="นำเข้าและจำหน่ายชิ้นส่วนเครื่องจักรกล อาทิ Collet Chuck, Guide Bush และอุปกรณ์เสริมสำหรับ Bar-Feeder "
          />

          <ServiceCard
            icon={<HiOutlineArrowPathRoundedSquare />}
            badge="Certified"
            title="เครื่องจักรมือสอง"
            description="บริการจัดหาและขายเครื่องจักรมือสอง (CNC Lathe) พร้อมทีมงานติดตั้งและการันตีคุณภาพก่อนส่งมอบ "
          />
        </div>

        {/* ส่วนเสริมพิเศษ: มั่นใจด้วยนโยบายบริษัท [ */}
        <div className="mt-20 p-8 rounded-3xl bg-[#0f172a] text-white flex flex-wrap items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-xl font-bold mb-2">พร้อมแบ่งเบาภาระของลูกค้า</h4>
            <p className="text-slate-400 text-sm">เรามีอะไหล่ให้ใช้งานชั่วคราวระหว่างรอซ่อม และทดสอบงานทุกชิ้นก่อนส่งมอบ</p>
          </div>
          <button className="bg-[#2a9c94] hover:bg-[#1e7c76] text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95">
            รับประกันงานซ่อม 1 ปี 
          </button>
        </div>
      </div>
    </section>
  );
}