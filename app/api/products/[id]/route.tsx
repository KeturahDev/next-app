import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // if product not found, return 404
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  // else return product
  return NextResponse.json({ id: 115, name: "new product", price: 20.5 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //is it valid?
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  //is it 404?
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  //dew it
  return NextResponse.json({ id: 22, name: body.name, price: body.price });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //found?
  if (params.id > 10)
    return NextResponse.json({ error: "Product Not Found" }, { status: 404 });
  //delete
  return NextResponse.json({});
}
