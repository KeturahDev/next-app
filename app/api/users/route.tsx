// Here, we write our route handlers
// route handler = a function that handles http requests
// http request can have various *methods* - GET/POST/PUT/DELETE

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

//"request", though not used, prevents endpoint's data from being cached
export async function GET(request: NextRequest) {
  const users = await prisma?.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
