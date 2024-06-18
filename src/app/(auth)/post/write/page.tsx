import Wrap from "@/components/Common/Wrap";
import Footers from "@/components/Layout/Footers/Footers";
import Headers from "@/components/Layout/Headers/Headers";

export default function Write() {
  return (
    <>
        <Headers/>
        <main className="pt-8 md:pt-[90px] pb-14 md:pb-36">
            <Wrap>
                <form>
                    <div className="flex items-center gap-3">
                        <p className="flex flex-none size-[34px] rounded-full bg-primary text-2xl font-semibold text-white items-center justify-center">1</p>
                        <h3 className="text-2xl font-medium">모임 정보를 입력해주세요</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-7 mt-5 md:mt-8">
                        <div className="min-w-0 flex flex-col gap-[10px]">
                            <label htmlFor="" className="text-sm md:text-base font-medium px-2">모집형식</label>
                        </div>
                        <div className="min-w-0 flex flex-col gap-[10px]">
                            <label htmlFor="" className="text-sm md:text-base font-medium px-2">지역 선택</label>
                        </div>
                        <div className="min-w-0 flex flex-col gap-[10px]">
                            <label htmlFor="" className="text-sm md:text-base font-medium px-2">구기종목</label>
                        </div>
                        <div className="min-w-0 flex flex-col gap-[10px]">
                            <label htmlFor="" className="text-sm md:text-base font-medium px-2">모집 인원</label>
                        </div>
                        <div className="min-w-0 flex flex-col gap-[10px]">
                            <label htmlFor="" className="text-sm md:text-base font-medium px-2">모임 날짜</label>
                        </div>
                        <div className="min-w-0 flex flex-col gap-[10px]">
                            <label htmlFor="" className="text-sm md:text-base font-medium px-2">시간대</label>
                        </div>
                        <div className="min-w-0 flex flex-col gap-[10px]">
                            <label htmlFor="" className="text-sm md:text-base font-medium px-2">모임 요일</label>
                        </div>
                        <div className="min-w-0 flex flex-col gap-[10px]">
                            <label htmlFor="" className="text-sm md:text-base font-medium px-2">모집 마감</label>
                        </div>
                        <div className="min-w-0 flex flex-col gap-[10px]">
                            <label htmlFor="" className="text-sm md:text-base font-medium px-2">오픈카톡 주소</label>
                        </div>
                    </div>

                    <div className="mt-14 md:mt-[87px]">

                        <div className="flex items-center gap-3">
                            <p className="flex flex-none size-[34px] rounded-full bg-primary text-2xl font-semibold text-white items-center justify-center">2</p>
                            <h3 className="text-2xl font-medium">모임에 대해 소개해주세요</h3>
                        </div>

                        <div className="mt-8">
                            <label htmlFor="title">제목</label>
                            <input type="text" placeholder="제목을 입력해주세요"/>
                        </div>

                    </div>

                    <div className="text-center mt-10">
                        <button className="inline-flex items-center text-primary bg-OnPrimary text-sm md:text-base font-medium border border-[#4FAAFF] rounded py-[9.5px] px-4 justify-center cursor-pointer">새글 작성</button>
                    </div>

                </form>
            </Wrap>
        </main>
        <Footers/>
    </>
  )
}
