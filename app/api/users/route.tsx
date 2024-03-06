// Here, we write our route handlers
// route handler = a function that handles http requests
// http request can have various *methods* - GET/POST/PUT/DELETE

import { NextRequest, NextResponse } from "next/server";

//"request", though not used, prevents endpoint's data from being cached
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Kitty" },
    { id: 2, name: "Zack" },
  ]);
}
