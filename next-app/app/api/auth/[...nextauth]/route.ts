import NextAuth from "next-auth";

import { authOptions } from "../authOptions";

const handler = NextAuth(authOptions);

// export this function as a GET or a POST
// any GET or POST request send to this endpoint will be handled inside this handle function
export { handler as GET, handler as POST };
