import Wrap from "@/components/Common/Wrap";
import Alarm from "@/components/Layout/Headers/Alarm/Alarm";
import LoginBtn from "@/components/Layout/Headers/LoginBtn";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import BookmarkSVG from "@/asset/image/bookmark.svg";
import LogoutBtn from "@/components/Layout/Headers/LogoutBtn";

export default async function Headers() {

  const session = await getServerSession(authOptions);

  return (
    <header className="mt-8 md:mt-10 w-full relative z-20">
      <Wrap className="flex items-center justify-between">
        <Link href={'/'} className="md:w-[172px] w-[91px]"><img src="/asset/image/logo.svg" alt="로고"/></Link>
        {
          !session 
          ?
            <LoginBtn/>
          :
            <div className="flex items-center gap-[26px]">
              <Alarm/>
              <Link href={"/bookmark"}>
                <BookmarkSVG className="cursor-pointer stroke-primary" width={36} height={37}/>
              </Link>
              <div className="relative">
                <Image className="cursor-pointer" src="/asset/image/icon/user.svg" alt="유저 아이콘" width={36} height={36}/>
                <ul className="absolute right-0 top-full py-5 px-[30px] border border-primary text-[13px] font-medium rounded whitespace-nowrap text-center bg-background mt-[10px]">
                  <li>
                    <Link href={"/post/list"} className="text-OnSurface">작성글</Link>
                  </li>
                  <li className="mt-3">
                    <Link href={"/mypage"} className="text-OnSurface">회원정보</Link>
                  </li>
                  <li className="mt-3">
                    <LogoutBtn/>
                  </li>
                </ul>
              </div>
            </div>
        }
      </Wrap>
    </header>
  )
}