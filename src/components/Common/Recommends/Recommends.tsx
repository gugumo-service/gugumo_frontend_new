"use client"
import Recommend from "@/components/Common/Recommends/Recommend/Recommend";
import Image from "next/image";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

const BUTTONSTYLE = "w-8 h-8 xl:w-10 xl:h-10 rounded-full flex-none border border-primary cursor-pointer text-primary relative hidden md:block";

export default function Recommends() {

    const swiperRef = useRef<SwiperRef>(null);

    const prevHandler = ()=>{
        swiperRef.current?.swiper.slidePrev();
    }

    const nextHandler = ()=>{
        swiperRef.current?.swiper.slideNext();
    };

  return (
    <div className="mt-16">
        <h3 className="text-lg font-bold text-primary md:text-2xl">추천 게시물 🎯</h3>
        <div className="flex mt-[22px] gap-6 items-center xl:gap-11 md:mt-11">
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
                    new Array(4).fill(0).map((_,index)=>(
                        <SwiperSlide key={index}><Recommend/></SwiperSlide>
                    ))
                }
            </Swiper>
            <button className={`${BUTTONSTYLE}`} onClick={nextHandler}>
                <Image className="absolute -scale-x-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] md:w-auto" src={"/asset/image/icon/slide-arrow.png"} width={22} height={20} alt="왼쪽 버튼"/>
            </button>
        </div>
    </div>
  )
}
