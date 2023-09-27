import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
});

// export this function as a GET or a POST
// any GET or POST request send to this endpoint will be handled inside this handle function
export { handler as GET, handler as POST };
