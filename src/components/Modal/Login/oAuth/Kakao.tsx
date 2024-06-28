"use client"
import { signIn } from "next-auth/react"

export default function Kakao() {

    const onSignInHandler = async ()=>{
        await signIn('kakao',{callbackUrl : "/oauth-callback"});
    }

  return (
    <div onClick={onSignInHandler} className="size-6 border border-black rounded-full cursor-pointer"></div>
  )
}
