import React, { useEffect, useState } from "react";
import organisation1 from "../../images/organisation/1.png";
import organisation2 from "../../images/organisation/2.png";
import organisation3 from "../../images/organisation/3.png";
import image1 from "../../images/organisation/Designer1.png";
import image2 from "../../images/organisation/Designer2.png";
import image3 from "../../images/organisation/Designer3.png";
import "./organisation.css";
import Heading from "./Heading";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";

// import { tsParticles } from "tsparticles";

const Organisation = () => {
  const [scrollY, setScrollY] = useState(0);

  const scrollHandler = () => {
    setScrollY(window.scrollY);
  };
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
  // console.log(scrollY);
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in animations
    gsap.utils.toArray(".fade-in").forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Start animation when top of element reaches 80% of viewport height
          end: "bottom 20%", // End animation when bottom of element reaches 20% of viewport height
          scrub: true, // Smooth animation scrubbing
        },
      });
    });

    AOS.init();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <Heading />
      {/* for laptop */}
      <div className="hidden h-[300vh] tablet:flex font-poppins mb-20" id="mm">
        <div className="tablet:w-[50vw] w-[25vw] flex justify-center items-center flex-col">
          {images.map((image, i) => (
            <div
              key={i}
              className="h-[100vh] flex flex-col justify-center items-center p-10"
            >
              <img
                src={image.img}
                alt=""
                className="image w-fit rounded-2xl h-[500px]"
              />
            </div>
          ))}
        </div>

        <div className="w-[50vw] flex justify-end items-center font-poppins pr-10">
          {/* Content 1 */}
          <div
            className="rightside"
            style={
              scrollY > 2400 && scrollY < 4150
                ? {
                    top: "17vh",
                    left: "50vw",
                    position: "fixed",
                    transition:
                      "position 1s ease-in-out, opacity 1s ease-in-out",
                  }
                : scrollY >= 5480
                ? {
                    display: "none",
                    transition: "display 1s ease-in-out",
                  }
                : {
                    transition: "position 1s ease-in-out",
                  }
            }
          >
            <div className="flex gap-2 text-sm tablet:text-2xl text-custom-green">
              <p className="bg-transparent border-2 border-solid border-custom-green h-6 w-6  tablet:h-10 tablet:w-10 text-center rounded-full flex items-center justify-center">
                1
              </p>
              <img
                style={
                  scrollY > 2400 && scrollY < 3120
                    ? {
                        opacity: 1,
                        transform: "scale(1.1)",

                        transition:
                          "opacity 1s ease-in-out, transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
                      }
                    : {
                        opacity: 0.2,
                        transform: "scale(1)",

                        transition:
                          "opacity 1s ease-in-out, transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
                      }
                }
                src={organisation1}
                className="tablet:w-[70wv] w-[50px]"
                alt=""
              />
            </div>
            <div className="flex justify-end items-center mt-2 text-xs tablet:text-lg pr-10">
              <p
                className="max-w-lg min-w-xs text-justify pl-12 "
                style={
                  scrollY > 2400 && scrollY < 2900
                    ? {
                        opacity: 1,
                        transform: "scale(1.1)",

                        transition:
                          "opacity 1s ease-in-out, transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
                      }
                    : {
                        opacity: 0.2,
                        transform: "scale(1)",

                        transition:
                          "opacity 1s ease-in-out, transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
                      }
                }
              >
                Jeev Diagnostics Pvt. Ltd. is a collaborative venture between
                Awareness Technology Inc. (USA) and CPC Diagnostics Pvt. Ltd.
                (India), focusing on cutting-edge in vitro clinical chemistry
                reagents.
              </p>
            </div>

            <div
              style={
                scrollY > 3120
                  ? {
                      opacity: 1,
                      transition: "opacity 1s ease-in-out",
                    }
                  : {
                      opacity: 0.2,
                      transition: "opacity 1s ease-in-out",
                    }
              }
              className="w-[2px] h-[20vh] bg-custom-green relative -top-[20vh] left-[3vh]"
            ></div>
          </div>
          {/* Content 2 */}
          <div
            className="rightside"
            style={
              scrollY > 2250 && scrollY < 4000
                ? {
                    top: "45vh",
                    left: "50vw",
                    position: "fixed",
                    transition: "top 2s ease-in-out",
                  }
                : scrollY >= 5330
                ? {
                    display: "none",
                    transition: "display 1s ease-in-out",
                  }
                : {}
            }
          >
            <div className="flex gap-2 text-2xl text-custom-green">
              <p
                style={scrollY > 2900 ? { opacity: 1 } : { opacity: 0.2 }}
                className="bg-transparent border-2 border-solid border-custom-green h-10 w-10 text-center rounded-full flex items-center justify-center"
              >
                2
              </p>
              <img
                width="70vw"
                style={
                  scrollY > 2900 && scrollY < 3578
                    ? {
                        opacity: 1,
                        transform: "scale(1.1)",

                        transition:
                          "opacity 1s ease-in-out, transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
                      }
                    : {
                        opacity: 0.2,
                        transform: "scale(1)",

                        transition:
                          "opacity 1s ease-in-out, transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
                      }
                }
                src={organisation2}
                alt=""
              />
            </div>
            <div className="flex justify-end items-center mt-1 text-lg pr-10">
              <p
                className="max-w-lg min-w-xs text-justify pl-12"
                style={
                  scrollY > 2900 && scrollY < 3578
                    ? {
                        opacity: 1,
                        transform: "scale(1.1)",

                        transition:
                          "opacity 1s ease-in-out, transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
                      }
                    : {
                        opacity: 0.2,
                        transform: "scale(1)",

                        transition:
                          "opacity 1s ease-in-out, transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
                      }
                }
              >
                Sachika, an initiative by CPC Diagnostics Pvt. Ltd., focuses on
                life sciences education, empowering clinicians with contemporary
                bioscience skills.
              </p>
            </div>
            <div
              style={
                scrollY > 3578
                  ? {
                      opacity: 1,
                      transition: "opacity 0.5s ease-in-out",
                    }
                  : {
                      opacity: 0.2,
                      transition: "opacity 0.5s ease-in-out",
                    }
              }
              className="w-[2px] h-[18vh] bg-custom-green relative -top-[15vh] left-[3vh]"
            ></div>
          </div>
          {/* Content 3 */}
          <div
            className="rightside"
            style={
              scrollY > 2100 && scrollY < 3850
                ? {
                    top: "70vh",
                    left: "50vw",
                    position: "fixed",
                    transition: "position 2s ease-in-out",
                  }
                : scrollY >= 5240
                ? {
                    display: "none",
                    transition: "display 2s ease-in-out",
                  }
                : {}
            }
          >
            <div className="flex gap-2 text-2xl text-custom-green items-center">
              <p
                style={scrollY > 3578 ? { opacity: 1 } : { opacity: 0.2 }}
                className="bg-transparent border-2 border-solid border-custom-green h-10 w-10 text-center rounded-full flex items-center justify-center"
              >
                3
              </p>
              <img
                width="70vw"
                style={
                  scrollY > 3578 && scrollY < 5480
                    ? {
                        opacity: 1,
                        transform: "scale(1.1)",

                        transition:
                          "opacity 1s ease-in-out, transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
                      }
                    : {
                        opacity: 0.2,
                        transform: "scale(1)",

                        transition:
                          "opacity 1s ease-in-out, transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
                      }
                }
                src={organisation3}
                alt=""
              />
            </div>
            <div className="flex justify-end items-center mt-0 text-lg pr-10">
              <p
                className="max-w-lg min-w-xs text-justify pl-12"
                style={
                  scrollY > 3578 && scrollY < 5480
                    ? {
                        opacity: 1,
                        transform: "scale(1.1)",

                        transition:
                          "opacity 1s ease-in-out, transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
                      }
                    : {
                        opacity: 0.2,
                        transform: "scale(1)",

                        transition:
                          "opacity 1s ease-in-out, transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
                      }
                }
              >
                CPC’s division for diagnostic instrument manufacturing aims at
                empowerment, reliability, and innovation in indigenous
                manufacturing practices.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* for mobile */}
      <div className="tablet:hidden">
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
};

export default Organisation;
