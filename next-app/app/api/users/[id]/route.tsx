import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

// can also declare a simple props object like this:
export const GET = (request: NextRequest, { params }: { params: { id: number } }) => {
  // fake data fetch
  if (params.id > 10) return NextResponse.json({ error: "user not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Robin" });
};

export const PUT = async (request: NextRequest, { params }: { params: { id: number } }) => {
  if (params.id > 10) return NextResponse.json({ error: "user not found" }, { status: 404 });

  const body = await request.json();
  const validation = schema.safeParse(body);

  return validation.success
    ? NextResponse.json({ id: 1, name: body.name })
    : NextResponse.json(validation.error.errors, { status: 400 });
};

export const DELETE = (request: NextRequest, { params }: { params: { id: number } }) => {
  // fake data fetch
  if (params.id > 10) return NextResponse.json({ error: "user not found" }, { status: 404 });
  return NextResponse.json({});
};
