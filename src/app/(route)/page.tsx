"use client"
import {Swiper,SwiperSlide} from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Recommends from "@/components/Common/Recommends/Recommends";

export default function Home() {
  return (
    <main className="md:pt-[50px] md:pb-[170px] pt-6 pb-[121px]">
      <Swiper
        slidesPerView={1.2}
        modules={[Autoplay]}
        breakpoints={{
            "820" : {
                slidesPerView : 1.2,
                spaceBetween : 23
            },
            "1024" : {
                slidesPerView : 1.2,
                spaceBetween : 23
            },
            "1280" : {
                slidesPerView : 1.6,
                spaceBetween : 23
            }
        }}
        centeredSlides={true}
        spaceBetween={13}
        loop={true}
        autoplay={{
            delay : 6000
        }}
        speed={600}
      >
        {
          new Array(4).fill(0).map((_,index)=>(
            <SwiperSlide key={index}>
              <div className="relative rounded-lg overflow-hidden">
                <Image className="hidden md:block" src="/asset/image/banner/banner.jpg" alt={`배너${index} 데스크탑`} width={2496} height={785} />
                <Image className="md:hidden" src="/asset/image/banner/banner_mob.jpg" alt={`배너${index} 모바일`} width={1879} height={851} />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="max-w-[1200px] mx-auto w-[95%]">
        <Recommends/>
      </div>
    </main>
  )
}