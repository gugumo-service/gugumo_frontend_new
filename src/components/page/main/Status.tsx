"use client"
export default function Status({setMeetingstatus} : {setMeetingstatus : any}) {
  return (
    <div className="flex gap-5 md:gap-6">
        <button onClick={()=>setMeetingstatus("RECRUIT")} className={`cursor-pointer text-nowrap text-lg md:text-2xl font-medium text-OnSurface ${true ? "font-semibold text-primary" : ""} `}>모집중</button>
        <button onClick={()=>setMeetingstatus("END")} className="cursor-pointer text-nowrap text-lg md:text-2xl font-medium text-OnSurface">모집완료</button>
        <button onClick={()=>setMeetingstatus("ALL")} className="cursor-pointer text-nowrap text-lg md:text-2xl font-medium text-OnSurface">전체</button>
    </div>
  )
}
