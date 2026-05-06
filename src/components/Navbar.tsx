import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu
  const [isProductOpen, setIsProductOpen] = useState(false); // Product Dropdown
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeDetail] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["home", "services", "products", "contact", "custom-order", "aboutus", "reference"];
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

  const getNavLinkClass = (id: string) => {
    const isActive = activeSection === id;
    if (isScrolled) {
      return isActive 
        ? "text-[#2a9c94] font-bold border-b-2 border-[#2a9c94]" 
        : "text-slate-600 hover:text-[#2a9c94]";
    }
    return isActive 
      ? "text-lg font-bold border-b-2 border-[#f2e900]" 
      : "text-lg hover:text-white";
  };

  // รายการสินค้าใน Dropdown
  const productItems = [
  { name: "CNC Spare Parts (BAFI)", href: "#products-cnc" },
  { name: "Industrial Oil (MORIDOX)", href: "#products-oil" },
  { name: "Factory Supplies", href: "#products-supplies" },
  { name: "Download Catalog (PDF)", href: "/Gain-service-catalouge.pdf", highlight: true },
];
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      activeDetail ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"
    } ${ (isScrolled || isOpen) ? "bg-white/95 shadow-md py-2" : "bg-transparent py-6" }`}>
      
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" className={`transition-all duration-500 ${isScrolled ? "h-10" : "h-14"}`} alt="Logo" />
          <h1 className={`font-bold text-[#2a9c94] ${isScrolled ? "text-lg" : "text-2xl"}`}>GAIN SERVICE</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-700">
          <a href="#home" className={`transition-all pb-1 ${getNavLinkClass("home")}`}>Home</a>
          <a href="#services" className={`transition-all pb-1 ${getNavLinkClass("services")}`}>Services</a>
          
          {/* Dropdown Products */}
          <div 
            className="relative group py-2"
            onMouseEnter={() => setIsProductOpen(true)}
            onMouseLeave={() => setIsProductOpen(false)}
          >
            <button className={`flex items-center gap-1 transition-all pb-1 ${getNavLinkClass("products")}`}>
              Products 
              <svg className={`w-4 h-4 transition-transform ${isProductOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Box */}
            {isProductOpen && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-3 border border-slate-100 animate-fadeInUp">
                {productItems.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href}
                    className={`block px-5 py-2.5 text-sm transition-colors ${
                      item.highlight ? "text-[#2a9c94] font-bold border-t mt-2" : "text-slate-600 hover:bg-slate-50 hover:text-[#2a9c94]"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#custom-order" className={`transition-all pb-1 ${getNavLinkClass("custom-order")}`}>Custom Order</a>
          <a href="#aboutus" className={`transition-all pb-1 ${getNavLinkClass("aboutus")}`}>About Us</a>
          <a href="#reference" className={`transition-all pb-1 ${getNavLinkClass("reference")}`}>Reference</a>
          <a href="#contact" className="bg-[#2a9c94] text-white px-5 py-2 rounded-full hover:shadow-lg active:scale-95 transition-all">
            Contact Us
          </a>
        </div>
        
        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 ${(isScrolled || isOpen) ? "text-slate-700" : "text-white"}`}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`absolute top-full left-0 w-full border-t border-slate-100 flex flex-col items-center gap-4 py-8 md:hidden 
          ${(isScrolled || isOpen) ? "bg-white text-slate-700 shadow-xl" : "bg-slate-900 text-white"}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          
          {/* Mobile Products (Simplified) */}
          <div className="flex flex-col items-center gap-2 bg-slate-50 w-full py-4">
             <span className="font-bold text-[#2a9c94]">Our Products</span>
             {productItems.map((item, idx) => (
               <a key={idx} href={item.href} className="text-sm py-1" onClick={() => setIsOpen(false)}>{item.name}</a>
             ))}
          </div>

          <a href="#custom-order" onClick={() => setIsOpen(false)}>Custom Order</a>
          <a href="#aboutus" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#reference" onClick={() => setIsOpen(false)}>Reference</a>
          <a href="#contact" className="bg-[#2a9c94] text-white px-10 py-3 rounded-full" onClick={() => setIsOpen(false)}>Contact Us</a>
        </div>
      )}
    </nav>
  );
}