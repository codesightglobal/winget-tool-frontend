"use client";

import { useState } from "react";

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InstructionsModal({
  isOpen,
  onClose,
}: InstructionsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">
            Using Sistena Intune Packager Tool for Winget
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <main className="bg-gray-50 text-gray-900 min-h-screen py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg mb-8">
              <div className="px-6 py-6 border-b border-gray-200">
                <p className="text-lg text-gray-600">
                  Step-by-step instructions for completing the form
                </p>
              </div>
            </div>

            {/* Step 1 */}
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg mb-6">
              <div className="px-6 py-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-medium">
                      1
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      Enter Your Company Domain
                    </h2>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1.5">•</span>
                        <span>
                          Locate the box labeled &quot;Domain&quot; on the form.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1.5">•</span>
                        <span>
                          In this box, type your company&apos;s domain name (for
                          example:{" "}
                          <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                            contoso.com
                          </code>
                          ).
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1.5">•</span>
                        <span>
                          Please make sure to use the same format as shown in
                          the example—do not include &quot;www&quot; or
                          &quot;[URL]&quot;.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg mb-6">
              <div className="px-6 py-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-medium">
                      2
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      Enter Your App ID
                    </h2>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1.5">•</span>
                        <span>
                          Find the next box on the form, usually labeled
                          &quot;App ID&quot; or &quot;Application ID&quot;.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1.5">•</span>
                        <span>
                          If you already know your app&apos;s ID, simply type it
                          into the box.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1.5">•</span>
                        <span>
                          If you do not know your app&apos;s ID, Type the name
                          in the search box
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Example Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg mb-6">
              <div className="px-6 py-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Example
                </h3>
                <p className="text-blue-800 mb-4">
                  If your company domain is <strong>contoso.com</strong> and
                  your app is Notepad++, you would enter:
                </p>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border">
                    <span className="font-medium text-gray-700">Domain:</span>
                    <code className="ml-2 font-mono">contoso.com</code>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <span className="font-medium text-gray-700">App ID:</span>
                    <code className="ml-2 font-mono">Notepad++.Notepad++</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white shadow-sm border border-gray-200 rounded-lg mb-6">
              <div className="px-6 py-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-medium">
                      3
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      Selecting Your App
                    </h2>
                    <p className="text-gray-700 mb-4">
                      Look through the list of apps that now shows and select
                      the one you require. This will download the whole package
                      ready for intunewinapputil.exe, which can be found at{" "}
                      <a
                        href="https://github.com/Microsoft/Microsoft-Win32-Content-Prep-Tool"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        https://github.com/Microsoft/Microsoft-Win32-Content-Prep-Tool
                      </a>
                      .
                    </p>
                    <p className="text-gray-700">
                      Your zip file now includes the instructions for any
                      changes you might need to make such as version (if you
                      specify a version by changing the –Version switch from
                      latest it will prevent automatic updates to the app until
                      you specify a higher version or Latest again).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg">
              <div className="px-6 py-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-4">
                  Tips
                </h3>
                <ul className="space-y-3 text-amber-800">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-1.5">•</span>
                    <span>
                      Double-check your entries for accuracy before submitting
                      the form.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-1.5">•</span>
                    <span>
                      If you have any issues or cannot find your app&apos;s ID,
                      contact your IT administrator for assistance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-1.5">•</span>
                    <span>
                      If the app doesn&apos;t appear in the search, then it
                      either does not exist in the Winget Catalogue, or it has
                      been entered incorrectly.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
