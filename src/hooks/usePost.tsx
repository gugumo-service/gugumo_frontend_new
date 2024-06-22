import { useQuery } from "@tanstack/react-query";

const fetchPost = async (session : any)=>{
    const response = await fetch(`/back/api/v1/meeting/my`,{
        headers : {
            "Authorization" : session.accessToken
        }
    });
    return response.json();
}

export const usePost = (session : any)=>{
    return useQuery({queryKey : ["postlist"],queryFn : ()=>fetchPost(session)})
}