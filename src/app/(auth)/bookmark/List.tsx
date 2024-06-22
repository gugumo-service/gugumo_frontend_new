"use client"
import Card from "@/components/Common/Card/Card";
import { useBookmark } from "@/hooks/useBookmark";

export default function List({session} : {session : any}) {
    const {data : bookmarks} = useBookmark(session);
  return (
    <>{bookmarks?.data.content.map((el : any)=><Card key={el.postId} el={el}/>)}</>
  )
}
