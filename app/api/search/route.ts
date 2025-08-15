import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  // Dummy data for demonstration
  const packages = [
    {
      id: "1",
      name: "Sample Package",
      publisher: "Sample Publisher",
      lastUpdated: "2025-08-15",
    },
    {
      id: "2",
      name: "Another Package",
      publisher: "Another Publisher",
      lastUpdated: "2025-08-10",
    },
  ];

  // Filter by query if provided
  const filtered = query
    ? packages.filter((pkg) =>
        pkg.name.toLowerCase().includes(query.toLowerCase())
      )
    : packages;

  return NextResponse.json({
    data: {
      packages: filtered,
    },
  });
}
