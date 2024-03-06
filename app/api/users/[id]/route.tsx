import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

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
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  // else, fetch with given id
  // if user doesnt exist, return 404
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // else, update user
  // return updated user
  return NextResponse.json({ id: 117, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // fetch user from database
  // if user not found, return 404
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // else, delete user
  // return 200
  return NextResponse.json({});
}
