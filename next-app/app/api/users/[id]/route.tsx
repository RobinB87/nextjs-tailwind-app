import { NextRequest, NextResponse } from "next/server";

import schema from "../schema";
import prisma from "@/prisma/client";

// can also declare a simple props object like this:
export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const user = await prisma.user.findUnique({ where: { id: +params.id } });
  return user ? NextResponse.json(user) : NextResponse.json({ error: "user not found" }, { status: 404 });
};

export const PUT = async (request: NextRequest, { params }: { params: { id: string } }) => {
  if (+params.id > 10) return NextResponse.json({ error: "user not found" }, { status: 404 });

  const body = await request.json();
  const validation = schema.safeParse(body);

  return validation.success
    ? NextResponse.json({ id: 1, name: body.name })
    : NextResponse.json(validation.error.errors, { status: 400 });
};

export const DELETE = (request: NextRequest, { params }: { params: { id: string } }) => {
  // fake data fetch
  if (+params.id > 10) return NextResponse.json({ error: "user not found" }, { status: 404 });
  return NextResponse.json({});
};
