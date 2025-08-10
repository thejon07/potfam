import NextAuth, { CredentialsSignin } from "next-auth";
import Google from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { Author } from "./model/user.model"
import { dbConnect } from "./lib/dbconnect";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24 * 7,
        updateAge: 60 * 60 * 24,
    },

    providers: [
        CredentialProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                const { email, password } = credentials;
                console.log("email and password", email, password)
                if (!email || !password) {
                    throw new CredentialsSignin("Please provide both email and password");
                }

                await dbConnect();
                const user = await Author.findOne({ email });
                if (!user) {
                    const newuser = await Author.create({ email, password })
                    return {
                        _id: newuser._id.toString(),
                        email: newuser.email,
                        role: newuser.role
                    }
                }

                return {
                    _id: user._id.toString(),
                    email: user.email,
                    password: user.password,
                    role: user.role,
                };
            },
        }),

        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            }
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token._id = user._id;
                token.role = user.role;
            }

            return token;
        },

        async session({ session, token }) {
            if (token?._id) {
                session.user._id = token._id
                session.user.role = token.role
            }

            return session;
        },

        signIn: async ({ user, account }) => {


            if (account?.provider === "google") {
                try {
                    const { name, image, email } = user;
                    console.log(name,image,email)
                    await dbConnect();
                    const alreadyUser = await Author.findOne({ email });
                  
                    if (!alreadyUser) {
                        const newuser = await Author.create({ name, image, email });
                        user._id = newuser._id.toString();
                        user.role = newuser.role
                        
                    } else {
                          user._id = alreadyUser._id.toString();
                          user.role = alreadyUser.role
                    }
                    return true
                } catch (error) {
                    throw new Error("Error while creating user");
                }
            }

            if (account?.provider === "credentials") {
                return true;
            } else {
                return false;
            }
        },
    },
});
