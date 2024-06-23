import Wrap from "@/components/Common/Wrap";
import Form from "@/components/page/post/write/Form";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function Edit() {

  const session = await getServerSession(authOptions) as any;

  return (
    <main className="pt-8 md:pt-[90px] pb-14 md:pb-36">
      <Wrap>
        <Form session={session}/>
      </Wrap>
    </main>
  )
}