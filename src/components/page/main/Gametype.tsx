"use client"
const GAMETYPE = [{get : "BADMINTON",name : "배드민턴"},{get : "FUTSAL",name : "풋살"},{get : "BASKETBALL",name : "농구"},{get : "TENNIS",name : "테니스"},{get : "TABLETENNIS",name : "탁구"},{get : "BASEBALL",name : "야구"}];
export default function Gametype({setGametype} : {setGametype : any}) {
  return (
    <>
        <p className="text-base md:text-lg font-semibold text-OnSurface">종목</p>
        <div className="flex md:flex-wrap overflow-x-auto gap-[4px] md:gap-[14px] mt-[11px]">
            <button onClick={()=>setGametype("")} className={`w-[77px] flex-none border border-primary box-border rounded-full relative cursor-pointer overflow-hidden bg-background ${true ? "bg-primary" : ""} after:block after:pb-[100%]`}>
                <div className={`absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center gap-[2px] text-primary text-sm font-medium ${true ? "text-OnPrimary" : ""}`}>
                전체
                </div>
            </button>
            {
                GAMETYPE.map((el,index)=>(
                <button onClick={()=>setGametype(el.get)} key={index} className={`w-[77px] flex-none border border-primary box-border rounded-full relative cursor-pointer overflow-hidden bg-background after:block after:pb-[100%]`}>
                    <div className={`absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center gap-[2px] text-primary text-sm font-medium `}>
                    {el.name}
                    </div>
                </button>
                ))
            }
        </div>
    </>
  )
}
