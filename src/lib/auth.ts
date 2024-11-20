import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/app/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async () => {
        return {
          id: "1",
          fullName: "ahmed",
          age: 18,
          password: "123456",
          email: "jumiklein@gmail.com",
          createdAt: "2024-06-23 16:05:26.954952",
          updatedAt: "2024-06-23 16:05:26.954952",
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // @ts-expect-error error is expected
        token.fullName = user.fullName;
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
