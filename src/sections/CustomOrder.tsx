import { useLang } from "../context/Langcontext";

export default function CustomOrder() {
   console.log("CustomOrder");
  const { t } = useLang();

  return (
    <section
      id="custom-order"
      className="py-24 text-white overflow-hidden relative dark-section"
      style={{ fontFamily: "'Sarabun', sans-serif" }}
    >
      {/* Engineering grid bg */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%23ffffff'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(42,156,148,0.12) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-left">
            <div className="accent-bar" />
            <span
              className="text-[#2a9c94] font-bold tracking-widest text-xs uppercase mb-4 block"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {t.customOrder.label}
            </span>
            <h2
              className="text-4xl md:text-5xl font-black mb-8 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-white">{t.customOrder.title1}</span> <br />
              <span className="text-[#f2e900]">{t.customOrder.title2}</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">{t.customOrder.desc}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {t.customOrder.features.map((item: { t: string; d: string }, i: number) => (
                <div key={i} className="flex gap-4 border-l-2 border-[#2a9c94] pl-4 text-left">
                  <div>
                    <h4
                      className="font-bold text-white mb-1"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {item.t}
                    </h4>
                    <p className="text-slate-500 text-xs">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="#contact"
                className="bg-[#2a9c94] text-white px-8 py-5 rounded-2xl font-black hover:bg-[#1e7c76] transition-all flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1 active:scale-95"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                {t.customOrder.sendDrawing}
              </a>

              <a
                href="/Gain-service-catalouge.pdf"
                download="Gain-Service-Catalogue.pdf"
                target="_blank"
                className="relative border-2 border-white/30 text-white px-8 py-5 rounded-2xl font-black hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-3 hover:border-white active:scale-95"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{t.customOrder.catalog}</span>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f2e900] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f2e900]" />
                </span>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative p-4 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-sm shadow-2xl">
              <img
                src="/custom-drawing.png"
                alt="Technical Drawing"
                className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <img src="/logo.png" alt="Gain Service" className="absolute bottom-10 right-10 h-8 opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}