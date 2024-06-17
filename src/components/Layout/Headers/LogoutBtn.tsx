"use client"

import { signOut } from "next-auth/react"

export default function LogoutBtn() {
  return (
    <button type="button" onClick={()=>signOut()} className="text-OnSurface">로그아웃</button>
  )
}
