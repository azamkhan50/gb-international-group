const clients = [
  {
    name: "Royal Brangsa Guest House",
    logo: "https://i.ibb.co/hFCSn9Tt/logoroyal.png",
  },
  {
    name: "Skardu View Point Hotel And Huts",
    logo: "https://i.ibb.co/fV3CZfTW/download.jpg",
  },
  {
    name: "Hotel 5Star & Restaurant skardu",
    logo: "https://i.ibb.co/1tRYScNb/download.jpg",
  },
  {
    name: "Al-Badar  School System",
    logo: "https://i.ibb.co/JwghjtQY/download.jpg",
  },
  // {
  //   name: "Hotel Skardu",
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
  // },
  // {
  //   name: "Netflix",
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  // },
];
export default function ClientsSlider() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        {/* Small Elegant Upper Label */}
        <span className="text-xs font-bold text-[#2e31db] uppercase tracking-widest block mb-2">
          Our Clients
        </span>
        {/* Main Prominent Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-500 tracking-tight">
          They trusted us
        </h2>
        {/* Optional decorative minimal underline */}
        <div className="w-12 h-1 bg-[#0051e6] mx-auto mt-4 rounded-full" />
      </div>

      {/* Slider Wrapper */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">
        {/* Doubled mapping array array to loop smoothly for infinite scroll */}
        <div className="flex gap-16 w-max animate-scroll">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[160px] group select-none"
            >
              <div className="h-16 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 max-w-[140px] object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
                />
              </div>

              <span className="mt-3 text-xs font-semibold tracking-wide text-gray-400 group-hover:text-gray-700 transition-colors duration-300 uppercase">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Clean Animation Layer */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}