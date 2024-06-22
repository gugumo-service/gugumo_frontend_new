"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function HomeKeyword({children} : {children : React.ReactNode}) {

    const keywordRef = useRef(null);

    useGSAP(()=>{

        gsap.fromTo('.base01',{
            y : 75,
            opacity : 0,
        },{
            y : 0,
            opacity : 1,
            scrollTrigger : {
                trigger : ".base01",
                start : "top bottom-=15%",
                // markers : true,
            }
        });
        gsap.fromTo('.base02',{
            y : 75,
            opacity : 0,
        },{
            y : 0,
            opacity : 1,
            scrollTrigger : {
                trigger : ".base02",
                start : "top bottom-=15%",
                // markers : true,
            }
        });

        gsap.to('.megaphone01 img',{
            rotate : 15,
            repeat : -1,
            duration : 0.8,
            ease : "power1.inOut",
            yoyo : true,
        });

        gsap.to('.megaphone02 img',{
            rotate : 15,
            repeat : -1,
            duration : 0.8,
            ease : "power1.inOut",
            yoyo : true,
        });

        gsap.to(".one",{
            y : -50,
            repeat : -1,
            duration : 0.6,
            repeatDelay : 0.4,
            yoyo : true,
        })
        gsap.to(".two",{
            y : -75,
            repeat : -1,
            duration : 0.6,
            repeatDelay : 0.2,
            yoyo : true,
        })
        gsap.to(".three",{
            y : -30,
            repeat : -1,
            duration : 0.6,
            repeatDelay : 0.3,
            yoyo : true,
        })

    },{scope : keywordRef});

  return (
    <div className="pt-[122px] md:pt-[182px] pb-[183px] md:pb-60" ref={keywordRef}>
        {children}
    </div>
  )
}
