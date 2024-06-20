"use client"
import { useForm } from "react-hook-form"

export default function Find() {

  const {handleSubmit,register,setValue} = useForm();

  const onSubmitHandler = async (event:any)=>{
    const {email} = event;

    if(email === ""){
      return alert ('이메일을 입력해주세요.');
    }

    try {
      const res = await fetch("/back/api/v1/resetPassword",{
        method : "POST",
        headers : {
          "Content-Type": "Application/json"
        },
        body : JSON.stringify({email})
      });
      if(res.ok){
        return alert("입력된 이메일로 임시 비밀번호를 보냈습니다.");
      }
    }
    catch(err){
      console.log(err);
    }
    finally{
      setValue("email","");
    }

  }

  return (
    <div className="py-[108px]">
      <div className="w-[90%] max-w-[790px] mx-auto py-14 px-36 bg-Surface">
        <dl className="text-center text-primary">
          <dt className="font-semibold text-2xl">비밀번호 찾기</dt>
          <dd className="text-sm mt-6 leading-6">
            비밀번호를 재설정할 수 있는 이메일을 보내드립니다. <br/>
            발송된 이메일의 비밀번호 재설정은 <span className="font-bold">10분 간</span> 유효합니다.
          </dd>
        </dl>
        <form onSubmit={handleSubmit(onSubmitHandler)} className="mt-8">
          <input className="w-full h-11 rounded-lg border border-Outline px-3 text-base font-medium placeholder:text-OnBackgroundGray" type="text" placeholder="입하신 이메일 주소를 입력하세요." {...register("email")}/>
          <button className="w-[138px] h-12 text-OnPrimary bg-primary rounded-lg mt-4 cursor-pointer text-base mx-auto block" type="submit">전송하기</button>
        </form>
      </div>
    </div>
  )
}
