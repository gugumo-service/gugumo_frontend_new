import Card from "@/components/Common/Card/Card";
import Wrap from "@/components/Common/Wrap";
import Footers from "@/components/Layout/Footers/Footers";
import Headers from "@/components/Layout/Headers/Headers";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function List() {

    const session = await getServerSession(authOptions) as any;

    if(!session){
        return redirect('/');
    }

    const res = await fetch(`${process.env.API_URL}/api/v1/meeting/my`,{
        headers : {
            "Authorization" : session?.accessToken
        }
    });
    const data = await res.json();

  return (
    <>
        <Headers/>
        <main className="pt-[23px] md:pt-[50x] pb-[121px] md:pb-[170px]">
            <Wrap>
                
                <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-6 md:gap-5">
                    <h4>작성글</h4>
                    <form className="-order-1 md:order-1 w-full md:w-[492px] h-[34px] md:h-[53px] relative rounded-lg block bg-Surface">
                        <input type="text" className="w-full h-full box-border px-3 bg-transparent text-[13px] md:text-base font-medium outline-none" placeholder="제목, 글 내용을 검색해보세요!"/>
                        <button className="absolute w-5 md:w-auto right-[10px] top-1/2 -translate-y-1/2">
                            <Image src="/asset/image/icon/search.svg" alt="검색버튼" width={24} height={24} />
                        </button>
                    </form>
                </div>

                <div className="mt-5 md:mt-[46px] bg-Surface rounded-xl p-[70px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-[30px] mt-[10px] md:mt-7">
                        { data.data.content.map((el : any)=><Card key={el.postId} el={el}/>) }
                    </div>
                </div>

            </Wrap>
        </main>
        <Footers/>
    </>
  )
}
