// src/components/Testimonials.jsx

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ali Raza",
    position: "School Director",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "GB International Group developed an excellent school management system for our institution. Their team was professional and supportive.",
  },

  {
    id: 2,
    name: " Muhammad Raza ",
    position: "Hotel Owner",
    image:
    "https://i.ibb.co/1hWK9Qm/404-4042686-my-profile-person-icon-png-free-transparent-png.png",
     // "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "The hotel management software exceeded our expectations. The UI is modern, responsive, and very easy to use.",
  },

  {
    id: 3,
    name: "Ahmed Hassan",
    position: "Business Owner",
    image:
      "https://randomuser.me/api/portraits/men/51.jpg",
    feedback:
      "Their digital marketing service helped our business grow online. Highly recommended for web and app development.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-12">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-700">
          Client Feedback
        </h2>

        <p className="mt-5 text-gray-600 text-lg">
          What our clients say about GB International Group
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        
        {testimonials.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 transition duration-300"
          >
            
            {/* Stars */}
            <div className="flex gap-1 text-yellow-400">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>

            {/* Feedback */}
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              "{client.feedback}"
            </p>

            {/* Client Info */}
            <div className="mt-8 flex items-center gap-4">
              <img
                src={client.image}
                alt={client.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
              />

              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {client.name}
                </h3>

                <p className="text-gray-500">
                  {client.position}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}