// src/components/Projects.jsx

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "School Management System",
    website: "smarteduhubs.com",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    description:
      "Complete school management platform for attendance, exams, fees, students, teachers, and administration.",
  },

  {
    id: 2,
    title: "Hotel Management System",
    website: "roomosys.com",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    description:
      "Modern hotel booking and management software with room reservations, billing, and customer management.",
  },

  {
    id: 3,
    title: "GB Real Estate",
    website: "gbrealestate.com",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    description:
      "Professional property listing platform for buying, selling, and renting houses and commercial properties.",
  },

  {
    id: 4,
    title: "PhoneBazar App",
    website: "phonebazar.com",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    description:
      "Online mobile marketplace application for buying and selling smartphones and accessories.",
  },

  {
    id: 5,
    title: "Service Provider App",
    website: "serviceproviderapp.com",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    description:
      "On-demand service provider platform for plumbers, cleaners, electricians, drivers, and technicians.",
  },
  {
  id: 6,
  title: "TikTok Shop Seller Platform",
  website: "tiktokshopseller.com",
  image:
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  description:
    "All-in-one TikTok Shop seller solution with product listing, order management, inventory synchronization, payment tracking, shipping management, and performance analytics.",
},
];

export default function Projects() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-12">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-700">
          Our Projects
        </h2>

        <p className="mt-5 text-gray-600 text-lg">
          We build modern digital products and scalable business solutions
          for companies worldwide.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
        
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-7">
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800">
                {project.title}
              </h3>

              {/* Website */}
              <p className="mt-2 text-cyan-600 font-semibold">
                {project.website}
              </p>

              {/* Description */}
              <p className="mt-4 text-gray-600 leading-relaxed">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-4">
                <button className="bg-blue-700 hover:bg-cyan-500 text-white px-5 py-3 rounded-xl font-semibold transition duration-300">
                  View Project
                </button>

                <button className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-5 py-3 rounded-xl font-semibold transition duration-300">
                  Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}