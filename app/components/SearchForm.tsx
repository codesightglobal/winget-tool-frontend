"use client";

import { useState, useCallback, ChangeEvent } from "react";
import api from "../lib/axios.js";
import SearchResults from "./SearchItem";
import debounce from "lodash/debounce";

interface SearchItem {
  id: string;
  name: string;
  publisher?: string;
  version?: string;
  lastUpdated: string;
}

interface SearchResult {
  data?: SearchItem[] | [];
  error?: string;
}

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [org, setOrg] = useState<string>("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showOrgTooltip, setShowOrgTooltip] = useState<boolean>(false);
  const [showSearchTooltip, setShowSearchTooltip] = useState<boolean>(false);

  const fetchResults = async (term: string) => {
    if (!term.trim()) return;
    if (term.length <= 1) {
      return setResults([]);
    }

    setLoading(true);
    setError("");
    try {
      const res = await api.get("/search", {
        params: { q: term },
      });
      console.log(res.data.data.packages);
      setResults(res.data.data.packages);
    } catch (err) {
      console.error(err);
      setResults([]);
      setError("Something went wrong while fetching results.");
    }
    setLoading(false);
  };

  // Debounce API calls to avoid flooding the server
  const debouncedSearch = useCallback(
    debounce((term: string) => fetchResults(term), 500),
    []
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const handleOrgChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setOrg(val);
  };

  return (
    <div className="bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-gray-900 manrope-regular">
              Manage packages.
              <br />
              <span className="text-[#017ba8]">Modernise</span> your Workplace.
              <br />
              Empower your users.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed manrope-regular">
              Discover and download Windows packages with ease using our
              comprehensive WinGet package search tool.
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="space-y-8">
              {/* Organization Input */}
              <div>
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="org"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Organization Domain
                  </label>
                  <div className="relative ml-2">
                    <svg
                      className="w-4 h-4 text-gray-400 hover:text-[#017ba8] cursor-help transition-colors"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      onMouseEnter={() => setShowOrgTooltip(true)}
                      onMouseLeave={() => setShowOrgTooltip(false)}
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {showOrgTooltip && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-72 bg-gray-700 border border-gray-600 text-white text-xs rounded-lg p-3 shadow-lg z-10">
                        <div className="text-gray-200">
                          If you put your company name in here, then the package
                          will store logs in a folder which also includes your
                          organisation. For example, c:\programdata\contoso\
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-700"></div>
                      </div>
                    )}
                  </div>
                </div>
                <input
                  id="org"
                  type="text"
                  placeholder="Please provide your company domain (e.g., contoso.com)"
                  value={org}
                  onChange={handleOrgChange}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#017ba8] focus:border-transparent transition-all duration-200 hover:border-gray-300"
                />
              </div>

              {/* Search Input */}
              <div>
                <div className="flex items-center mb-3">
                  <label
                    htmlFor="search"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Search Packages
                  </label>
                  <div className="relative ml-2">
                    <svg
                      className="w-4 h-4 text-gray-400 hover:text-[#017ba8] cursor-help transition-colors"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      onMouseEnter={() => setShowSearchTooltip(true)}
                      onMouseLeave={() => setShowSearchTooltip(false)}
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {showSearchTooltip && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-64 bg-gray-700 border border-gray-600 text-white text-xs rounded-lg p-3 shadow-lg z-10">
                        <div className="text-gray-200">
                          Enter the name of an application to search for a
                          Winget package.
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-700"></div>
                      </div>
                    )}
                  </div>
                </div>
                <input
                  id="search"
                  type="text"
                  placeholder="Enter package name (e.g., VSCode, Chrome, Discord)..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#017ba8] focus:border-transparent transition-all duration-200 hover:border-gray-300"
                />
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center mt-12">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#017ba8]"></div>
                <p className="text-[#017ba8] font-medium text-lg">
                  Searching packages...
                </p>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="text-red-700 flex items-center">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {error}
              </p>
            </div>
          )}

          {/* Results */}
          {results && !loading && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Search Results{" "}
                <span className="text-gray-500 text-xl font-normal">
                  ({results.length} found)
                </span>
              </h2>
              <SearchResults data={results} organization={org || "unknown"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
