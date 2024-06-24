import {Account, NextAuthOptions, Session} from "next-auth"
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";

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
        }),
        KakaoProvider({
            clientId : process.env.KAKAO_RESTAPI || "",
            clientSecret : process.env.KAKAO_CLIENT || ""
        })
    ],
    callbacks : {
        async session({session,token,user} : {session: any,token: JWT,user: AdapterUser}){
            session.accessToken = token.accessToken;
            return session;
        },
        async jwt({user,token,account} : {user : any,token : JWT,account : Account | null}){
            if(user){
                token.accessToken = user.token;
            }
            return token;
        }
    },
    secret : process.env.NEXTAUTH_SECRET,
}