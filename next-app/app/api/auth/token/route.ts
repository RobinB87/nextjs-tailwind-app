import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// example of how to get jwt token
export const GET = async (request: NextRequest) => {
  const token = await getToken({ req: request });
  return NextResponse.json(token);
};
