import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";



const handler = NextAuth({
    providers: [
        GoogleProvider({
            // ?? -> default due to ts 
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
      ]
})

export { handler as GET, handler as POST }