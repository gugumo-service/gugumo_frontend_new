import { usePostCommnet } from "@/hooks/useComment";
import { useForm } from "react-hook-form"

export default function ReplyForm({session,parentId,postId,setCommnetShow} : {session : any,parentId : number,postId : string,setCommnetShow : any}) {

  const {register,handleSubmit} = useForm();
  const {mutate : postCommnet} = usePostCommnet();
  
  const onSubmitHandler = (data : any)=>{

    const {content} = data;

    try{
      postCommnet({
        session,
        body : {
          postId,
          content,
          parentCommentId : parentId
        }
      })
    }
    catch(err){
      console.log(err);
    }
    finally{
      setCommnetShow({
        commentId : 0,
        type : "reply"
      });
    }

  }

  return (
    <div className="ml-[15%] md:ml-[120px] mt-5">
        <div className="flex-1 text-right">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <textarea 
                    className="w-full resize-none block h-16 md:h-[108px] rounded-xl bg-Surface px-4 py-5 text-sm md:text-base font-semibold placeholder:text-OnBackgroundGray" 
                    placeholder="답글을 달아주세요"
                    {...register('content',{maxLength: 1000, minLength : 1})}
                />
                <button type="submit" className="mt-2 md:mt-6 text-sm md:text-base font-semibold text-OnPrimary bg-primary py-2 px-4 rounded cursor-pointer">답글 등록하기</button>
            </form>
        </div>
    </div>
  )
  
}
