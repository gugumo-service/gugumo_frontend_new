"use client"
import BookmarkSVG from "@/asset/image/bookmark.svg";
import { useAddBookmark, useDeleteBookmark } from "@/hooks/useBookmark";
import { useSession } from "next-auth/react";

export default function Bookmark({postId,bookmarked} : {postId : number,bookmarked : boolean}) {
  const {data:session} = useSession() as any;

  const {mutate : addBookmark} = useAddBookmark();
  const {mutate : deleteBookmark} = useDeleteBookmark();

  const bookmarkHandler = async (e : any,postId : number)=>{
    e.stopPropagation();

    if(!bookmarked){

      try {
        addBookmark({
          session,
          postId
        });
      }
      catch(err){
        console.log(err);
      }

    }else{

      try {
        deleteBookmark({
          session,
          postId
        })
      }
      catch(err){
        console.log(err);
      }

    }
  }

  return (
    <button onClick={(e)=>bookmarkHandler(e,postId)} type="button" className="cursor-pointer">
      <BookmarkSVG className={`stroke-[#4FAAFF] ${bookmarked ? "fill-[#4FAAFF]" : "fill-none"}`} width={24} height={24} alt="북마크 아이콘"/>
    </button>
  )

}
