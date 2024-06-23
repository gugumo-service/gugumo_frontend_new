import Wrap from "@/components/Common/Wrap";
import Form from "@/components/page/post/write/Form";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function Edit({params} : {params : {postid : string}}) {

  const session = await getServerSession(authOptions) as any;
  const response = await fetch(`${process.env.API_URL}/api/v1/meeting/${params.postid}`);
  const data = await response.json();
  return (
    <main className="pt-8 md:pt-[90px] pb-14 md:pb-36">
      <Wrap>
        <Form session={session} edit={data.data}/>
      </Wrap>
    </main>
  )
}