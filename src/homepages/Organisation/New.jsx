import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import organisation1 from "../../images/organisation/1.png";
import organisation2 from "../../images/organisation/2.png";
import organisation3 from "../../images/organisation/3.png";
import image1 from "../../images/organisation/jeev.jpg";
import image2 from "../../images/organisation/sachika.jpeg";
import sachika from "../../images/organisation/sachikaNew.png";
import image3 from "../../images/organisation/cpcmed.jpg";
import Heading from "./Heading";
import "./new.css";
import { VscDebugBreakpointData } from "react-icons/vsc";

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
      {/* jus commented -cpc siva told to show one  */}
      {/* <div
        className="container1 h-[300vh]  laptop:flex justify-around tablet:gap-5
         largeLaptop:gap-0 hidden laptop:mb-[6rem]
      largeLaptop:mb-[0rem]"
      >
        <div className="flex flex-col gap-5 items-center justify-center w-1/2 laptop:pt-14 tablet:pt-10 largeLaptop:pt-44 ">
          <div className="tablet:h-full">
            <img
              src={image1}
              alt=""
              className="w-fit   aspect-[1.5/1] object-cover img1 rounded-[30px]"
            />
          </div>
          <div className="tablet:h-full">
            <img
              src={image2}
              alt=""
              className="w-fit aspect-[1.5/1] img2 object-cover rounded-[30px]"
            />
          </div>
          <div className="tablet:h-full">
            <img
              src={image3}
              alt=""
              className="w-fit  aspect-[1.5/1] img3 object-cover rounded-[30px]"
            />
          </div>
        </div>
        <div
          className="sticky flex h-screen tablet:top-5 laptop:top-5  flex-col laptop:gap-6 tablet:gap-2 
       largeLaptop:gap-10 text-xs tablet:text-sm laptop:text-sm w-1/2 font-poppins items-center justify-center text-center laptop:px-20"
        >
          <div className="tablet:px-2 laptop:px-5 largeLaptop:px-2">
            <p className="ctn1 text-left largeLaptop:text-base laptop:text-sm font-light">
              <img
                src={organisation1}
                alt=""
                className="w-14 logo1 largeLaptop:w-20"
              />
              Jeev Diagnostics, a wholly owned subsidiary of Everlife CPC
              Diagnostics Pvt. Ltd., Chennai, India, manufactures high-quality
              state-of-the-art in vitro clinical chemistry reagents to cater to
              clinical laboratories, hospitals, and diagnostic centers.
            </p>
          </div>
          <div className="tablet:px-5 largeLaptop:px-2">
            <p className="ctn2 text-left largeLaptop:text-base  laptop:text-sm font-light">
              <img
                src={organisation2}
                alt=""
                className="w-14 logo2 largeLaptop:w-20"
              />
              Sachika, an initiative by Everlife CPC Diagnostics Pvt. Ltd.,
              focuses on life sciences education, empowering clinicians with
              contemporary bioscience skills.
            </p>
          </div>
          <div className="tablet:px-5 largeLaptop:text-2xl largeLaptop:px-2">
            <p className="ctn3 text-left largeLaptop:text-base laptop:text-sm font-light">
              <img
                src={organisation3}
                alt=""
                className="w-14 logo3 largeLaptop:w-20"
              />
              Everlife CPC’s division for diagnostic instrument manufacturing
              aims at empowerment, reliability, and innovation in indigenous
              manufacturing practices.
            </p>
          </div>
        </div>
      </div> */}
      <div className="tablet:flex  items-center justify-center  gap-4  hidden">
        <div className="">
          <img
            src={image2}
            alt="img"
            className="w-[500px]  object-contain rounded-lg"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-1/2">
          {/* <img src={organisation2} className=" w-[100px] mb-2" alt="img" /> */}
          <p className="mb-2 text-xl leading-8">
            Sachika, a first-of-its-kind initiative of CPC Diagnostics Pvt. Ltd,
            is a centre for learning life sciences. Sachika empowers clinicians
            by upgrading their skills in modern techniques of biosciences.
          </p>
          <p className="text-[9px] tablet:text-[20px] text-start flex items-center mt-3">
            <VscDebugBreakpointData className="text-green-900" />
            Basic Level Immunofluorescence.
          </p>
          <p className="text-[9px] tablet:text-[20px] mt-2 text-start flex items-center">
            <VscDebugBreakpointData className="text-green-900" />
            Advanced Immunofluorescence & Immunology Training.{" "}
          </p>
          <p className="text-[9px] tablet:text-[20px] mt-2 text-start flex items-center">
            <VscDebugBreakpointData className="text-green-900" />
            Clinical Lab Practices & Automation.{" "}
          </p>
        </div>
      </div>
      {/* mobile */}
      <div className="laptop:hidden tablet:mb-[100px]">
        {/* <div className="grid grid-cols-2 items-center justify-center p-2 my-3 gap-4 mb-4">
          <img src={image1} alt="" />
          <div className="flex flex-col items-start justify-center">
            <img
              src={organisation1}
              className=" w-[40px] tablet:w-[80px]"
              alt=""
            />
            <p className="text-[9px] tablet:text-xl">
              Jeev Diagnostics, a wholly owned subsidiary of Everlife CPC
              Diagnostics Pvt. Ltd., Chennai, India, manufactures high-quality
              state-of-the-art in vitro clinical chemistry reagents to cater to
              clinical laboratories, hospitals, and diagnostic centers.
            </p>
          </div>
        </div> */}
        <div className="flex flex-col items-center justify-center p-2 gap-4 mb-2">
          <img src={image2} alt="" />

          <div className="flex flex-col items-center justify-center">
            <p className="mb-2 text-center text-xs">
              Sachika, a first-of-its-kind initiative of CPC Diagnostics Pvt.
              Ltd, is a centre for learning life sciences. Sachika empowers
              clinicians by upgrading their skills in modern techniques of
              biosciences.
            </p>
            <div className=" flex items-center ">
              {" "}
              {/* <VscDebugBreakpointData className="text-green-900 " /> */}
              <p className="text-[9px] tablet:text-xl text-center ">
                Basic Level Immunofluorescence.
              </p>
            </div>

            <div className=" flex items-center ">
              {" "}
              {/* <VscDebugBreakpointData className="text-green-900 " /> */}
              <p className="text-[9px] tablet:text-xl text-center ">
                Advanced Immunofluorescence & Immunology Training.{" "}
              </p>
            </div>
            <div className=" flex items-center ">
              {" "}
              {/* <VscDebugBreakpointData className="text-green-900 " /> */}
              <p className="text-[9px] tablet:text-xl text-center ">
                Clinical Lab Practices & Automation.{" "}
              </p>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-2 items-center justify-center p-2 gap-4 mb-2">
          <img src={image3} alt="" />
          <div className="flex flex-col items-start justify-center">
            <img src={organisation3} className=" w-[40px]" alt="" />
            <p className="text-[9px] tablet:text-xl">
              Everlife CPC’s division for diagnostic instrument manufacturing
              aims at empowerment, reliability, and innovation in indigenous
              manufacturing practices.
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default New;
