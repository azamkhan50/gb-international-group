import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import HeroSlider from "./components/Hero_slider.jsx";
import Services from "./components/Services.jsx";
import Project from "./components/Project.jsx"; // Fixed to match sidebar: Project.jsx
import Testimonials from "./components/Testimonal.jsx"; // Matches sidebar: Testimonal.jsx
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import ClientsSlider from "./components/ClientsSlider.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

function Home() {
  return (
    <>
      <HeroSlider />
      <Services />
      <Project /> {/* Fixed from <Projects /> to <Project /> */}
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
        <Route path="/projects" element={<Project />} /> {/* Fixed component name */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;