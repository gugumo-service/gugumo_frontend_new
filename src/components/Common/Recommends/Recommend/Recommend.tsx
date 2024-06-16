export default function Recommend() {
  return (
    <div className="bg-[#DBEBFF] border border-SubColor4 py-5 px-4 rounded-lg cursor-pointer">
        <div className="flex gap-[5px]">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
        <h4 className="font-medium text-base leading-[1.3] mt-[11px] break-keep text-ellipsis line-clamp-2 h-10">타이틀</h4>
        <ul className="mt-8 text-[13px]">
            <li className="flex text-primary">
                <p className="pr-[9px]">시간</p>
                <p className="border-l border-l-OnBackgroundGray pl-[9px]">00시</p>
            </li>
            <li className="flex text-primary">
                <p className="pr-[9px]">요일</p>
                <p className="border-l border-l-OnBackgroundGray pl-[9px]">토요일</p>
            </li>
            <li className="flex text-primary">
                <p className="pr-[9px]">인원</p>
                <p className="border-l border-l-OnBackgroundGray pl-[9px]">명</p>
            </li>
        </ul>
        <div className="flex items-center justify-between pt-[9.5px] mt-[9.5px] border-t border-t-[#D9D9D9] gap-[7px]">
            <span className="whitespace-nowrap text-[13px] font-medium text-OnBackgroundGray">모집 마감일 0000-0000</span>
            북마크
        </div>
    </div>
  )
}
