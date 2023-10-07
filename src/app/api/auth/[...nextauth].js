import NextAuth from "next-auth/next";
import Providers from "next-auth/providers";

export const authOptions = {
  providers: [
    Providers.credentials({
      name: "Signing in with credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await fetch("localhost:3000/api/user/", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        console.log(user);
      },
    }),

    //   EmailProvider({
    //     from: process.env.EMAIL_FROM,
    //   }),
  ],
  callbacks: {
    async signIn(user, account, profile, email, credentials) { 
      const allowed = true;
      if (allowed) {
        return true;
      } else {
        return false;

      }
    },
  },
};

export default NextAuth(authOptions);
