// src/components/HeroSlider.jsx

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    title: "GB International Group",
    subtitle: "Building Innovation & Global Connections",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "Together We Grow",
    subtitle: "Leadership • Unity • Progress",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    title: "Modern Digital Future",
    subtitle: "Technology & Community Development",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden mt-20">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ${
            index === current
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {slide.title}
              </h1>

              <p className="text-gray-200 mt-5 text-lg sm:text-xl md:text-2xl">
                {slide.subtitle}
              </p>

              <button className="mt-8 bg-blue-700 hover:bg-cyan-500 text-white px-8 py-3 rounded-xl text-lg font-semibold transition duration-300">
                Explore More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index
                ? "bg-cyan-400 scale-125"
                : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}