import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // สถานะหน้าปัจจุบัน
  const [activeDetail, setActiveDetail] = useState<any>(null); // สถานะสำหรับ Modal Detail ใน Services

  useEffect(() => {
    // 1. ตรวจจับการเลื่อนเพื่อเปลี่ยนสี Navbar (เหมือนเดิม)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // 2. ตรวจจับว่า Section ไหนกำลังแสดงอยู่หน้าจอ (Active Section)
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // ตรวจจับเมื่อ Section อยู่กลางจอ
      threshold: 0,
    };

    const observerCallback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // เลือก Section ที่ต้องการตรวจจับ (ต้องมี id ตรงกับ href ใน Navbar)
    const sections = ["home", "services", "products", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // ฟังก์ชันสร้าง Class สำหรับ Link
  const getNavLinkClass = (id: string) => {
    const isActive = activeSection === id;
    if (isScrolled) {
      return isActive 
        ? "text-[#2a9c94] font-bold border-b-2 border-[#2a9c94]" // ตอนเลื่อนลงแล้ว Active
        : "text-slate-600 hover:text-[#2a9c94]"; // ตอนเลื่อนลงแล้วไม่ได้ Active
    }
    return isActive 
      ? "text-lg font-bold border-b-2 border-[#f2e900]" // ตอนอยู่บนสุดแล้ว Active (สีเหลืองทองตามโลโก้)
      : "text-lg hover:text-white"; // ตอนอยู่บนสุดแล้วไม่ได้ Active
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
  activeDetail ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"
} ${
  (isScrolled || isOpen) ? "bg-white/95 shadow-md py-2" : "bg-transparent py-6"
}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" className={`transition-all duration-500 ${isScrolled ? "h-10" : "h-14"}`} alt="Logo" />
          <h1 className={`font-bold text-[#2a9c94] ${isScrolled ? "text-lg" : "text-2xl"}`}>GAIN SERVICE</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#home" className={`transition-all pb-1 ${getNavLinkClass("home")}`}>Home</a>
          <a href="#services" className={`transition-all pb-1 ${getNavLinkClass("services")}`}>Services</a>
          <a href="#products" className={`transition-all pb-1 ${getNavLinkClass("products")}`}>Products</a>
          <a href="#aboutus" className={`transition-all pb-1 ${getNavLinkClass("aboutus")}`}>About Us</a>
          <a href="#reference" className={`transition-all pb-1 ${getNavLinkClass("reference")}`}>Reference</a>
          <a href="#contact" className="bg-[#2a9c94] text-white px-5 py-2 rounded-full hover:shadow-lg active:scale-95 transition-all">
            Contact Us
          </a>
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 transition-colors ${(isScrolled || isOpen) ? "text-slate-700" : "text-lg"}`}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* เมนู Dropdown มือถือ (ใช้สีพื้นหลังเดียวกันกับ Navbar ด้านบน) */}
      {isOpen && (
        <div className={`absolute top-full left-0 w-full border-t border-slate-100 flex flex-col items-center gap-6 py-8 md:hidden animate-fadeIn
          ${(isScrolled || isOpen) ? "bg-white/95 backdrop-blur-md text-slate-700 shadow-xl" : "bg-transparent text-white"}`}>
          <a href="#" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#products" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#aboutus" className="text-lg font-medium" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#reference" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Reference</a>
          <a href="#contact" className="bg-[#2a9c94] text-white px-10 py-3 rounded-full shadow-lg" onClick={() => setIsOpen(false)}>Contact Us</a>
        </div>
      )}
     
    </nav>
  );
}