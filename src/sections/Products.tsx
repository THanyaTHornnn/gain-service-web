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
      image: "/products/collet-main.png",
      description: "อุปกรณ์จับยึดความแม่นยำสูง รองรับเครื่อง Cincom, Tsugami, Star, Miyano",
      specs: ["High Quality Carbide & HSS", "Smooth & Grooved bore", "รองรับ Special Customize"]
    },
    {
      id: 2,
      category: "cnc",
      title: "Fan Motor & Spare Parts",
      brand: "GAIN SERVICE",
      image: "/products/fan-motor.png",
      description: "พัดลมระบายอากาศและอะไหล่สิ้นเปลืองสำหรับตู้คอนโทรลเครื่องจักร CNC",
      specs: ["High Speed Ventilation", "Long Life Bearing", "Fanuc & Mitsubishi Compatible"]
    },
    {
      id: 3,
      category: "cnc",
      title: "Drilling and Tapping Solutions",
      brand: "GAIN SERVICE",
      image: "/products/drilling-tools.png",
      description: "โซลูชันสำหรับการเจาะและต๊าปเกลียวประสิทธิภาพสูง เพิ่มผลผลิตสูงสุด",
      specs: ["Ultra Precision Performance", "Maximum Productivity", "High Speed Steel & Carbide"]
    },

    // --- หมวด INDUSTRIAL OIL ---
    {
      id: 4,
      category: "oil",
      anchorId: "products-oil",
      title: "MORIDOX Industrial Oil",
      brand: "GAIN SERVICE",
      image: "/products/oil-moridox.png",
      description: "น้ำมันหล่อลื่นและน้ำมันตัดกลึงประสิทธิภาพสูง สูตร Green Global Product",
      specs: ["Cutting Oil สำหรับ Stainless & Aluminum", "Hydraulic & Gear Oil", "Grease คุณภาพสูง"]
    },

    // --- หมวด Office Stationary (ตามรูปภาพ 6 หัวข้อ) ---
    {
      id: 5,
      category: "supplies",
      anchorId: "products-supplies",
      title: "Office Stationary",
      brand: "GAIN SERVICE",
      image: "/products/stationary.png",
      description: "อุปกรณ์เครื่องใช้สำนักงานครบวงจร",
      specs: ["ปากกา & แฟ้มเอกสาร", "กล่องกระดาษ", "กาว & เทปกาว"]
    },
    {
      id: 6,
      category: "supplies",
      title: "Factory Supplies",
      brand: "GAIN SERVICE",
      image: "/products/safety-gear.png",
      description: "อุปกรณ์เครื่องใช้ภายในโรงงานอุตสาหกรรม",
      specs: ["หน้ากาก & แว่นตานิรภัย", "ถุงมือ & ถุงนิ้ว", "อุปกรณ์ป้องกัน PPE"]
    },
    {
      id: 7,
      category: "supplies",
      title: "Cleaning Supplies",
      brand: "GAIN SERVICE",
      image: "/products/cleaning.png",
      description: "อุปกรณ์และวัสดุสิ้นเปลืองสำหรับการทำความสะอาด",
      specs: ["น้ำยาทำความสะอาด", "ไม้กวาด & อุปกรณ์ขัดพื้น", "วัสดุสิ้นเปลืองโรงงาน"]
    },
    {
      id: 8,
      category: "supplies",
      title: "Hand Tools & Measuring Tools",
      brand: "GAIN SERVICE",
      image: "/products/hand-tools.png",
      description: "อุปกรณ์เครื่องมือช่างและเครื่องมือวัดความแม่นยำ",
      specs: ["ไขควง, ค้อน, คีม", "เครื่องมือวัดละเอียด", "Accessories ครบชุด"]
    },
    {
      id: 9,
      category: "supplies",
      title: "Warehouse Supplies",
      brand: "GAIN SERVICE",
      image: "/products/warehouse.png",
      description: "อุปกรณ์เครื่องมือสำหรับโกดังและคลังสินค้า",
      specs: ["พาเลท (Pallets)", "กล่องพลาสติกอเนกประสงค์", "อุปกรณ์จัดเก็บคลังสินค้า"]
    },
    {
      id: 10,
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

        <div className="mt-20 p-8 md:p-12 bg-slate-900 rounded-[2rem] text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2a9c94]/10 rounded-full -mr-32 -mt-32 blur-3xl transition-all group-hover:bg-[#2a9c94]/20" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
            ต้องการข้อมูลสินค้าฉบับเต็ม?
          </h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto relative z-10">
            รวมรายการสินค้าอะไหล่ CNC, น้ำมันอุตสาหกรรม และอุปกรณ์สำนักงานโรงงานทั้งหมดในที่เดียว
          </p>
          <a 
            href="/Gain-service-catalouge.pdf" 
            target="_blank"
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-[#f2e900] transition-all hover:scale-105 active:scale-95 shadow-xl relative z-10"
          >
            <svg className="w-5 h-5 text-[#2a9c94]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Full Catalog (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}