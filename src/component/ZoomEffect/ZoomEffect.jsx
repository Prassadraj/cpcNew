import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import itrack from "../../images/itrack/itrack.webp";
import itrackImg1 from "../../images/itrack/itrack1.webp";
import itrackImg2 from "../../images/itrack/itrack2.webp";
import itrackImg3 from "../../images/itrack/itrack3.webp";
import itrackImg4 from "../../images/itrack/itrack4.webp";
import itrackImg5 from "../../images/itrack/itrack5.webp";

function ZoomEffect() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const pictures = [
    { src: itrackImg5, alt: "iTrack Image 1" },
    { src: itrackImg3, alt: "iTrack Image 2" },
    { src: itrackImg4, alt: "iTrack Image 3" },
    { src: itrackImg2, alt: "iTrack Image 4" },
    { src: itrackImg1, alt: "iTrack Image 5" },
  ];

  return (
    <div>
      <div className="flex flex-col gap-2  mb-4 w-full h-full">
        {/* Header Section */}
        <div className="flex justify-center items-center flex-col gap-3  tablet:mt-5 font-poppins">
          <img
            className="w-[220px] largeLaptop:w-[250px] object-cover"
            src={itrack}
            alt="iTrack Logo"
          />
          <p className="tablet:text-xl text-center largeLaptop:text-2xl">
            CPC developed i-track, a proprietary system for remote instrument
            maintenance, in a groundbreaking initiative.
          </p>
          <p className="tablet:text-xl text-center laptop:mb-10">
            For Support Dial:{" "}
            <span className="text-custom-green largeLaptop:text-2xl">
              1800 571 1101
            </span>
          </p>
        </div>

        {/* Images and Content Section */}
        <div
          id="container"
          className="tablet:h-fit largeLaptop:h-fit flex flex-col gap-3 tablet:mt-5"
        >
          {/* First Row */}
          <div className="flex justify-evenly">
            {pictures.slice(0, 2).map((pic, idx) => (
              <img
                key={idx}
                className="w-[100px] object-cover tablet:h-[100px] laptop:w-[200px] laptop:h-[150px]"
                src={pic.src}
                loading="lazy"
                alt={pic.alt}
              />
            ))}
          </div>

          {/* Second Row */}
          <div className="flex justify-evenly items-center">
            <img
              className="w-[50px] object-cover h-[50px] laptop:w-[200px] laptop:h-[200px] tablet:w-[100px] tablet:h-[100px]"
              src={pictures[4].src}
              loading="lazy"
              alt={pictures[4].alt}
            />
            <iframe
              className="w-[180px] h-[100px] tablet:w-[500px] tablet:h-[270px] laptop:w-[700px] laptop:h-[270px]"
              src="https://www.youtube.com/embed/mNYxQo9i7gc"
              title="i-track - Constant Remote Support"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <img
              className="w-[50px] object-cover h-[50px] laptop:w-[200px] laptop:h-[200px] tablet:w-[100px] tablet:h-[100px]"
              src={pictures[3].src}
              loading="lazy"
              alt={pictures[3].alt}
            />
          </div>

          {/* Third Row */}
          <div className="flex justify-evenly items-center">
            {pictures.slice(1, 3).map((pic, idx) => (
              <img
                key={idx}
                className="w-[100px] object-cover tablet:h-[100px] laptop:w-[200px] laptop:h-[120px]"
                src={pic.src}
                loading="lazy"
                alt={pic.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZoomEffect;
