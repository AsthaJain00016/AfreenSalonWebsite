import Hero from "../components/Hero";
import Ribbon from "../components/Ribbon";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Booking from "../components/Booking";
import InstagramSection from "../components/InstagramSection";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Ribbon />
      <About />
      <Services />
      <WhyChooseUs />
      <BeforeAfterSlider />
      <Gallery />
      <Testimonials />
      <Team />
      <Booking />
      <InstagramSection />
      <Contact />
    </>
  );
}
