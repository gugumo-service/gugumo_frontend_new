"use client"
import Login from "@/components/Modal/Login/Login"
import { open } from "@/lib/store/features/modals/modal"
import { useAppDispatch } from "@/lib/store/hook"

export default function LoginBtn() {
    const dispatch = useAppDispatch()

    const onLoginHandler = ()=>{
        dispatch(open({Component : Login}))
    }

  return (
    <button className="flex items-center justify-center w-[74px] h-[35px] bg-primary text-white text-base font-semibold rounded cursor-pointer" onClick={onLoginHandler}>로그인</button>
  )
}
