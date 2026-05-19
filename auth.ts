import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  pages: {
    signIn: "/login",
    error: "/",
  },

  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        const user = await prisma.user.findUnique({
          where: {
            email: profile?.email as string,
          },
        });

        if (user && user?.emailVerified === null) {
          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              emailVerified: new Date(),
            },
          });
        }
      }

      return true;
    },
  },
});
