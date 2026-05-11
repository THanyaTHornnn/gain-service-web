import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useLang } from "../context/Langcontext";

export default function Products() {
  const [filter, setFilter] = useState("all");
  const { t } = useLang();

  const categories = ["all", "cnc", "oil"];
  const categoryLabels: Record<string, string> = {
    all: t.products.all,
    cnc: t.products.cnc,
    oil: t.products.oil,
  };

  // Product definitions: metadata fixed, text from translations
  const productMeta = [
    { id: 1, category: "cnc", anchorId: "products-cnc", brand: "GAIN SERVICE", image: "/products/collet.png" },
    { id: 2, category: "cnc", brand: "GAIN SERVICE", image: "/products/er.png" },
    { id: 3, category: "cnc", brand: "GAIN SERVICE", image: "/products/fan-motor.png" },
    { id: 4, category: "cnc", brand: "GAIN SERVICE", image: "/products/drilling.png" },
    { id: 5, category: "cnc", brand: "GAIN SERVICE", image: "/products/bearing.png" },
    { id: 6, category: "cnc", brand: "GAIN SERVICE", image: "/products/lcd.png" },
    { id: 7, category: "cnc", brand: "GAIN SERVICE", image: "/products/battery.png" },
    { id: 8, category: "cnc", brand: "GAIN SERVICE", image: "/products/motor.png" },
    { id: 9, category: "oil", anchorId: "products-oil", brand: "GAIN SERVICE", image: "/products/oil.png" },
  ];

  const products = productMeta.map((meta, i) => ({
    ...meta,
    title: t.products.items[i].title,
    description: t.products.items[i].description,
    specs: t.products.items[i].specs,
  }));

  const tabs = categories.map((id) => ({ id, label: categoryLabels[id] }));

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
                <ProductCard {...product} quoteLabel={t.products.quoteBtn} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}