import Headers from "@/components/Layout/Headers/Headers";
import Wrap from "@/components/Common/Wrap";
import Banner from "@/components/page/main/Banner";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
import Footers from "@/components/Layout/Footers/Footers";
import Recommends from "@/components/Layout/Recommends/Recommends";
import Card from "@/components/Common/Card/Card";

const LOCATION = [{get : "SEOUL",name : "서울"},{get : "GYEONGGI",name : "경기"},{get : "INCHEON",name : "인천"},{get : "DAEGU",name : "대구"},{get : "BUSAN",name : "부산"},{get : "GYEONGNAM",name : "경남"},{get : "GYEONGBUK",name : "경북"},{get : "GANGWON",name : "강원"},{get : "JEONNAM",name : "전남"},{get : "JEONBUK",name : "전북"},{get : "OTHER",name : "그외"}];

const GAMETYPE = [{get : "BADMINTON",name : "배드민턴"},{get : "FUTSAL",name : "풋살"},{get : "BASKETBALL",name : "농구"},{get : "TENNIS",name : "테니스"},{get : "TABLETENNIS",name : "탁구"},{get : "BASEBALL",name : "야구"}]

export default async function Home() {

  const res = await fetch(`${process.env.API_URL}/api/v1/meeting`);
  const data = await res.json();

  return (
    <>
      <Headers/>
      <main className="md:pt-[50px] md:pb-[170px] pt-6 pb-[121px]">
        <Banner/>
        <Wrap><Recommends/></Wrap>

        <Wrap className="pt-8 mt-8 md:mt-[100px] md:pt-0 border-t-[6px] border-Surface md:border-none">

          {/* 검색 */}
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-6 md:gap-5">
            
            <div className="flex gap-5 md:gap-6">
              <button className={`cursor-pointer text-nowrap text-lg md:text-2xl font-medium text-OnSurface ${true ? "font-semibold text-primary" : ""} `}>모집중</button>
              <button className="cursor-pointer text-nowrap text-lg md:text-2xl font-medium text-OnSurface">모집완료</button>
              <button className="cursor-pointer text-nowrap text-lg md:text-2xl font-medium text-OnSurface">전체</button>
            </div>

            <form className="-order-1 md:order-1 w-full md:w-[492px] h-[34px] md:h-[53px] relative rounded-lg block bg-Surface">
              <input type="text" className="w-full h-full box-border px-3 bg-transparent text-[13px] md:text-base font-medium outline-none" placeholder="제목, 글 내용을 검색해보세요!"/>
              <button className="absolute w-5 md:w-auto right-[10px] top-1/2 -translate-y-1/2">
                <Image src="/asset/image/icon/search.svg" alt="검색버튼" width={24} height={24} />
              </button>
            </form>

          </div>

          {/* 지역 */}
          <div className="mt-[25px] md:mt-9">
            <p className="text-base md:text-lg font-semibold text-OnSurface">지역</p>
            <div className="flex md:flex-wrap overflow-x-auto gap-[4px] md:gap-[14px] mt-[11px]">
              <button className="cursor-pointer text-sm md:text-base font-medium md:py-2 px-5 md:px-7 h-8 md:h-auto rounded-full border border-primary whitespace-nowrap text-OnSurface leading-none">전체</button>
              {
                LOCATION.map((el,index)=>(
                  <button key={index} className="cursor-pointer text-sm md:text-base font-medium md:py-2 px-5 md:px-7 h-8 md:h-auto rounded-full border border-primary whitespace-nowrap text-OnSurface leading-none">{el.name}</button>
                ))
              }
            </div>
          </div>

          {/* 종목 */}
          <div className="mt-[18px] md:mt-[15px]">
            <p className="text-base md:text-lg font-semibold text-OnSurface">종목</p>
            <div className="flex md:flex-wrap overflow-x-auto gap-[4px] md:gap-[14px] mt-[11px]">
              <button className={`w-[77px] flex-none border border-primary box-border rounded-full relative cursor-pointer overflow-hidden bg-background ${true ? "bg-primary" : ""} after:block after:pb-[100%]`}>
                <div className={`absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center gap-[2px] text-primary text-sm font-medium ${true ? "text-OnPrimary" : ""}`}>
                  전체
                </div>
              </button>
              {
                GAMETYPE.map((el,index)=>(
                  <button key={index} className={`w-[77px] flex-none border border-primary box-border rounded-full relative cursor-pointer overflow-hidden bg-background after:block after:pb-[100%]`}>
                    <div className={`absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center gap-[2px] text-primary text-sm font-medium `}>
                      {el.name}
                    </div>
                  </button>
                ))
              }
            </div>
          </div>

          <div className="md:bg-[#F4F5F8] mt-[38px] md:mt-[53px] md:pt-[39px] md:px-[70px] md:pb-[49px] md:rounded-xl">

            <div className="flex justify-end relative text-[13px]">
              <div className="inline-block relative">
                <p className="flex items-center gap-[5.5px] cursor-pointer">밑 <IoChevronDown/></p>
                <ul className="absolute top-full bg-white left-1/2 -translate-x-1/2 whitespace-nowrap text-center py-5 px-[15px] box-border rounded-lg border border-Surface">
                  <li className="cursor-pointer">최신순</li>
                  <li className="cursor-pointer mt-3">인기순</li>
                  <li className="cursor-pointer mt-3">오래된순</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[13px] md:gap-[30px] mt-[10px] md:mt-7">
              { data.data.content.map((el : any)=><Card key={el.postId} el={el}/>) }
            </div>

            <div className="mt-[13px] md:mt-7 text-right">
              <button className="inline-flex items-center py-[0.4em] text-sm md:text-base px-4 font-semibold text-primary bg-OnPrimary border border-primary rounded gap-1 cursor-pointer">
                <Image src={"/asset/image/icon/write.svg"} alt="작성 아이콘" width={24} height={24}/>
                새글 작성
              </button>
            </div>

          </div>

        </Wrap>

      </main>
      <Footers/>
    </>
  )
}