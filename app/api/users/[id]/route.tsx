import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Fetch data from db
  console.log(params);
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  // no data found = 404 error
  if (!user)
    return NextResponse.json({ error: "User not found." }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
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
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  // if user doesnt exist, return 404
  if (!user)
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  // else, update user
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  // return updated user
  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // fetch user from database
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  // if user not found, return 404
  if (!user)
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  // else, delete user
  await prisma.user.delete({
    where: { id: user.id },
  });
  // return 200
  return NextResponse.json(user);
}
