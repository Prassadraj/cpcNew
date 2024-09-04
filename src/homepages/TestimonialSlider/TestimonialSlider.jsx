import React, { useEffect, useRef, useState } from "react";
import "./TestimonialSlider.css";
import bgImage from "../../images/BgImages/testimonial-bg.webp";

function TestimonialSlider() {
  const sliderRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const data = [
    {
      img: "",
      name: (
        <>
          <p>Mr.Venkatesh</p>
          <p className="text-sm">
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
          <p>Dr.Vijay mohan</p>
          <p className="text-sm">Vijaya Medical Centre, Visakhapatnam</p>
        </>
      ),
      desc: "Thanks to CPC Diagnostics for all of the information, installation, and training on the Labtype HLA A, B, and DRB1 SSO Typing assay methods. The detailed explanations to the data analysis part using One Lambda software is very appreciable. We could gain good clarity on the most crucial aspects of these assays. We are happy with all the services and training provided by you.",
    },
    // {
    //   img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-olly-762020.jpg&fm=jpg",
    //   name: "Julie",
    //   desc: "We are extremely satisfied with the products from CPC Diagnostics. Their innovative solutions have greatly improved our workflow.",
    // },
    // {
    //   img: "https://st4.depositphotos.com/2884373/24534/i/450/depositphotos_245347128-stock-photo-red-haired-sexy-size-woman.jpg",
    //   name: "Sophie",
    //   desc: "CPC Diagnostics offers top-notch products and exceptional customer service. Their dedication to quality is evident in everything they do.",
    // },
  ];

  const [scrollAmount, setScrollAmount] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updateCardWidth = () => {
      const width = slider.querySelector(".cardd")?.offsetWidth || 0;
      setCardWidth(width);
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => window.removeEventListener("resize", updateCardWidth);
  }, [data.length]);

  useEffect(() => {
    if (!sliderRef.current || cardWidth === 0) return;

    const slider = sliderRef.current;
    const totalWidth = cardWidth * data.length;
    const scrollStep = cardWidth + 20; // Adjust spacing if necessary

    scrollIntervalRef.current = setInterval(() => {
      setScrollAmount((prevAmount) => {
        const newAmount = prevAmount + scrollStep;
        if (newAmount >= totalWidth) return 0;
        return newAmount;
      });

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });

      setActiveSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, 3000); // Scroll speed

    return () => clearInterval(scrollIntervalRef.current);
  }, [scrollAmount, cardWidth, data.length]);

  const handleDotClick = (index) => {
    if (!sliderRef.current || cardWidth === 0) return;

    setScrollAmount(cardWidth * index);
    sliderRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    setActiveSlide(index);
  };

  return (
    <div className="tablet:h-[100vh]">
      <div className="flex justify-center items-center flex-col gap-2 tablet:p-5">
        <p className="text-lg tablet:text-4xl text-custom-green font-semibold headline font-poppins uppercase">
          Testimonials
        </p>
        <p className="tablet:text-xl w-full text-gray-900 tracking-wide text-center">
          Our commitment to quality and innovation shines through our customers'
          words.
        </p>
      </div>

      <div
        ref={sliderRef}
        className="custom-scrollbar tablet:mt-2 tablet:mx-10 h-[150px] flex tablet:h-auto gap-6 overflow-hidden p-2 smooth-scroll"
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="cardd border-1 border-custom-green gap-1 p-2 tablet:p-1 laptop:p-3 rounded-lg text-gray-500 flex-col flex tablet:gap-3 font-poppins"
          >
            <div className="flex items-center w-[125px] tablet:w-[300px] laptop:w-[550px] tablet:gap-2 gap-1 tablet:p-3">
              <img
                className="w-10 h-10 tablet:w-20 tablet:h-20 rounded-full object-cover"
                src={
                  item.img
                    ? item.img
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt={item.name}
              />
              <p className="tablet:text-xl text-base font-semibold">
                {item.name}
              </p>
            </div>
            <div className="text-[9px] tablet:text-base tablet:px-3 tablet:line-clamp-4 laptop:line-clamp-none">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2 gap-2">
        {data.map((_, i) => (
          <p
            key={i}
            className={`w-3 h-3 tablet:w-5 tablet:h-5 rounded-full cursor-pointer ${
              activeSlide === i
                ? "bg-custom-green"
                : " border-2 border-black/50"
            }`}
            onClick={() => handleDotClick(i)}
          ></p>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSlider;
