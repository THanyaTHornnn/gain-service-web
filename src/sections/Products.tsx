import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useLang } from "../context/Langcontext";

export default function Products() {
  const [filter, setFilter] = useState("all");
  const { t } = useLang();

  const products = [
    {
      id: 1, category: "cnc", anchorId: "products-cnc",
      title: "Collet Chuck & Guide Bush", brand: "GAIN SERVICE",
      image: "/products/collet.png",
      description: "อุปกรณ์จับยึดความแม่นยำสูง รองรับเครื่อง Cincom, Tsugami, Star, Miyano",
      specs: ["High Quality Carbide & HSS", "Smooth & Grooved bore", "รองรับ Special Customize"],
    },
    {
      id: 2, category: "cnc",
      title: "ER Collet", brand: "GAIN SERVICE",
      image: "/products/er.png",
      description: "หัวจับดอกเครื่องมือตัดมาตรฐานสูง นิยมสูงสุดในงาน CNC",
      specs: ["จับชิ้นงานได้แน่นหนา", "เปลี่ยนเครื่องมือได้รวดเร็ว", "มีช่วงขนาดการจับที่ยืดหยุ่น"],
    },
    {
      id: 3, category: "cnc",
      title: "Fan Motor & Spare Parts", brand: "GAIN SERVICE",
      image: "/products/fan-motor.png",
      description: "พัดลมระบายอากาศและอะไหล่สำหรับตู้คอนโทรลเครื่องจักร CNC",
      specs: ["High Speed Ventilation", "Long Life Bearing", "Fanuc & Mitsubishi Compatible"],
    },
    {
      id: 4, category: "cnc",
      title: "Drill Sleeve", brand: "GAIN SERVICE",
      image: "/products/drilling.png",
      description: "โซลูชันสำหรับการเจาะและต๊าปเกลียวประสิทธิภาพสูง",
      specs: ["Ultra Precision Performance", "Maximum Productivity", "High Speed Steel & Carbide"],
    },
    {
      id: 5, category: "cnc",
      title: "Bearing", brand: "GAIN SERVICE",
      image: "/products/bearing.png",
      description: "ลูกปืนคุณภาพสูงสำหรับเครื่องจักร ลดแรงเสียดทาน ยืดอายุการใช้งาน",
      specs: ["ลื่นไหลไม่กินแรง", "ช่วยลดการสึกหรอ", "ยืดอายุการใช้งาน"],
    },
    {
      id: 6, category: "cnc",
      title: "LCD Display", brand: "GAIN SERVICE",
      image: "/products/lcd.png",
      description: "จอภาพแบบแบนคุณภาพสูงสำหรับเครื่องจักร CNC",
      specs: ["ประหยัดพลังงาน", "ความคมชัดสูง", "น้ำหนักเบา"],
    },
    {
      id: 7, category: "cnc",
      title: "Battery Lithium", brand: "GAIN SERVICE",
      image: "/products/battery.png",
      description: "แบตเตอรี่ลิเธียมประสิทธิภาพสูงสำหรับระบบสำรองข้อมูล CNC",
      specs: ["อายุการใช้งานยาวนาน", "ความหนาแน่นพลังงานสูง", "น้ำหนักเบา"],
    },
    {
      id: 8, category: "cnc",
      title: "Fanuc AC Servo Motor", brand: "GAIN SERVICE",
      image: "/products/motor.png",
      description: "มอเตอร์เซอร์โวคุณภาพสูงสำหรับเครื่องจักร CNC และระบบอัตโนมัติ",
      specs: ["ประหยัดพลังงาน", "ระบบ HRV เพิ่มประสิทธิภาพ", "ทนทาน บำรุงรักษาง่าย"],
    },
    {
      id: 9, category: "oil", anchorId: "products-oil",
      title: "MORIDOX Industrial Oil", brand: "GAIN SERVICE",
      image: "/products/oil.png",
      description: "น้ำมันหล่อลื่นและน้ำมันตัดกลึงประสิทธิภาพสูง สูตร Green Global Product",
      specs: ["Cutting Oil สำหรับ Stainless & Aluminum", "Hydraulic & Gear Oil", "Grease คุณภาพสูง"],
    },
  ];

  const tabs = [
    { id: "all", label: t.products.all },
    { id: "cnc", label: t.products.cnc },
    { id: "oil", label: t.products.oil },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes("cnc")) setFilter("cnc");
      else if (hash.includes("oil")) setFilter("oil");
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section
      id="products"
      className="py-24 px-6 scroll-mt-20"
      style={{ fontFamily: "'Sarabun', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="accent-bar" />
            <p
              className="text-[#2a9c94] font-bold tracking-widest text-xs uppercase mb-3"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {t.products.label}
            </p>
            <p
              className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {t.products.title1} <span className="text-[#2a9c94]">{t.products.title2}</span>
            </p>
          </div>

          <div className="flex bg-white/80 backdrop-blur-sm shadow-sm p-1.5 rounded-2xl border border-slate-100 overflow-x-auto max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
                  filter === tab.id
                    ? "bg-[#2a9c94] text-white shadow-md shadow-[#2a9c94]/20"
                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                }`}
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products
            .filter((p) => filter === "all" || p.category === filter)
            .map((product) => (
              <div key={product.id} id={product.anchorId} className="scroll-mt-32">
                <ProductCard {...product} quoteLabel={t.products.quote} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}