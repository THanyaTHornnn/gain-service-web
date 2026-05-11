import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export const translations = {
  th: {
    nav: {
      home: "หน้าแรก", services: "บริการ", products: "สินค้า",
      customOrder: "สั่งทำพิเศษ", aboutUs: "เกี่ยวกับเรา",
      reference: "ลูกค้าอ้างอิง", contact: "ติดต่อเรา",
      catalog: "ดาวน์โหลดแคตตาล็อก (PDF)",
      cncParts: "ชิ้นส่วน CNC (BAFI)", industrialOil: "น้ำมันอุตสาหกรรม (MORIDOX)",
    },
    hero: {
      badge: "ผู้เชี่ยวชาญระบบอุตสาหกรรม",
      title1: "THE BEST", title2: "OF THE JOB",
      desc: "ผู้นำด้านการซ่อมคอนโทรลเครื่องจักร CNC และจำหน่ายอะไหล่อุตสาหกรรม ด้วยประสบการณ์ทีมช่างกว่า 15 ปี พร้อมให้บริการด้วยความรวดเร็วและแม่นยำ",
      cta1: "ปรึกษาช่างเทคนิค", cta2: "ดูบริการทั้งหมด",
      years: " ปี", warranty: "ปีรับประกัน", experience: "ประสบการณ์",
    },
    services: {
      label: "ความเชี่ยวชาญของเรา", title: "บริการครบวงจร",
      repair: {
        title: "ซ่อมคอนโทรลเครื่องจักร",
        desc: "ซ่อมแผงวงจร, บอร์ดคอนโทรล CNC และ Servo Drive ทุกรุ่น ทุกยี่ห้อ",
        fullDesc: "บริการรับซ่อมบอร์ดอิเล็กทรอนิกส์เครื่องจักร CNC โดยทีมช่างที่มีประสบการณ์กว่า 15 ปี ตรวจเช็คด้วยเครื่องมือทันสมัยผ่านการทดสอบ 100% ก่อนส่งมอบ",
      },
      spareparts: {
        title: "จำหน่ายอะไหล่เครื่องจักร",
        desc: "ตัวแทนจำหน่าย Collet Chuck, Guide Bush และอุปกรณ์สำหรับ Bar-Feeder",
        fullDesc: "ผู้นำเข้าและจำหน่ายอุปกรณ์ Tooling & Accessories สำหรับเครื่องกลึงอัตโนมัติ",
      },
      machine: {
        title: "เครื่องจักรมือสอง",
        desc: "จัดหาและขายเครื่องจักรมือสอง พร้อมติดตั้งและการันตีคุณภาพ",
        fullDesc: "บริการจัดหาเครื่องจักร CNC มือสองสภาพดี พร้อมบริการ Overhaul ปรับสภาพ และโปรแกรม Training",
      },
      warranty: "รับประกันงานซ่อม 1 ปี",
      warrantySub: "เรามุ่งมั่นสู่ความเป็นเลิศในงานบริการ จัดเตรียมสินค้าที่ผ่านการทดสอบด้วยเครื่องมือทันสมัยเพื่อส่งมอบสิ่งที่ดีที่สุด",
      viewDetails: "ดูรายละเอียด", callNow: "โทรด่วน", getQuote: "ติดต่อรับใบเสนอราคา", supportedBrands: "แบรนด์ที่รองรับ",
      repairFeatures: [
        "รับประกันงานซ่อม 1 ปี",
        "มีอะไหล่ให้ใช้งานชั่วคราวระหว่างรอซ่อม (On-loan)",
        "งานทุกชิ้นผ่านการทดสอบ (Test) ก่อนส่งมอบ",
        "ราคาเหมาะสม ยุติธรรม (Price-Performance)",
      ],
      sparepartsFeatures: [
        "นำเข้า Collet Chuck และ Guide Bush คุณภาพสูง",
        "รองรับเครื่อง Cincom, Tsugami, Star, Miyano",
        "รับสั่งทำ Special Collet ตามแบบการใช้งาน",
        "มีสต็อกพร้อมส่งเพื่อความรวดเร็วในการผลิต",
      ],
      machineFeatures: [
        "ตรวจเช็คระบบไฟและกลไก (Preventive Maintenance)",
        "บริการ Overhaul Machine ปรับสภาพเครื่องจักร",
        "หลักสูตรสอนการใช้งาน (Training Program)",
        "มีทีมช่างบริการติดตั้งและดูแลหลังการขาย",
      ],
    },
    products: {
      label: "สินค้าคุณภาพ", title1: "สินค้า", title2: "& โซลูชัน",
      all: "ทั้งหมด", cnc: "ชิ้นส่วน CNC", oil: "น้ำมันอุตสาหกรรม",
      quote: "ขอใบเสนอราคา (Quotation)", interested: "สนใจสินค้า",
      quoteBtn: "ขอใบเสนอราคา (Quotation)",
      items: [
        {
          title: "Collet Chuck & Guide Bush",
          description: "อุปกรณ์จับยึดความแม่นยำสูง รองรับเครื่อง Cincom, Tsugami, Star, Miyano",
          specs: ["High Quality Carbide & HSS", "Smooth & Grooved bore", "รองรับ Special Customize"],
        },
        {
          title: "ER Collet",
          description: "หัวจับดอกเครื่องมือตัดมาตรฐานสูง นิยมสูงสุดในงาน CNC",
          specs: ["จับชิ้นงานได้แน่นหนา", "เปลี่ยนเครื่องมือได้รวดเร็ว", "มีช่วงขนาดการจับที่ยืดหยุ่น"],
        },
        {
          title: "Fan Motor & Spare Parts",
          description: "พัดลมระบายอากาศและอะไหล่สำหรับตู้คอนโทรลเครื่องจักร CNC",
          specs: ["High Speed Ventilation", "Long Life Bearing", "Fanuc & Mitsubishi Compatible"],
        },
        {
          title: "Drill Sleeve",
          description: "โซลูชันสำหรับการเจาะและต๊าปเกลียวประสิทธิภาพสูง",
          specs: ["Ultra Precision Performance", "Maximum Productivity", "High Speed Steel & Carbide"],
        },
        {
          title: "Bearing",
          description: "ลูกปืนคุณภาพสูงสำหรับเครื่องจักร ลดแรงเสียดทาน ยืดอายุการใช้งาน",
          specs: ["ลื่นไหลไม่กินแรง", "ช่วยลดการสึกหรอ", "ยืดอายุการใช้งาน"],
        },
        {
          title: "LCD Display",
          description: "จอภาพแบบแบนคุณภาพสูงสำหรับเครื่องจักร CNC",
          specs: ["ประหยัดพลังงาน", "ความคมชัดสูง", "น้ำหนักเบา"],
        },
        {
          title: "Battery Lithium",
          description: "แบตเตอรี่ลิเธียมประสิทธิภาพสูงสำหรับระบบสำรองข้อมูล CNC",
          specs: ["อายุการใช้งานยาวนาน", "ความหนาแน่นพลังงานสูง", "น้ำหนักเบา"],
        },
        {
          title: "Fanuc AC Servo Motor",
          description: "มอเตอร์เซอร์โวคุณภาพสูงสำหรับเครื่องจักร CNC และระบบอัตโนมัติ",
          specs: ["ประหยัดพลังงาน", "ระบบ HRV เพิ่มประสิทธิภาพ", "ทนทาน บำรุงรักษาง่าย"],
        },
        {
          title: "MORIDOX Industrial Oil",
          description: "น้ำมันหล่อลื่นและน้ำมันตัดกลึงประสิทธิภาพสูง สูตร Green Global Product",
          specs: ["Cutting Oil สำหรับ Stainless & Aluminum", "Hydraulic & Gear Oil", "Grease คุณภาพสูง"],
        },
      ],
    },
    customOrder: {
      label: "ผลิตพิเศษเฉพาะคุณ", title1: "สั่งจัดทำพิเศษ", title2: "Customized Tooling",
      desc: "บริการออกแบบและผลิต Collet Chuck และชิ้นส่วนสั่งทำพิเศษตามแบบ Drawing หรือตัวอย่างชิ้นงานของลูกค้า โดยทีมวิศวกรผู้เชี่ยวชาญ",
      sendDrawing: "ส่งแบบ Drawing ประเมินราคา", catalog: "Gain service catalouge.pdf",
      precisionLabel: "ผลิตตามแบบมาตรฐานสากล",
      features: [
        { t: "Special Shapes", d: "Square, Hexagon, Triangle" },
        { t: "Custom Bore", d: "Smooth / Grooved Bore" },
        { t: "Materials", d: "High Quality Carbide & HSS" },
        { t: "Precision", d: "ผลิตตามแบบมาตรฐานสากล" },
      ],
    },
    about: {
      label: "พาร์ทเนอร์วิศวกรรมแม่นยำ", title1: "มุ่งมั่นสู่ความเป็นเลิศ", title2: "The Best of the Job",
      mission: "Our Mission", vision: "Our Vision", yearsExp: "ปี ความเชี่ยวชาญ",
      experience: "ประสบการณ์", capital: "ทุนจดทะเบียน", warranty: "การรับประกัน",
      body1: "บริษัท เกน เซอร์วิส ได้จดทะเบียนจัดตั้งเมื่อ 30 กันยายน พ.ศ.2565 ด้วยทุนจดทะเบียน 1 ล้านบาท โดยมีวัตถุประสงค์เพื่อให้บริการซ่อมคอนโทรลเครื่องจักร จำหน่ายอะไหล่เครื่องจักร และชิ้นส่วนอิเล็คทรอนิกส์ ในอุตสาหกรรมผลิตชิ้นส่วนรถยนต์ อุตสาหกรรมอิเล็คทรอนิกส์ และโรงงานอุตสาหกรรมทั่วไป ด้วยประสบการณ์ดำเนินงานกว่า 15 ปี",
      body2: "เรายังเป็นตัวแทนจำหน่ายอุปกรณ์เครื่องจักรแบรนด์ชั้นนำอย่าง SQ Singapore และมีบริการจัดหาเครื่องจักรมือสองสภาพดี พร้อมทีมวิศวกรดูแลติดตั้งและสอนการใช้งานอย่างครบวงจร",
      missionItems: [
        "มีอะไหล่ให้ลูกค้าใช้งานชั่วคราวระหว่างรอซ่อม",
        "รับประกันสินค้างานซ่อมนานถึง 1 ปี",
        "งานทุกชิ้นผ่านการทดสอบก่อนส่งมอบ",
        "ราคาเหมาะสม",
      ],
      visionText: "The best of the Job — การมุ่งมั่นสู่ความเป็นเลิศในด้านงานบริการ บริษัทมีการจัดเตรียมสินค้าผ่านการทดสอบด้วยเครื่องมือที่ทันสมัย ตลอดจนส่งมอบสินค้าที่ดีที่สุดให้กับลูกค้า",
      companyName: "บริษัท เกน เซอร์วิส",
    },
    whyUs: {
      label: "ทำไมต้องเลือกเรา", title1: "ทำไมต้องเลือก", title2: "Gain Service?",
      sub: "เราไม่ใช่แค่ผู้ซ่อม แต่เราคือพาร์ทเนอร์ที่จะช่วยให้โรงงานของคุณทำงานได้อย่างไม่สะดุด",
      h1: "ประสบการณ์มากกว่า 15 ปี", s1: "ทีมบริหารและช่างเทคนิคผู้เชี่ยวชาญด้านเครื่องจักร CNC โดยตรง",
      h2: "รับประกันงานซ่อมนาน 1 ปี", s2: "มั่นใจด้วยการรับประกันคุณภาพ พร้อมบริการหลังการขายที่รวดเร็ว",
      h3: "มีอะไหล่ให้ใช้ระหว่างซ่อม", s3: "ลด Downtime ของสายการผลิตด้วยบริการ Support onloan part",
      h4: "ผ่านการทดสอบ 100%", s4: "มีเครื่อง Test ทดลองการทำงานจริงก่อนส่งมอบงานถึงมือลูกค้า",
      partnerTitle: "ทำไมต้องเลือก",
      partnerSub: "เราไม่ใช่แค่ผู้ซ่อม แต่เราคือพาร์ทเนอร์ที่จะช่วยให้โรงงานของคุณทำงานได้อย่างไม่สะดุด",
    },
    contact: {
      label: "ติดต่อเรา", title: "ติดต่อ", info: "ข้อมูลการติดต่อ",
      callUs: "โทรหาเรา", email: "อีเมล", line: "ไลน์ออฟฟิเชียล",
      hours: "เวลาทำการ", hoursVal: "จันทร์ - เสาร์: 08:30 - 17:30 น.", closed: "หยุดทุกวันอาทิตย์",
      hq: "ที่ตั้งสำนักงานใหญ่", address: "29/55 ถนนประเสริฐมนูกิจ แขวงนวลจันทร์ เขตบึงกุ่ม กรุงเทพฯ 10230",
      callBtn: "โทรหาเราทันที", lineBtn: "ติดต่อผ่าน LINE",
      interestedIn: "กรุณาแจ้งเจ้าหน้าที่ว่าสนใจ", forQuote: "เพื่อรับใบเสนอราคา",
      interestedProduct: "สนใจสินค้า",
      getInTouch: "ติดต่อเรา",
    },
    machine: {
      label: "บริการและอะไหล่ที่ได้รับอนุญาต",
      title1: "เครื่องจักร", title2: "Reference", title3: "Service",
      sub: "เชี่ยวชาญการซ่อมบำรุงและจัดหาอะไหล่สำหรับเครื่องจักร CNC แบรนด์ชั้นนำระดับโลก",
    },
    reference: {
      label: "บริการและอะไหล่ที่ได้รับอนุญาต",
      title: "Machines Reference Service",
      title1: "Machines", title2: "Reference", title3: "Service",
      sub: "เชี่ยวชาญการซ่อมบำรุงและจัดหาอะไหล่สำหรับเครื่องจักร CNC แบรนด์ชั้นนำระดับโลก",
    },
  },

  en: {
    nav: {
      home: "Home", services: "Services", products: "Products",
      customOrder: "Custom Order", aboutUs: "About Us",
      reference: "Reference", contact: "Contact Us",
      catalog: "Download Catalog (PDF)",
      cncParts: "CNC Spare Parts (BAFI)", industrialOil: "Industrial Oil (MORIDOX)",
    },
    hero: {
      badge: "Industrial Specialist",
      title1: "THE BEST", title2: "OF THE JOB",
      desc: "Leading CNC machine control repair and industrial spare parts supplier with over 15 years of team expertise — fast, precise, and reliable.",
      cta1: "Consult a Technician", cta2: "View All Services",
      years: " Years", warranty: "Year Warranty", experience: "Experience",
    },
    services: {
      label: "Our Expertise", title: "Comprehensive Solutions",
      repair: {
        title: "CNC Control Repair",
        desc: "Repair circuit boards, CNC control boards, and Servo Drives of all models and brands.",
        fullDesc: "Electronic board repair service for CNC machines by a team with over 15 years of experience. Inspected with modern tools and 100% tested before delivery.",
      },
      spareparts: {
        title: "Spare Parts Distribution",
        desc: "Authorized distributor of Collet Chuck, Guide Bush, and Bar-Feeder accessories.",
        fullDesc: "Importer and distributor of Tooling & Accessories for automatic lathes, including all types of turning materials.",
      },
      machine: {
        title: "Used Machinery",
        desc: "Source and sell certified used machines with installation and quality guarantee.",
        fullDesc: "Sourcing quality used CNC machines with Overhaul service, reconditioning, and Training programs.",
      },
      warranty: "1-Year Repair Warranty",
      warrantySub: "We strive for excellence in service. All products are tested with modern tools to deliver the best to our customers.",
      viewDetails: "View Full Details", callNow: "Call Now", getQuote: "Request a Quote", supportedBrands: "Supported Major Brands",
      repairFeatures: [
        "1-Year Repair Warranty",
        "Loaner parts available during repair (On-loan)",
        "Every job is tested before delivery",
        "Fair and competitive pricing (Price-Performance)",
      ],
      sparepartsFeatures: [
        "Import high-quality Collet Chuck and Guide Bush",
        "Compatible with Cincom, Tsugami, Star, Miyano machines",
        "Custom Special Collet orders per specification",
        "In-stock inventory for fast production turnaround",
      ],
      machineFeatures: [
        "Electrical and mechanical inspection (Preventive Maintenance)",
        "Machine Overhaul and reconditioning service",
        "Operator training programs",
        "Installation team and after-sales support",
      ],
    },
    products: {
      label: "Premium Inventory", title1: "Quality", title2: "Products & Solutions",
      all: "ALL", cnc: "CNC SPARE PARTS", oil: "INDUSTRIAL OIL",
      quote: "Request Quotation", interested: "Interested in",
      quoteBtn: "Request Quotation",
      items: [
        {
          title: "Collet Chuck & Guide Bush",
          description: "High-precision clamping tools, compatible with Cincom, Tsugami, Star, Miyano machines.",
          specs: ["High Quality Carbide & HSS", "Smooth & Grooved bore", "Special Customize available"],
        },
        {
          title: "ER Collet",
          description: "High-standard cutting tool holder, most popular in CNC machining.",
          specs: ["Secure workpiece grip", "Fast tool change", "Flexible size range"],
        },
        {
          title: "Fan Motor & Spare Parts",
          description: "Cooling fans and spare parts for CNC machine control cabinets.",
          specs: ["High Speed Ventilation", "Long Life Bearing", "Fanuc & Mitsubishi Compatible"],
        },
        {
          title: "Drill Sleeve",
          description: "High-performance drilling and tapping solutions.",
          specs: ["Ultra Precision Performance", "Maximum Productivity", "High Speed Steel & Carbide"],
        },
        {
          title: "Bearing",
          description: "High-quality bearings for machinery — reduces friction and extends service life.",
          specs: ["Low friction operation", "Reduced wear", "Extended service life"],
        },
        {
          title: "LCD Display",
          description: "High-quality flat panel displays for CNC machines.",
          specs: ["Energy saving", "High resolution", "Lightweight"],
        },
        {
          title: "Battery Lithium",
          description: "High-performance lithium batteries for CNC data backup systems.",
          specs: ["Long service life", "High energy density", "Lightweight"],
        },
        {
          title: "Fanuc AC Servo Motor",
          description: "High-quality servo motors for CNC machines and automation systems.",
          specs: ["Energy efficient", "HRV system for enhanced performance", "Durable and easy to maintain"],
        },
        {
          title: "MORIDOX Industrial Oil",
          description: "High-performance lubricants and cutting oils — Green Global Product formula.",
          specs: ["Cutting Oil for Stainless & Aluminum", "Hydraulic & Gear Oil", "High-quality Grease"],
        },
      ],
    },
    customOrder: {
      label: "Exclusive Manufacturing", title1: "Custom Made", title2: "Customized Tooling",
      desc: "Design and manufacturing service for Collet Chucks and custom parts per customer Drawing or sample workpiece, by expert engineers.",
      sendDrawing: "Submit Drawing for Estimate", catalog: "Gain Service Catalogue.pdf",
      precisionLabel: "Manufactured to international standards",
      features: [
        { t: "Special Shapes", d: "Square, Hexagon, Triangle" },
        { t: "Custom Bore", d: "Smooth / Grooved Bore" },
        { t: "Materials", d: "High Quality Carbide & HSS" },
        { t: "Precision", d: "Manufactured to international standards" },
      ],
    },
    about: {
      label: "Precision Engineering Partner", title1: "Committed to Excellence", title2: "The Best of the Job",
      mission: "Our Mission", vision: "Our Vision", yearsExp: "+ Years of Expertise",
      experience: "Experience", capital: "Registered Capital", warranty: "Warranty",
      body1: "Gain Service Co., Ltd. was registered on September 30, 2022 with a registered capital of 1 million baht, with the objective of providing CNC machine control repair services, machine spare parts distribution, and electronic components for the automotive parts, electronics, and general manufacturing industries, with over 15 years of operational experience.",
      body2: "We are also an authorized distributor of leading machinery equipment brand SQ Singapore, and provide sourcing of quality used machinery with a full team of engineers for installation and training.",
      missionItems: [
        "Loaner parts for customers while waiting for repair",
        "1-year warranty on repaired products",
        "Every job is tested before delivery",
        "Fair and reasonable pricing",
      ],
      visionText: "The best of the Job — committed to excellence in service. We prepare all products tested with modern equipment to deliver the very best to our customers.",
      companyName: "Gain Service Co., Ltd.",
    },
    whyUs: {
      label: "Why Partner With Us", title1: "Why Choose", title2: "Gain Service?",
      sub: "We're not just repairers — we're the partner that keeps your factory running without interruption.",
      h1: "15+ Years of Experience", s1: "Management team and technicians who specialize directly in CNC machinery.",
      h2: "1-Year Repair Warranty", s2: "Quality guaranteed with fast after-sales service.",
      h3: "Loaner Parts While Repairing", s3: "Reduce production line downtime with our on-loan part support service.",
      h4: "100% Tested", s4: "Real-world functional testing before delivery to customers.",
      partnerTitle: "Why Choose",
      partnerSub: "We're not just repairers — we're the partner that keeps your factory running without interruption.",
    },
    contact: {
      label: "Get In Touch", title: "Contact", info: "Contact Information",
      callUs: "Call Us", email: "Email Address", line: "Line Official",
      hours: "Business Hours", hoursVal: "Mon - Sat: 08:30 - 17:30", closed: "Closed on Sundays",
      hq: "Headquarters", address: "29/55 Prasertnuegit Rd., Nuan Chan, Bueng Kum, Bangkok 10230",
      callBtn: "Call Us Now", lineBtn: "Contact via LINE",
      interestedIn: "Please inform staff you are interested in", forQuote: "to receive a quotation",
      interestedProduct: "Interested in",
      getInTouch: "Get In Touch",
    },
    machine: {
      label: "Authorized Service & Spare Parts",
      title1: "Machines", title2: "Reference", title3: "Service",
      sub: "Specializing in maintenance and spare parts sourcing for world-leading CNC machine brands.",
    },
    reference: {
      label: "Authorized Service & Spare Parts",
      title: "Machines Reference Service",
      title1: "Machines", title2: "Reference", title3: "Service",
      sub: "Specializing in maintenance and spare parts sourcing for world-leading CNC machine brands.",
    },
  },
};

type Lang = "th" | "en";
interface LangContextType { lang: Lang; setLang: (l: Lang) => void; t: typeof translations["th"]; }

const LangContext = createContext<LangContextType>({ lang: "th", setLang: () => {}, t: translations.th });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("th");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() { return useContext(LangContext); }