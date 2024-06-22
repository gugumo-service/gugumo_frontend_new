import Wrap from "@/components/Common/Wrap";
import Footers from "@/components/Layout/Footers/Footers";
import HomeKeyword from "@/components/page/home/HomeKeyword";
import HomeService from "@/components/page/home/HomeService";
import HomeVisual from "@/components/page/home/HomeVisual";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <HomeVisual>
        <h4 className="text-lg sm:text-2xl md:text-[32px] text-white break-keep opacity-0 leading-snug">
          구기 스포츠 운동 메이트 찾을 땐,
        </h4>
      </HomeVisual>
      <div className="overflow-hidden bg-[#0085FF] py-[18px] md:py-5 flex">
        {
          new Array(14).fill(0).map((_,index)=>(
            <div className="flex-none px-6 md:px-7 animate-wave" key={index}><Image src="/asset/image/home/simbol.png" alt="구구모 심볼" width={110} height={34}/></div>
          ))
        }
      </div>

      <HomeKeyword>
        <Wrap className="w-[80%]">
          <div className="relative opacity-0 base01">
            <div className="py-6 px-11 rounded-full border border-[#4FAAFF] text-sm md:text-base xl:text-[22px] text-[#4FAAFF] inline-block break-keep leading-5">
              평소 집 주변에서 공놀이 할 친구를 구하기 <span className="font-bold">어려우시던 분?</span>
            </div>
            <div className="absolut left-0 top-1/2 -translate-x-1/2 md:-translate-x-[75%] -translate-y-1/2 megaphone01">
              <Image src="/asset/image/home/megaphone01.png" alt="확성기1" width={158} height={153}/>
            </div>
          </div>
          <div className="relative opacity-0 mt-[65px] md:mt-[85px] text-right base02">
            <div className="py-6 px-11 rounded-full border border-[#4FAAFF] text-sm md:text-base xl:text-[22px] text-[#4FAAFF] inline-block break-keep leading-5">
              평소 집 주변에서 공놀이 할 친구를 구하기 <span className="font-bold">어려우시던 분?</span>
            </div>
            <div className="absolut left-0 top-1/2 -translate-x-1/2 md:-translate-x-[75%] -translate-y-1/2 megaphone01">
              <Image src="/asset/image/home/megaphone01.png" alt="확성기2" width={158} height={153}/>
            </div>
          </div>
        </Wrap>
        <div className="one">
          <Image src="/asset/image/home/keyword01.png" alt="사람" width={163} height={154}/>
        </div>
        <div className="two">
          <Image src="/asset/image/home/keyword02.png" alt="사람" width={114} height={186}/>
        </div>
        <div className="three">
          <Image src="/asset/image/home/keyword03.png" alt="사람" width={146} height={202}/>
        </div>
      </HomeKeyword>
      <HomeService>
        <Wrap>
          <div className="flex justify-center gap-3 dot">
            {
              new Array(3).fill(0).map((_,index)=><div key={index} className="size-2 md:size-[13px] rounded-full bg-white"></div>)
            }
          </div>

          <h1 className="flex items-center justify-center text-white text-lg md:text-2xl xl:text-[39px] mt-9 opacity-0 title">
            <Image className="w-[136px] xl:w-[186px]" src="/asset/image/home/gugumo.png" alt="구구모" width={256} height={60}/>는 이런 서비스에요!
          </h1>

          <div className="grid items-start grid-cols-1 md:grid-cols-2 mt-[88px] md:mt-[138px] gap-[50px] md:gap-[30px]">
            <div className="bg-white py-14 px-8 rounded-[27px] relative">
              <div className="relative bg-[url(/asset/image/home/Ellipse.png)] bg-no-repeat bg-center w-32 h-28 bg-[length:75%_75%]">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[52px] text-white">1</span>
              </div>
              <p>
                <span>웹</span> 🖥 으로 운영되며, <br/>
                구기 스포츠 메이트 <span>매칭 중계</span>를 <br/>
                제공해요.
              </p>
            </div>
          </div>

          <div className="mt-52 text-center">
            <dl>
              <dt className="text-2xl md:text-3xl xl:text-4xl text-white break-keep">
                앞으로, 구기 스포츠 메이트 찾을 땐
              </dt>
              <dd className="mt-4 mx-auto w-[146px] md:w-[226px] xl:w-auto inline-block">
                <Image src="/asset/image/home/gugumo.png" alt="구구모" width={256} height={60}/>
              </dd>
            </dl>
            <Link href={'/'} className="inline-flex items-center justify-center bg-white mt-7 md:mt-12 w-80 h-24 rounded-3xl font-black text-[#4FAAFF] text-base md:text-2xl xl:text-3xl">매칭하기</Link>
          </div>

        </Wrap>
      </HomeService>
      <Footers/>
    </main>
  )
}
