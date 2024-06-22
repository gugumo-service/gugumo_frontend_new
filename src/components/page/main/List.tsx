"use client"
import Card from "@/components/Common/Card/Card";
import Gametype from "@/components/page/main/Gametype";
import Location from "@/components/page/main/Location";
import Search from "@/components/page/main/Search";
import Sort from "@/components/page/main/Sort";
import Status from "@/components/page/main/Status";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function List({data} : {data : any}) {

    const router = useRouter();
    const [content,setContent] = useState(data);
    const [q,setQ] = useState("");
    const [meetingstatus,setMeetingstatus] = useState('RECRUIT');
    const [location,setLocation] = useState('');
    const [gametype,setGametype] = useState('');
    const [sort,setSort] = useState('NEW');
    const {data : session} = useSession() as any;

    const fetchs = async ()=>{
        try {
            const res = await fetch(`/back/api/v1/meeting?q=${q}&meetingstatus=${meetingstatus}&location=${location}&gametype=${gametype}&sort=${sort}`,{
                headers : {
                    "Authorization" : session?.accessToken
                }
            });
            const data = await res.json();
            setContent(data.data.content);
        }
        catch(err){
            alert('에러가 발생했습니다.');
        }
    }

    const writeHandler = ()=>{
        if(!session) return alert('로그인을 해야합니다.');
        router.push('/post/write');
    }
    
    useEffect(()=>{
        fetchs();
    },[meetingstatus,q,setContent,location,gametype,sort,session]);

  return (
    <>
        {/* 검색 */}
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-6 md:gap-5">
            <Status meetingstatus={meetingstatus} setMeetingstatus={setMeetingstatus}/>
            <Search setQ={setQ}/>
        </div>

        {/* 지역 */}
        <div className="mt-[25px] md:mt-9"> <Location location={location} setLocation={setLocation}/> </div>

        {/* 종목 */}
        <div className="mt-[18px] md:mt-[15px]"> <Gametype gametype={gametype} setGametype={setGametype}/> </div>

        <div className="md:bg-[#F4F5F8] mt-[38px] md:mt-[53px] md:pt-[39px] md:px-[70px] md:pb-[49px] md:rounded-xl">

            <Sort sort={sort} setSort={setSort}/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[13px] md:gap-[30px] mt-[10px] md:mt-7">
                { content.map((el : any)=><Card key={el.postId} el={el}/>) }
            </div>

            <div className="mt-[13px] md:mt-7 text-right">
                <button onClick={writeHandler} className="inline-flex items-center py-[0.4em] text-sm md:text-base px-4 font-semibold text-primary bg-OnPrimary border border-primary rounded gap-1 cursor-pointer">
                    <Image src={"/asset/image/icon/write.svg"} alt="작성 아이콘" width={24} height={24}/>
                    새글 작성
                </button>
            </div>

        </div>
    </>
  )
}
