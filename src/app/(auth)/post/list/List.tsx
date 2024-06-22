"use client"
import Card from "@/components/Common/Card/Card";
import { usePost } from "@/hooks/usePost";

export default function List({session} : {session : any}) {
    const {data : postList} = usePost(session);
  return (
    <>{postList?.data.content.map((el : any)=><Card key={el.postId} el={el}/>)}</>
  )
}
