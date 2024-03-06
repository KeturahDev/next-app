import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch data from db
  // no data found = 404 error
  // else, return data

  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  console.log(params.id);

  return NextResponse.json({ id: 117, name: "specific person" });
}
