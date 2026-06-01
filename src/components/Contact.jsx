import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-3 rounded"></div>
          <p className="mt-5 text-gray-600">
            Feel free to contact us for any project or inquiry.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-md space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-cyan-500 text-white py-3 rounded-xl font-semibold transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-500" />
              <p className="text-gray-600">Skardu, Gilgit Baltistan, Pakistan</p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-cyan-500" />
              <p className="text-gray-600">+92 3420770905</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-cyan-500" />
              <p className="text-gray-600">info@gbinternationalgroup.com</p>
            </div>

            {/* Extra Box */}
            <div className="bg-blue-50 p-6 rounded-2xl border border-cyan-100">
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                We are here to help
              </h3>
              <p className="text-gray-600">
                Contact us for web development, app development, or business solutions.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}