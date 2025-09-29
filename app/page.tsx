"use client";

import { useState } from "react";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import Topbar from "./components/Topbar";
import InstructionsModal from "./components/InstructionsModal";
import ContactModal from "./components/ContactModal";

export default function Home() {
  const [showInstructions, setShowInstructions] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      <main>
        {/* Action Buttons */}
        <div className="container mx-auto px-6 pt-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowInstructions(true)}
                className="flex items-center justify-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                How to Use This Tool
              </button>
              <button
                onClick={() => setShowContact(true)}
                className="flex items-center justify-center px-6 py-3 bg-[#017ba8] text-white rounded-xl hover:bg-[#015d85] transition-all duration-200 shadow-sm font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <SearchForm />
      </main>

      {/* Modals */}
      <InstructionsModal
        isOpen={showInstructions}
        onClose={() => setShowInstructions(false)}
      />
      <ContactModal
        isOpen={showContact}
        onClose={() => setShowContact(false)}
      />
    </div>
  );
}
