import { HiOutlineUserGroup, HiOutlineCheckBadge, HiOutlineShieldCheck } from "react-icons/hi2";
import { useLang } from "../context/Langcontext";

export default function AboutUs() {
  const { t } = useLang();

  const stats = [
    { label: t.about.experience, value: "15+ Years", icon: <HiOutlineUserGroup /> },
    { label: t.about.capital, value: "5 Million", icon: <HiOutlineShieldCheck /> },
    { label: t.about.warranty, value: "1 Year", icon: <HiOutlineCheckBadge /> },
  ];

  return (
    <section
      id="aboutus"
      className="py-24 overflow-hidden"
      style={{ fontFamily: "'Sarabun', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#2a9c94]/10 rounded-full blur-3xl -z-10" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/80">
              <img src="/repair.png" alt="Gain Service Office" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[#f2e900] p-8 rounded-3xl shadow-xl hidden md:block">
              <p
                className="text-4xl font-black text-slate-900 leading-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                15+
              </p>
              <p
                className="text-sm font-bold text-slate-700 uppercase tracking-tighter"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {t.about.yearsExp}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 text-left">
            <div className="accent-bar" />
            <span
              className="text-[#2a9c94] font-bold tracking-widest text-xs uppercase mb-4 block"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {t.about.label}
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {t.about.title1} <br />
              <span className="text-[#2a9c94]">{t.about.title2}</span>
            </h2>

            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              <strong>{t.about.companyName}</strong> {t.about.body1}
            </p>

            <p className="text-slate-600 mb-10 leading-relaxed">
              {t.about.body2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 group hover:border-[#2a9c94] transition-all shadow-sm"
                >
                  <div className="text-[#2a9c94] text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div
                    className="text-xl font-black text-slate-900"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-bold text-slate-500 uppercase tracking-tighter"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 rounded-[2.5rem] dark-section text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:20px_20px] rounded-[2.5rem]" />
            <h4
              className="text-2xl font-black mb-6 relative z-10"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span className="text-[#2a9c94]">{t.about.mission}</span>
            </h4>
            <div className="space-y-3 relative z-10">
              {t.about.missionItems.map((item: string, i: number) => (
                <p key={i} className="text-white/80 flex gap-2">
                  <span className="text-[#2a9c94]">❖</span> {item}
                </p>
              ))}
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2a9c94] opacity-10 rounded-full -mr-10 -mt-10" />
          </div>

          <div className="p-10 rounded-[2.5rem] bg-[#2a9c94] text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:20px_20px] rounded-[2.5rem]" />
            <h4
              className="text-2xl font-black mb-6 relative z-10"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {t.about.vision}
            </h4>
            <p className="text-white/85 relative z-10 leading-relaxed">
              {t.about.visionText}
            </p>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}