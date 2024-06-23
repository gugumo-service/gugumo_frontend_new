export default function Skeleton() {
  return (
    <div className="transition-all animate-pulse"> 
        <div className="h-8 w-full bg-slate-200"></div>

        <div className="flex justify-between mt-2 md:mt-7 pb-[18px] border-b border-Outline">
            <div className="flex items-center gap-[10px] md:gap-[18px]">
                <div className="w-20 h-5 bg-slate-200"></div>
                <div className="w-20 h-5 bg-slate-200"></div>
                <div className="w-20 h-5 bg-slate-200"></div>
            </div>
            <div className="size-8 bg-slate-200"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 md:mt-8 gap-x-4 md:gap-5">
            <div className="w-full h-10 bg-slate-200"></div>
            <div className="w-full h-10 bg-slate-200"></div>
            <div className="w-full h-10 bg-slate-200"></div>
            <div className="w-full h-10 bg-slate-200"></div>
            <div className="w-full h-10 bg-slate-200"></div>
            <div className="w-full h-10 bg-slate-200"></div>
        </div>

        <div className="mt-8 md:mt-24 h-96 bg-slate-200"/>
    </div>
  )
}
