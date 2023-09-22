import { NextRequest, NextResponse } from "next/server";

// can also declare a simple props object like this:
export const GET = (request: NextRequest, { params }: { params: { id: number } }) => {
  // fake data fetch
  if (params.id > 10) return NextResponse.json({ error: "user not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Robin" });
};

export const PUT = async (request: NextRequest, { params }: { params: { id: number } }) => {
  const body = await request.json();
  if (!body.name) return NextResponse.json({ error: "Name is required" }, { status: 400 });

  if (params.id > 10) return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
};

export const DELETE = (request: NextRequest, { params }: { params: { id: number } }) => {
  // fake data fetch
  if (params.id > 10) return NextResponse.json({ error: "user not found" }, { status: 404 });
  return NextResponse.json({});
};
