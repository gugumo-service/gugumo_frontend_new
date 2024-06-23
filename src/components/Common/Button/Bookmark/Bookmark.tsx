"use client"
import BookmarkSVG from "@/asset/image/bookmark.svg";
import { useBookmark } from "@/hooks/useBookmark";
import { useSession } from "next-auth/react";

export default function Bookmark({postId,bookmarked} : {postId : number,bookmarked : boolean}) {
  const {data:session} = useSession() as any;
  const {addBookmark,deleteBookmark} = useBookmark(session);

  const bookmarkHandler = async (e : any,postId : number)=>{
    e.stopPropagation();

    if(!bookmarked){
      try {
        addBookmark.mutate({session,postId});
      }
      catch(err){
        console.log(err);
      }
    }else{
      if(confirm('정말 삭제 하시겠습니까?')){
        try {
          deleteBookmark.mutate({session,postId})
        }
        catch(err){
          console.log(err);
        }
      }
    }
  }

  return (
    <button onClick={(e)=>bookmarkHandler(e,postId)} type="button" className="cursor-pointer">
      <BookmarkSVG className={`stroke-[#4FAAFF] group-hover:stroke-white ${bookmarked ? "fill-[#4FAAFF]" : "fill-none"}`} width={24} height={24} alt="북마크 아이콘"/>
    </button>
  )

}
