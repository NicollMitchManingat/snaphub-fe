export default function Landing() {
  return (
    <div className="min-h-screen mt-16 flex flex-col items-center justify-center px-6">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 text-center underline">
          SnapHub Photography Studio
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-700 text-lg text-center max-w-2xl">
          Capture moments. Manage your studio effortlessly.  
          A simple, elegant system built for photographers — styled cleanly for Ron's taste.
        </p>

        {/* Hero Section */}
        <div className="mt-10 flex flex-col md:flex-row items-center gap-10">

          {/* Left Text Block */}
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900">
              Organize Shoots, Clients, and Bookings
            </h2>

            <p className="mt-3 text-gray-600">
              Everything you need in one place with a pleasing, warm-toned aesthetic.
            </p>

            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <button className="px-6 py-3 bg-amber-700 text-white font-semibold rounded-xl shadow hover:bg-amber-800 transition">
                Get Started
              </button>

              <button className="px-6 py-3 rounded-xl border border-amber-700 text-amber-700 font-semibold hover:bg-amber-50 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
            className="w-[350px] md:w-[420px] rounded-2xl shadow-xl"
            alt="Photography Studio"
          />
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-amber-700">📸 Booking Manager</h3>
            <p className="mt-2 text-gray-600">
              Track sessions, schedules, and studio availability.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-amber-700">👤 Client Profiles</h3>
            <p className="mt-2 text-gray-600">
              Store client details, preferences, and past shoots.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-amber-700">💼 Studio Services</h3>
            <p className="mt-2 text-gray-600">
              Manage packages, pricing, and add-on services.
            </p>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-16 text-gray-500 text-sm">
          © 2025 SnapHub Studio — Designed with clean & warm aesthetics for Ron.
        </footer>
      </div>
  );
}
