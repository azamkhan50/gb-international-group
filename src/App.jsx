
// import Footer from "./components/footer";
// import HeroSlider from "./components/hero_slider";
// import Navbar from "./components/Navbar";
// import Projects from "./components/project";
// import Services from "./components/services";
// import Testimonials from "./components/testimonal";
// import About from "./components/about";


// function App() {
//   return (
//     <>
//     <Navbar />

//       <div id="home">
//         <HeroSlider />
//       </div>
//       <div id="about">
//         <About />
//       </div>

//       <div id="services">
//         <Services />
//       </div>

//       <div id="projects">
//         <Projects />
//       </div>

//       <div id="about">
//         <Testimonials />
//       </div>

//       <div id="contact">

//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/hero_slider";
import Services from "./components/services";
import Projects from "./components/project";
import Testimonials from "./components/testimonal";
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
        {/* <Route path="/footer" element={<Footer />} /> */}
      </Routes>
      <Footer />
        <WhatsAppButton />
    </>
  );
}

export default App;