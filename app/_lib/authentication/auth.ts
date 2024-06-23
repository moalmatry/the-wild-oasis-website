import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "@/app/_lib/data-service";
import { Session } from "@/types";

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const existingGuest = user.email && (await getGuest(user.email));
        if (!existingGuest)
          await createGuest({
            email: user.email,
            fullName: user.name,
          });

        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }: { session: any | Session; user: any }) {
      const guest = await getGuest(session?.user?.email || "");
      session.user.guestId = guest?.id;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
