import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-bold"
      : "hover:text-gray-300 transition-colors duration-200";

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        {/* Logo */}
        <h2 className="text-2xl font-semibold cursor-pointer select-none">MyWebsite</h2>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-lg">
          <NavLink className={linkClass} to="/">
            Home
          </NavLink>
          <NavLink className={linkClass} to="/about">
            About
          </NavLink>
          <NavLink className={linkClass} to="/contact">
            Contact
          </NavLink>
          <NavLink className={linkClass} to="/blog">
            Blog
          </NavLink>
          <NavLink className={linkClass} to="/services">
            Services
          </NavLink>
        </nav>

        {/* Sign up button - desktop */}
        <button className="hidden md:block px-5 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
          Sign up
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 px-4 pb-4">
          <ul className="flex flex-col gap-3 text-white text-lg">
            <NavLink
              onClick={() => setMenuOpen(false)}
              className={linkClass}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setMenuOpen(false)}
              className={linkClass}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setMenuOpen(false)}
              className={linkClass}
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink
              onClick={() => setMenuOpen(false)}
              className={linkClass}
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              onClick={() => setMenuOpen(false)}
              className={linkClass}
              to="/services"
            >
              Services
            </NavLink>

            {/* Mobile sign up button */}
            <button className="mt-3 w-full px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
              Sign up
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
}
