import NextAuth from 'next-auth';
import GoogleProvider from'next-auth/providers/google';
import prisma from '@/lib/prismadb'
import {PrismaAdapter} from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt'



export default NextAuth({
  adapter:PrismaAdapter(prisma),
  providers:[
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID as string,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider(
      {
        name:"credentials",
        credentials:{
          email:{
            type:"text",
            label:"email",
          },
          password:{
            type:"password",
            label:"password",
          },
        },

        async authorize(credentials){
          if(!credentials?.email || !credentials?.password){
            throw new Error("Invalid credentials password and email")
          }
          const user =await prisma.user.findUnique({
            where:{email:credentials.email}
          })
          // match email 
          if (!user|| !user.hash){
            throw new Error("Invalid  email")
          }

          // match the password
          const isMatch = await bcrypt.compare(credentials.password,user.hash)

          if (!isMatch){
            throw new Error("Invalid password")
          }

          return user
        }
      }
    )
  ],

  pages:{
    signIn:'/',
  },
  debug:process.env.NODE_ENV==='development',
  session:{
    strategy:'jwt'
  },
  secret:process.env.NEXTAUTH_SECRET
  
})





