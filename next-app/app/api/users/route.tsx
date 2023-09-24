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
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({ where: { email: body.email } });
  if (user) return NextResponse.json({ error: "user already exists" }, { status: 400 });

  // set fields specifically instead of just using { data: body }, more safe
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return newUser
    ? NextResponse.json(newUser)
    : NextResponse.json({ error: "error while creating user" }, { status: 400 });
};
