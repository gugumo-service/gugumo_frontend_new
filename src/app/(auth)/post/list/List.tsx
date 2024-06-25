"use client"
import Card from "@/components/Common/Card/Card";
import SkeletonCard from "@/components/Common/Card/SkeletonCard";
import Search from "@/components/page/auth/Search";
import { usePost } from "@/hooks/usePost";

export default function List({session} : {session : any}) {
  
  const {posts,isLoading,setQ} = usePost(session);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-6 md:gap-5 text-lg md:text-2xl font-medium">
        <h4>작성글</h4>
        <Search setQ={setQ}/>
      </div>

      <div className="mt-5 md:mt-[46px] md:bg-Surface rounded-xl md:px-[5%] md:p-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-[30px] mt-[10px] md:mt-7">
          {
            isLoading 
            ?
              new Array(12).fill(0).map((_,index)=><SkeletonCard key={index}/>)
            :
              posts.data.content.map((el : any)=><Card key={el.postId} el={el}/>)
          }
        </div>
        {
          !isLoading && posts.data.content.length <= 0 &&
            <p className="text-center">게시글이 존재 하지 않습니다.</p>
        }
      </div>
    </>
  )

}
