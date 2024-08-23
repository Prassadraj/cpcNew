import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import whatWeDo from "../../images/section2&3/what-we-do 1.png";
import whoWeAre from "../../images/section2&3/who we are 1.png";
import Aos from "aos";

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
      <div className="p-2 md:p-0 section3 flex flex-col md:flex-row justify-evenly items-center md:h-[500px]">
        <div className="flex flex-col items-start md:px-4 lg:p-1">
          <div className="mb-3" data-aos="zoom-in-left">
            <p className="font-bold text-custom-green text-sm md:text-3xl">
              Who We Are?
            </p>
          </div>
          <div
            className="w-full md:max-w-xl text-sm md:text-xl"
            data-aos="zoom-in-left"
          >
            <p className="leading-6 text-justify text-sm md:tracking-wider capitalize">
              At Everlife CPC Diagnostics, we pride ourselves on being a
              transformative force in the healthcare industry. As a leading
              provider of medical laboratory equipment and in vitro diagnostic
              (IVD) solutions, we are committed to enhancing healthcare outcomes
              across South Asia. With our headquarters in the vibrant city of
              Chennai and a sprawling network extending to multiple countries,
              we are uniquely positioned to deliver cutting-edge technology and
              unparalleled service. Our journey is defined by an unwavering
              commitment to excellence and innovation. We collaborate with
              top-tier partners and leverage the latest advancements in medical
              science to offer a diverse portfolio of products. Our solutions
              are designed to meet the unique challenges of modern healthcare,
              ensuring accuracy, efficiency, and reliability. At Everlife CPC
              Diagnostics, we don't just supply equipment; we empower healthcare
              professionals to achieve the extraordinary.
            </p>
          </div>
          <button
            onClick={handleToggle}
            className="text-custom-green mt-4 underline"
          ></button>
        </div>
        <div className="relative justify-center items-center hidden md:flex">
          <div className="relative bottom-0 w-[80vw] md:w-[30vw] h-[50vh] rounded-2xl z-10">
            <img
              src={whoWeAre}
              alt="Who We Are"
              className="animate-leftRight rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="p-2 md:p-0 section4 flex flex-col md:flex-row justify-evenly items-center md:h-[500px] md:mb-10">
        <div className="relative hidden md:flex justify-center items-center">
          <div className="relative -bottom-10 w-[80vw] md:w-[30vw] h-[50vh] rounded-2xl z-10">
            <img
              src={whatWeDo}
              alt="What We Do"
              className="animate-rightDown rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="mb-3" data-aos="zoom-in-left">
            <p className="font-bold text-custom-green text-sm md:text-3xl md:px-4 lg:p-1">
              What We Do?
            </p>
          </div>
          <div
            className="w-full md:max-w-xl text-sm md:text-xl md:px-4 lg:p-1"
            data-aos="zoom-in-left"
          >
            <p className="leading-6 text-sm text-justify md:tracking-wider">
              At Everlife CPC Diagnostics, we are revolutionizing healthcare
              through advanced laboratory instruments and medical devices. We
              manufacture and distribute a range of products tailored to the
              diverse needs of clinical diagnostics, including pre-analytical
              automation for precise sample management, high-performance
              hematology analyzers for accurate blood analysis, and
              comprehensive immunology testing solutions for immune response
              assessment. Our clinical chemistry systems provide precise
              biochemical analysis, while our molecular diagnostics tools enable
              advanced genetic and molecular testing. We also offer essential
              COVID-19 solutions, such as RTPCR kits and VTM tubes. Our mission
              is to transform healthcare by delivering innovative, high-quality
              solutions that support exceptional patient care and contribute to
              a healthier future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
