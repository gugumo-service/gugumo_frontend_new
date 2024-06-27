"use client"
import { app, setTokenHanlder } from "@/lib/firebase";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { useEffect } from "react";

export default function FCMProvider({children} : {children : React.ReactNode}) {

  const onFcm = async ()=>{

    const permission = await Notification.requestPermission();
    if(permission !== "granted") return;

    const messaging = getMessaging(app);

    await getToken(messaging,{
      vapidKey : process.env.NEXT_PUBLIC_FIREBASE_VAPIDKEY
    })
    .then(currentToken=>{
      if(currentToken){
        console.log(currentToken);
      }else{
        console.log('오류');
      }
    })
    .catch(err=>{
      console.log(err);
    });

  }

  useEffect(() => {
    onFcm();
  }, [])

  return (
    <>{children}</>
  )
}