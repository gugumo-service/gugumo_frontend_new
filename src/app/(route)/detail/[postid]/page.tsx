import Wrap from "@/components/Common/Wrap";
import Footers from "@/components/Layout/Footers/Footers";
import Recommends from "@/components/Layout/Recommends/Recommends";
import { authOptions } from "@/lib/authOptions";
import moment from "moment";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import ViewSVG from "@/asset/image/view.svg";
import ViewerComponent from "@/components/page/post/detail/ViewerComponent";
import Headers from "@/components/Layout/Headers/Headers";
import BtnList from "@/components/page/post/detail/BtnList";
import Bookmark from "@/components/Common/Button/Bookmark/Bookmark";
import Comments from "@/components/page/post/detail/Comment/Comments";

export default async function Detail({params} : {params : {postid : string}}) {

    const session = await getServerSession(authOptions) as any;

    const res = await fetch(`${process.env.API_URL}/api/v1/meeting/${params.postid}`,{
        headers : {
            "Authorization" : session?.accessToken
        }
    })

    const data = await res.json();

  return (
    <>
        <Headers/>
        <main className="pt-10 md:pt-[108px] pb-36 md:pb-40">
            <Wrap>

                <Link href={'/'}>
                    <Image src="/asset/image/icon/prev_arrow.svg" alt="뒤로가기" width={20} height={18}/>
                </Link>

                <h1 className="text-lg md:text-2xl mt-8 font-semibold leading-normal">{data.data.title}</h1>
                
                <div className="flex items-center mt-2 md:mt-7 pb-[18px] text-sm md:text-lg font-medium text-OnBackgroundGray border-b border-Outline justify-between flex-wrap gap-1">
                    <div className="flex items-center gap-[10px] md:gap-[18px]">
                        <p>{data.data.author !=="" ? data.data.author : "탈퇴한 유저"}</p>
                        <p>{moment(data.data.createdDateTime).format('YYYY-MM-DD')}</p>
                        <div className="flex items-center gap-[10px]">
                            <ViewSVG width={24} height={24} stroke="#A5A5A5"/>
                            {data.data.viewCount}
                        </div>
                    </div>
                    <div className="flex items-center gap-[6px] text-primary">
                        <Bookmark postId={data.postId} bookmarked={data.data.bookmarked}/>
                        <p className="text-sm md:text-xl font-medium">01</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 md:mt-8 gap-x-4 md:gap-5">
                    <div className="grid items-center text-OnSurface text-sm md:text-lg font-medium gap-3 grid-cols-[82px_1fr] md:grid-cols-[102px_1fr]">
                        <h4 className="py-3 px-6 bg-Surface text-center box-border text-nowrap w-full h-10 flex items-center justify-center rounded">모집형식</h4>
                        <p>{data.data.meetingType}</p>
                    </div>
                    <div className="grid items-center text-OnSurface text-sm md:text-lg font-medium gap-3 grid-cols-[82px_1fr] md:grid-cols-[102px_1fr]">
                        <h4 className="py-3 px-6 bg-Surface text-center box-border text-nowrap w-full h-10 flex items-center justify-center rounded">지역</h4>
                        <p>{data.data.location}</p>
                    </div>
                    <div className="grid items-center text-OnSurface text-sm md:text-lg font-medium gap-3 grid-cols-[82px_1fr] md:grid-cols-[102px_1fr]">
                        <h4 className="py-3 px-6 bg-Surface text-center box-border text-nowrap w-full h-10 flex items-center justify-center rounded">구기종목</h4>
                        <p>{data.data.gameType}</p>
                    </div>
                    <div className="grid items-center text-OnSurface text-sm md:text-lg font-medium gap-3 grid-cols-[82px_1fr] md:grid-cols-[102px_1fr]">
                        <h4 className="py-3 px-6 bg-Surface text-center box-border text-nowrap w-full h-10 flex items-center justify-center rounded">시간대</h4>
                        <p>{data.data.meetingTime}</p>
                    </div>
                    <div className="grid items-center text-OnSurface text-sm md:text-lg font-medium gap-3 grid-cols-[82px_1fr] md:grid-cols-[102px_1fr]">
                        <h4 className="py-3 px-6 bg-Surface text-center box-border text-nowrap w-full h-10 flex items-center justify-center rounded">모임 요일</h4>
                        <p>{data.data.meetingDays}</p>
                    </div>
                    <div className="grid items-center text-OnSurface text-sm md:text-lg font-medium gap-3 grid-cols-[82px_1fr] md:grid-cols-[102px_1fr]">
                        <h4 className="py-3 px-6 bg-Surface text-center box-border text-nowrap w-full h-10 flex items-center justify-center rounded">모임 날짜</h4>
                        <p>{data.data.meetingDateTime}</p>
                    </div>
                    <div className="grid items-center text-OnSurface text-sm md:text-lg font-medium gap-3 grid-cols-[82px_1fr] md:grid-cols-[102px_1fr]">
                        <h4 className="py-3 px-6 bg-Surface text-center box-border text-nowrap w-full h-10 flex items-center justify-center rounded">모집 인원</h4>
                        <p>{data.data.meetingMemberNum} 명</p>
                    </div>
                    <div className="grid items-center text-OnSurface text-sm md:text-lg font-medium gap-3 grid-cols-[82px_1fr] md:grid-cols-[102px_1fr]">
                        <h4 className="py-3 px-6 bg-Surface text-center box-border text-nowrap w-full h-10 flex items-center justify-center rounded">모집 마감</h4>
                        <p>{data.data.meetingDeadline}</p>
                    </div>
                    <div className="grid items-center text-OnSurface text-sm md:text-lg font-medium gap-3 grid-cols-[104px_1fr] md:grid-cols-[136px_1fr]">
                        <h4 className="py-3 px-6 bg-Surface text-center box-border text-nowrap w-full h-10 flex items-center justify-center rounded">오픈카톡 주소</h4>
                        <a href={data.data.openKakao} target="_blank" className="w-36 md:w-[158px] h-10 flex items-center justify-center bg-primary text-white rounded">
                            오픈톡 참여 <Image src="/asset/image/icon/link.svg" width={24} height={24} alt="링크 아이콘" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 md:mt-24 min-h-72 md:min-h-[848px] w-full py-3 md:py-9 px-4 md:px-12 box-border text-sm md:text-lg font-medium leading-8 border">
                    <ViewerComponent content={data.data.content}/>
                </div>

                <BtnList/>
                <Recommends/>
                <Comments session={session} postid={params.postid}/>

            </Wrap>
        </main>
        <Footers/>
    </>
  )
}
