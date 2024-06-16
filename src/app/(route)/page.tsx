import Recommends from "@/components/Common/Recommends/Recommends";
import Headers from "@/components/Layout/Headers/Headers";
import Wrap from "@/components/Common/Wrap";
import Banner from "@/components/page/main/Banner";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
import Footers from "@/components/Layout/Footers/Footers";

export default function Home() {
  return (
    <>
      <Headers/>
      <main className="md:pt-[50px] md:pb-[170px] pt-6 pb-[121px]">
        <Banner/>
        <Wrap>
          <Recommends/>
        </Wrap>

        <Wrap className="mt-[100px]">

          <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-6 md:gap-5">
            
            <div className="flex gap-5 md:gap-6">
              <button className="cursor-pointer text-nowrap text-lg md:text-2xl font-medium text-OnSurface">모집중</button>
              <button className="cursor-pointer text-nowrap text-lg md:text-2xl font-medium text-OnSurface">모집완료</button>
              <button className="cursor-pointer text-nowrap text-lg md:text-2xl font-medium text-OnSurface">전체</button>
            </div>

            <form className="w-full -order-1 md:order-1 md:w-[492px] h-[34px] md:h-[53px] relative rounded-lg block bg-Surface">
              <input type="text" className="w-full h-full box-border px-3 bg-transparent text-base font-[13px] md:font-medium outline-none" placeholder="제목, 글 내용을 검색해보세요!"/>
              <button className="absolute w-5 md:w-auto right-[10px] top-1/2 -translate-y-1/2">
                <Image src="/asset/image/icon/search.svg" alt="검색버튼" width={24} height={24} />
              </button>
            </form>

          </div>

          <div className="mt-[25px] md:mt-9">
            <p className="text-lg font-semibold text-OnSurface">지역</p>
            <div className="flex overflow-x-auto gap-[4px] md:gap-[14px] mt-[11px]">
              <button className="cursor-pointer text-base font-medium py-2 px-7 rounded-full border border-primary whitespace-nowrap text-OnSurface" >1</button>
              <button className="cursor-pointer text-base font-medium py-2 px-7 rounded-full border border-primary whitespace-nowrap text-OnSurface" >1</button>
              <button className="cursor-pointer text-base font-medium py-2 px-7 rounded-full border border-primary whitespace-nowrap text-OnSurface" >1</button>
              <button className="cursor-pointer text-base font-medium py-2 px-7 rounded-full border border-primary whitespace-nowrap text-OnSurface" >1</button>
              <button className="cursor-pointer text-base font-medium py-2 px-7 rounded-full border border-primary whitespace-nowrap text-OnSurface" >1</button>
              <button className="cursor-pointer text-base font-medium py-2 px-7 rounded-full border border-primary whitespace-nowrap text-OnSurface" >1</button>
              <button className="cursor-pointer text-base font-medium py-2 px-7 rounded-full border border-primary whitespace-nowrap text-OnSurface" >1</button>
              <button className="cursor-pointer text-base font-medium py-2 px-7 rounded-full border border-primary whitespace-nowrap text-OnSurface" >1</button>
            </div>
          </div>

          <div className="mt-[18px] md:mt-[15px]">
            <p className="text-lg font-semibold text-OnSurface">종목</p>
            <div className="flex overflow-x-auto gap-[4px] md:gap-[14px] mt-[11px]">
              <button className="w-[77px] flex-none border border-primary box-border rounded-full relative cursor-pointer overflow-hidden bg-background after:block after:pb-[100%]">
                <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center gap-[2px] text-primary text-sm font-medium">
                  1
                </div>
              </button>
              <button className="w-[77px] flex-none border border-primary box-border rounded-full relative cursor-pointer overflow-hidden bg-background after:block after:pb-[100%]">
                <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center gap-[2px] text-primary text-sm font-medium">
                  1
                </div>
              </button>
              <button className="w-[77px] flex-none border border-primary box-border rounded-full relative cursor-pointer overflow-hidden bg-background after:block after:pb-[100%]">
                <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center gap-[2px] text-primary text-sm font-medium">
                  1
                </div>
              </button>
              <button className="w-[77px] flex-none border border-primary box-border rounded-full relative cursor-pointer overflow-hidden bg-background after:block after:pb-[100%]">
                <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center gap-[2px] text-primary text-sm font-medium">
                  1
                </div>
              </button>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[13px] md:gap-[30px] mt-[10px] md:mt-7">

                <div className="py-5 px-4 bg-Surface md:bg-white border border-[#D9D9D9] rounded-lg cursor-pointer">
                  <div className="flex gap-[5px]">
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">1</div>
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">2</div>
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">3</div>
                  </div>
                  <h4 className="font-medium text-base leading-[1.3] mt-3 break-keep text-ellipsis line-clamp-2 h-10">제목</h4>
                  <ul className="mt-8 text-[13px]">
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between pt-[9.5px] mt-[9.5px] border-t border-[#D9D9D9] gap-[7px]">
                    <span className="whitespace-nowrap text-[13px] font-medium text-OnBackgroundGray">모집 마감일</span>
                    북마크
                  </div>
                </div>
                <div className="py-5 px-4 bg-Surface md:bg-white border border-[#D9D9D9] rounded-lg cursor-pointer">
                  <div className="flex gap-[5px]">
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">1</div>
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">2</div>
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">3</div>
                  </div>
                  <h4 className="font-medium text-base leading-[1.3] mt-3 break-keep text-ellipsis line-clamp-2 h-10">제목</h4>
                  <ul className="mt-8 text-[13px]">
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between pt-[9.5px] mt-[9.5px] border-t border-[#D9D9D9] gap-[7px]">
                    <span className="whitespace-nowrap text-[13px] font-medium text-OnBackgroundGray">모집 마감일</span>
                    북마크
                  </div>
                </div>
                <div className="py-5 px-4 bg-Surface md:bg-white border border-[#D9D9D9] rounded-lg cursor-pointer">
                  <div className="flex gap-[5px]">
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">1</div>
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">2</div>
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">3</div>
                  </div>
                  <h4 className="font-medium text-base leading-[1.3] mt-3 break-keep text-ellipsis line-clamp-2 h-10">제목</h4>
                  <ul className="mt-8 text-[13px]">
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between pt-[9.5px] mt-[9.5px] border-t border-[#D9D9D9] gap-[7px]">
                    <span className="whitespace-nowrap text-[13px] font-medium text-OnBackgroundGray">모집 마감일</span>
                    북마크
                  </div>
                </div>
                <div className="py-5 px-4 bg-Surface md:bg-white border border-[#D9D9D9] rounded-lg cursor-pointer">
                  <div className="flex gap-[5px]">
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">1</div>
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">2</div>
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">3</div>
                  </div>
                  <h4 className="font-medium text-base leading-[1.3] mt-3 break-keep text-ellipsis line-clamp-2 h-10">제목</h4>
                  <ul className="mt-8 text-[13px]">
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between pt-[9.5px] mt-[9.5px] border-t border-[#D9D9D9] gap-[7px]">
                    <span className="whitespace-nowrap text-[13px] font-medium text-OnBackgroundGray">모집 마감일</span>
                    북마크
                  </div>
                </div>
                <div className="py-5 px-4 bg-Surface md:bg-white border border-[#D9D9D9] rounded-lg cursor-pointer">
                  <div className="flex gap-[5px]">
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">1</div>
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">2</div>
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">3</div>
                  </div>
                  <h4 className="font-medium text-base leading-[1.3] mt-3 break-keep text-ellipsis line-clamp-2 h-10">제목</h4>
                  <ul className="mt-8 text-[13px]">
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between pt-[9.5px] mt-[9.5px] border-t border-[#D9D9D9] gap-[7px]">
                    <span className="whitespace-nowrap text-[13px] font-medium text-OnBackgroundGray">모집 마감일</span>
                    북마크
                  </div>
                </div>
                <div className="py-5 px-4 bg-Surface md:bg-white border border-[#D9D9D9] rounded-lg cursor-pointer">
                  <div className="flex gap-[5px]">
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">1</div>
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">2</div>
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">3</div>
                  </div>
                  <h4 className="font-medium text-base leading-[1.3] mt-3 break-keep text-ellipsis line-clamp-2 h-10">제목</h4>
                  <ul className="mt-8 text-[13px]">
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between pt-[9.5px] mt-[9.5px] border-t border-[#D9D9D9] gap-[7px]">
                    <span className="whitespace-nowrap text-[13px] font-medium text-OnBackgroundGray">모집 마감일</span>
                    북마크
                  </div>
                </div>
                <div className="py-5 px-4 bg-Surface md:bg-white border border-[#D9D9D9] rounded-lg cursor-pointer">
                  <div className="flex gap-[5px]">
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">1</div>
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">2</div>
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">3</div>
                  </div>
                  <h4 className="font-medium text-base leading-[1.3] mt-3 break-keep text-ellipsis line-clamp-2 h-10">제목</h4>
                  <ul className="mt-8 text-[13px]">
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between pt-[9.5px] mt-[9.5px] border-t border-[#D9D9D9] gap-[7px]">
                    <span className="whitespace-nowrap text-[13px] font-medium text-OnBackgroundGray">모집 마감일</span>
                    북마크
                  </div>
                </div>
                <div className="py-5 px-4 bg-Surface md:bg-white border border-[#D9D9D9] rounded-lg cursor-pointer">
                  <div className="flex gap-[5px]">
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">1</div>
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">2</div>
                    <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px]">3</div>
                  </div>
                  <h4 className="font-medium text-base leading-[1.3] mt-3 break-keep text-ellipsis line-clamp-2 h-10">제목</h4>
                  <ul className="mt-8 text-[13px]">
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                    <li className="flex text-OnBackgroundGray">
                      <p className="pr-[9px]">시간</p>
                      <p className="border-l border-OnBackgroundGray pl-[9px]"></p>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between pt-[9.5px] mt-[9.5px] border-t border-[#D9D9D9] gap-[7px]">
                    <span className="whitespace-nowrap text-[13px] font-medium text-OnBackgroundGray">모집 마감일</span>
                    북마크
                  </div>
                </div>

              </div>

          </div>

        </Wrap>

      </main>
      <Footers/>
    </>
  )
}