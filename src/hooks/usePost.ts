import { useQuery } from "@tanstack/react-query";

const fetchPost = async ({queryKey} : any)=>{

    const [,session,q] = queryKey;

    const response = await fetch(`/back/api/v1/meeting/my?q=${q}`,{
        headers : {
            "Authorization" : session.accessToken
        }
    });
    return response.json();
}

export const usePost = (session : any,q :string)=>{
    return useQuery({queryKey : ["postlist",session,q],queryFn : fetchPost})
}