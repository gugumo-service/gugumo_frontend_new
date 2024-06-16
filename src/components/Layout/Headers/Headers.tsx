import Image from "next/image";
import Link from "next/link";

export default function Headers() {
  return (
    <header className="mt-8 md:mt-10 w-full relative z-20">
      <div className="max-w-[1200px] mx-auto w-[95%] flex items-center justify-between">
        <Link href={'/'} className="md:w-[172px] w-[91px]"><img src="/asset/image/logo.svg" alt="로고"/></Link>

        {/* <button className="flex items-center justify-center w-[74px] h-[35px] bg-primary text-white text-base font-semibold rounded cursor-pointer">로그인</button> */}

        <div className="flex items-center gap-[26px]">
          <div></div>
          <Link href={"/bookmark"}>
            <Image src="/asset/image/icon/bookmark.svg" alt="북마크 아이콘" width={36} height={37}/>
          </Link>
          <div className="relative">
            <Image src="/asset/image/icon/user.svg" alt="유저 아이콘" width={36} height={36}/>
            <ul className="absolute right-0 top-full py-5 px-[30px] border border-primary text-[13px] font-medium rounded whitespace-nowrap text-center bg-background mt-[10px]">
              <li>
                <Link href={"/post/list"} className="text-OnSurface">작성글</Link>
              </li>
              <li className="mt-3">
                <Link href={"/mypage"} className="text-OnSurface">회원정보</Link>
              </li>
              <li className="mt-3">
                <button type="button" className="text-OnSurface">로그아웃</button>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </header>
  )
}
