"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

export default function BtnList({postid} : {postid : string}) {

    const router = useRouter();
    const {data : session} = useSession() as any;

    const editHandler = ()=>{
      router.push(`/edit/${postid}`)
    }

    const removeHandler = async ()=>{
      try {
        const response = await fetch(`/back/api/v1/meeting/${postid}`,{
          method : "DELETE",
          headers : {
            "Authorization" : session.accessToken
          }
        });
        if(response.ok){
          const data = await response.json();

          if(data.status === "success"){
            alert('게시글을 삭제 하였습니다.')
            return router.push('/');
          }else{
            return alert('삭제하는데 실패 하였습니다.');  
          }

        }else{
          return alert('삭제하는데 실패 하였습니다.');
        }
      }
      catch(err){
        alert('오류가 발생 했습니다.');
      }
    }

  return (
    <div className="flex justify-center gap-5 mt-7 md:mt-8">
        <button onClick={removeHandler} className="inline-flex items-center text-primary bg-OnPrimary text-sm md:text-base font-medium border border-[#4FAAFF] rounded py-[9.5px] px-4 justify-center cursor-pointer">삭제 하기</button>
        <button onClick={()=>router.push('/')} className="inline-flex items-center text-primary bg-OnPrimary text-sm md:text-base font-medium border border-[#4FAAFF] rounded py-[9.5px] px-4 justify-center cursor-pointer">목록 보기</button>
        <button onClick={editHandler} className="inline-flex items-center text-primary bg-OnPrimary text-sm md:text-base font-medium border border-[#4FAAFF] rounded py-[9.5px] px-4 justify-center cursor-pointer">수정 하기</button>
    </div>
  )
}
