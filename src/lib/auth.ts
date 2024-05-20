import NextAuth, { DefaultSession } from "next-auth";
// import { DefaultSession, NextAuthOptions, getServerSession } from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/prisma/db";
import { User } from "@prisma/client";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [Google, GitHub],
  callbacks: {
    session: ({ session, user }) => {
      session.user = user as User & DefaultSession["user"];

      return session;
    },
  },
});

// function text({ url, host }: any) {
//   return `Sign in to ${host}\n${url}\n\n`;
// }
