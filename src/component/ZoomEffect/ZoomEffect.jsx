import React, { useRef, useEffect } from "react";
import AOS from "aos";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "aos/dist/aos.css";
import "./style.css"; // Import the normal CSS here
import itrack from "../../images/itrack/itrack.png";
import itrackImg1 from "../../images/itrack/itrack1.png";
import itrackImg2 from "../../images/itrack/itrack2.png";
import itrackImg3 from "../../images/itrack/itrack3.png";
import itrackImg4 from "../../images/itrack/itrack4.png";
import itrackImg5 from "../../images/itrack/itrack5.png";

gsap.registerPlugin(ScrollTrigger);

function ZoomEffect() {
  useEffect(() => {
    AOS.init();
  }, []);

  const pictures = [
    { src: itrackImg5, cls: "two" },
    { src: itrackImg3, cls: "three" },
    { src: itrackImg4, cls: "four" },
    { src: itrackImg2, cls: "five" },
    { src: itrackImg1, cls: "six" },
  ];

  return (
    <div
      className="flex flex-col gap-2 laptop:mb-10"
      style={{
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center items-center flex-col gap-1 tablet:mt-5 font-poppins">
        <img style={{ objectFit: "cover" }} width="220px" src={itrack} alt="" />
        <p data-aos="zoom-in-up" className="tablet:text-xl text-center">
          CPC developed i-track, a proprietary system for remote instrument
          maintenance, in a groundbreaking initiative.
        </p>
        <p className="tablet:text-xl text-center" data-aos="zoom-in-up">
          For Support Dial:{" "}
          <span className="text-custom-green">1800 571 1101</span>
        </p>
      </div>
      <div
        id="container"
        className="tablet:h-[100vh] flex flex-col gap-3 tablet:mt-5"
      >
        <div className=" flex justify-evenly ">
          <img
            className="w-[100px] object-cover tablet:h-[100px] laptop:w-[200px] laptop:h-[150px]"
            src={pictures[0].src}
            data-aos="zoom-in-up"
            alt=""
          />

          <img
            src={pictures[2].src}
            alt=""
            data-aos="zoom-in-up"
            className="w-[100px] object-cover h-[100px] tablet:w-[150px] tablet:h-[100px] laptop:w-[200px] laptop:h-[150px]"
          />
        </div>
        <div className=" flex justify-evenly items-center ">
          <img
            className="w-[50px] object-cover h-[50px] laptop:w-[200px] laptop:h-[200px] tablet:w-[100px] tablet:h-[100px]"
            src={pictures[4].src}
            data-aos="zoom-in-up"
            alt=""
          />
          <iframe
            // width="510"
            // height="287"
            data-aos="zoom-in-up"
            className="w-[180px] h-[100px] tablet:w-[500px] tablet:h-[270px] laptop:w-[700px] laptop:h-[270px] "
            src="https://www.youtube.com/embed/mNYxQo9i7gc"
            title="i-track - Constant Remote Support"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>{" "}
          <img
            className="w-[50px] object-cover h-[50px] laptop:w-[200px] laptop:h-[200px] tablet:w-[100px] tablet:h-[100px] "
            src={pictures[3].src}
            data-aos="zoom-in-up"
            alt=""
          />
        </div>
        <div className=" flex justify-evenly items-center ">
          <img
            className="w-[100px] object-cover tablet:h-[100px] laptop:w-[200px] laptop:h-[120px]"
            src={pictures[1].src}
            data-aos="zoom-in-up"
            alt=""
          />

          <img
            className="w-[100px] object-cover tablet:h-[100px] laptop:w-[200px] laptop:h-[120px] "
            src={pictures[2].src}
            data-aos="zoom-in-up"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ZoomEffect;
