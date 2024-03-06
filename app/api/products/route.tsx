import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "cheese",
      price: 3.5,
    },
    {
      id: 2,
      name: "bread",
      price: 2.5,
    },
    {
      id: 3,
      name: "milk",
      price: 2.5,
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  return NextResponse.json({ id: 23, name: body.name, price: body.price });
}
