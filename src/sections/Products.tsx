import { useState, useEffect, useRef } from "react";
import ProductCard from "../components/ProductCard";
import { useLang } from "../context/Langcontext";

export default function Products() {
  const [filter, setFilter] = useState("all");
  const [isControllerDropdownOpen, setIsControllerDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  // แบรนด์ย่อยของ CNC Controller
  const controllerBrands = [
    { id: "controller-fanuc", label: "FANUC" },
    { id: "controller-mitsubishi", label: "MITSUBISHI" },
    { id: "controller-sanyodenki", label: "SANYODENKI" },
    { id: "controller-okuma", label: "OKUMA" },
    { id: "controller-yaskawa", label: "YASKAWA" },
  ];

  // ข้อมูลสินค้าทั้งหมด 27 รายการ
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
    
    // กลุ่มสินค้าแบรนด์ FANUC
    { id: 10, category: "controller-fanuc", anchorId: "products-controller-fanuc", brand: "FANUC", image: "/products/FANUC-CONTROLLER.jpg" },
    { id: 11, category: "controller-fanuc", brand: "FANUC", image: "/products/FANUC-CNC-CONTROLLER.jpg" },
    { id: 12, category: "controller-fanuc", brand: "FANUC", image: "/products/FANUC-AXIS-CARD.jpg" },
    { id: 13, category: "controller-fanuc", brand: "FANUC", image: "/products/FANUC-ENCODER-CABLE.jpg" },
    { id: 14, category: "controller-fanuc", brand: "FANUC", image: "/products/FANUC-ENCODER-PULSE-CODER.jpg" },
    { id: 15, category: "controller-fanuc", brand: "FANUC", image: "/products/FANUC-POWER-SUPPLY.jpg" },
    { id: 16, category: "controller-fanuc", brand: "FANUC", image: "/products/FANUC-SERVO-DRIVE.jpg" },
    { id: 17, category: "controller-fanuc", brand: "FANUC", image: "/products/FANUC-SERVO-MOTOR.jpg" },
    { id: 18, category: "controller-fanuc", brand: "FANUC", image: "/products/FANUC-SPINDLE-SENSOR.jpg" },

    // กลุ่มสินค้าแบรนด์ MITSUBISHI
    { id: 19, category: "controller-mitsubishi", anchorId: "products-controller-mitsubishi", brand: "MITSUBISHI", image: "/products/mitsubishi.jpg" },
    { id: 20, category: "controller-mitsubishi", brand: "MITSUBISHI", image: "/products/MITSUBISHI-CABLEANDCONNECTOR.jpg" },
    { id: 21, category: "controller-mitsubishi", brand: "MITSUBISHI", image: "/products/MITSUBISHI-ENCODER.jpg" },
    { id: 22, category: "controller-mitsubishi", brand: "MITSUBISHI", image: "/products/MITSUBISHI-POWE-SUPPLY.jpg" },
    { id: 23, category: "controller-mitsubishi", brand: "MITSUBISHI", image: "/products/MITSUBISHI-SERVO-DRIVE.jpg" },
    { id: 24, category: "controller-mitsubishi", brand: "MITSUBISHI", image: "/products/MITSUBISHI-SERVO-MOTOR.jpg" },

    // กลุ่มแบรนด์อื่น ๆ
    { id: 25, category: "controller-sanyodenki", anchorId: "products-controller-sanyodenki", brand: "SANYODENKI", image: "/products/sanyodenki-controller.png" },
    { id: 26, category: "controller-okuma", anchorId: "products-controller-okuma", brand: "OKUMA", image: "/products/OKUMA-CNC-Controller.png" },
    { id: 27, category: "controller-yaskawa", anchorId: "products-controller-yaskawa", brand: "YASKAWA", image: "/products/YASKAWA-CNC-Controller.png" },
  ];

  // Safe Mapping ดึงข้อความแปล
  const products = productMeta.map((meta, i) => {
    const hasTranslation = t.products && t.products.items && t.products.items[i];
    return {
      ...meta,
      title: hasTranslation ? t.products.items[i].title : `${meta.brand} Spare Part`,
      description: hasTranslation ? t.products.items[i].description : "Industrial automation high-quality system and equipment components.",
      specs: hasTranslation ? t.products.items[i].specs : ["High Reliability", "Factory Tested"],
    };
  });

  // คลิกข้างนอกให้ปิดดรอปดาวน์
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsControllerDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ดักจับเปลี่ยนฟิลเตอร์ตามระบบ Anchor Hash ลิงก์
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes("products-cnc")) setFilter("cnc");
      else if (hash.includes("products-oil")) setFilter("oil");
      else if (hash.includes("products-controller-fanuc")) setFilter("controller-fanuc");
      else if (hash.includes("products-controller-mitsubishi")) setFilter("controller-mitsubishi");
      else if (hash.includes("products-controller-sanyodenki")) setFilter("controller-sanyodenki");
      else if (hash.includes("products-controller-okuma")) setFilter("controller-okuma");
      else if (hash.includes("products-controller-yaskawa")) setFilter("controller-yaskawa");
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const filterProducts = (product: typeof products[0]) => {
    if (filter === "all") return true;
    if (filter === "controller") return product.category.startsWith("controller-");
    return product.category === filter;
  };

  const isControllerActive = filter === "controller" || filter.startsWith("controller-");

  return (
    <section
      id="products"
      className="py-24 px-6 scroll-mt-20"
      style={{ fontFamily: "'Sarabun', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
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

          {/* แถบ Filter บาร์ - ปรับแก้คลาส overflow ตรงนี้เพื่อให้กล่อง Dropdown แสดงผลได้ ไม่โดนตัดขอบ */}
          <div className="flex items-center bg-white/80 backdrop-blur-sm shadow-sm p-1.5 rounded-2xl border border-slate-100 gap-1 max-w-full overflow-x-auto md:overflow-visible scrollbar-none">
            {/* ทั้งหมด */}
            <button
              onClick={() => {
                setFilter("all");
                setIsControllerDropdownOpen(false);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                filter === "all"
                  ? "bg-[#2a9c94] text-white shadow-md shadow-[#2a9c94]/20"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              }`}
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {t.products.all}
            </button>

            {/* ชิ้นส่วน CNC */}
            <button
              onClick={() => {
                setFilter("cnc");
                setIsControllerDropdownOpen(false);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                filter === "cnc"
                  ? "bg-[#2a9c94] text-white shadow-md shadow-[#2a9c94]/20"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              }`}
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {t.products.cnc}
            </button>

            {/* CNC Controller */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => {
                  if (!isControllerDropdownOpen) {
                    setFilter("controller");
                    setIsControllerDropdownOpen(true);
                  } else {
                    setIsControllerDropdownOpen(false);
                  }
                }}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isControllerActive
                    ? "bg-[#2a9c94] text-white shadow-md shadow-[#2a9c94]/20"
                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                }`}
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span>
                  {filter.startsWith("controller-")
                    ? `${t.products.controller} (${filter.split("-")[1].toUpperCase()})`
                    : t.products.controller}
                </span>
                <svg
                  className={`w-3 h-3 transition-transform ${isControllerDropdownOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* เมนูกล่องแบรนด์ย่อยลอยขึ้นข้างบน */}
              {isControllerDropdownOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-48 bg-white shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1),0_-8px_10px_-6px_rgba(0,0,0,0.1)] rounded-xl py-1.5 border border-slate-100 z-50">
                  <button
                    onClick={() => {
                      setFilter("controller");
                      setIsControllerDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-semibold block hover:bg-slate-50 ${
                      filter === "controller" ? "text-[#2a9c94]" : "text-slate-600"
                    }`}
                  >
                    แสดงแบรนด์ทั้งหมด
                  </button>
                  <div className="border-t border-slate-100 my-1" />
                  {controllerBrands.map((brand) => (
                    <button
                      key={brand.id}
                      onClick={() => {
                        setFilter(brand.id);
                        setIsControllerDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-medium block hover:bg-slate-50 transition-colors ${
                        filter === brand.id ? "text-[#2a9c94] font-bold" : "text-slate-600"
                      }`}
                    >
                      ├─ {brand.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* น้ำมันอุตสาหกรรม */}
            <button
              onClick={() => {
                setFilter("oil");
                setIsControllerDropdownOpen(false);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                filter === "oil"
                  ? "bg-[#2a9c94] text-white shadow-md shadow-[#2a9c94]/20"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              }`}
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {t.products.oil}
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products
            .filter(filterProducts)
            .map((product) => (
              <div key={product.id} id={product.anchorId} className="scroll-mt-32">
                <ProductCard {...product} quoteLabel={t.products.quoteBtn || "ขอใบเสนอราคา"} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}