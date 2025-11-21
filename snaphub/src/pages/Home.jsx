export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <main className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h1 className="text-5xl font-bold text-amber-800 underline">
          Welcome to SnapHub
        </h1>

        <p className="mt-4 text-gray-700 text-lg max-w-xl">
          Your all-in-one photography studio management system.
        </p>

        <a
          href="/landing"
          className="mt-6 px-6 py-3 bg-amber-700 text-white rounded-xl shadow hover:bg-amber-800 transition"
        >
          Explore →
        </a>
      </main>

    </div>
  );
}
