import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-black text-white px-8 py-4 flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold">SnapHub</h1>

      <nav className="space-x-6 text-gray-300 font-medium">
        <Link className="hover:text-white transition" to="/landing">Home</Link>
        <Link className="hover:text-white transition" to="/dashboard">Dashboard</Link>
        <Link className="hover:text-white transition" to="/bookings">Bookings</Link>
      </nav>
    </header>
  );
}
