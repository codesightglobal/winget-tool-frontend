"use client";

import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#E0ECF0] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-22">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                decoding="async"
                src="https://www.sistena.co.uk/wp-content/uploads/2021/12/sistena-new-web-logo.png"
                srcSet="https://www.sistena.co.uk/wp-content/uploads/2021/12/sistena-new-web-logo.png 1x, https://www.sistena.co.uk/wp-content/uploads/2021/12/sistena-new-web-logo-x.png 2x"
                style={{ maxHeight: "49px", height: "auto" }}
                width="200"
                height="49"
                className="img-responsive fusion-standard-logo disable-lazyload"
                alt="Sistena Ltd Logo"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-18">
              <a
                href="https://www.sistena.co.uk/"
                className="text-[#023a51] px-3 py-3 text-[18px] font-semibold transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#017BAB] after:left-0 after:bottom-0 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Home
              </a>
              <div className="relative group">
                <a
                  href="https://www.sistena.co.uk/services/"
                  className="text-[#023a51] px-3 py-3 text-[18px] font-semibold transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#017BAB] after:left-0 after:bottom-0 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Our Services
                </a>
              </div>
              <div className="relative group">
                <a
                  href="https://www.sistena.co.uk/winget-tool/"
                  className="text-[#023a51] px-3 py-3 text-[18px] font-semibold transition-colors duration-200 flex items-center relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#017BAB] after:left-0 after:bottom-0 after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
                >
                  Tools
                </a>
              </div>
              <a
                href="https://www.sistena.co.uk/about/"
                className="text-[#023a51] px-3 py-3 text-[18px] font-semibold transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#017BAB] after:left-0 after:bottom-0 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                About Us
              </a>
              <a
                href="https://www.sistena.co.uk/news/"
                className="text-[#023a51] px-3 py-3 text-[18px] font-semibold transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#017BAB] after:left-0 after:bottom-0 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                News
              </a>
            </div>
          </nav>

          {/* Let's Talk Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://www.sistena.co.uk/contact/"
              className="bg-[#096a91] text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-[#017BAB] transition-colors duration-200"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <a
                href="https://www.sistena.co.uk/"
                className="text-gray-700 hover:text-[#2ba3c7] block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="https://www.sistena.co.uk/services/"
                className="text-gray-700 hover:text-[#2ba3c7] block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Our Services
              </a>
              <a
                href="https://www.sistena.co.uk/winget-tool/"
                className="text-gray-700 hover:text-[#2ba3c7] block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Tools
              </a>
              <a
                href="https://www.sistena.co.uk/about/"
                className="text-gray-700 hover:text-[#2ba3c7] block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#2ba3c7] block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                News
              </a>
              <div className="px-3 py-2">
                <a
                  href="tel:+441234567890"
                  className="bg-[#2ba3c7] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#2391b3] transition-colors duration-200 inline-block"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
