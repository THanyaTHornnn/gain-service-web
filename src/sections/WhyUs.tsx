export default function WhyUs() {
  const highlights = [
    { text: "ประสบการณ์มากกว่า 15 ปี", sub: "ทีมช่างผู้ชำนาญการ" },
    { text: "รับประกันงานซ่อม 1 ปี", sub: "มั่นใจในคุณภาพทุกชิ้นงาน" },
    { text: "มีอะไหล่ให้ใช้ระหว่างซ่อม", sub: "ลดการหยุดชะงักของโรงงาน" },
    { text: "ผ่านการทดสอบ 100%", sub: "Test finish before delivery" }
  ];

  return (
    <section className="py-20 px-6 bg-[#f8fafc]">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">ทำไมต้องเลือก Gain Service?</h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {highlights.map((item, i) => (
          <div key={i} className="text-center p-6 rounded-lg bg-white shadow-sm border border-slate-100">
            <div className="text-[#2a9c94] font-bold text-lg mb-1">✔ {item.text}</div>
            <div className="text-slate-500 text-sm">{item.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}