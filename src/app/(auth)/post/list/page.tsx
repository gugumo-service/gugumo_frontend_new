import Card from "@/components/Common/Card/Card";
import Wrap from "@/components/Common/Wrap";
import Footers from "@/components/Layout/Footers/Footers";
import Headers from "@/components/Layout/Headers/Headers";
import Search from "@/components/page/auth/Search";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function List({searchParams} : {searchParams? : {q? : string}}) {

    const q = searchParams?.q || "";

    const session = await getServerSession(authOptions) as any;

    if(!session){
        return redirect('/');
    }

    const res = await fetch(`${process.env.API_URL}/api/v1/meeting/my?q=${q}`,{
        headers : {
            "Authorization" : session?.accessToken
        },
        cache : "no-cache"
    });
    const data = await res.json();

  return (
    <>
        <Headers/>
        <main className="pt-[23px] md:pt-[50x] pb-[121px] md:pb-[170px]">
            <Wrap>
                
                <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-6 md:gap-5">
                    <h4>작성글</h4>
                    <Search/>
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
