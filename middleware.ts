// import middleware from "next-auth/middleware";
// export default middleware;
export { default } from "next-auth/middleware"; //does the same as commented lines above

export const config = {
  matcher: ["/dashboard/:path*"],
};
