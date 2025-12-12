"use client";

import React, { useState } from "react";
import api from "../lib/axios";

interface PackageVersion {
  version: string;
  lastUpdated: string;
}

interface SearchItem {
  id: string;
  name: string;
  version?: string;
  versions?: PackageVersion[]; // Array of version objects
  publisher?: string;
  lastUpdated: string;
}

interface SearchResultsProps {
  data: SearchItem[];
  organization: string;
}

export default function SearchResults({
  data,
  organization,
}: SearchResultsProps) {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [selectedVersions, setSelectedVersions] = useState<
    Record<string, string>
  >({});

  console.log("SearchResults received data:", data);

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-300 text-6xl mb-4">📦</div>
        <p className="text-gray-500 text-xl">No packages found</p>
        <p className="text-gray-400 text-sm mt-2">
          Try adjusting your search terms
        </p>
      </div>
    );
  }

  const handleClick = async (item: SearchItem) => {
    setLoadingId(item.id);

    // Get selected version or use the current single version
    const version = selectedVersions[item.id] || item.version;

    try {
      // Request file from backend
      const res = await api.post(
        "/template",
        { id: item.id, organization, version },
        { responseType: "blob" }
      );

      // Create a blob link to download
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${organization || ""}-${item.name}.zip`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Error downloading file:", err);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => handleClick(item)}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-[#017ba8]/30 transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#017ba8]/10 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-[#017ba8] text-2xl">📦</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#017ba8] transition-colors">
                    {item.name}
                  </h3>
                </div>
              </div>

              {item.publisher && (
                <div className="flex items-center mb-3">
                  <svg
                    className="w-4 h-4 text-gray-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-gray-600 font-medium">
                    {item.publisher}
                  </p>
                </div>
              )}

              {/* Version Selector - Show dropdown if multiple versions available */}
              {item.versions && item.versions.length > 0 ? (
                <div className="mb-3">
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Select Version:
                  </label>
                  <select
                    value={
                      selectedVersions[item.id] || item.versions[0].version
                    }
                    onChange={(e) => {
                      e.stopPropagation();
                      setSelectedVersions((prev) => ({
                        ...prev,
                        [item.id]: e.target.value,
                      }));
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#017ba8] focus:border-transparent hover:border-[#017ba8] transition-all"
                  >
                    {item.versions.map((v) => (
                      <option key={v.version} value={v.version}>
                        v{v.version} - Updated{" "}
                        {new Date(v.lastUpdated).toLocaleDateString()}
                      </option>
                    ))}
                  </select>
                </div>
              ) : null}

              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-gray-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-xs text-gray-500">
                  Updated {new Date(item.lastUpdated).toLocaleDateString()}
                </p>
              </div>

              {/* Display current/selected version info */}
              {!item.versions && item.version && (
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-xs text-gray-500">
                    Version - {item.version}
                  </p>
                </div>
              )}
            </div>

            <div className="ml-4 flex items-center">
              {loadingId === item.id ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-t-[#017ba8]"></div>
                  <span className="text-sm text-[#017ba8] font-medium">
                    Downloading...
                  </span>
                </div>
              ) : (
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-[#017ba8]/10 p-2 rounded-lg">
                    <svg
                      className="w-5 h-5 text-[#017ba8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Download hint */}
          <div className="mt-4 pt-4 border-t border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-xs text-gray-500 flex items-center font-medium">
              <svg
                className="w-3 h-3 mr-2 text-[#017ba8]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Click to download template
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
