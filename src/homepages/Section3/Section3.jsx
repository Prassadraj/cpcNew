import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import whatWeDo from "../../images/section2&3/whatwedo.png";
import whoWeAre from "../../images/section2&3/whoweare.png";
import Aos from "aos";
import { Link } from "react-router-dom";
import "./section3.css";

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
      <div
        className="tablet:flex  items-center tablet:gap-5 justify-around w-full
     container1 "
      >
        <div className="">
          <div className=" mb-3">
            <p className="font-semibold tablet:hidden text-custom-green">
              Who We Are?
            </p>
          </div>
          <div className=" ">
            <p
              className="laptop:max-w-2xl tablet:max-w-lg  w-full leading-6 text-justify text-sm tablet:tracking-wider capitalize
            largeLaptop:text-xl"
            >
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
              <p className="text-custom-green text-sm largeLaptop:text-lg">
                read more...
              </p>
            </Link>
          </div>
          <button
            onClick={handleToggle}
            className="text-custom-green mt-4 underline"
          ></button>
        </div>

        <div className="tablet:h-[400px] tablet:w-[400px] laptop:w-[400px]  largeLaptop:h-[400px] rounded-2xl ">
          <img
            src={whoWeAre}
            alt="Who We Are"
            className="rounded-lg h-full w-full object-contain tablet:block hidden"
          />
        </div>
      </div>
      <div
        className="tablet:flex flex-row-reverse items-center tablet:gap-5 justify-around w-full 
    container1 "
      >
        <div className="">
          <div className=" mb-3">
            <p className="font-semibold tablet:hidden text-custom-green">
              What We Do?
            </p>
          </div>
          <div className=" ">
            <p
              className="laptop:max-w-2xl tablet:max-w-lg w-full leading-6 text-justify text-sm tablet:tracking-wider capitalize
            largeLaptop:text-xl"
            >
              We manufacture and supply advanced laboratory instruments and
              medical devices in India, Sri Lanka and Bangladesh. Our offerings
              range from pre-analytical automation for precise sample management
              to high-performance hematology and immunology analyzers. We
              provide sophisticated clinical chemistry devices and molecular
              diagnostics tools, essential for personalized medicine. Our
              mission is to transform healthcare by delivering innovative
              solutions that enhance patient care and drive diagnostic
              breakthroughs.
            </p>
            <Link to="/about">
              <p className="text-custom-green text-sm largeLaptop:text-lg">
                read more...
              </p>
            </Link>
          </div>
          <button
            onClick={handleToggle}
            className="text-custom-green mt-4 underline"
          ></button>
        </div>

        <div className="tablet:h-[400px] tablet:w-[400px] laptop:w-[400px]  largeLaptop:h-[400px] rounded-2xl ">
          <img
            src={whatWeDo}
            alt="Who We Are"
            className="rounded-lg h-full w-full object-contain hidden tablet:block"
          />
        </div>
      </div>

      {/* Section 4 */}
    </div>
  );
}

export default Section3;
