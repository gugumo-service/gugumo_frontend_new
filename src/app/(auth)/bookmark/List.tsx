"use client"

import Card from "@/components/Common/Card/Card";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function List() {

    const {data : session} = useSession() as any;

    const {data : bookmark} = useQuery({
        queryKey : ["bookmark"],
        queryFn : async ()=>{
            const response = await fetch(`/back/api/v1/bookmark`,{
                headers : {
                    "Authorization" : session?.accessToken
                },
                cache : "no-cache"
            });
            return response.json();
        }
    });

  return (
    <>{bookmark?.data.content.map((el : any)=><Card key={el.postId} el={el}/>)}</>
  )
}
