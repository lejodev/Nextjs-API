import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "userName@mymail.com" }, 
                password: { label: "password", placeholder: "type your password" }
            },
            authorize(credentials, req) {
                const user = { id: "123ID", userName: "Test User" }
                return user
            }
        })
    ]
});

export { handler as GET, handler as POST };