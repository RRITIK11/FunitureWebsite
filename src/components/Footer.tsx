export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Footer Left: Logo and Info */}
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Timeless Creations</h2>
              <p className="text-gray-400 text-sm">
                Crafting furniture that blends beauty, function, and durability.
              </p>
            </div>
            {/* Footer Center: Quick Links */}
            <div className="flex space-x-8 mb-6 md:mb-0">
              <div>
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/" className="hover:text-gray-300 text-sm">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/projects" className="hover:text-gray-300 text-sm">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="/service" className="hover:text-gray-300 text-sm">
                      Service
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-gray-300 text-sm">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-gray-300 text-sm">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {/* Footer Right: Social Links */}
              <div>
                <h3 className="text-lg font-semibold">Follow Us</h3>
                <ul className="mt-2 flex space-x-4">
                  <li>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 12c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v4m0 0v4m0-4H8m4 0h4"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18 2.5v7m0 0h-7m7 0h-7m7 0v7m0-7H9m0 0v7m0-7h7"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Timeless Creations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  