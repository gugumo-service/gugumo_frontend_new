"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function HomeService({children} : {children? : React.ReactNode}) {

  const serviceRef = useRef(null);
  useGSAP(()=>{

    gsap.timeline({
        scrollTrigger: {
            trigger : '.dot',
            start : "top bottom-=15%"
        }
    })
    .fromTo('.dot div',{
        opacity : 0
    },{
        opacity : 1,
        stagger : 0.3,
    })
    .fromTo('.title',{
        y : 75,
        opacity : 0
    },{
        y : 0,
        opacity : 1,
    },">-=50%");


    gsap.utils.toArray('.card').forEach((el : any,index : number)=>{

        gsap.to(el,{
            rotate : index % 2 === 0 ? -2.5 : 5,
            x : index % 2 === 0 ? -10 : 10,
            scrollTrigger: {
                trigger : el,
                start : "top bottom-=15%"
            }
        })

    });

    gsap.timeline({
        scrollTrigger: {
            trigger : '.link',
            start : "top bottom-=15%"
        }
    })
    .from('.link dt',{
        y : 75,
        opacity : 0
    },">-=50%")
    .from('.link dd',{
        y : 75,
        opacity : 0
    },">-=50%")
    .from('.link a',{
        y : 75,
        opacity : 0
    })

  },{scope : serviceRef});

  return (
    <div ref={serviceRef} className="pt-[150px] md:pt-[149px] pb-[180px] md:pb-[230px] bg-[#0F7FFF]">
      {children}
    </div>
  )
}
