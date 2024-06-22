"use client"
import { usePostCommnet } from "@/hooks/useComment";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form"

export default function CommentFrom({postid} : {postid : string}) {

    const {register,handleSubmit,setValue} = useForm();
    const {data : session} = useSession() as any;
    const {mutate : postComment}  = usePostCommnet();

    const onSubmitHandler = async (event : any)=>{
        const {content} = event;

        if(content === ""){
            return alert('댓글을 입력해야 합니다.');
        }

        try {
            await postComment({session : session,body : {postId : postid,content}});
            setValue('content','');
        }
        catch(err){
            console.log(err);
        }
        finally{
            setValue('content','');
        }

    }

  return (
    <div className="flex gap-3 md:gap-8 mt-[28px] md:mt-[52px]">
        <div className="size-8 md:size-[73px] rounded-full bg-Surface"/>
        <div className="flex-1 text-right">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <textarea className="w-full resize-none block h-16 md:h-[108px] rounded-xl bg-Surface px-4 py-5 text-sm md:text-base font-semibold placeholder:text-OnBackgroundGray" {...register("content")} placeholder="댓글을 입력해주세요."></textarea>
                <button type="submit" className="mt-2 md:mt-6 text-sm md:text-base font-semibold text-OnPrimary bg-primary py-2 px-4 rounded cursor-pointer">댓글 등록하기</button>
            </form>
        </div>
    </div>
  )
}