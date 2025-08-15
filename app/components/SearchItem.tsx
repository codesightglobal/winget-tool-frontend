"use client";

import React, { useState } from "react";
import api from "../lib/axios.js";

interface SearchItem {
  id: string;
  name: string;
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

  if (!data || data.length === 0) {
    return <p className="text-gray-500">No results found.</p>;
  }

  const handleClick = async (item: SearchItem) => {
    setLoadingId(item.id);

    try {
      // Request file from backend
      const res = await api.post(
        "/template",
        { id: item.id, name: item.name, organization },
        { responseType: "blob" }
      );

      // Create a blob link to download
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "template.zip");
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
    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-6">
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => handleClick(item)}
          className="border rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer flex justify-between items-center"
        >
          <div>
            <h2 className="text-lg font-semibold">{item.name}</h2>
            {item.publisher && (
              <p className="text-sm text-gray-600">
                Publisher: {item.publisher}
              </p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Last Updated: {new Date(item.lastUpdated).toLocaleString()}
            </p>
          </div>

          {loadingId === item.id && (
            <span className="animate-spin border-2 border-gray-300 border-t-blue-500 rounded-full w-5 h-5 inline-block"></span>
          )}
        </div>
      ))}
    </div>
  );
}
