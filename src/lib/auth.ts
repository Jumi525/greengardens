import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";

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
        const { email, password } = credentials;
        console.log(email, password);
        // Find user in the database

        return { id: "12", email: "jumiklein525@gmail.com" };
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
