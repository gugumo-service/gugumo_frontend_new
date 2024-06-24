import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const fetchBookmarks = async ({queryKey} : {queryKey : [string,any,string]})=>{
    const [,session,q] = queryKey;
    const response = await fetch(`/back/api/v1/bookmark?q=${q}`,{
        headers : {
            "Authorization" : session.accessToken
        }
    });
    if(!response.ok){
        throw new Error('불러오는데 실패 하였습니다.');
    }
    return response.json();
}

const addBookmark = async (data : any) =>{
    const {session,postId} = data;
    const response = await fetch('/back/api/v1/bookmark/new',{
        method : "POST",
        headers : {
            'Content-Type': 'application/json',
            "Authorization" : session.accessToken
        },
        body : JSON.stringify({postId : postId})
    });
    if(!response.ok){
        throw new Error('등록에 실패 하였습니다.');
    }
}

const deleteBookmark = async (data : any) =>{
    const {session,postId} = data;
    const response = await fetch(`/back/api/v1/bookmark/${postId}`,{
        method : "DELETE",
        headers : {
            'Content-Type': 'application/json',
            "Authorization" : session.accessToken
        }
    });
    if(!response.ok){
        console.log(response);
        throw new Error('삭제에 실패 하였습니다.');
    }
}

export const useBookmark = (session : any)=>{
    const [q, setQ] = useState('');
    const queryClient = useQueryClient();
    const {data : bookmarks, isLoading} = useQuery({queryKey : ["bookmarks",session,q],queryFn : fetchBookmarks,retry : false});

    const addBookmarkMutation = useMutation({
        mutationFn : addBookmark,
        onSuccess : () => Promise.all([
            queryClient.invalidateQueries({
                queryKey : ['bookmarks']
            }),
            queryClient.invalidateQueries({
                queryKey : ['recommend']
            }),
        ])
    });

    const deleteBookmarkMutation = useMutation({
        mutationFn : deleteBookmark,
        onSuccess : () => Promise.all([
            queryClient.invalidateQueries({
                queryKey : ['bookmarks']
            }),
            queryClient.invalidateQueries({
                queryKey : ['recommend']
            }),
        ])
    });

    return {
        bookmarks,
        isLoading,
        setQ,
        addBookmark : addBookmarkMutation,
        deleteBookmark : deleteBookmarkMutation
    }
    
}