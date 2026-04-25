import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Products from "../sections/Products";
import Contact from "../sections/Contact";
import WhyUs from "../sections/WhyUs";

// ตัวอย่างในไฟล์ Home.tsx หรือในส่วนเนื้อหาหลัก
export default function Home() {
  return (
    <> 
        <Navbar />
      <section id="home"> <Hero /> </section>
      <section id="services"> <Services /> </section>
      <section id="products"> <Products /> </section>
       <WhyUs /> 
      <section id="contact"> <Contact /> </section>
    </>
  );
}