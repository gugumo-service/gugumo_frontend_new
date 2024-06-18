export default function Nickname() {
  return (
    <form>
        <div className="block md:flex items-center gap-10 rounded bg-white md:bg-Surface md:py-[59px] md:px-[5%] lg:px-[4.4%]">
            <h4 className="text-base font-semibold text-nowrap">개인정보 변경</h4>
            <div className="min-w-0 flex-1">
                <label htmlFor="" className="text-sm md:text-base text-black">닉네임</label>
                <div className="flex gap-2 md:gap-4 mt-3 md:max-w-[630px]">
                    <input className="h-12 md:h-14 text-sm md:text-base bg-background rounded-lg w-full px-4 placeholder:text-OnSurface" type="text" placeholder="닉네임을 입력하세요."/>
                    <button className="cursor-pointer text-base font-medium text-OnPrimary bg-primary w-[109px] flex items-center justify-center rounded-lg flex-none">중복확인</button>
                </div>
            </div>
        </div>
        <div className="flex mt-5 justify-center md:justify-end">
            <button className="inline-flex items-center text-primary bg-OnPrimary text-sm md:text-base font-medium border border-[#4FAAFF] rounded justify-center cursor-pointer py-[9.5px] px-4" type="submit">개인정보 수정</button>
        </div>
    </form>
  )
}
