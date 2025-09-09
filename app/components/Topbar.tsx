"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

export default function Topbar() {
  return (
    <div className="bg-[#E0ECF0] text-[#023a51] py-4 border-b border-[#d1dee3] hidden lg:block">
      <div className="container mx-auto">
        {/* Topbar content aligned with navigation area */}
        <div className="flex items-center">
          {/* Main topbar content - aligned between navigation and "Let's Talk" button */}
          <div className="flex-1 flex items-center justify-between">
            {/* Left side - Three square buttons */}
            <div className="flex items-center space-x-4">
              <button className="hover:bg-white text-[#023a51] hover:text-[#015d85] px-2 py-2 rounded text-[12px] font-bold transition-colors duration-200 uppercase">
                Offices
              </button>
              <button className="hover:bg-white text-[#023a51] hover:text-[#015d85] px-2 py-2 rounded text-[12px] font-bold transition-colors duration-200 uppercase">
                Careers
              </button>
              <button className="hover:bg-white text-[#023a51] hover:text-[#015d85] px-2 py-2 rounded text-[12px] font-bold transition-colors duration-200 uppercase">
                FAQs
              </button>
            </div>

            {/* Center - Phone number and Email Us button */}
            <div className="flex items-center space-x-6">
              <a
                href="tel:+441234567890"
                className="flex items-center text-sm text-[#023a51] hover:text-[#015d85] transition-colors duration-200 font-medium"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +44 123 456 7890
              </a>
              <button className="hover:bg-white text-[#023a51] hover:text-[#015d85] px-4 py-2 rounded text-sm font-medium transition-colors duration-200 flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-[16px]"
                />
                Email Us
              </button>
            </div>

            {/* Right side - Social media icons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/sistena"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#023a51] hover:text-[#015d85] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-[14px]" />
              </a>
              <a
                href="https://www.twitter.com/sistena"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#023a51] hover:text-[#015d85] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a
                href="https://www.linkedin.com/company/sistena"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#023a51] hover:text-[#015d85] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://www.linkedin.com/company/sistena"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#023a51] hover:text-[#015d85] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://www.youtube.com/sistena"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#023a51] hover:text-[#015d85] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
