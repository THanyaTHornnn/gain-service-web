
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Products from "../sections/Products";
import Contact from "../sections/Contact";
import WhyUs from "../sections/WhyUs";
import CustomOrder from "../sections/CustomOrder";
import AboutUs from "../sections/AboutUs";
import Reference from "../sections/Reference";
import MachineReference from "../sections/MachineReference";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home"><Hero /></section>
      <MachineReference />
      <section id="services"><Services /></section>
      <section id="products"><Products /></section>
      <section id="custom-order"><CustomOrder /></section>
      <section id="aboutus"><AboutUs /></section>
      <section id="reference"><Reference /></section>
      <WhyUs />
      <section id="contact"><Contact /></section>
    </>
  );
}