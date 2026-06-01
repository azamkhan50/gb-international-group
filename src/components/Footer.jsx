// // src/components/Footer.jsx

// src/components/Footer.jsx

import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Footer() {
  // Target contact number formatted for the WhatsApp API
  const contactNumber = "923420770905";
  // Pre-filled greeting text encoded for URLs
  const customMessage = encodeURIComponent("Hello GB International Group, I am interested in your services.");

  return (
    <footer className="bg-white text-gray-600 pt-16 pb-8 px-4 sm:px-6 lg:px-12 border-t border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-blue-600 tracking-tight">
              GB International Group
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Delivering high-performance digital solutions and premium business 
              services worldwide to help your enterprise scale.
            </p>
          </div>

          {/* Column 2: Services Links */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                "App Development",
                "Web Development",
                "E-Commerce",
                "Digital Marketing",
                "Travel & Tourism",
                "Training & Development",
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-blue-600 text-gray-600 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Social Networks */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Our Social Networks
            </h3>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Follow us on all platforms, for the latest job & training opportunities.
            </p>
            
            {/* Clean Text-based Platform Badges */}
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                { 
                  name: "WhatsApp", 
                  href: `https://wa.me/${contactNumber}?text=${customMessage}`,
                  isExternal: true 
                },
                { name: "LinkedIn", href: "#", isExternal: false },
                { name: "Facebook", href: "#", isExternal: false },
                { name: "Instagram", href: "#", isExternal: false },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  // Security and UX best practice: open messaging/external apps in a new tab
                  target={social.isExternal ? "_blank" : "_self"}
                  rel={social.isExternal ? "noopener noreferrer" : undefined}
                  className="px-3 py-1.5 rounded-full bg-[#1f7be4] hover:bg-[#143c94] text-white text-xs font-medium transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="mt-4 space-y-3.5 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span className="text-gray-600">Skardu, Pakistan</span>
              </div>

              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <a href={`tel:+${contactNumber}`} className="hover:text-blue-600 text-gray-600 transition-colors">
                  +92 3420770905
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <a href="mailto:info@gbinternationalgroup.com" className="hover:text-blue-600 text-gray-600 transition-colors">
                  info@gbinternationalgroup.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} GB International Group. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}



















// import {
//   Mail,
//   Phone,
//   MapPin
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-white text-gray-600 pt-16 pb-8 px-4 sm:px-6 lg:px-12 border-t border-gray-200 shadow-sm">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

//           {/* Column 1: Company Info */}
//           <div className="space-y-4">
//             <h2 className="text-xl font-bold text-gray-900 tracking-tight">
//               GB International Group
//             </h2>
//             <p className="text-sm leading-relaxed text-gray-600">
//               Delivering high-performance digital solutions and premium business 
//               services worldwide to help your enterprise scale.
//             </p>
//           </div>

//           {/* Column 2: Services Links */}
//           {/* <div>
//             <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
//               Services
//             </h3>
//             <ul className="mt-4 space-y-2.5 text-sm">
//               {[
//                 "App Development",
//                 "Web Development",
//                 "E-Commerce",
//                 "Digital Marketing",
//                 "Travel & Tourism",
//                 "Training & Development",
//               ].map((service) => (
//                 <li key={service}>
//                   <a href="#" className="hover:text-blue-600 text-gray-600 transition-colors duration-200">
//                     {service}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div> */}

//           {/* Column 3: Our Social Networks */}
//           <div>
//             <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
//               Our Social Networks
//             </h3>
//             <p className="mt-4 text-sm text-gray-600 leading-relaxed">
//               Follow us on all platforms, for the latest job & training opportunities.
//             </p>
            
//             {/* Clean Text-based Platform Badges */}
//             <div className="flex flex-wrap gap-2 mt-5">
//               {[
//                 { name: "WhatsApp", href: "#" },
//                 { name: "LinkedIn", href: "#" },
//                 { name: "Facebook", href: "#" },
//                 { name: "Instagram", href: "#" },
//               ].map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   className="px-3 py-1.5 rounded-full bg-[#1f7be4] hover:bg-[#143c94] text-white text-xs font-medium transition-all duration-200 hover:scale-105 shadow-sm"
//                 >
//                   {social.name}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Column 4: Contact Details */}
//           <div>
//             <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
//               Contact Us
//             </h3>
//             <div className="mt-4 space-y-3.5 text-sm">
//               <div className="flex gap-3 items-start">
//                 <MapPin size={18} className="text-blue-600 shrink-0 mt-0.5" />
//                 <span className="text-gray-600">Skardu, Pakistan</span>
//               </div>

//               <div className="flex gap-3 items-center">
//                 <Phone size={18} className="text-blue-600 shrink-0" />
//                 <a href="tel:+923420770905" className="hover:text-blue-600 text-gray-600 transition-colors">
//                   +923420770905
//                 </a>
//               </div>

//               <div className="flex gap-3 items-center">
//                 <Mail size={18} className="text-blue-600 shrink-0" />
//                 <a href="mailto:info@gbinternationalgroup.com" className="hover:text-blue-600 text-gray-600 transition-colors">
//                   info@gbinternationalgroup.com
//                 </a>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
//           <p>© {new Date().getFullYear()} GB International Group. All Rights Reserved.</p>
//           <div className="flex gap-6">
//             <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
//             <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }
