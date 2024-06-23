import { useQuery } from "@tanstack/react-query";

const fetchMeeting = async ({queryKey} : any)=>{

    const [,session,q] = queryKey;

    const res = await fetch(`${process.env.API_URL}/api/v1/meeting?q=${q}`,{
        headers : {
          "Authorization" : session?.accessToken
        },
        cache : "no-cache"
      });
    const data = await res.json();

}

export const usePost = (session : any,q :string)=>{
    return useQuery({queryKey : ["postlist",session,q],queryFn : fetchMeeting})
}