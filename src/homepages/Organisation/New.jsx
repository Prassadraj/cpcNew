import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import organisation1 from "../../images/organisation/1.png";
import organisation2 from "../../images/organisation/2.png";
import organisation3 from "../../images/organisation/3.png";
import Heading from "./Heading";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

function New() {
  useEffect(() => {
    const animations = [
      { imgClass: ".img1", ctnClass: ".ctn1", logoClass: ".logo1" },
      { imgClass: ".img2", ctnClass: ".ctn2", logoClass: ".logo2" },
      { imgClass: ".img3", ctnClass: ".ctn3", logoClass: ".logo3" },
    ];

    animations.forEach(({ imgClass, ctnClass, logoClass }) => {
      gsap.fromTo(
        ctnClass,
        { scale: 1, opacity: 0.5 },
        {
          scrollTrigger: {
            trigger: imgClass,
            start: "top 80%",
            end: "bottom 50%",
            scrub: 1,

            onEnter: () =>
              gsap.to([ctnClass, logoClass], {
                scale: 1.3,
                opacity: 1,
                duration: 0.5,
                ease: "power1.inOut",
              }),
            onLeave: () =>
              gsap.to([ctnClass, logoClass], {
                scale: 1,
                opacity: 0.5,
                duration: 0.5,
                ease: "power1.inOut",
              }),
            onEnterBack: () =>
              gsap.to([ctnClass, logoClass], {
                scale: 1.2,
                opacity: 1,
                duration: 0.5,
                ease: "power1.inOut",
              }),
            onLeaveBack: () =>
              gsap.to([ctnClass, logoClass], {
                scale: 1,
                opacity: 0.5,
                duration: 0.5,
                ease: "power1.inOut",
              }),
          },
        }
      );
    });
    gsap.from("ctn1,ctn2,ctn3", {
      opacity: 0.5,
    });
  }, []);
  const images = [
    {
      img: "https://mcdmag.com/wp-content/uploads/2020/06/Jun20_MCDeNews_Projects_CICU_NICUNurseStation-1000x600.jpg",
    },
    {
      img: "https://www.mkmdesign.com/wp-content/uploads/2023/06/Cameron-Memorial-Hospital-PACU-Nurse-Station.jpg",
    },
    {
      img: "https://www.pagnes.com/wp-content/uploads/2019/06/Reduced-Size-Front-Desk-1080x675.jpg",
    },
  ];
  return (
    <>
      <Heading />
      <div className="h-[300vh] md:flex p-2 hidden">
        <div className="flex flex-col gap-5 items-center justify-center w-1/2 md:px-5">
          <div className="md:h-full">
            <img
              src="https://www.pagnes.com/wp-content/uploads/2019/06/Reduced-Size-Front-Desk-1080x675.jpg"
              alt=""
              className="w-fit md:h-[400px] img1 rounded-[50px]"
            />
          </div>
          <div className="md:h-full">
            <img
              src="https://www.mkmdesign.com/wp-content/uploads/2023/06/Cameron-Memorial-Hospital-PACU-Nurse-Station.jpg"
              alt=""
              className="w-fit md:h-[400px] img2 rounded-[50px]"
            />
          </div>
          <div className="md:h-full">
            <img
              src="https://mcdmag.com/wp-content/uploads/2020/06/Jun20_MCDeNews_Projects_CICU_NICUNurseStation-1000x600.jpg"
              alt=""
              className="w-fit md:h-[400px] img3 rounded-[50px]"
            />
          </div>
        </div>
        <div
          className="sticky flex flex-col top-24 lg:gap-3 md:gap-2 text-xs md:text-base lg:text-base w-1/2
        font-poppins"
        >
          <div className="md:px-5 lg:px-20 md:py-2">
            <p className="ctn1 ">
              <img src={organisation1} alt="" className="w-16 logo1" />
              Jeev Diagnostics Pvt. Ltd. is a collaborative venture between
              Awareness Technology Inc. (USA) and CPC Diagnostics Pvt. Ltd.
              (India), focusing on cutting-edge in vitro clinical chemistry
              reagents.
            </p>
          </div>
          <div className="md:px-5 lg:px-20">
            <p className="ctn2">
              <img src={organisation2} alt="" className="w-16 logo2" />
              Sachika, an initiative by CPC Diagnostics Pvt. Ltd., focuses on
              life sciences education, empowering clinicians with contemporary
              bioscience skills.
            </p>
          </div>
          <div className="md:px-5 lg:px-20">
            <p className="ctn3 ">
              <img src={organisation3} alt="" className="w-16 logo3" />
              CPC’s division for diagnostic instrument manufacturing aims at
              empowerment, reliability, and innovation in indigenous
              manufacturing practices.
            </p>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 items-center justify-center p-2 gap-4 mb-2">
          <img src={images[0].img} alt="" />
          <div className="flex flex-col items-start justify-center">
            <img src={organisation1} className=" w-[40px]" alt="" />
            <p className="text-[9px]">
              Jeev Diagnostics Pvt. Ltd. is a collaborative venture between
              Awareness Technology Inc. (USA) and CPC Diagnostics Pvt. Ltd.
              (India), focusing on cutting-edge in vitro clinical chemistry
              reagents.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center justify-center p-2 gap-4 mb-2">
          <img src={images[1].img} alt="" />
          <div className="flex flex-col items-start justify-center">
            <img src={organisation2} className=" w-[40px]" alt="" />
            <p className="text-[9px]">
              Sachika, an initiative by CPC Diagnostics Pvt. Ltd., focuses on
              life sciences education, empowering clinicians with contemporary
              bioscience skills.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center justify-center p-2 gap-4 mb-2">
          <img src={images[2].img} alt="" />
          <div className="flex flex-col items-start justify-center">
            <img src={organisation3} className=" w-[40px]" alt="" />
            <p className="text-[9px]">
              CPC’s division for diagnostic instrument manufacturing aims at
              empowerment, reliability, and innovation in indigenous
              manufacturing practices.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default New;
