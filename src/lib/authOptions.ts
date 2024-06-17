import {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions : NextAuthOptions = {
    providers : [
        CredentialsProvider({
            name : "Credentials",
            credentials : {
                username : {},
                password : {}
            },
            async authorize(credentials) : Promise<any> {
                if(!credentials) return null;

                try {

                    const res = await fetch(`${process.env.API_URL}/api/v1/login`,{
                        method : "POST",
                        body : JSON.stringify({
                            username: credentials.username,
                            password: credentials.password,
                        })
                    });

                    const data = res.json();
                    console.log(data);

                    return null;

                } catch (err){
                    return null;
                }

            },
        })
    ],
    secret : process.env.NEXTAUTH_SECRET,
    callbacks : {
        async jwt({token,user} : any){
            if(user){
                token.accessToken = user.token;
            }
            return token;
        },
        async session({session,token} : any){
            session.accessToken = token.accessToken;
            return session;
        }
    }
}