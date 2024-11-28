'use client'
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/">Timeless Creations</Link>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/projects" className="hover:text-gray-300">
              Projects
            </Link>
            <Link href="/service" className="hover:text-gray-300">
              Service
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="menu-button"
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={() =>
                document
                  .getElementById('mobile-menu')
                  ?.classList.toggle('hidden')
              }
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="md:hidden hidden bg-gray-800 space-y-1 px-4 py-2"
      >
        <Link href="/" className="block text-gray-300 hover:text-white">
          Home
        </Link>
        <Link href="/projects" className="block text-gray-300 hover:text-white">
          Projects
        </Link>
        <Link href="/service" className="block text-gray-300 hover:text-white">
          Service
        </Link>
        <Link href="/about" className="block text-gray-300 hover:text-white">
          About
        </Link>
        <Link href="/contact" className="block text-gray-300 hover:text-white">
          Contact
        </Link>
      </div>
    </nav>
  );
}
