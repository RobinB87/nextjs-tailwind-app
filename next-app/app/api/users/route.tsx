import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";
import schema from "./schema";

// if you do not use the request object, even if it is unused, then nextjs will return cached data
export const GET = async (request: NextRequest) => {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = schema.safeParse(body);
  return validation.success
    ? NextResponse.json({ id: 1, name: body.name })
    : NextResponse.json(validation.error.errors, { status: 400 });
};
