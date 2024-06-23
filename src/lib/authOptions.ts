import {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions : NextAuthOptions = {
    providers : [
        CredentialsProvider({
            name : "Credentials",
            credentials : {
                username: { type: "text", placeholder: "이메일을 입력해주세요." },
                password: { type: "password",placeholder: "비밀번호를 입력해주세요." }
            },
            async authorize(credentials) : Promise<any> {
                if(!credentials) return null;

                try {

                    const response = await fetch(`${process.env.API_URL}/api/v1/emailLogin`,{
                        method : "POST",
                        headers : {
                            "content-type" : "application/json"
                        },
                        body : JSON.stringify({
                            username: credentials.username,
                            password: credentials.password
                        })
                    });

                    if(response.ok){
                        const data = await response.json();

                        if(data.status === "success"){
                            return {token : data.data};
                        }else{
                            return null;
                        }
                    }else{
                        console.log(response);
                        return null;
                    }

                } catch (err){
                    console.log(err);
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