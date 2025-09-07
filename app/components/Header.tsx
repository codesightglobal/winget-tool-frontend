"use client";

import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">
                <span className="text-[#017ba8]">WinGet</span> Tool
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-[#017ba8] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#017ba8] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Our Services
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#017ba8] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Tools
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#017ba8] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#017ba8] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              <span className="font-medium">Need Help?</span>
            </div>
            <a
              href="tel:+441234567890"
              className="bg-[#017ba8] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#015a8a] transition-colors duration-200"
            >
              Get Support
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <a
                href="#"
                className="text-gray-900 hover:text-[#017ba8] block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#017ba8] block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Our Services
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#017ba8] block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Tools
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#017ba8] block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#017ba8] block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <a
                  href="tel:+441234567890"
                  className="bg-[#017ba8] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#015a8a] transition-colors duration-200 inline-block"
                >
                  Get Support
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
