import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchPost = async ({queryKey} : {queryKey : [string,any,string]})=>{
    const [,session,q] = queryKey;
    const response = await fetch(`/back/api/v1/meeting/my?q=${q}`,{
        headers : {
            "Authorization" : session.accessToken
        }
    });
    if(!response.ok){
        throw new Error('불러오는데 실패 하였습니다.');
    }
    return response.json();
}

export const usePost = (session : any)=>{
    
    const [q, setQ] = useState('');
    const {data : posts, isLoading} = useQuery({queryKey : ["postlist",session,q],queryFn : fetchPost})

    return {
        posts,
        isLoading,
        setQ
    }

}