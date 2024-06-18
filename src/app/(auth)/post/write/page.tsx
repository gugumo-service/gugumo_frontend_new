import Wrap from "@/components/Common/Wrap";

export default function Write() {
  return (
    <main className="pt-8 md:pt-[90px] pb-14 md:pb-36">
        <Wrap>
            <form>
                <div className="flex items-center gap-3">
                    <p className="flex flex-none size-[34px] rounded-full bg-primary text-2xl font-semibold text-white items-center justify-center">1</p>
                    <h3 className="text-2xl font-medium">모임 정보를 입력해주세요</h3>
                </div>

                <div>
                    <label htmlFor="">모집형식</label>
                    <select name="" id="">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>

                </div>

            </form>
        </Wrap>
    </main>
  )
}
