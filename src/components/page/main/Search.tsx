"use client"
import Image from 'next/image'
import { useForm } from 'react-hook-form';

export default function Search({setQ} : {setQ : any}) {

    const {register,handleSubmit} = useForm();

    const onSubmitHandler = (event : any)=>{
        const {search} = event;
        setQ(search);
    }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="-order-1 md:order-1 w-full md:w-[492px] h-[34px] md:h-[53px] relative rounded-lg block bg-Surface">
        <input type="text" className="w-full h-full box-border px-3 bg-transparent text-[13px] md:text-base font-medium outline-none" placeholder="제목, 글 내용을 검색해보세요!" {...register('search')}/>
        <button 
            type="submit"
            className="absolute w-5 md:w-auto right-[10px] top-1/2 -translate-y-1/2"
        >
            <Image src="/asset/image/icon/search.svg" alt="검색버튼" width={24} height={24} />
        </button>
    </form>
  )
}
