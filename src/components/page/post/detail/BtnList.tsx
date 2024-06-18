"use client"

import { useRouter } from "next/navigation"

export default function BtnList() {

    const router = useRouter();

  return (
    <div className="flex justify-center gap-5 mt-7 md:mt-8">
        <button className="inline-flex items-center text-primary bg-OnPrimary text-sm md:text-base font-medium border border-[#4FAAFF] rounded py-[9.5px] px-4 justify-center cursor-pointer">삭제 하기</button>
        <button onClick={()=>router.push('/')} className="inline-flex items-center text-primary bg-OnPrimary text-sm md:text-base font-medium border border-[#4FAAFF] rounded py-[9.5px] px-4 justify-center cursor-pointer">목록 보기</button>
        <button className="inline-flex items-center text-primary bg-OnPrimary text-sm md:text-base font-medium border border-[#4FAAFF] rounded py-[9.5px] px-4 justify-center cursor-pointer">수정 하기</button>
    </div>
  )
}
