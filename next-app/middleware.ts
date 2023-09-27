export { default } from "next-auth/middleware";
// import middleware from "next-auth/middleware";

// create file with name middleware.ts / .js in root of project and a function called middleware
// this gets called on every request
// export const middleware = (request: NextRequest) => {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// };

// export default middleware;

// execute only for certain paths by exporting this object, works then automagically
export const config = {
  // /users/:id*
  // *: zero or more parameters
  // +: one ore more
  // ?: zero or more
  matcher: ["/dashboard/:path*"],
};
