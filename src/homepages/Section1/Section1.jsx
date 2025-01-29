import React, { useContext, useEffect, useState } from "react";
import Slider from "../../component/Slider/Slider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionCategory } from "../../component/Context/SectionCategory";
import { CategoryContext } from "../../component/Context/CategoryContext";
function Section1() {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  const { selecteSectionCategory, setSelectSectionCategory } =
    useContext(SectionCategory);
  useEffect(() => {
    Splitting();
    gsap.registerPlugin(ScrollTrigger);

    // Button animation
    gsap.fromTo(
      ".btn1",
      {
        skewX: 65,
        opacity: 0,
      },
      {
        opacity: 1,
        skewX: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".btn1",
          once: true, // Play animation only once
          stagger: {
            amount: 1,
          },
        },
      }
    );

    // Subtitle animation
    gsap.from(".subTitle", {
      duration: 1,
      opacity: 0,
      y: 120,
      scrollTrigger: {
        trigger: ".subTitle",
        once: true, // Play animation only once
        stagger: 1,
      },
    });

    // Character animation
    gsap.from(".char", {
      duration: 1,
      opacity: 0,
      y: 200,
      ease: "power4.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".char",
        once: true, // Play animation only once
      },
    });
  }, []);

  return (
    <>
      <div className="section1 tablet:flex tablet:flex-row grid grid-cols-1 justify-center items-center laptop:h-screen w-full overflow-hidden font-poppins overflow-x-hidden tablet:h-[50vh] largeLaptop:h-[60vh] largeLaptop:mb-20">
        <div className="flex-1 tablet:w-1/2 w-full -mt-10 sm:ml-4 laptop:ml-14 px-2 sm:px-0">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-2xl mt-3 tablet:mt-0 tablet:text-3xl largeLaptop:text-[35px] font-bold text-[#56575D]"
          >
            Medical Laboratory Equipment Supplier in India at the Best Price
          </motion.p>
          <div className="mt-4 font-poppins">
            <p
              className="subTitle  text-sm tablet:text-lg w-full tablet:w-[40vw] text-start
             largeLaptop:text-[70px]"
            >
              Everlife CPC Diagnostics is your trusted partner for high-quality
              In-vitro diagnostic Medical Laboratory Equipment Suppliers in
              India.
            </p>
          </div>
          <div className="buttons flex gap-3 tablet:justify-start justify-center">
            <Link
              onClick={() => {
                setSelectSectionCategory("all");
                setSelectedCategory("Biochemistry");
              }}
              to={`/product/${selectedCategory}/${selecteSectionCategory}`}
            >
              <button
                className="btn1 w-auto h-auto px-3 py-2 text-sm laptop:text-base largeLaptop:text-2xl whitespace-nowrap"
                style={{ background: "#00A786", color: "white" }}
              >
                Explore product
              </button>
            </Link>
            <Link to="/contact">
              <button
                className="btn1 w-auto h-auto px-3 py-2 text-sm whitespace-nowrap text-[#00A786] hover:bg-[#00a986] hover:text-white laptop:text-base largeLaptop:text-2xl"
                style={{
                  border: "2px solid #00A786",
                }}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 tablet:w-1/2 w-full ">
          <Slider />
        </div>
      </div>
    </>
  );
}

export default Section1;
