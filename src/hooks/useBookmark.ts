import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const fetchBookmarks = async (session : any)=>{
    const response = await fetch(`/back/api/v1/bookmark`,{
        headers : {
            "Authorization" : session.accessToken
        }
    });
    return response.json();
}


const addBookmark = async (data : any) =>{
    const response = await fetch('/back/api/v1/bookmark/new',{
        method : "POST",
        headers : {
            'Content-Type': 'application/json',
            "Authorization" : data.session.accessToken
        },
        body : JSON.stringify({postId : data.postId})
    });
    if(!response.ok){
        throw new Error('등록에 실패 하였습니다.');
    }
}

const deleteBookmark = async (data : any) =>{
    const response = await fetch(`/back/api/v1/bookmark/${data.postId}`,{
        method : "DELETE",
        headers : {
            'Content-Type': 'application/json',
            "Authorization" : data.session.accessToken
        }
    });
    if(!response.ok){
        throw new Error('삭제에 실패 하였습니다.');
    }
}

export const useBookmark = (session : any)=>{
    return useQuery({queryKey : ["bookmarks"],queryFn : ()=>fetchBookmarks(session)})
}


export const useAddBookmark = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn : (data :any)=> addBookmark(data),
        onSuccess : () =>{
            queryClient.invalidateQueries({
                queryKey : ['bookmarks']
            })
            queryClient.invalidateQueries({
                queryKey : ['postlist']
            })
        }
    })
}

export const useDeleteBookmark = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn : (data :any)=> deleteBookmark(data),
        onSuccess : () =>{
            queryClient.invalidateQueries({
                queryKey : ['bookmarks']
            })
            queryClient.invalidateQueries({
                queryKey : ['postlist']
            })
        }
    })
}