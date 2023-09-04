import NextAuth from "next-auth/next";

import connectDB from "@/app/config/connectDB";
import User from '@/models/user'
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const {email, password } = credentials;

                try {
                    await connectDB();
                    const user = await User.findOne({ email });

                    if (!user) {
                        return user  
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if(!passwordsMatch) {
                        return null;
                    }

                        return user;

                } catch (error) {
                    console.log("Error", error)
                    
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
    }, 
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
        signOut: "/"
    },
}


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


