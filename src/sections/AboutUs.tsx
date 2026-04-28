import { HiOutlineUserGroup, HiOutlineCheckBadge, HiOutlineShieldCheck } from "react-icons/hi2";
export default function AboutUs() {
  const stats = [
    { label: "Experience", value: "15+ Years", icon: <HiOutlineUserGroup /> },
    { label: "Registered Capital", value: "5 Million", icon: <HiOutlineShieldCheck /> },
    { label: "Warranty", value: "1 Year", icon: <HiOutlineCheckBadge /> },
  ];
  

  
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* ฝั่งซ้าย: รูปภาพสำนักงานหรือทีมงาน */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#2a9c94]/10 rounded-full blur-3xl -z-10"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img 
                src="/repair.png" 
                alt="Gain Service Office" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* ป้ายประสบการณ์ลอยตัว */}
            <div className="absolute -bottom-8 -left-8 bg-[#f2e900] p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-4xl font-black text-slate-900 leading-none">15+</p>
              <p className="text-sm font-bold text-slate-700 uppercase tracking-tighter">Years of Expertise</p>
            </div>
          </div>

          {/* ฝั่งขวา: ข้อมูลบริษัท */}
          <div className="lg:w-1/2 text-left">
            <span className="text-[#2a9c94] font-bold tracking-widest text-sm uppercase mb-4 block">Precision Engineering Partner</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              มุ่งมั่นสู่ความเป็นเลิศ <br /> 
              <span className="text-[#2a9c94]">The Best of the Job</span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              <strong>บริษัท เกน เซอร์วิส</strong> ได้จดทะเบียนจัดตั้งเมื่อ 30 กันยายน พ.ศ.2565 ด้วยทุนจดทะเบียน 1 ล้านบาท โดยคุณอนัญญา บัวหอม
และ คุณนันท์ภัส ผิวแตง
จดเพื่มทุน ปี 2568 เป็ น 5 ล้านบาท
โดยมีวัตถุประสงค์เพื่อให้บริการซ่อมคอนโทรลเครื่องจักร จําหน่ายอะไหล่ เครื่องจักร และ ชิ้นส่วนอิเล็คทรอนิกส์ ในอุตสาหกรรมผลิต
ชิ้นส่วนรถยนต์ อุตสาหกรรมอิเล็คทรอนิกส์อุตสาหกรรมไฟฟ้ า และโรงงานอุตสาหกรรมทั่วไป ให้คําปรึกษา เครื่องจักรกลในโรงงานอุตสาหกรรมทุก
ชนิด โดยมี คุณอนัญญา บัวหอม เป็ นผู้เริ่มจัดตั้งกิจการ
เนื่องจากมีบริหารมี ประสบการณ์ในการดําเนินงานกว่า 15 ปี ในด้านการซ่อมบํารุงเครื่องจักร และ มีทีมงานช่าง ด้านซ่อมบํารุงและจัด
จําหน่ายสินค้าประเภทอุตสาหกรรมมายาวนาน จําหน่าย อะไหล่เครื่องจักร และนําเข้าชิ้นส่วนเครื่องจักรสําหรับเครื่องกลึงกึ่งอัตโนมัติ เครื่องกลึง
อัตโนมัติ รวมถึงวัสดุสําหรับงานกลึงทุกประเภท
            </p>
        

            <p className="text-slate-600 mb-10 leading-relaxed">
              เรายังเป็นตัวแทนจำหน่ายอุปกรณ์เครื่องจักรแบรนด์ชั้นนำอย่าง <strong>SQ Singapore</strong> 
              และมีบริการจัดหาเครื่องจักรมือสองสภาพดี พร้อมทีมวิศวกรดูแลติดตั้งและสอนการใช้งานอย่างครบวงจร
            </p>

            {/* แถบสถิติ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-[#2a9c94] transition-all">
                  <div className="text-[#2a9c94] text-3xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ส่วน Mission & Vision ด้านล่าง */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden">
            <h4 className="text-2xl font-bold mb-4 relative z-10">Our Mission</h4>
          <p className="text-white/80 relative z-10">
              ❖ มีอะไหล่ให้ลูกค้าใช ้งานชั่วคราวระหว่างรอซ่อม 
            </p>
             <p className="text-white/80 relative z-10 ">
              ❖ รับประกันสินค้างานซ่อมนานถึง 1 ปี 
            </p>
            <p className="text-white/80 relative z-10">
              ❖ งานทุกชิ้นผ่านการทดสอบก่อนส่งมอบ
            </p>
            <p className="text-white/80 relative z-10">
              ❖ ราคาเหมาะสม
            </p>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2a9c94] opacity-10 rounded-full -mr-10 -mt-10"></div>
          </div>
          
          <div className="p-10 rounded-[2.5rem] bg-[#2a9c94] text-white relative overflow-hidden">
            <h4 className="text-2xl font-bold mb-4 relative z-10">Our Vision</h4>
           <p className="text-white/80 relative z-10">
              The best of the Jop การมุ่งมั่นสู่ความเป็นเลิศในด้านงานบริการ ซึ่งทางบริษัท มีการจัดเตรียมสินค้า
ผ่านการทดสอบด้วยเครื่องมือที่ทันสมัย ตลอดจนส่งมอบสินค้าที่ดีที่สุดให้กับลูกค้า
            </p>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}