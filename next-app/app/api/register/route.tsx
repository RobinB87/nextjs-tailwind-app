import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";

import prisma from "@/prisma/client";

const schema = z.object({
  email: z.string(),
  password: z.string().min(5),
});

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });

  const user = await prisma.user.findUnique({ where: { email: body.email } });

  if (user)
    return NextResponse.json("user already exists", {
      status: 400,
    });

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const newUser = prisma.user.create({
    data: {
      email: body.email,
      hashedPassword,
    },
  });

  return NextResponse.json({ email: (await newUser).email });
};