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
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🔍 Advanced Search</h1>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search term..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border rounded"
        />

        {/* Extra Input */}
        <input
          type="text"
          placeholder="Organization"
          value={org}
          onChange={handleOrgChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Loading State */}
      {loading && <p className="mt-4 text-blue-500">Loading...</p>}

      {/* Error State */}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Results */}
      {results && !loading && (
        <pre className="mt-4 p-3 bg-gray-100 rounded text-sm overflow-x-auto">
          <SearchResults data={results} organization={org || "unknown"} />
        </pre>
      )}
    </div>
  );
}
