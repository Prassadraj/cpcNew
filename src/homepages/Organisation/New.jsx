import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import organisation1 from "../../images/organisation/1.png";
import organisation2 from "../../images/organisation/2.png";
import organisation3 from "../../images/organisation/3.png";
import image1 from "../../images/organisation/jeev.jpg";
import image2 from "../../images/organisation/sachika.jpg";
import image3 from "../../images/organisation/cpcmed.jpg";
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
            start: "top 50%",
            end: "bottom 50%",
            // markers: true,
            scrub: 1,

            onEnter: () =>
              gsap.to([ctnClass, logoClass], {
                scale: 1.1,
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
                scale: 1.1,
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
      <div className="h-[300vh] tablet:flex justify-evenly tablet:gap-5 tablet:px-10 hidden">
        <div className="flex flex-col gap-5 items-center justify-center w-1/2 laptop:pt-20 tablet:pt-10">
          <div className="tablet:h-full">
            <img
              src={image1}
              alt=""
              className="w-fit tablet:h-[400px] object-contain img1 rounded-[50px]"
            />
          </div>
          <div className="tablet:h-full">
            <img
              src={image2}
              alt=""
              className="w-fit tablet:h-[400px] img2 object-contain rounded-[50px]"
            />
          </div>
          <div className="tablet:h-full">
            <img
              src={image3}
              alt=""
              className="w-fit tablet:h-[400px] img3 object-contain rounded-[50px]"
            />
          </div>
        </div>
        <div className="sticky flex h-screen tablet:top-10 laptop:top-10 flex-col laptop:gap-6 tablet:gap-2 text-xs tablet:text-sm laptop:text-sm w-1/2 font-poppins items-center justify-center text-center laptop:px-20">
          <div className="tablet:px-5">
            <p className="ctn1 text-left">
              <img src={organisation1} alt="" className="w-16 logo1" />
              Jeev Diagnostics, a wholly owned subsidiary of Everlife CPC
              Diagnostics Pvt. Ltd., Chennai, India, manufactures high-quality
              state-of-the-art in vitro clinical chemistry reagents to cater to
              clinical laboratories, hospitals, and diagnostic centers.
            </p>
          </div>
          <div className="tablet:px-5 ">
            <p className="ctn2 text-left">
              <img src={organisation2} alt="" className="w-14 logo2" />
              Sachika, an initiative by Everlife CPC Diagnostics Pvt. Ltd.,
              focuses on life sciences education, empowering clinicians with
              contemporary bioscience skills.
            </p>
          </div>
          <div className="tablet:px-5 ">
            <p className="ctn3 text-left">
              <img src={organisation3} alt="" className="w-14 logo3" />
              Everlife CPC’s division for diagnostic instrument manufacturing
              aims at empowerment, reliability, and innovation in indigenous
              manufacturing practices.
            </p>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="tablet:hidden">
        <div className="grid grid-cols-2 items-center justify-center p-2 gap-4 mb-2">
          <img src={images[0].img} alt="" />
          <div className="flex flex-col items-start justify-center">
            <img src={organisation1} className=" w-[40px]" alt="" />
            <p className="text-[9px]">
              Jeev Diagnostics, a wholly owned subsidiary of Everlife CPC
              Diagnostics Pvt. Ltd., Chennai, India, manufactures high-quality
              state-of-the-art in vitro clinical chemistry reagents to cater to
              clinical laboratories, hospitals, and diagnostic centers.
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
              Everlife CPC’s division for diagnostic instrument manufacturing
              aims at empowerment, reliability, and innovation in indigenous
              manufacturing practices.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default New;
