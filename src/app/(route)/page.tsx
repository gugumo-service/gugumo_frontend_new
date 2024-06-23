import Headers from "@/components/Layout/Headers/Headers";
import Wrap from "@/components/Common/Wrap";
import Banner from "@/components/page/main/Banner";
import Footers from "@/components/Layout/Footers/Footers";
import Recommends from "@/components/Layout/Recommends/Recommends";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import List from "@/components/page/main/List";

export default async function Home() {

  const session = await getServerSession(authOptions) as any;
  let data = [];
  const res = await fetch(`${process.env.API_URL}/api/v1/meeting`,{
    headers : {
      "Authorization" : session?.accessToken
    },
    cache : "no-cache"
  });
  if(res.ok){
    const result = await res.json();
    data = result.data.content;
  }

  return (
    <>
      <Headers/>
      <main className="md:pt-[50px] md:pb-[170px] pt-6 pb-[121px]">
        <Banner/>
        <Wrap>
          <Recommends/>
        </Wrap>
        <Wrap className="pt-8 mt-8 md:mt-[100px] md:pt-0 border-t-[6px] border-Surface md:border-none">
          <List session={session} data={data} />
        </Wrap>
      </main>
      <Footers/>
    </>
  )
}