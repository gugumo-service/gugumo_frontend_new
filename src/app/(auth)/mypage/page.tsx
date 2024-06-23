"use client"
import Wrap from "@/components/Common/Wrap";
import Nickname from "@/components/page/auth/mypage/Nickname";
import Password from "@/components/page/auth/mypage/Password";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Mypage() {

    const [nickname,setNickname] = useState('');
    const {data : session} = useSession() as any;

    const fetchs = async ()=>{
        try {
            const res = await fetch(`/back/api/v1/member`,{
                headers : {
                    "Authorization" : session?.accessToken
                }
            });
            if(res.ok){
                const data = await res.json();
                console.log(data);
                setNickname(data.data.nickname);
            }
        }
        catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        fetchs();
    },[session]);

  return (
    <main className="py-[2.5%] md:pt-[120px] md:pb-[93px]">
        <Wrap className="box-border">
            <button type="button" className="cursor-pointer md:hidden">
                <Image src="/asset/image/icon/prev_arrow.svg" alt="뒤로가기" width={20} height={18} />
            </button>
            <h1 className="text-OnBackground text-lg md:text-2xl font-medium mt-[10px]">마이페이지</h1>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-7 mt-4 md:mt-[60px]">
                <div className="size-[78px] md:size-[104px] rounded-full border bg-center bg-[url(/asset/image/user/user.png)] bg-[length:95%_95%] bg-no-repeat"></div>
                <div className="flex items-center gap-[7px] text-base font-medium">
                    닉네임
                    <p className="text-[13px] font-medium text-OnSurface border border-OnSurface py-1 px-2 rounded-full leading-none">
                        {nickname}
                    </p>
                </div>
            </div>
        </Wrap>

        <Wrap className="border-t-[6px] border-Surface md:border-0 mt-10">
            <Nickname setNickname={setNickname}/>
            <Password/>
            <div className="text-center mt-[88px] md:mt-20">
                <button className="text-xs md:text-base font-medium cursor-pointer border-b border-OnBackgroundGray px-1 pb-[2px] text-OnBackgroundGray">회원탈퇴</button>
            </div>
        </Wrap>
    </main>
  )
}
