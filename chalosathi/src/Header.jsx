import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#121a21] shadow-md">
      <nav className="flex items-center justify-between text-white p-4 ">
        {/* Left Side: Logo & App Name */}
        <div className="flex items-center">
          <img src="/logoapp.png" alt="Logo" className="h-10 w-10 mr-3" />
          <span className="text-3xl font-semibold">Chalo Sathi</span>
        </div>

        {/* Desktop Menu */}
        
        <ul className="hidden md:flex space-x-6 items-center text-color-500">
          <li><Link to="/" className="text-info rounded-full hover:border-2 hover:border-info hover:text-white p-2 duration-500">Book ride</Link></li>
          <li><Link to="/history" className="text-info rounded-full hover:border-2 hover:border-info hover:text-white p-2 duration-500">History</Link></li>
          <li><Link to="/profile" className="text-info rounded-full hover:border-2 hover:border-info hover:text-white p-2 duration-500">Book ride</Link></li>
          <li><a href="#" className="text-info rounded-full hover:border-2 hover:border-info hover:text-white p-2 duration-300">About</a></li>
          <li><button className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600">Logout</button></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-64 bg-[#121a21] shadow-lg">
          <div className="p-4">
            <Link to="/" className="block pb-2 text-white hover:bg-blue-700">Book ride</Link>
            <Link to="/history" className="block py-2 text-white hover:bg-blue-700">History</Link>
            <Link to="/profile" className="block py-2 text-white hover:bg-blue-700">Profile</Link>
            <Link to="#" className="block py-2 text-white hover:bg-blue-700">About</Link>
            <button className="w-full mt-4 py-2 bg-red-500 rounded-md hover:bg-red-600">Logout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
