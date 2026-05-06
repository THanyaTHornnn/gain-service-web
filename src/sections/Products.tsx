import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [filter, setFilter] = useState("all");

  const products = [
    // --- หมวด CNC SPARE PARTS ---
    {
      id: 1,
      category: "cnc",
      anchorId: "products-cnc",
      title: "Collet Chuck & Guide Bush",
      brand: "GAIN SERVICE",
      image: "/products/collet.png",
      description: "อุปกรณ์จับยึดความแม่นยำสูง รองรับเครื่อง Cincom, Tsugami, Star, Miyano",
      specs: ["High Quality Carbide & HSS", "Smooth & Grooved bore", "รองรับ Special Customize"]
    },
    {
      id: 2,
      category: "cnc",
      title: "ER collect",
      brand: "GAIN SERVICE",
      image: "/products/er.png",
      description: "หัวจับดอกเครื่องมือตัดที่มีมาตรฐานสูงได้รับความนิยมสูงสุดในการจับดอกเอ็นมิล (Endmill), ดอกสว่าน หรือดอกต๊าป สำหรับงานกัด, เจาะ และกลึง CNC",
      specs: ["จับชิ้นงานได้แน่นหนา", "เปลี่ยนเครื่องมือได้รวดเร็ว ", "มีช่วงขนาดการจับที่ยืดหยุ่น"]
    }, 

    {
      id: 3,
      category: "cnc",
      title: "Fan Motor & Spare Parts",
      brand: "GAIN SERVICE",
      image: "/products/fan-motor.png",
      description: "พัดลมระบายอากาศและอะไหล่สิ้นเปลืองสำหรับตู้คอนโทรลเครื่องจักร CNC",
      specs: ["High Speed Ventilation", "Long Life Bearing", "Fanuc & Mitsubishi Compatible"]
    },
    {
      id: 4,
      category: "cnc",
      title: "Drill sleeve",
      brand: "GAIN SERVICE",
      image: "/products/drilling.png",
      description: "โซลูชันสำหรับการเจาะและต๊าปเกลียวประสิทธิภาพสูง เพิ่มผลผลิตสูงสุด",
      specs: ["Ultra Precision Performance", "Maximum Productivity", "High Speed Steel & Carbide"]
    },

    {
      id: 5,
      category: "cnc",
      title: "Bearing",
      brand: "GAIN SERVICE",
      image: "/products/bearing.png",
      description: "หัวใจสำคัญของเครื่องจักรและเป็นชิ้นส่วนที่นั่งอยู่กับเพลาอย่างใกล้ชิด การลดแรงเสียดทานระหว่างผิวสัมผัสของเพลา",
      specs: ["เครื่องจักรสามารถหมุนเพลาได้อย่างลื่นไหลไม่กินแรง", "ช่วยลดการสึกหรอ", "ยืดอายุการใช้งานของเครื่องจักรได้อย่างดี"]
    },

    {
      id: 6,
      category: "cnc",
      title: "LCD Display",
      brand: "GAIN SERVICE",
      image: "/products/lcd.png",
      description: "จอภาพแบบแบนที่ใช้คุณสมบัติการปรับแสงของ",
      specs: ["ประหยัดพลังงาน", "ความคมชัดสูง ", "น้ำหนักเบา"]
    },

    {
      id: 7,
      category: "cnc",
      title: "Battery Lithium",
      brand: "GAIN SERVICE",
      image: "/products/battery.png",
      description: "เป็นแหล่งพลังงานประสิทธิภาพสูงนิยมใช้ในอุปกรณ์พกพา, ยานยนต์ไฟฟ้า (EV) และระบบโซลาร์เซลล์ โดยมีประเภทหลักคือ Li-ion (พลังงานสูง) และ LiFePO4 (ทนทาน ปลอดภัย) ",
      specs: ["อายุการใช้งานยาวนาน", "ความหนาแน่นพลังงานสูง", "น้ำหนักเบา"]
    },

    {
      id: 8,
      category: "cnc",
      title: "Fanuc AC Servo Motor",
      brand: "GAIN SERVICE",
      image: "/products/motor.png",
      description: " ซึ่งเป็นมอเตอร์เซอร์โวคุณภาพสูงที่ใช้ในอุตสาหกรรม ได้รับการออกแบบมาสำหรับเครื่องจักร CNC และระบบอัตโนมัติที่ต้องการความเร็วและความแม่นยำสูง",
      specs: ["ประหยัดพลังงาน", "มีฟังก์ชันระบบ HRV เพื่อเพิ่มประสิทธิภาพ", "ความทนทานสูงและการบำรุงรักษาง่าย"]
    },

    // --- หมวด INDUSTRIAL OIL ---
    {
      id: 9,
      category: "oil",
      anchorId: "products-oil",
      title: "MORIDOX Industrial Oil",
      brand: "GAIN SERVICE",
      image: "/products/oil.png",
      description: "น้ำมันหล่อลื่นและน้ำมันตัดกลึงประสิทธิภาพสูง สูตร Green Global Product",
      specs: ["Cutting Oil สำหรับ Stainless & Aluminum", "Hydraulic & Gear Oil", "Grease คุณภาพสูง"]
    },

    // --- หมวด Office Stationary (ตามรูปภาพ 6 หัวข้อ) ---
    {
      id: 10,
      category: "supplies",
      anchorId: "products-supplies",
      title: "Office Stationary",
      brand: "GAIN SERVICE",
      image: "/products/stationary.png",
      description: "อุปกรณ์เครื่องใช้สำนักงานครบวงจร",
      specs: ["ปากกา & แฟ้มเอกสาร", "กล่องกระดาษ", "กาว & เทปกาว"]
    },
    {
      id: 11,
      category: "supplies",
      title: "Factory Supplies",
      brand: "GAIN SERVICE",
      image: "/products/safety-gear.png",
      description: "อุปกรณ์เครื่องใช้ภายในโรงงานอุตสาหกรรม",
      specs: ["หน้ากาก & แว่นตานิรภัย", "ถุงมือ & ถุงนิ้ว", "อุปกรณ์ป้องกัน PPE"]
    },
    {
      id: 12,
      category: "supplies",
      title: "Cleaning Supplies",
      brand: "GAIN SERVICE",
      image: "/products/cleaning.png",
      description: "อุปกรณ์และวัสดุสิ้นเปลืองสำหรับการทำความสะอาด",
      specs: ["น้ำยาทำความสะอาด", "ไม้กวาด & อุปกรณ์ขัดพื้น", "วัสดุสิ้นเปลืองโรงงาน"]
    },
    {
      id: 13,
      category: "supplies",
      title: "Hand Tools & Measuring Tools",
      brand: "GAIN SERVICE",
      image: "/products/hand-tools.png",
      description: "อุปกรณ์เครื่องมือช่างและเครื่องมือวัดความแม่นยำ",
      specs: ["ไขควง, ค้อน, คีม", "เครื่องมือวัดละเอียด", "Accessories ครบชุด"]
    },
    {
      id: 14,
      category: "supplies",
      title: "Warehouse Supplies",
      brand: "GAIN SERVICE",
      image: "/products/warehouse.png",
      description: "อุปกรณ์เครื่องมือสำหรับโกดังและคลังสินค้า",
      specs: ["พาเลท (Pallets)", "กล่องพลาสติกอเนกประสงค์", "อุปกรณ์จัดเก็บคลังสินค้า"]
    },
    {
      id: 15,
      category: "supplies",
      title: "Office Furniture",
      brand: "GAIN SERVICE",
      image: "/products/furniture.png",
      description: "เฟอร์นิเจอร์สำหรับสำนักงานและโรงงาน",
      specs: ["โต๊ะทำงาน", "ตู้ล็อกเกอร์", "เก้าอี้สำนักงาน"]
    }
  ];

  const tabs = [
    { id: "all", label: "ALL" },
    { id: "cnc", label: "CNC SPARE PARTS" },
    { id: "oil", label: "INDUSTRIAL OIL" },
    { id: "supplies", label: "OFFICE STATIONARY" },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes("cnc")) setFilter("cnc");
      else if (hash.includes("oil")) setFilter("oil");
      else if (hash.includes("supplies")) setFilter("supplies");
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section id="products" className="py-24 px-6 bg-slate-50/50 scroll-mt-20"> 
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[#2a9c94] font-bold tracking-widest text-sm uppercase mb-3 border-l-4 border-[#2a9c94] pl-4">
              Premium Inventory
            </h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Quality <span className="text-[#2a9c94]">Products</span> & Solutions
            </p>
          </div>
          
          <div className="flex bg-white shadow-sm p-1.5 rounded-2xl border border-slate-100 overflow-x-auto max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
                  filter === tab.id 
                    ? "bg-[#2a9c94] text-white shadow-md shadow-[#2a9c94]/20" 
                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products
            .filter(p => filter === "all" || p.category === filter)
            .map((product) => (
              <div key={product.id} id={product.anchorId} className="scroll-mt-32">
                <ProductCard {...product} />
              </div>
            ))}
        </div>

      
      </div>
    </section>
  );
}