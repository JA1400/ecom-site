import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub, Google],
  session: {
    strategy: "jwt", // 👈 make sure this is here
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Example: if user already exists with this email but provider is different
      // You can block the sign in
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email! },
        include: { accounts: true },
      });

      if (existingUser) {
        const hasAccountWithProvider = existingUser.accounts.some(
          (acc) => acc.provider === account?.provider
        );

        if (!hasAccountWithProvider) {
          // 🚫 Block sign-in, redirect to /auth/signin with error query param
          return "/signin?error=AccountExists";
        }
      }

      return true;
    },
    jwt({ token, user, account }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
        token.provider = account?.provider;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        // attach id onto the user object
        session.user.id = token.id as string;
        session.user.provider = token.provider as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    error: "/signin", // redirect all errors to the same page
  },
});
