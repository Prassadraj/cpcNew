import React, { useEffect, useRef, useState } from "react";
import "./TestimonialSlider.css";

function TestimonialSlider() {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const slideWidth = 400; // Width of each slide for non-tablet screens

  const data = [
    {
      img: "",
      name: (
        <>
          <p className="text-black/90 text-lg">Mr. Venkatesh</p>
          <p className="tablet:text-sm">
            LABORATORY INCHARGE, CSIR - CENTRAL ELECTROCHEMICAL RESEARCH
            INSTITUTE, KARAIKUDI
          </p>
        </>
      ),
      desc: "For the past ten years, we’ve been using ichem 100 and identi chemical. We are able to provide accurate results by achieving proper internal and external QC values. Reagent stability is also excellent. The itrack service offered by cpc diagnostics is quite useful in finding and resolving any QC-related issues quickly.",
    },
    {
      img: "",
      name: (
        <>
          <p className="text-black/90 text-lg">Dr. Vijay Mohan</p>
          <p className="tablet:text-sm">Vijaya Medical Centre, Visakhapatnam</p>
        </>
      ),
      desc: "Thanks to CPC Diagnostics for all of the information, installation, and training on the Labtype HLA A, B, and DRB1 SSO Typing assay methods. The detailed explanations to the data analysis part using One Lambda software is very appreciable. We could gain good clarity on the most crucial aspects of these assays. We are happy with all the services and training provided by you.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % data.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [data.length]);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="tablet:h-screen">
      <div className="flex justify-center items-center flex-col gap-2 tablet:p-5">
        <p className="text-lg tablet:text-4xl text-custom-green font-semibold headline font-poppins uppercase">
          Testimonials
        </p>
        <p className="tablet:text-xl w-full text-gray-900 tracking-wide text-center">
          Our commitment to quality and innovation shines through our customers'
          words.
        </p>
      </div>

      <div className="relative overflow-hidden tablet:mx-10">
        <div
          ref={sliderRef}
          className={`flex transition-transform duration-500 gap-4 px-2 mt-2 ease-in-out ${
            data.length > 1 && window.innerWidth < 600
              ? "tablet:translate-x-0"
              : ""
          }`}
          style={{
            transform:
              window.innerWidth < 600
                ? `translateX(-${activeSlide * slideWidth}px)`
                : "none",
          }}
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="cardd border-1 border-custom-green gap-1 p-2 tablet:p-1 laptop:p-3 rounded-lg text-gray-500 flex-col flex tablet:gap-3 font-poppins w-[400px] tablet:w-full"
            >
              <div className="flex items-center w-[355px] tablet:w-[300px] laptop:w-[550px] tablet:gap-2 gap-1 tablet:p-3">
                {/* <img
                  className="w-10 h-10 tablet:w-20 tablet:h-20 rounded-full object-cover"
                  src={
                    item.img
                      ? item.img
                      : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt={item.name}
                /> */}
                <p className="tablet:text-xl text-xs font-semibold">
                  {item.name}
                </p>
              </div>
              <div className="text-[10px] tablet:text-base tablet:px-3 tablet:line-clamp-4 laptop:line-clamp-none">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {data.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 tablet:w-5 tablet:h-5 rounded-full cursor-pointer ${
              activeSlide === i ? "bg-custom-green" : "border-2 border-black/50"
            }`}
            onClick={() => handleDotClick(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSlider;
