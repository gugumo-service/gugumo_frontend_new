import List from "@/app/(auth)/post/list/List";
import Wrap from "@/components/Common/Wrap";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function PostList() {

  const session = await getServerSession(authOptions) as any;

  return (
    <main className="mt-14 pb-[121px] md:pb-[170px]">
      <Wrap>
        <List session={session}/>
      </Wrap>
    </main>
  )
  
}