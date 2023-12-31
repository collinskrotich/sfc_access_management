import NextAuth from "next-auth/next";

import connectDB from "@/app/config/connectDB";
import User from '@/models/user'
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },

                async authorize(credentials) {
                    if (!credentials || !credentials.email || !credentials.password) {
                        return null;
                    }
                    // const { email, password } = credentials;
                

                try {
                    await connectDB();
                    const { email, password } = credentials;
                
                    const user = await User.findOne({ email });

                    //const user = await prisma.user.findUnique({ where: { email: credentials: email}});

                    if (!user) {
                        return null; 
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if(!passwordsMatch) {
                        return null;
                    }

                    const { fullname } = user;
                    
                    return {
                        id: user._id,
                        email: user.email,
                        fullName: fullname
                      };
           

                } catch (error) {
                    console.log("Error", error)
                    
                }
                console.log("user", user);
                console.log("fullnameeeeeeee", fullName);
                
            }
            

        })
            // End of credentials provider
       
    ],
    session: {
        strategy: "jwt",
    }, 
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
        signOut: "/"
    },
}



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


