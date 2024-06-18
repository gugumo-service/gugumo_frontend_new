"use client"
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form"

export default function Password() {

    const {data : session} = useSession() as any;

    const {register,handleSubmit,setValue} = useForm();

    const onSubmitHanlder = async (event:any)=>{

        const {password,pwConfirm} = event;

        if(password === "" || pwConfirm === ""){
            return alert('비밀번호를 입력하지 않았습니다.');
        }

        if(password !== pwConfirm) {
            return alert('비밀번호가 동일하지 않습니다.');
        }

        try {
            const res = await fetch(`/back/api/v1/member/updatePassword`,{
                method : "PATCH",
                headers : {
                    'Content-Type': 'application/json',
                    "Authorization" : session?.accessToken
                },
                body : JSON.stringify({
                    password
                })
            });

            if(res.ok){
                const data = await res.json();

                if(data.status === "success"){
                    alert('비밀번호가 수정 되었습니다.');
                }else{
                    alert('비밀번호 수정에 실패 하였습니다.');
                }

            }else{
                return alert('에러가 발생 했습니다.');
            }

        }
        catch(err){
            return alert('에러가 발생 했습니다.');
        }
        finally {
            setValue('password',"");
            setValue('pwConfirm',"");
        }
        
    }

  return (
    <form className="mt-7 md:mt-10" onSubmit={handleSubmit(onSubmitHanlder)}>
        <div className="block md:flex items-center gap-10 rounded bg-white md:bg-Surface md:py-[78px] md:px-[5%] lg:px-[4.4%]">
            <h4 className="text-base font-semibold text-nowrap">비밀번호 설정</h4>
            <div className="flex flex-col gap-5 md:gap-10 flex-1">
                <div className="min-w-0 flex-1">
                    <label htmlFor="" className="text-sm md:text-base text-black">새 비밀번호</label>
                    <div className="flex gap-2 md:gap-4 mt-3 md:max-w-[630px]">
                        <input className="h-12 md:h-14 text-sm md:text-base bg-background rounded-lg w-full px-4 placeholder:text-OnSurface" type="password" placeholder="비밀번호를 입력해주세요." {...register("password")}/>
                    </div>
                </div>
                <div className="min-w-0 flex-1 mt-6">
                    <label htmlFor="" className="text-sm md:text-base text-black">새 비밀번호 확인</label>
                    <div className="flex gap-2 md:gap-4 mt-3 md:max-w-[630px]">
                        <input className="h-12 md:h-14 text-sm md:text-base bg-background rounded-lg w-full px-4 placeholder:text-OnSurface" type="password" placeholder="입력한 비밀번호를 입력해주세요." {...register('pwConfirm')}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex mt-5 justify-center md:justify-end">
            <button className="inline-flex items-center text-primary bg-OnPrimary text-sm md:text-base font-medium border border-[#4FAAFF] rounded justify-center cursor-pointer py-[9.5px] px-4" type="submit">비밀번호 수정</button>
        </div>
    </form>
  )
}
