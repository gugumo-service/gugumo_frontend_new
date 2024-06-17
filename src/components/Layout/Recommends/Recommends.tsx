import Recommend from "./Recommend/Recommend";


export default async function Recommends() {

    const res = await fetch(`${process.env.API_URL}/api/v1/meeting/recommend`);
    const data = await res.json();

  return (
    <div className="mt-16">
        <h3 className="text-lg font-bold text-primary md:text-2xl">추천 게시물 🎯</h3>
        <div className="flex mt-[22px] gap-6 items-center xl:gap-11 md:mt-11">
            <Recommend data={data.data}/>
        </div>
    </div>
  )
  
}
