import Wrap from "@/components/Common/Wrap";
import Footers from "@/components/Layout/Footers/Footers";
import Headers from "@/components/Layout/Headers/Headers";
import Nickname from "@/components/page/auth/mypage/Nickname";
import Password from "@/components/page/auth/mypage/Password";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Mypage() {

    const session = await getServerSession(authOptions) as any;
    if(!session){
        return redirect('/');
    }
    const res = await fetch(`${process.env.API_URL}/api/v1/member`,{
        headers : {
            "Authorization" : session?.accessToken
        }
    });
    const data = await res.json();

  return (
    <>
        <Headers/>
        <main className="py-[2.5%] md:pt-[120px] md:pb-[93px]">
            <Wrap className="box-border">
                <button type="button" className="cursor-pointer md:hidden">
                    <Image src="/asset/images/icon/prev_arrow.svg" alt="뒤로가기" width={20} height={18} />
                </button>
                <h1 className="text-OnBackground text-lg md:text-2xl font-medium mt-[10px]">마이페이지</h1>

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-7 mt-4 md:mt-[60px]">
                    <div className="w-[78px] md:w-[104px] rounded-full bg-Surface bg-center bg-[75% 75%] bg-no-repeat after:block after:pb-[100%]"></div>
                    <div className="flex items-center gap-[7px] text-base font-medium">
                        닉네임
                        <p className="text-[13px] font-medium text-OnSurface border border-OnSurface py-1 px-2 rounded-full">
                            {data.data.nickname}
                        </p>
                    </div>
                </div>
            </Wrap>

            <Wrap className="border-t-[6px] border-Surface md:border-0 mt-10">
                <Nickname/>
                <Password/>
                <div className="text-center mt-[88px] md:mt-20">
                    <button className="text-xs md:text-base font-medium cursor-pointer border-b border-OnBackgroundGray px-1 pb-[2px] text-OnBackgroundGray">회원탈퇴</button>
                </div>
            </Wrap>

        </main>
        <Footers/>
    </>
  )
}
