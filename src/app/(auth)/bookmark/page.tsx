import Search from "@/components/page/auth/Search";
import Wrap from "@/components/Common/Wrap";

export default async function Bookmark({searchParams} : {searchParams? : {q? : string}}) {

    return (
        <main className="pt-[23px] md:pt-[50x] pb-[121px] md:pb-[170px]">
            <Wrap>
                
                <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-6 md:gap-5">
                    <h4>북마크</h4>
                    <Search/>
                </div>

                <div className="mt-5 md:mt-[46px] bg-Surface rounded-xl p-[70px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-[30px] mt-[10px] md:mt-7">
                        {/* { data.data.content.map((el : any)=><Card key={el.postId} el={el}/>) } */}
                    </div>
                </div>

            </Wrap>
        </main>
    )

}
