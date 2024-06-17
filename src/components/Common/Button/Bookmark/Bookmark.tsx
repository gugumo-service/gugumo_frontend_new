"use client"
import BookmarkSVG from "@/asset/image/bookmark.svg";

export default function Bookmark() {
  return (
    <button type="button" className="cursor-pointer">
        <BookmarkSVG className="stroke-[#4FAAFF] fill-none" width={24} height={24} alt="북마크 아이콘"/>
    </button>
  )
}
