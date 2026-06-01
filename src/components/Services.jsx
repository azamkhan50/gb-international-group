// src/components/Services.jsx

import {
  Smartphone,
  Globe,
  ShoppingCart,
  Megaphone,
  Plane,
  GraduationCap
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "App Development",
    description:
      "Modern Android & iOS applications with high performance and beautiful UI/UX.",
    icon: Smartphone,
  },

  {
    id: 2,
    title: "Web Development",
    description:
      "Responsive and scalable websites using latest technologies and frameworks.",
    icon: Globe,
  },

  {
    id: 3,
    title: "E-Commerce",
    description:
      "Professional online stores with secure payment systems and product management.",
    icon: ShoppingCart,
  },

  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Grow your business through SEO, social media marketing, and branding solutions.",
    icon: Megaphone,
  },

  {
    id: 5,
    title: "Travel & Tourism",
    description:
      "Complete travel and tourism services for local and international destinations.",
    icon: Plane,
  },
  {
    id: 6,
    title: "Training & Development",
    description:
      "Professional training programs and workshops to upgrade your team's technical skills.",
    icon: GraduationCap,
  },
];

export default function Services() {
  return (
    <section className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-12">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-700">
          Our Services
        </h2>

        <p className="mt-5 text-gray-600 text-lg">
          GB International Group provides professional digital and business
          solutions worldwide.
        </p>
      </div>

      {/* Service Cards Layout */}
      {/* Changed grid-cols properties to target 3 items on large screens */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 text-center transition duration-300 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon
                    size={40}
                    className="text-blue-700"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold text-gray-800">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Button */}
              <button className="mt-6 w-full bg-blue-700 hover:bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold transition duration-300">
                Learn More
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}