import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmailAndPassword } from "./queries";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/app/login",
  },
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("User not found / Wrong credentials");
        }
        const email = credentials?.email as string;
        const password = credentials?.password as string;
        const dbUser = await getUserByEmailAndPassword({ email, password });
        if (!dbUser) {
          throw new Error("No user with the provided email");
        }

        return { ...dbUser, id: dbUser.id.toString() };
      },
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT tokens for session management
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    session({ session, token }) {
      // @ts-expect-error error is expected
      session.user.id = token.id;
      // @ts-expect-error error is expected
      session.user.fullName = token.fullName;
      return session;
    },
  },
});
