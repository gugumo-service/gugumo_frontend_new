"use client"
import BookmarkSVG from "@/asset/image/bookmark.svg";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Bookmark({postId,bookmarked} : {postId : number,bookmarked : boolean}) {
  const {data:session} = useSession() as any;
  const [isBookMark,setIsBookMark] = useState(bookmarked);

  const bookmarkHandler = async (e : any,postId : number)=>{
    e.stopPropagation();

    if(!isBookMark){
      try {
        const res = await fetch("/back/api/v1/bookmark/new",{
          method : "POST",
          headers : {
            'Content-Type': 'application/json',
            "Authorization" : session?.accessToken
          },
          body : JSON.stringify({postId})
        })
        if(res.ok){
          setIsBookMark(true);
        }
      }
      catch(err){
        console.log(err);
      }

    }else{
      try {
        const res = await fetch(`/back/api/v1/bookmark/${postId}`,{
          method : "DELETE",
          headers : {
            'Content-Type': 'application/json',
            "Authorization" : session?.accessToken
          }
        })
        if(res.ok){
          setIsBookMark(false);
        }
      }
      catch(err){
        console.log(err);
      }

    }

  }

  return (
    <button onClick={(e)=>bookmarkHandler(e,postId)} type="button" className="cursor-pointer">
      <BookmarkSVG className={`stroke-[#4FAAFF] ${isBookMark ? "fill-[#4FAAFF]" : "fill-none"}`} width={24} height={24} alt="북마크 아이콘"/>
    </button>
  )

}
