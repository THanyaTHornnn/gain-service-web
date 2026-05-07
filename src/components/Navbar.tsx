import { useState, useEffect } from "react";
import { useLang } from "../context/Langcontext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeDetail] = useState<any>(null);
  const { lang, setLang, t } = useLang();

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
    if (isScrolled || isOpen) {
      return isActive
        ? "text-[#2a9c94] font-bold border-b-2 border-[#2a9c94]"
        : "text-slate-700 hover:text-[#2a9c94]";
    }
    return isActive
      ? "font-bold border-b-2 border-[#f2e900] text-lx"
      : "text-lx hover:text-[#f2e900]";
  };

  const productItems = [
    { name: t.nav.cncParts, href: "#products-cnc" },
    { name: t.nav.industrialOil, href: "#products-oil" },
    { name: t.nav.catalog, href: "/Gain-service-catalouge.pdf", highlight: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        activeDetail ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"
      } ${(isScrolled || isOpen)
          ? "bg-white/96 shadow-lg shadow-slate-200/60 backdrop-blur-md py-2"
          : "bg-transparent py-5"
      }`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <img
            src="/logo.png"
            className={`transition-all duration-500 object-contain flex-shrink-0 ${isScrolled ? "h-9 w-9" : "h-11 w-11"}`}
            alt="Logo"
          />
          <div className="flex flex-col justify-center leading-none">
            <span
              className={`font-black text-[#2a9c94] tracking-tight transition-all duration-500 leading-tight ${
                isScrolled ? "text-base" : "text-[1.1rem]"
              }`}
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              GAIN SERVICE
            </span>
            <span
              className={`text-[8px] font-semibold tracking-[0.18em] uppercase transition-all duration-500 leading-tight mt-0.5 ${
                isScrolled ? "text-lx" : "text-slate-400"
              }`}
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              The Best of the Job
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 font-semibold text-sm">
          <a href="#home" className={`transition-all pb-1 ${getNavLinkClass("home")}`}>
            {t.nav.home}
          </a>
          <a href="#services" className={`transition-all pb-1 ${getNavLinkClass("services")}`}>
            {t.nav.services}
          </a>

          {/* Dropdown Products */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setIsProductOpen(true)}
            onMouseLeave={() => setIsProductOpen(false)}
          >
            {/* คลิกที่ชื่อ Products → scroll ไป #products */}
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`flex items-center gap-1 transition-all pb-1 ${getNavLinkClass("products")}`}
            >
              {t.nav.products}
              <svg
                className={`w-3.5 h-3.5 transition-transform ${isProductOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {isProductOpen && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl py-3 border border-slate-100 animate-fadeInUp overflow-hidden">
                <div className="px-4 pb-2 pt-1">
                  <p className="text-[10px] font-black text-[#2a9c94] uppercase tracking-widest">Our Products</p>
                </div>
                {productItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className={`block px-5 py-2.5 text-sm transition-colors ${
                      item.highlight
                        ? "text-[#2a9c94] font-bold border-t border-slate-100 mt-1 hover:bg-[#2a9c94] hover:text-white"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[#2a9c94]"
                    }`}
                    style={{ fontFamily: "'Sarabun', sans-serif" }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#custom-order" className={`transition-all pb-1 ${getNavLinkClass("custom-order")}`}>
            {t.nav.customOrder}
          </a>
          <a href="#aboutus" className={`transition-all pb-1 ${getNavLinkClass("aboutus")}`}>
            {t.nav.aboutUs}
          </a>
          <a href="#reference" className={`transition-all pb-1 ${getNavLinkClass("reference")}`}>
            {t.nav.reference}
          </a>

          {/* Language Toggle */}
          <div className="lang-toggle">
            <button
              className={`lang-btn ${lang === "th" ? "active" : ""}`}
              onClick={() => setLang("th")}
            >
              TH
            </button>
            <button
              className={`lang-btn ${lang === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="bg-[#2a9c94] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#1e7a74] hover:shadow-lg hover:shadow-[#2a9c94]/30 active:scale-95 transition-all"
          >
            {t.nav.contact}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile lang toggle */}
          <div className="lang-toggle">
            <button className={`lang-btn ${lang === "th" ? "active" : ""}`} onClick={() => setLang("th")}>TH</button>
            <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 ${(isScrolled || isOpen) ? "text-slate-700" : "text-white"}`}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-full border-t border-slate-100 flex flex-col items-center gap-4 py-8 md:hidden bg-white text-slate-700 shadow-xl"
          style={{ fontFamily: "'Sarabun', sans-serif" }}
        >
          <a href="#home" className="font-semibold" onClick={() => setIsOpen(false)}>{t.nav.home}</a>
          <a href="#services" className="font-semibold" onClick={() => setIsOpen(false)}>{t.nav.services}</a>

          <div className="flex flex-col items-center gap-2 bg-slate-50 w-full py-4">
            <span className="font-black text-[#2a9c94] text-sm uppercase tracking-widest" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t.nav.products}
            </span>
            {productItems.map((item, idx) => (
              <a key={idx} href={item.href} className="text-sm py-1 text-slate-600" onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            ))}
          </div>

          <a href="#custom-order" className="font-semibold" onClick={() => setIsOpen(false)}>{t.nav.customOrder}</a>
          <a href="#aboutus" className="font-semibold" onClick={() => setIsOpen(false)}>{t.nav.aboutUs}</a>
          <a href="#reference" className="font-semibold" onClick={() => setIsOpen(false)}>{t.nav.reference}</a>
          <a
            href="#contact"
            className="bg-[#2a9c94] text-white px-10 py-3 rounded-full font-bold"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.contact}
          </a>
        </div>
      )}
    </nav>
  );
}