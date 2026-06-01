export default function About() {
  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Countries Served" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold uppercase tracking-wider">
            About Company
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mt-3">
            About GB International Group
          </h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            We help businesses grow through innovative digital solutions,
            cutting-edge technology, and customer-focused strategies that
            create lasting success.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Who We Are
            </h3>

            <p className="text-gray-600 leading-relaxed mb-5">
              GB International Group is a leading technology and digital
              solutions company specializing in Web Development, Mobile Apps,
              E-Commerce Solutions, Digital Marketing, Software Development,
              Graphic Design, and Travel Services.
            </p>

            <p className="text-gray-600 leading-relaxed mb-5">
              Our dedicated team combines creativity, technology, and strategic
              thinking to deliver high-performance solutions that help
              businesses succeed in an increasingly digital world.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              We believe in innovation, transparency, quality, and long-term
              partnerships. Every project is crafted with precision to ensure
              maximum value and measurable results for our clients.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition">
                Learn More
              </button>

              <button className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h4 className="text-2xl font-bold text-blue-700 mb-4">
                Our Vision
              </h4>

              <p className="text-gray-600 leading-relaxed">
                To become a globally recognized technology company that drives
                digital transformation and empowers businesses through
                innovative, scalable, and future-ready solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h4 className="text-2xl font-bold text-blue-700 mb-4">
                Our Mission
              </h4>

              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional digital services that help businesses
                innovate, grow, and achieve sustainable success through modern
                technology and customer-centric solutions.
              </p>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-4xl font-bold text-blue-700">
                {stat.number}
              </h3>

              <p className="text-gray-600 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">
              Why Choose Us
            </h3>

            <p className="text-gray-600 mt-4">
              Delivering excellence through innovation and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">
                Expert Team
              </h4>
              <p className="text-gray-600">
                Skilled professionals delivering world-class digital solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">
                Modern Technology
              </h4>
              <p className="text-gray-600">
                We use the latest tools and technologies for better results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">
                Client Satisfaction
              </h4>
              <p className="text-gray-600">
                Our priority is delivering quality and exceeding expectations.
              </p>
            </div>

          </div>
        </div>
{/* Leadership Section */}
<div className="mt-24">
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-gray-800">
      Our Leadership
    </h3>
    <p className="text-gray-600 mt-3">
      Meet the visionaries behind GB International Group
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-10">

    {/* CEO */}
    <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition">
      <img
        src="https://i.ibb.co/hF21RR8Q/azam.jpg"
        alt="Azam Khan CEO"
        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500"
      />

      <h4 className="text-2xl font-bold text-blue-700 mt-5">
        Azam Khan
      </h4>

      <p className="text-gray-600 font-semibold mt-1">
        CEO, GB International Group
      </p>
    </div>

    {/* Founder */}
    <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition">
      <img
        src="https://i.ibb.co/XrGxydk4/naseem.jpg"
        alt="Kacho Naseem Founder"
        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-cyan-500"
      />

      <h4 className="text-2xl font-bold text-blue-700 mt-5">
        Kacho Naseem
      </h4>

      <p className="text-gray-600 font-semibold mt-1">
        Founder, GB International Group 
      </p>
    </div>

  </div>
</div>
      </div>
    </section>
  );
}