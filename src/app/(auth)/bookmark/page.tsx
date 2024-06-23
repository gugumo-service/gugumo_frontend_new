import Wrap from "@/components/Common/Wrap";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import List from "@/app/(auth)/bookmark/List";

export default async function Bookmark() {

    const session = await getServerSession(authOptions) as any;

    return (
        <main className="mt-14 pb-[121px] md:pb-[170px]">
            <Wrap>
                <List session={session}/>
            </Wrap>
        </main>
    )

}
