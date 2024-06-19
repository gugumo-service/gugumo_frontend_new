"use client"
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form"

export default function Nickname({setNickname} : {setNickname : any}) {

    const {data : session} = useSession() as any;

    const {register,handleSubmit,setValue,getValues} = useForm();
    
    const [isCheck,setIsCheck] = useState(false);

    const confirmHanlder = async () => {

        const {nickname} = getValues();

        if(nickname === ""){
            return alert('닉네임을 입력해주세요.');
        }

        try {
            const res = await fetch(`/back/api/v1/member/checkDuplicateNickname?nickname=${nickname}`);

            if(res.ok){
                const data = await res.json();

                if(data.status === "success"){

                    if(data.data){
                        alert('중복된 닉네임이 있습니다.');
                        return setIsCheck(false);
                    }else{
                        alert('사용가능한 닉네임 입니다.');
                        return setIsCheck(true);
                    }

                }else{
                    alert('에러가 발생했습니다.');
                    return setIsCheck(false);
                }

            }else{
                alert('오류가 발생했습니다.');
                return setIsCheck(false);
            }

        }
        catch(err){
            return alert('오류가 발생했습니다.');
        }


    }

    const onSubmitHanlder = async (event:any)=>{

        const {nickname} = event;

        if(!isCheck){
            return alert('닉네임 중복 체크를 해주세요.');
        }
        
        try {
            const res = await fetch('/back/api/v1/member/updateNickname',{
                method : "PATCH",
                headers : {
                    "Authorization" : session?.accessToken,
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({nickname : nickname})
            });

            if(res.ok){
                const data = await res.json();

                if(data.status === "success"){
                    alert('닉네임 수정이 완료 되었습니다.');
                    return setNickname(nickname);
                }else{
                    alert('닉네임 수정에 실패 하였습니다.');
                }

            }else{
                return alert('에러가 발생 했습니다.');
            }

        }
        catch(err){
            console.error(err);
            return alert('에러가 발생 했습니다.');
        }
        finally {
            setValue('nickname',"");
            setIsCheck(false);
        }

    }

  return (
    <form onSubmit={handleSubmit(onSubmitHanlder)}>
        <div className="block md:flex items-center gap-10 rounded bg-white md:bg-Surface md:py-[59px] md:px-[5%] lg:px-[4.4%]">
            <h4 className="text-base font-semibold text-nowrap">개인정보 변경</h4>
            <div className="min-w-0 flex-1">
                <label htmlFor="nickname" className="text-sm md:text-base text-black">닉네임</label>
                <div className="flex gap-2 md:gap-4 mt-3 md:max-w-[630px]">
                    <input className="h-12 md:h-14 text-sm md:text-base bg-background rounded-lg w-full px-4 placeholder:text-OnSurface" id="nickname" type="text" placeholder="닉네임을 입력하세요." {...register("nickname")}/>
                    <button type="button" onClick={confirmHanlder} className="cursor-pointer text-base font-medium text-OnPrimary bg-primary w-[109px] flex items-center justify-center rounded-lg flex-none">중복확인</button>
                </div>
            </div>
        </div>
        <div className="flex mt-5 justify-center md:justify-end">
            <button type="submit" className="inline-flex items-center text-primary bg-OnPrimary text-sm md:text-base font-medium border border-[#4FAAFF] rounded justify-center cursor-pointer py-[9.5px] px-4">개인정보 수정</button>
        </div>
    </form>
  )
}
