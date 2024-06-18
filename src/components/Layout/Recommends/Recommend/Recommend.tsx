"use client"
import Bookmark from "@/components/Common/Button/Bookmark/Bookmark";
import { GAMETYPE, LOCATION, STATUS } from "@/constant/card/constant";
import moment from "moment";
import Image from "next/image";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

const BUTTONSTYLE = "w-8 h-8 xl:w-10 xl:h-10 rounded-full flex-none border border-primary cursor-pointer text-primary relative hidden md:block";


export default function Recommend({data} : {data : any}) {

    const swiperRef = useRef<SwiperRef>(null);
    const prevHandler = ()=>{
        swiperRef.current?.swiper.slidePrev();
    }
    const nextHandler = ()=>{
        swiperRef.current?.swiper.slideNext();
    };

  return (

    <>
        <button className={`${BUTTONSTYLE}`} onClick={prevHandler}>
            <Image className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] md:w-auto" src={"/asset/image/icon/slide-arrow.png"} width={22} height={20} alt="왼쪽 버튼"/>
        </button>
        <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            slidesPerView={1.2}
            breakpoints={{
                "481" : {
                    slidesPerView : 1.5,
                },
                "820" : {
                    slidesPerView : 2.5,
                },
                "1025" : {
                    slidesPerView : 3,
                }
            }}
            centeredSlides={false}
            spaceBetween={26}
            loop={true}
            speed={600}
            slidesPerGroup={1}
            autoplay={{
                delay : 6000
            }}
        >
            {
                data.map((e: any)=>(
                    <SwiperSlide key={e.postId}>
                        <div className="bg-[#DBEBFF] border border-SubColor4 py-5 px-4 rounded-lg cursor-pointer">
                            <div className="flex flex-wrap gap-[5px] leading-none">
                                <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px] text-[#4378FF] bg-[#BFE0FF]">{STATUS[e.meetingStatus]}</div>
                                <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px] text-[#54A900] bg-[#D2FFAE]">{GAMETYPE[e.gameType]}</div>
                                <div className="py-1 px-[6px] whitespace-nowrap rounded text-[13px] text-[#FF6414] bg-[#FDC9AF]">{LOCATION[e.location]}</div>
                            </div>
                            <h4 className="font-medium text-base leading-[1.3] mt-[11px] break-keep text-ellipsis line-clamp-2 h-10">{e.title}</h4>
                            <ul className="hidden md:block mt-8 text-[13px]">
                                {
                                    e.meetingDateTime &&
                                    <li className="flex text-primary">
                                        <p className="pr-[9px]">시간</p>
                                        <p className="border-l border-primary pl-[9px]">{moment(e.meetingDateTime).format("YYYY-MM-DD")}</p>
                                    </li>
                                }
                                {
                                    e.meetingDays &&
                                    <li className="flex text-primary mt-1">
                                        <p className="pr-[9px]">요일</p>
                                        <p className="border-l border-primary pl-[9px]">{e.meetingDays}</p>
                                    </li>
                                }
                                <li className="flex text-primary mt-1">
                                    <p className="pr-[9px]">인원</p>
                                    <p className="border-l border-primary pl-[9px]">{e.meetingMemberNum}명</p>
                                </li>
                            </ul>
                            <div className="flex flex-wrap items-center justify-between pt-[9.5px] mt-[9.5px] border-t border-primary gap-[7px]">
                                <span className="whitespace-nowrap text-[13px] font-medium text-primary">모집 마감일 {e.meetingDeadline}</span>
                                <Bookmark/>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <button className={`${BUTTONSTYLE}`} onClick={nextHandler}>
            <Image className="absolute -scale-x-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] md:w-auto" src={"/asset/image/icon/slide-arrow.png"} width={22} height={20} alt="왼쪽 버튼"/>
        </button>
    </>
  )
}
