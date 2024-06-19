"use client"

import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Form() {

    const editorRef = useRef<Editor>(null);

  return (
    <form>
        <div className="flex items-center gap-3">
            <p className="flex flex-none size-[34px] rounded-full bg-primary text-2xl font-semibold text-white items-center justify-center">1</p>
            <h3 className="text-2xl font-medium">모임 정보를 입력해주세요</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-7 mt-5 md:mt-8">
            <div className="min-w-0 flex flex-col gap-[10px]">
                <label htmlFor="" className="text-sm md:text-base font-medium px-2">모집형식</label>
                <div className="relative">
                    <select className="w-full h-11 md:h-16 rounded-lg bg-Surface text-sm md:text-base font-medium px-4 box-border" name="" id="">
                        <option value="SHORT">단기모집</option>
                        <option value="LONG">장기모집</option>
                    </select>
                </div>
            </div>
            <div className="min-w-0 flex flex-col gap-[10px]">
                <label htmlFor="" className="text-sm md:text-base font-medium px-2">지역 선택</label>
                <div className="relative">
                    <select className="w-full h-11 md:h-16 rounded-lg bg-Surface text-sm md:text-base font-medium px-4 box-border" name="" id="">
                        <option value="">지역 선택을 선택해주세요.</option>
                        <option value="SEOUL">서울</option>
                        <option value="INCHEON">인천</option>
                        <option value="GYEONGGI">경기</option>
                        <option value="DAEGU">대구</option>
                        <option value="BUSAN">부산</option>
                        <option value="GYEONGNAM">경남</option>
                        <option value="GYEONGBUK">경북</option>
                        <option value="GANGWON">경원</option>
                        <option value="JEONNAM">전남</option>
                        <option value="JEONBUK">전북</option>
                        <option value="OTHER">그외</option>
                    </select>
                </div>
            </div>
            <div className="min-w-0 flex flex-col gap-[10px]">
                <label htmlFor="" className="text-sm md:text-base font-medium px-2">구기종목</label>
                <div className="relative">
                    <select className="w-full h-11 md:h-16 rounded-lg bg-Surface text-sm md:text-base font-medium px-4 box-border" name="" id="">
                        <option value="">구기종목을 선택해주세요.</option>
                        <option value="BADMINTON">배드민턴</option>
                        <option value="BASKETBALL">농구</option>
                        <option value="FUTSAL">풋살</option>
                        <option value="TENNIS">테니스</option>
                        <option value="TABLETENNIS">탁구</option>
                        <option value="BASEBALL">야구</option>
                    </select>
                </div>
            </div>
            <div className="min-w-0 flex flex-col gap-[10px]">
                <label htmlFor="" className="text-sm md:text-base font-medium px-2">모집 인원</label>
                <select className="w-full h-11 md:h-16 rounded-lg bg-Surface text-sm md:text-base font-medium px-4 box-border" name="" id="">
                    <option value="">모집인원을 선택해주세요.</option>
                    <option value="1">1명</option>
                    <option value="2">2명</option>
                    <option value="3">3명</option>
                    <option value="4">4명</option>
                    <option value="5">5명 이상</option>
                </select>
            </div>
            <div className="min-w-0 flex flex-col gap-[10px]">
                <label htmlFor="" className="text-sm md:text-base font-medium px-2">모임 날짜</label>
            </div>
            <div className="min-w-0 flex flex-col gap-[10px]">
                <label htmlFor="" className="text-sm md:text-base font-medium px-2">시간대</label>
                <select className="w-full h-11 md:h-16 rounded-lg bg-Surface text-sm md:text-base font-medium px-4 box-border" name="" id="">
                    <option value="">시간대을 선택해주세요.</option>
                    <option value="1">1시</option>
                    <option value="2">2시</option>
                    <option value="3">3시</option>
                    <option value="4">4시</option>
                    <option value="5">5시</option>
                    <option value="6">6시</option>
                    <option value="7">7시</option>
                    <option value="8">8시</option>
                    <option value="9">9시</option>
                    <option value="10">10시</option>
                    <option value="11">11시</option>
                    <option value="12">12시</option>
                    <option value="13">13시</option>
                    <option value="14">14시</option>
                    <option value="15">15시</option>
                    <option value="16">16시</option>
                    <option value="17">17시</option>
                    <option value="18">18시</option>
                    <option value="19">19시</option>
                    <option value="20">20시</option>
                    <option value="21">21시</option>
                    <option value="22">22시</option>
                    <option value="23">23시</option>
                </select>
            </div>
            <div className="min-w-0 flex flex-col gap-[10px]">
                <label htmlFor="" className="text-sm md:text-base font-medium px-2">모임 요일</label>
            </div>
            <div className="min-w-0 flex flex-col gap-[10px]">
                <label htmlFor="" className="text-sm md:text-base font-medium px-2">모집 마감</label>
            </div>
            <div className="min-w-0 flex flex-col gap-[10px]">
                <label htmlFor="" className="text-sm md:text-base font-medium px-2">오픈카톡 주소</label>
                <div className="relative">
                    <input className="w-full h-11 md:h-16 rounded-lg bg-Surface text-sm md:text-base font-medium px-4 box-border" type="text" placeholder="오픈카톡 주소를 입력해주세요." />
                </div>
            </div>
        </div>

        <div className="mt-14 md:mt-[87px]">

            <div className="flex items-center gap-3">
                <p className="flex flex-none size-[34px] rounded-full bg-primary text-2xl font-semibold text-white items-center justify-center">2</p>
                <h3 className="text-2xl font-medium">모임에 대해 소개해주세요</h3>
            </div>

            <div className="mt-8">
                <label className="text-sm md:text-lg font-medium px-[6px]" htmlFor="title">제목</label>
                <input className="bg-Surface rounded-lg w-full h-11 md:h-14 text-sm md:text-base font-medium px-4 mt-3" type="text" placeholder="제목을 입력해주세요"/>
            </div>

            <div className="mt-7">
                <label className="text-sm md:text-lg font-medium px-[6px]" htmlFor="title">내용</label>
                <div className="h-[300px] md:h-[485px] rounded-xl mt-3">
                    <Editor
                        height="100%"
                        toolbarItems={[
                        ['heading', 'bold', 'italic', 'strike'],
                        ['hr', 'quote'],
                        ['ul', 'ol', 'task', 'indent', 'outdent'],
                        ['table', 'link'],
                        ]}
                        initialEditType="wysiwyg"
                        hideModeSwitch={true}
                        placeholder="내용을 입력해 주세요."
                        ref={editorRef}
                    />
                </div>
            </div>

        </div>

        <div className="text-center mt-10">
            <button className="inline-flex items-center text-primary bg-OnPrimary text-sm md:text-base font-medium border border-[#4FAAFF] rounded py-[9.5px] px-4 justify-center cursor-pointer">새글 작성</button>
        </div>

    </form>
  )
}
