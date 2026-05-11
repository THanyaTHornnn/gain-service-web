import { useState, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import { Cpu, Settings2, RefreshCcw, X, PhoneCall, FileText, CheckCircle2 } from "lucide-react";
import { useLang } from "../context/Langcontext";

export default function Services() {
  const [activeDetail, setActiveDetail] = useState<any>(null);
  const { t } = useLang();

  useEffect(() => {
    if (activeDetail) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("modal-open");
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.classList.remove("modal-open");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.classList.remove("modal-open");
    };
  }, [activeDetail]);

  const services = [
    {
      id: "repair",
      icon: <Cpu />,
      title: t.services.repair.title,
      badge: "Expertise",
      realImage: "/repair-room.png",
      description: t.services.repair.desc,
      fullDesc: t.services.repair.fullDesc,
      brands: [
        "/logobrand/fanuc.png",
        "/logobrand/mitsubishi.png",
        "/logobrand/yaskawa.png",
        "/logobrand/sanyo-denki.png",
        "/logobrand/okuma.png",
      ],
      features: t.services.repairFeatures,
    },
    {
      id: "spareparts",
      icon: <Settings2 />,
      title: t.services.spareparts.title,
      badge: "Quality",
      realImage: "/stock-room.png",
      description: t.services.spareparts.desc,
      fullDesc: t.services.spareparts.fullDesc,
      brands: [
        "/logobrand/citizen.png",
        "/logobrand/star.png",
        "/logobrand/tsugami.png",
        "/logobrand/miyano.png",
        "/logobrand/nomura.png",
      ],
      features: t.services.sparepartsFeatures,
    },
    {
      id: "machine",
      icon: <RefreshCcw />,
      title: t.services.machine.title,
      badge: "Certified",
      realImage: "/machine-lathe.png",
      description: t.services.machine.desc,
      fullDesc: t.services.machine.fullDesc,
      brands: [
        "/logobrand/brother.png",
        "/logobrand/citizen.png",
        "/logobrand/miyano.png",
        "/logobrand/mori.png",
        "/logobrand/tsugami.png",
      ],
      features: t.services.machineFeatures,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 px-6 overflow-hidden"
      style={{ fontFamily: "'Sarabun', sans-serif" }}
    >
      {/* Subtle section bg */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2a9c94_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="accent-bar mx-auto" />
          <h2
            className="text-[#2a9c94] font-bold tracking-[0.2em] text-xs uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {t.services.label}
          </h2>
          <p
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {t.services.title}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <ServiceCard key={item.id} {...item} index={idx} onClick={() => setActiveDetail(item)} />
          ))}
        </div>

        {/* MODAL */}
        {activeDetail && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              onClick={() => setActiveDetail(null)}
            />
            <div className="relative bg-white rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row w-full max-w-5xl max-h-[90vh] overflow-hidden border border-white/20 animate-scale-in">
              {/* Image */}
              <div className="w-full md:w-1/2 h-[250px] md:h-auto relative">
                <img src={activeDetail.realImage} className="w-full h-full object-cover" alt={activeDetail.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent md:hidden" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-lg">
                  <img src="/logo.png" className="h-6 object-contain" alt="Logo" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
                <button
                  onClick={() => setActiveDetail(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-[#2a9c94]/10 rounded-2xl text-[#2a9c94]">
                    {activeDetail.icon}
                  </div>
                  <h3
                    className="text-2xl font-black text-slate-900 leading-tight"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {activeDetail.title}
                  </h3>
                </div>

                <p className="text-slate-600 mb-8 leading-relaxed">{activeDetail.fullDesc}</p>

                {/* Brand logos — full color, no grayscale */}
                <div className="mb-8 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <p
                    className="text-[10px] font-black text-[#2a9c94] uppercase tracking-widest mb-4 text-center"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {t.services.supportedBrands}
                  </p>
                  <div className="grid grid-cols-3 gap-6 items-center">
                    {activeDetail.brands.map((logo: string, i: number) => (
                      <div key={i} className="flex items-center justify-center p-2 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300">
                        <img
                          src={logo}
                          className="h-7 md:h-9 w-auto object-contain transition-transform duration-300 hover:scale-110 mx-auto"
                          alt="brand"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 mb-10">
                  {activeDetail.features.map((feat: string, i: number) => (
                    <div key={i} className="flex gap-3 text-sm font-semibold text-slate-700">
                      <CheckCircle2 size={18} className="text-[#2a9c94] shrink-0 mt-0.5" />
                      {feat}
                    </div>
                  ))}
                </div>

                <div className="mt-auto grid grid-cols-2 gap-4">
                  <a
                    href="tel:021300709"
                    className="flex items-center justify-center gap-2 bg-[#2a9c94] text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-[#2a9c94]/30 hover:-translate-y-1 transition-all active:scale-95"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    <PhoneCall size={18} /> {t.services.callNow}
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setActiveDetail(null)}
                    className="flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    <FileText size={18} /> {t.services.getQuote}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom banner */}
        <div className="mt-24 p-10 md:p-14 rounded-[3rem] text-white relative overflow-hidden group dark-section">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#2a9c94]/20 rounded-full blur-[100px] transition-all group-hover:bg-[#2a9c94]/30" />
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:20px_20px] rounded-[3rem]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h4
                className="text-3xl font-black mb-4 text-white"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                The Best of the Job
              </h4>
              <p className="text-slate-400 text-lg max-w-xl">{t.services.warrantySub}</p>
            </div>
            <div
              className="shrink-0 bg-[#f2e900] text-slate-900 px-12 py-6 rounded-3xl font-black text-xl shadow-xl hover:scale-105 active:scale-95 transition-all"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {t.services.warranty}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}