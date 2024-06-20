import Wrap from "@/components/Common/Wrap";
import { IoCheckmarkOutline } from "react-icons/io5";

const GAMETYPE = [{get : "BADMINTON",name : "배드민턴"},{get : "FUTSAL",name : "풋살"},{get : "BASKETBALL",name : "농구"},{get : "TENNIS",name : "테니스"},{get : "TABLETENNIS",name : "탁구"},{get : "BASEBALL",name : "야구"}];

export default function Signup() {
  return (
    <Wrap className=" pt-12 pb-[90px] md:py-[150px]">
        <div className="md:py-14 md:px-32 box-border md:bg-Surface mx-auto">
            <form>
                <h1 className="text-xl md:text-2xl font-semibold text-center text-primary mb-12">회원가입</h1>
                <div>
                    <p className="font-semibold text-base mb-5 text-primary">정보 입력</p>
                    <div className="flex flex-col gap-4 md:gap-5">
                        <input className="h-11 rounded-lg border border-Outline px-3 text-base font-medium placeholder:text-OnBackgroundGray" type="text" placeholder="닉네임"/>
                        <div className="relative">
                            <input className="w-full h-11 rounded-lg border border-Outline px-3 text-base font-medium placeholder:text-OnBackgroundGray" type="text" placeholder="이메일을 입력하세요."/>
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 border border-primary text-[13px] font-normal text-primary bg-OnPrimary py-2 px-3 rounded-md cursor-pointer"  type="button">인증요청</button>
                        </div>
                        <div className="relative">
                            <input className="w-full h-11 rounded-lg border border-Outline px-3 text-base font-medium placeholder:text-OnBackgroundGray" type="text" placeholder="인증번호를 입력하세요"/>
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 border border-primary text-[13px] font-normal text-primary bg-OnPrimary py-2 px-3 rounded-md cursor-pointer"  type="button">확인</button>
                        </div>
                        <input className="w-full h-11 rounded-lg border border-Outline px-3 text-base font-medium placeholder:text-OnBackgroundGray" type="text" placeholder="비밀번호"/>
                        <input className="w-full h-11 rounded-lg border border-Outline px-3 text-base font-medium placeholder:text-OnBackgroundGray" type="text" placeholder="비밀번호 확인"/>
                    </div>
                </div>

                <div className="mt-[46px] md:mt-[58px]">
                    <p className="font-semibold text-base mb-5 text-primary">관심있는 종목 (중복가능)</p>
                    <div className="flex justify-between gap-2 overflow-x-auto">
                        {
                            GAMETYPE.map((el,index)=>(
                                <button type="button" key={index} className="size-[77px] flex-none border border-primary rounded-full relative overflow-hidden cursor-pointer bg-background">
                                    <div className="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center gap-[2px] text-primary text-sm font-medium">
                                        <p>{el.name}</p>
                                    </div>
                                </button>
                            ))
                        }
                    </div>
                </div>

                <div className="mt-[46px] md:mt-[58px]">
                    <p>서비스 정책</p>
                    <div className="bg-primary">
                        <div className="py-4 md:py-5 px-5 md:px-6">
                            <div className="flex justify-between gap-1">
                                <div className="flex items-center gap-3 cursor-pointer">
                                    <div className="size-5 rounded bg-white relative flex-none"><IoCheckmarkOutline className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs"/></div>
                                    <p className="text-base font-medium text-OnPrimary">전체동의</p>
                                </div>
                            </div>

                            <div className="py-4 md:py-5 px-5 md:px-6">
                                <div className="flex items-center gap-3 cursor-pointer">
                                    <div className="size-5 rounded bg-white relative flex-none"><IoCheckmarkOutline className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs"/></div>
                                    <p className="text-base font-medium text-OnPrimary">서비스 이용약관 동의 (필수)</p>
                                </div>
                                <div className="flex items-center gap-3 cursor-pointer mt-4">
                                    <div className="size-5 rounded bg-white relative flex-none"><IoCheckmarkOutline className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs"/></div>
                                    <p className="text-base font-medium text-OnPrimary">개인정보 수집 및 이용 동의 (필수)</p>
                                </div>
                                <div className="flex items-center gap-3 cursor-pointer mt-4">
                                    <div className="size-5 rounded bg-white relative flex-none"><IoCheckmarkOutline className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs"/></div>
                                    <p className="text-base font-medium text-OnPrimary">마케팅 수신 동의 (선택)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8 md:mt-14">
                    <button type="submit" className="inline-flex items-center text-primary bg-OnPrimary text-sm md:text-base font-medium border border-[#4FAAFF] rounded py-2 px-4 justify-center cursor-pointer">회원가입</button>
                </div>

            </form>
        </div>
    </Wrap>
  )
}
