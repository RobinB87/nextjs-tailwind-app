import { NextRequest, NextResponse } from "next/server";

// if you do not use the request object, even if it is unused, then nextjs will return cached data
export const GET = (request: NextRequest) => {
  return NextResponse.json([
    {
      id: 1,
      name: "Rob",
    },
    {
      id: 2,
      name: "Johnny",
    },
  ]);
};
