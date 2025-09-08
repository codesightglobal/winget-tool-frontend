"use client";

import { useState } from "react";

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InstructionsModal({ isOpen, onClose }: InstructionsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">How to Use the WinGet Package Tool</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="px-6 py-6 space-y-6">
          {/* Getting Started */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started</h3>
            <p className="text-gray-700 mb-4">
              Welcome to the WinGet Package Tool! This platform helps you discover, download, and deploy 
              Windows applications through Microsoft's Windows Package Manager (WinGet) for Microsoft Intune 
              managed environments.
            </p>
          </section>

          {/* Step-by-step Instructions */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Step-by-Step Instructions</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#017ba8] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Enter Your Organization Domain</h4>
                  <p className="text-gray-700">
                    Start by entering your company's domain name (e.g., contoso.com) in the Organization Domain field. 
                    This helps organize package logs and ensures proper deployment tracking within your organization.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#017ba8] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Search for Applications</h4>
                  <p className="text-gray-700">
                    Use the search field to find the applications you need. Enter the application name 
                    (e.g., "Chrome", "VSCode", "Teams") and our tool will search the WinGet repository 
                    for matching packages.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#017ba8] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Review Search Results</h4>
                  <p className="text-gray-700">
                    Browse through the search results to find the exact application and version you need. 
                    Each result shows the publisher, version, and last update information.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#017ba8] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Download and Deploy</h4>
                  <p className="text-gray-700">
                    Select the package you want and use the provided deployment information to integrate 
                    it with Microsoft Intune for distribution across your managed devices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Practices</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-[#017ba8] font-semibold">•</span>
                <span>Always verify the publisher and version before deploying packages</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#017ba8] font-semibold">•</span>
                <span>Test packages in a small group before organization-wide deployment</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#017ba8] font-semibold">•</span>
                <span>Keep your organization domain consistent across all package deployments</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#017ba8] font-semibold">•</span>
                <span>Regularly check for package updates to maintain security and functionality</span>
              </li>
            </ul>
          </section>

          {/* Troubleshooting */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Troubleshooting</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900">No search results found?</h4>
                <p className="text-gray-700">
                  Try using different search terms, check spelling, or search for the publisher name instead of the product name.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Package deployment issues?</h4>
                <p className="text-gray-700">
                  Ensure your Microsoft Intune configuration is correct and that you have the necessary permissions for app deployment.
                </p>
              </div>
            </div>
          </section>

          {/* Support */}
          <section className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Need Additional Help?</h3>
            <p className="text-gray-700">
              If you need further assistance with the Managed Application Packaging Service for Microsoft Intune, 
              please use the "Contact Us" button to get in touch with our support team.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
