import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      provider?: string; // 👈 add custom id
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string; // 👈 extend User if your provider/database returns an id
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string; // 👈 custom token property
  }
}
