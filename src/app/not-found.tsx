"use client"
import { useRouter } from "next/navigation"

const BUTTONSTYLE = "w-[88px] h-12 border border-primary rounded text-primary text-base font-semibold cursor-pointer";

export default function NotFound() {

    const router = useRouter();

  return (
    <div className="flex flex-col w-full items-center justify-center h-screen text-center">
        <img src="/asset/image/notfound.png" alt="에러로고" />
        <h1 className="text-5xl font-medium text-primary mt-7">404 ERROR</h1>
        <dl className="mt-10 w-[442px]">
          <dt className="text-2xl font-medium">
            죄송합니다. 현재 페이지를 찾을 수 없습니다.
          </dt>
          <dd className="text-lg leading-normal text-OnBackgroundGray mt-6">
            존재하지 않는 주소를 입력하셨거나 요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다. 
          </dd>
        </dl>
        <div className="flex mt-[100px] gap-[18px]">
          <button className={`${BUTTONSTYLE} transition-all hover:text-background hover:bg-primary `} onClick={()=>router.back()}>이전으로</button>
          <button className={`${BUTTONSTYLE} transition-all hover:text-background hover:bg-primary `} onClick={()=>router.push('/')}>메인으로</button>
        </div>
    </div>
  )
}
