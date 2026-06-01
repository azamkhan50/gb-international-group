// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import logo from "../assets/logo.jpeg";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
//             <div className="max-w-7xl mx-auto px-4 lg:px-8">
//                 <div className="flex items-center justify-between h-20">

//                     {/* Logo */}
//                     <div className="flex items-center gap-3">
//                         <img
//                             src={logo}
//                             alt="GB International Group"
//                             className="h-14 w-auto object-contain"
//                         />

//                         <div className="hidden sm:block">
//                             <h1 className="text-xl lg:text-2xl font-bold text-blue-700 leading-tight">
//                                 GB International
//                             </h1>
//                             <p className="text-sm text-cyan-500 font-semibold">
//                                 GROUP
//                             </p>
//                         </div>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex items-center gap-8">
//                         {/* <a href="#home" className="text-gray-700 hover:text-blue-700 font-medium transition">
//                             Home
//                         </a>

//                         <a href="#about" className="text-gray-700 hover:text-blue-700 font-medium transition">
//                             About
//                         </a>

//                         <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium transition">
//                             Services
//                         </a>

//                         <a href="#projects" className="text-gray-700 hover:text-blue-700 font-medium transition">
//                             Projects
//                         </a>

//                         <a href="#contact" className="text-gray-700 hover:text-blue-700 font-medium transition">
//                             Contact
//                         </a> */}
//                         <Link to="/" className="text-gray-700 hover:text-blue-700 font-medium transition">
//   Home
// </Link>

// <Link to="/about" className="text-gray-700 hover:text-blue-700 font-medium transition">
//   About
// </Link>

// <Link to="/services" className="text-gray-700 hover:text-blue-700 font-medium transition">
//   Services
// </Link>

// <Link to="/projects" className="text-gray-700 hover:text-blue-700 font-medium transition">
//   Projects
// </Link>

// <Link to="/contact" className="text-gray-700 hover:text-blue-700 font-medium transition">
//   Contact
// </Link>

//                         {/* <button className="bg-blue-700 hover:bg-cyan-500 text-white px-5 py-2 rounded-xl font-semibold transition duration-300">
//                             Join Us
//                         </button> */}
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button
//                         onClick={() => setIsOpen(!isOpen)}
//                         className="md:hidden text-blue-700"
//                     >
//                         {isOpen ? <X size={30} /> : <Menu size={30} />}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <div className="md:hidden bg-white shadow-lg border-t">
//                     <div className="flex flex-col px-6 py-5 gap-5">
//                         <a href="#home" className="text-gray-700 hover:text-blue-700 font-medium transition">
//                             Home
//                         </a>

//                         <a href="#about" className="text-gray-700 hover:text-blue-700 font-medium transition">
//                             About
//                         </a>

//                         <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium transition">
//                             Services
//                         </a>

//                         <a href="#projects" className="text-gray-700 hover:text-blue-700 font-medium transition">
//                             Projects
//                         </a>

//                         <a href="#contact" className="text-gray-700 hover:text-blue-700 font-medium transition">
//                             Contact
//                         </a>

//                         {/* <button className="bg-blue-700 hover:bg-cyan-500 text-white py-3 rounded-xl font-semibold transition">
//                             Join Us
//                         </button> */}
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// }



import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
  <img
    src={logo}
    alt="GB International Group"
    className="h-14 w-auto object-contain cursor-pointer"
  />

  <div className="hidden sm:block">
    <h1 className="text-xl lg:text-2xl font-bold text-blue-700">
      GB International
    </h1>
    <p className="text-sm text-cyan-500 font-semibold">
      GROUP
    </p>
  </div>
</NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-blue-700 text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-blue-700"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col px-6 py-5 gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

