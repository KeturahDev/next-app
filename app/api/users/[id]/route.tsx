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

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // validate request body
  const body = await request.json();
  // if invalid, return 400
  if (!body.name)
    return NextResponse.json({ error: "invalid request" }, { status: 400 });
  // else, fetch with given id
  // if user doesnt exist, return 404
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // else, update user
  // return updated user
  return NextResponse.json({ id: 117, name: body.name });
}
