import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // สถานะหน้าปัจจุบัน

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
      ? "text-[#f2e900] font-bold border-b-2 border-[#f2e900]" // ตอนอยู่บนสุดแล้ว Active (สีเหลืองทองตามโลโก้)
      : "text-white/80 hover:text-white"; // ตอนอยู่บนสุดแล้วไม่ได้ Active
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      (isScrolled || isOpen) ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-6"
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
          <a href="#contact" className="bg-[#2a9c94] text-white px-5 py-2 rounded-full hover:shadow-lg active:scale-95 transition-all">
            Contact Us
          </a>
        </div>
        
        {/* ... (Mobile Button เหมือนเดิม) ... */}
      </div>
    </nav>
  );
}