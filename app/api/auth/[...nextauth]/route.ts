import NextAuth from "@auth/core/types";
import Google from "@auth/core/providers/google";

export const { auth, handlers } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});

export { handlers as GET, handlers as POST };
