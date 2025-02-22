import { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#121a21] shadow-md">
      <nav className="flex items-center justify-between text-white p-4">
        {/* Left Side: Logo & App Name */}
        <div className="flex-shrink-0 flex items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logoapp.png" 
            alt="Logo" 
            className="h-10 w-10 rounded-full border-2 border-info"
          />
          <span className="ml-3 text-2xl font-bold text-white hover:text-info transition-colors duration-300">
            Chalo Sathi
          </span>
        </Link>
      </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center text-color-500">
          <li>
            <Link to="/" className="text-info rounded-full hover:border-2 hover:border-info hover:text-white p-2 duration-500">
              Book ride
            </Link>
          </li>
          <li>
            <Link to="/history" className="text-info rounded-full hover:border-2 hover:border-info hover:text-white p-2 duration-500">
              History
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-info rounded-full hover:border-2 hover:border-info hover:text-white p-2 duration-500">
              Profile
            </Link>
          </li>
          <li>
            <a href="/about" className="text-info rounded-full hover:border-2 hover:border-info hover:text-white p-2 duration-300">
              About
            </a>
          </li>
          {/* Add Sign-In and User Buttons Here */}
          <li>
            <SignedOut>
              <SignInButton mode="modal" className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600" />
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" className="rounded-full hover:bg-gray-700 p-2" />
            </SignedIn>
          </li>
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
            <Link to="/" className="block pb-2 text-white hover:bg-blue-700">
              Book ride
            </Link>
            <Link to="/history" className="block py-2 text-white hover:bg-blue-700">
              History
            </Link>
            <Link to="/profile" className="block py-2 text-white hover:bg-blue-700">
              Profile
            </Link>
            <Link to="/about" className="block py-2 text-white hover:bg-blue-700">
              About
            </Link>
            {/* Add Sign-In and User Buttons for Mobile */}
            <div className="mt-4">
              <SignedOut>
                <SignInButton mode="modal" className="w-full py-2 bg-blue-500 rounded-md hover:bg-blue-600" />
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" className="w-full py-2 bg-gray-700 rounded-md hover:bg-gray-600" />
              </SignedIn>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Header;