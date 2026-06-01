import { MessageCircle } from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923420770905"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl p-4 transition-all duration-300 hover:scale-110 flex items-center justify-center"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}