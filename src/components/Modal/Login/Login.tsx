"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Login({isOpen,onClose} : {isOpen : boolean,onClose : any}) {

    const [active,setActive] = useState(false);

    useEffect(()=>{
        const html = document.querySelector('html');
        if(!html) return;
        if(isOpen){
          html.style.overflowY = "hidden";
        }
        setTimeout(() => {
          setActive(true);
        }, 200);
    },[isOpen]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-[rgba(000,000,000,0.6)]">
        <div className="z-50 w-[90%] max-w-[422px] fixed overflow-visible top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-9 px-16 box-border rounded-xl">
            <button type="button" className="absolute right-4 top-5 cursor-pointer" onClick={onClose}>
                <Image src="/asset/image/icon/close.svg" alt="취소버튼" width={24} height={24} />
            </button>
            <div className="w-[61px] mx-auto mb-5">
                <Image src="/asset/image/icon.png" alt="로고 아이콘" width={64} height={63}/>
            </div>
            <h5 className="font-semibold text-lg text-center">로그인</h5>
            <form className="mt-6">
                <input type="text" placeholder='이메일을 입력해주세요.' className="h-9 md:h-11 rounded-lg border border-Outline font-medium text-sm md:text-base w-full px-3" />
                <input type="password" placeholder='비밀번호를 입력하세요.'  className="h-9 md:h-11 rounded-lg border border-Outline font-medium text-sm md:text-base w-full px-3 mt-2" />
                <div className="text-center mt-9">
                    <button className="font-semibold text-sm md:text-base text-OnPrimary bg-primary py-2 px-4 rounded">로그인 하기</button>
                </div>
            </form>
            <div className="text-center text-primary font-medium text-[13px] mt-9">
                <Link href={"/find"}>비밀번호 찾기</Link>
                <Link href={"/sign"} className="pl-1 ml-1 relative before:block before:w-[1px] before:absolute before:left-0 before:top-0 before:h-full  before:bg-primary">회원가입 하기</Link>
            </div>
        </div>
    </div>
  )
}
