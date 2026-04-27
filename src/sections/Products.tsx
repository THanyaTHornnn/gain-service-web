import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [filter, setFilter] = useState("all");

  const products = [
    {
      id: 1,
      category: "cnc",
      title: "Collet Chuck & Guide Bush",
      brand: "SQ Singapore",
      image: "/products/collet-main.png", // รูปจากหน้า 2-4 ของ BAFI
      description: "อุปกรณ์จับยึดความแม่นยำสูง รองรับเครื่อง Cincom, Tsugami, Star, Miyano",
      specs: ["High Quality Carbide & HSS", "Smooth & Grooved bore", "รองรับ Special Customize"]
    },
    {
      id: 2,
      category: "oil",
      title: "MORIDOX Industrial Oil",
      brand: "Moridox",
      image: "/products/oil-moridox.png", // รูปจากหน้า 9 ของ Profile
      description: "น้ำมันหล่อลื่นและน้ำมันตัดกลึงประสิทธิภาพสูง สูตร Green Global Product",
      specs: ["Cutting Oil สำหรับสเตนเลส/อลูมิเนียม", "Hydraulic & Gear Oil", "Grease คุณภาพสูง"]
    },
    {
      id: 3,
      category: "supplies",
      title: "Factory Supplies",
      brand: "General Supplies",
      image: "/products/factory-tools.png", // รูปจากหน้า 6 ของ Profile
      description: "วัสดุสิ้นเปลืองและอุปกรณ์ความปลอดภัยภายในโรงงานครบวงจร",
      specs: ["PPE (หน้ากาก, ถุงมือ, แว่นตา)", "Hand Tools & Measuring Tools", "Cleaning Supplies"]
    }
  ];

  return (
    <section id="products" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-[#2a9c94] font-bold tracking-widest text-sm uppercase mb-3">Premium Inventory</h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Quality <span className="text-[#2a9c94]">Products</span>
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex bg-slate-100 p-1.5 rounded-2xl">
            {["all", "cnc", "oil", "supplies"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  filter === tab ? "bg-white text-[#2a9c94] shadow-sm" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products
            .filter(p => filter === "all" || p.category === filter)
            .map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </div>

        
      
      </div>
    </section>
  );
}