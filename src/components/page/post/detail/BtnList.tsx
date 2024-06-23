"use client"

import { useRouter } from "next/navigation"

<<<<<<< Updated upstream
export default function BtnList() {
=======
export default function BtnList({postid,yours} : {postid : string, yours : boolean}) {
>>>>>>> Stashed changes

    const router = useRouter();

  return (
    <div className="flex justify-center gap-5 mt-7 md:mt-8">
<<<<<<< Updated upstream
        <button className="inline-flex items-center text-primary bg-OnPrimary text-sm md:text-base font-medium border border-[#4FAAFF] rounded py-[9.5px] px-4 justify-center cursor-pointer">삭제 하기</button>
        <button onClick={()=>router.push('/')} className="inline-flex items-center text-primary bg-OnPrimary text-sm md:text-base font-medium border border-[#4FAAFF] rounded py-[9.5px] px-4 justify-center cursor-pointer">목록 보기</button>
        <button className="inline-flex items-center text-primary bg-OnPrimary text-sm md:text-base font-medium border border-[#4FAAFF] rounded py-[9.5px] px-4 justify-center cursor-pointer">수정 하기</button>
=======
        {
          yours &&
          <button onClick={removeHandler} className="inline-flex items-center text-Error bg-OnPrimary text-sm md:text-base font-medium border border-Error rounded py-[9.5px] px-4 justify-center cursor-pointer">삭제 하기</button>
        }
        <button onClick={()=>router.push('/')} className="inline-flex items-center text-primary bg-OnPrimary text-sm md:text-base font-medium border border-primary rounded py-[9.5px] px-4 justify-center cursor-pointer">목록 보기</button>
        {
          yours &&
          <button onClick={editHandler} className="inline-flex items-center text-SubColor4 bg-OnPrimary text-sm md:text-base font-medium border border-SubColor4 rounded py-[9.5px] px-4 justify-center cursor-pointer">수정 하기</button>
        }
>>>>>>> Stashed changes
    </div>
  )
}
