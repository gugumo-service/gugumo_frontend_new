import Wrap from "@/components/Common/Wrap";
import Alarm from "@/components/Layout/Headers/Alarm/Alarm";
import LoginBtn from "@/components/Layout/Headers/LoginBtn";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import BookmarkSVG from "@/asset/image/bookmark.svg";
import User from "@/components/Layout/Headers/User";

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
              <User/>
            </div>
        }
      </Wrap>
    </header>
  )
}