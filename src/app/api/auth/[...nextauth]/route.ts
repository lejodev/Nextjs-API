// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { databaseConnect } from "@/utils/db";
// import User from "@/models/User";
// import bcrypt from "bcryptjs";

// const handler = NextAuth({
//     providers: [
//         CredentialsProvider({
//             name: "credentials",
//             credentials: {
//                 name: { label: "name", type: "text", placeholder: "userName@mymail.com" },
//                 password: { label: "password", placeholder: "type your password" }
//             },
//             async authorize(credentials, req) {
//                 console.log("INSIDE*****")
//                 databaseConnect()
//                 const userFound = await User.findOne({ name: credentials?.name })
//                 console.log(userFound)

//                 if (!userFound) {
//                     throw new Error("User not found");
//                 }

//                 // ***** This when passwords are encrypted *****
//                 // const encryptedPassword = await bcrypt.compare(credentials!.password, userFound.password);

//                 // if (!encryptedPassword) {
//                 //     throw new Error("Incorrect passsword");
//                 // }
//                 // ***** END when passwords are encrypted *****

//                 return userFound
//                 // const user = { id: "123ID", userName: "Test User", name: "somname@mail.com" }
//                 // return user;
//             }
//         })
//     ],
//     callbacks: {
//         jwt({ account, token, user, profile, session, trigger }) {
//             if (user) token.user = user;
//             return token
//         },
//         session({ session, token }) {
//             session.user = token.user as any;
//             console.log(session, token)
//             return session
//         }
//     }
// });

// export { handler as GET, handler as POST };