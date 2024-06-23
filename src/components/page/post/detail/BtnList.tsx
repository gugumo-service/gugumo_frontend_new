"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

const BUTTONSTYLE = "inline-flex items-center bg-OnPrimary text-sm md:text-base font-medium border rounded py-[9.5px] px-4 justify-center cursor-pointer";

export default function BtnList({postid,yours} : {postid : string, yours : boolean}) {

    const router = useRouter();
    const {data : session} = useSession() as any;

    const editHandler = ()=>{
      router.push(`/post/edit/${postid}`)
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
      {
        yours &&
        <button 
          onClick={removeHandler} 
          className={`${BUTTONSTYLE} text-Error border-Error hover:text-white hover:bg-Error transition-all`}
        >삭제 하기</button>
      }
      <button 
        onClick={()=>router.push('/')} 
        className={`${BUTTONSTYLE} text-primary border-primary hover:text-white hover:bg-primary transition-all`}
      >목록 보기</button>
      {
        yours &&
        <button 
          onClick={editHandler} 
          className={`${BUTTONSTYLE} text-SubColor4 border-SubColor4 hover:text-white hover:bg-SubColor4 transition-all`}
        >수정 하기</button>
      }
    </div>
  )
}
