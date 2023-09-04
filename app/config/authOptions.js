import connectDB from "@/app/config/connectDB";
import User from '@/models/user'
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'

export const authOptions = {
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
