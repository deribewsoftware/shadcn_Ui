import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '@/lib/prismadb'
import bcrypt from 'bcrypt'

export const authOptions:AuthOptions={
  adapter: PrismaAdapter(prisma),
  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
CredentialsProvider({
  name:"credentials",
  credentials:{
    email:{
      label:"email",
      type:"text"
    },
    password:{
      label:"password",
      type:"password"
    }
  },
  async authorize(credentials){
    if(!credentials?.email || !credentials?.password) {
      throw new Error("invalid email or password")
    }
    const user=await prisma.user.findUnique({
      where:{
        email:credentials.email
      }
    });

    if (!user || !user.hash){
      throw new Error("invalid email or password")
    }
    const isMatch=await bcrypt.compare(credentials.password,user.hash)

    if(!isMatch){
      throw new Error("invalid email or password")
    }

    return user;
  }
})

  ],
  pages:{
    signIn:'/'
  },
  debug:process.env.NODE_ENV==="development",
  session:{
    strategy:"jwt"
  },
  secret:process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)