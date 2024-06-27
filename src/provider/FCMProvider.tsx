"use client"
import { setTokenHanlder } from "@/lib/firebase";
import { useEffect } from "react";

export default function FCMProvider({children} : {children : React.ReactNode}) {

    useEffect(() => {
      setTokenHanlder();
    }, [])

  return (
    <>{children}</>
  )
}
