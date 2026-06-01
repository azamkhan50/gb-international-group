import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/hero_slider";
import Services from "./components/services";
import Projects from "./components/project";
import Testimonials from "./components/testimonal"; // Double check if your file is spelled "testimonal" or "testimonial"
import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/Contact";
import ClientsSlider from "./components/ClientsSlider";
import WhatsAppButton from "./components/WhatsAppButton";

function Home() {
  return (
    <>
      <HeroSlider />
      <Services />
      <Projects />
      <ClientsSlider />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;