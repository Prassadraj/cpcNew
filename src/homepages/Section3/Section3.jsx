import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import whatWeDo from "../../images/section2&3/whatwedo.png";
import whoWeAre from "../../images/section2&3/whoweare.png";
import Aos from "aos";
import { Link } from "react-router-dom";

function Section3() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Background animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#bg1",
          start: "top 70%",
          end: "center",
          scrub: 3,
        },
      })
      .from("#bg1", { x: "20px" })
      .to("#bg1", { x: "0px" });

    // Text animations
    gsap.utils.toArray(".imagebox").forEach((imgBox) => {
      gsap.fromTo(
        imgBox,
        { opacity: 0, scale: 0.2, skewY: 30 },
        {
          opacity: 1,
          scale: 1,
          skewY: 0,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: imgBox,
            toggleActions: "play none none none",
          },
        }
      );
    });
    Aos.init();
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="font-poppins">
      {/* Section 3 */}
      <div className="p-2 tablet:p-0 section3 flex flex-col tablet:flex-row justify-evenly items-center tablet:h-[500px]">
        <div className="flex flex-col items-start tablet:px-4 laptop:p-1">
          <div className="mb-3" data-aos="zoom-in-left">
            <p className="font-bold text-custom-green text-sm tablet:hidden tablet:text-3xl">
              Who We Are?
            </p>
          </div>
          <div
            className="w-full tablet:max-w-xl text-sm tablet:text-xl "
            data-aos="zoom-in-left"
          >
            <p className="leading-6 text-justify text-sm tablet:tracking-wider capitalize">
              At Everlife CPC Diagnostics, we lead the healthcare industry with
              our advanced medical laboratory equipment and in-vitro diagnostics
              (IVD) solutions. Headquartered in Chennai, our reach spans across
              multiple countries in South Asia, delivering innovation and
              excellence in every product. With over 37 years of expertise, we
              specialize in autoimmune diagnostics, manufacturing, and R&D for
              instruments and reagents. Our extensive network and unwavering
              commitment to quality empower healthcare professionals to achieve
              the extraordinary.
            </p>
            <Link to="/about">
              <p className="text-custom-green text-sm">read more...</p>
            </Link>
          </div>
          <button
            onClick={handleToggle}
            className="text-custom-green mt-4 underline"
          ></button>
        </div>
        <div className="relative justify-center items-center hidden tablet:flex">
          <div className="relative bottom-0 w-[80vw] tablet:w-[30vw] h-[50vh] rounded-2xl z-10 ">
            <img src={whoWeAre} alt="Who We Are" className="rounded-lg" />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="p-2 tablet:p-0 section4 flex flex-col tablet:flex-row justify-evenly items-center tablet:h-[500px] tablet:mb-10">
        <div className="relative hidden tablet:flex justify-center items-center">
          <div className="relative  w-[80vw] tablet:w-[30vw] h-[50vh] rounded-2xl z-10">
            <img src={whatWeDo} alt="What We Do" className=" rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="mb-3" data-aos="zoom-in-left">
            <p className="font-bold text-custom-green tablet:hidden  text-sm tablet:text-3xl tablet:px-4 laptop:p-1">
              What We Do?
            </p>
          </div>
          <div
            className="w-full tablet:max-w-xl text-sm tablet:text-xl tablet:px-4 laptop:p-1"
            data-aos="zoom-in-left"
          >
            <p className="leading-6 text-sm text-justify tablet:tracking-wider">
              We manufacture and supply advanced laboratory instruments and
              medical devices in India, Sri Lanka and Bangladesh. Our offerings
              range from pre-analytical automation for precise sample management
              to high-performance hematology and immunology analyzers. We
              provide sophisticated clinical chemistry devices and molecular
              diagnostics tools, essential for personalized medicine. Our
              mission is to transform healthcare by delivering innovative
              solutions that enhance patient care and drive diagnostic
              breakthroughs.
            </p>{" "}
            <Link to="/about">
              <p className="text-custom-green text-sm">read more...</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
