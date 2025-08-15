"use client";

import { useState, useCallback, ChangeEvent } from "react";
import api from "../lib/axios.js";
import SearchResults from "./SearchItem";
import debounce from "lodash/debounce";

interface SearchItem {
  id: string;
  name: string;
  publisher?: string;
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
      setResults(res.data.data.packages);
    } catch (err) {
      console.error(err);
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
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-white">
              🔍 <span className="text-[#017ba8]">WinGet</span> Package Search
            </h1>
            <p className="text-gray-400 text-lg">
              Discover and download Windows packages with ease
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700">
            <div className="space-y-6">
              {/* Organization Input */}
              <div>
                <label
                  htmlFor="org"
                  className="block text-sm font-medium text-gray-300 mb-3"
                >
                  Organization Domain
                </label>
                <input
                  id="org"
                  type="text"
                  placeholder="Please provide your company domain (e.g., contoso.com)"
                  value={org}
                  onChange={handleOrgChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#017ba8] focus:border-transparent transition-all duration-200 hover:bg-gray-650"
                />
              </div>

              {/* Search Input */}
              <div>
                <label
                  htmlFor="search"
                  className="block text-sm font-medium text-gray-300 mb-3"
                >
                  Search Packages
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Enter package name (e.g., VSCode, Chrome, Discord)..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#017ba8] focus:border-transparent transition-all duration-200 hover:bg-gray-650"
                />
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center mt-8">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#017ba8]"></div>
                <p className="text-[#017ba8] font-medium">
                  Searching packages...
                </p>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="mt-8 bg-red-900/50 border border-red-700 rounded-lg p-4">
              <p className="text-red-300 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
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
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Search Results{" "}
                <span className="text-gray-400 text-lg">
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
