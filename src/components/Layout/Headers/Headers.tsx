"use client"
import Wrap from "@/components/Common/Wrap";
import Link from "next/link";
import { useSession } from "next-auth/react";
import LoginBtn from "@/components/Layout/Headers/LoginBtn";
import Alarm from "@/components/Layout/Headers/Alarm/Alarm";
import User from "@/components/Layout/Headers/User";
import BookmarkSVG from "@/asset/image/bookmark.svg";
import Image from "next/image";

export default function Headers() {

  const {data} = useSession();

  return (
    <header className="mt-8 md:mt-10 w-full relative z-20">
      <Wrap className="flex items-center justify-between">
        <Link href={'/'} className="md:w-[172px] w-[91px]"><img src="/asset/image/logo.svg" alt="로고"/></Link>
        {
          !data 
          ?
            <LoginBtn/>
          :
            <div className="flex items-center gap-[26px]">
              <Alarm/>
              <Link href={"/bookmark"}>
                <Image src={"/asset/image/icon/bookmark.png"} width={24} height={29} alt="북마크"/>
              </Link>
              <User/>
            </div>
        }
      </Wrap>
    </header>
  )
}