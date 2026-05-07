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
      repair: { title: "ซ่อมคอนโทรลเครื่องจักร", desc: "ซ่อมแผงวงจร, บอร์ดคอนโทรล CNC และ Servo Drive ทุกรุ่น ทุกยี่ห้อ", fullDesc: "บริการรับซ่อมบอร์ดอิเล็กทรอนิกส์เครื่องจักร CNC โดยทีมช่างที่มีประสบการณ์กว่า 15 ปี ตรวจเช็คด้วยเครื่องมือทันสมัยผ่านการทดสอบ 100% ก่อนส่งมอบ" },
      spareparts: { title: "จำหน่ายอะไหล่เครื่องจักร", desc: "ตัวแทนจำหน่าย Collet Chuck, Guide Bush และอุปกรณ์สำหรับ Bar-Feeder", fullDesc: "ผู้นำเข้าและจำหน่ายอุปกรณ์ Tooling & Accessories สำหรับเครื่องกลึงอัตโนมัติ" },
      machine: { title: "เครื่องจักรมือสอง", desc: "จัดหาและขายเครื่องจักรมือสอง พร้อมติดตั้งและการันตีคุณภาพ", fullDesc: "บริการจัดหาเครื่องจักร CNC มือสองสภาพดี พร้อมบริการ Overhaul ปรับสภาพ และโปรแกรม Training" },
      warranty: "รับประกันงานซ่อม 1 ปี",
      warrantySub: "เรามุ่งมั่นสู่ความเป็นเลิศในงานบริการ จัดเตรียมสินค้าที่ผ่านการทดสอบด้วยเครื่องมือทันสมัยเพื่อส่งมอบสิ่งที่ดีที่สุด",
      viewDetails: "ดูรายละเอียด", callNow: "โทรด่วน", getQuote: "ติดต่อรับใบเสนอราคา", supportedBrands: "แบรนด์ที่รองรับ",
    },
    products: {
      label: "สินค้าคุณภาพ", title1: "สินค้า", title2: "& โซลูชัน",
      all: "ทั้งหมด", cnc: "ชิ้นส่วน CNC", oil: "น้ำมันอุตสาหกรรม",
      quote: "ขอใบเสนอราคา (Quotation)", interested: "สนใจสินค้า",
    },
    customOrder: {
      label: "ผลิตพิเศษเฉพาะคุณ", title1: "สั่งจัดทำพิเศษ", title2: "Customized Tooling",
      desc: "บริการออกแบบและผลิต Collet Chuck และชิ้นส่วนสั่งทำพิเศษตามแบบ Drawing หรือตัวอย่างชิ้นงานของลูกค้า โดยทีมวิศวกรผู้เชี่ยวชาญ",
      sendDrawing: "ส่งแบบ Drawing ประเมินราคา", catalog: "Gain service catalouge.pdf",
    },
    about: {
      label: "พาร์ทเนอร์วิศวกรรมแม่นยำ", title1: "มุ่งมั่นสู่ความเป็นเลิศ", title2: "The Best of the Job",
      mission: "Our Mission", vision: "Our Vision", yearsExp: "ปี ความเชี่ยวชาญ",
      experience: "ประสบการณ์", capital: "ทุนจดทะเบียน", warranty: "การรับประกัน",
    },
    whyUs: {
      label: "ทำไมต้องเลือกเรา", title1: "ทำไมต้องเลือก", title2: "Gain Service?",
      sub: "เราไม่ใช่แค่ผู้ซ่อม แต่เราคือพาร์ทเนอร์ที่จะช่วยให้โรงงานของคุณทำงานได้อย่างไม่สะดุด",
      h1: "ประสบการณ์มากกว่า 15 ปี", s1: "ทีมบริหารและช่างเทคนิคผู้เชี่ยวชาญด้านเครื่องจักร CNC โดยตรง",
      h2: "รับประกันงานซ่อมนาน 1 ปี", s2: "มั่นใจด้วยการรับประกันคุณภาพ พร้อมบริการหลังการขายที่รวดเร็ว",
      h3: "มีอะไหล่ให้ใช้ระหว่างซ่อม", s3: "ลด Downtime ของสายการผลิตด้วยบริการ Support onloan part",
      h4: "ผ่านการทดสอบ 100%", s4: "มีเครื่อง Test ทดลองการทำงานจริงก่อนส่งมอบงานถึงมือลูกค้า",
    },
    contact: {
      label: "ติดต่อเรา", title: "ติดต่อ", info: "ข้อมูลการติดต่อ",
      callUs: "โทรหาเรา", email: "อีเมล", line: "ไลน์ออฟฟิเชียล",
      hours: "เวลาทำการ", hoursVal: "จันทร์ - เสาร์: 08:30 - 17:30 น.", closed: "หยุดทุกวันอาทิตย์",
      hq: "ที่ตั้งสำนักงานใหญ่", address: "29/55 ถนนประเสริฐมนูกิจ แขวงนวลจันทร์ เขตบึงกุ่ม กรุงเทพฯ 10230",
      callBtn: "โทรหาเราทันที", lineBtn: "ติดต่อผ่าน LINE",
      interestedIn: "กรุณาแจ้งเจ้าหน้าที่ว่าสนใจ", forQuote: "เพื่อรับใบเสนอราคา",
    },
    machine: {
      label: "บริการและอะไหล่ที่ได้รับอนุญาต",
      title1: "เครื่องจักร", title2: "Reference", title3: "Service",
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
      years: "+ Years", warranty: "Year Warranty", experience: "Experience",
    },
    services: {
      label: "Our Expertise", title: "Comprehensive Solutions",
      repair: { title: "CNC Control Repair", desc: "Repair circuit boards, CNC control boards, and Servo Drives of all models and brands.", fullDesc: "Electronic board repair service for CNC machines by a team with over 15 years of experience. Inspected with modern tools and 100% tested before delivery." },
      spareparts: { title: "Spare Parts Distribution", desc: "Authorized distributor of Collet Chuck, Guide Bush, and Bar-Feeder accessories.", fullDesc: "Importer and distributor of Tooling & Accessories for automatic lathes, including all types of turning materials." },
      machine: { title: "Used Machinery", desc: "Source and sell certified used machines with installation and quality guarantee.", fullDesc: "Sourcing quality used CNC machines with Overhaul service, reconditioning, and Training programs." },
      warranty: "1-Year Repair Warranty",
      warrantySub: "We strive for excellence in service. All products are tested with modern tools to deliver the best to our customers.",
      viewDetails: "View Full Details", callNow: "Call Now", getQuote: "Request a Quote", supportedBrands: "Supported Major Brands",
    },
    products: {
      label: "Premium Inventory", title1: "Quality", title2: "Products & Solutions",
      all: "ALL", cnc: "CNC SPARE PARTS", oil: "INDUSTRIAL OIL",
      quote: "Request Quotation", interested: "Interested in",
    },
    customOrder: {
      label: "Exclusive Manufacturing", title1: "Custom Made", title2: "Customized Tooling",
      desc: "Design and manufacturing service for Collet Chucks and custom parts per customer Drawing or sample workpiece, by expert engineers.",
      sendDrawing: "Submit Drawing for Estimate", catalog: "Gain Service Catalogue.pdf",
    },
    about: {
      label: "Precision Engineering Partner", title1: "Committed to Excellence", title2: "The Best of the Job",
      mission: "Our Mission", vision: "Our Vision", yearsExp: "+ Years of Expertise",
      experience: "Experience", capital: "Registered Capital", warranty: "Warranty",
    },
    whyUs: {
      label: "Why Partner With Us", title1: "Why Choose", title2: "Gain Service?",
      sub: "We're not just repairers — we're the partner that keeps your factory running without interruption.",
      h1: "15+ Years of Experience", s1: "Management team and technicians who specialize directly in CNC machinery.",
      h2: "1-Year Repair Warranty", s2: "Quality guaranteed with fast after-sales service.",
      h3: "Loaner Parts While Repairing", s3: "Reduce production line downtime with our on-loan part support service.",
      h4: "100% Tested", s4: "Real-world functional testing before delivery to customers.",
    },
    contact: {
      label: "Get In Touch", title: "Contact", info: "Contact Information",
      callUs: "Call Us", email: "Email Address", line: "Line Official",
      hours: "Business Hours", hoursVal: "Mon - Sat: 08:30 - 17:30", closed: "Closed on Sundays",
      hq: "Headquarters", address: "29/55 Prasertnuegit Rd., Nuan Chan, Bueng Kum, Bangkok 10230",
      callBtn: "Call Us Now", lineBtn: "Contact via LINE",
      interestedIn: "Please inform staff you are interested in", forQuote: "to receive a quotation",
    },
    machine: {
      label: "Authorized Service & Spare Parts",
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