import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard
          name="PLC Mitsubishi"
          detail="อะไหล่ PLC สำหรับเครื่องจักรอุตสาหกรรม"
        />

        <ProductCard
          name="Inverter"
          detail="อุปกรณ์ควบคุมความเร็วรอบมอเตอร์"
        />

        <ProductCard
          name="เครื่องจักรมือสอง"
          detail="เครื่องจักรสภาพดี พร้อมใช้งาน"
        />
      </div>
    </section>
  );
}