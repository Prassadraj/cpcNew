import React, { useContext, useEffect, useRef } from "react";

import chemistry from "../ProductCategaries/GIF/chemistry.gif";
import pieChart from "../ProductCategaries/GIF/pie-chart.gif";
import medicine from "../ProductCategaries/GIF/medicine.gif";
import mask from "../ProductCategaries/GIF/surgical-mask.gif";
import microbiology from "../ProductCategaries/GIF/Clinical microbiology.gif";
import covid from "../ProductCategaries/GIF/covid 19.gif";
import electrolyte from "../ProductCategaries/GIF/electrolyte.gif";
import heamatology from "../ProductCategaries/GIF/heamatology.gif";
import care from "../ProductCategaries/GIF/Point of care.gif";
import Immunology from "../ProductCategaries/GIF/Immunology.gif";
import PreAnalytical from "../ProductCategaries/GIF/Pre-analytical-automation.gif";
import BioChemistry from "../ProductCategaries/GIF/Bio Chemistry.gif";
import "./cat.css";
import Magnetic from "../../component/magneticButton/Magnetic";
import { CategoryContext } from "../../component/Context/CategoryContext";
import { Link } from "react-router-dom";
import gsap from "gsap";
//
const categoryItems = [
  { name: "Biochemistry", image: chemistry },
  { name: "Hematology", image: pieChart },
  { name: "Point of Care", image: medicine },
  // { name: "COVID-19", image: mask },
  ////
  { name: "Immunology", image: microbiology },
  { name: "Electrolyte Analyzer", image: covid },
  // { name: "Clinical Microbiology", image: electrolyte },
  { name: "Pre-Analytical Automation", image: heamatology },

  { name: "Electrolyte Analyzer", image: covid },
];

const categoryItems2 = [
  // { name: "COVID-19", image: covid },

  { name: "Point of Care", image: care },
  { name: "Electrolyte Analyzer", image: covid },
  { name: "Hematology", image: pieChart },
  // { name: "Clinical Microbiology", image: electrolyte },
  { name: "Biochemistry", image: BioChemistry },
  { name: "Pre-Analytical Automation", image: PreAnalytical },
  { name: "Point of Care", image: care },
  { name: "Immunology", image: Immunology },
];
const mobile = [
  { name: "Biochemistry", image: BioChemistry },

  { name: "Immunology", image: Immunology },
  { name: "Molecular Diagnostics", image: BioChemistry },
  { name: "Point of Care", image: care },
  { name: "Electrolyte Analyzer", image: covid },

  { name: "Pre-Analytical Automation", image: PreAnalytical },
  { name: "Hematology", image: electrolyte },
];

function ProductCategaries() {
  const { setSelectedCategory } = useContext(CategoryContext);
  const marqueeRef = useRef(null);
  const topItemsRef = useRef(null); // Ref for top items
  const bottomItemsRef = useRef(null); // Ref for bottom items

  useEffect(() => {
    // GSAP Animation for up and down scrolling (continuous)
    const topItems = topItemsRef.current;
    const bottomItems = bottomItemsRef.current;

    // GSAP animations for both top and bottom items
    const topAnimation = gsap.to(topItems, {
      y: "-100%", // Move items upwards
      repeat: -1, // Infinite loop
      duration: 20, // Adjust this value to control the speed
      ease: "linear", // Continuous motion
    });

    const bottomAnimation = gsap.to(bottomItems, {
      y: "100%", // Move items downwards
      repeat: -1, // Infinite loop
      duration: 20, // Adjust this value to control the speed
      ease: "linear", // Continuous motion
    });

    // Pause the animation on hover (for specific container)
    const onHoverStart = (animation) => {
      animation.pause(); // Pause the specific animation
    };

    const onHoverEnd = (animation) => {
      animation.play(); // Resume the specific animation
    };

    // Add event listeners for pausing/resuming the animations for top and bottom items
    topItems.addEventListener("mouseenter", () => onHoverStart(topAnimation));
    topItems.addEventListener("mouseleave", () => onHoverEnd(topAnimation));

    bottomItems.addEventListener("mouseenter", () =>
      onHoverStart(bottomAnimation)
    );
    bottomItems.addEventListener("mouseleave", () =>
      onHoverEnd(bottomAnimation)
    );

    return () => {
      // Cleanup event listeners on component unmount
      topItems.removeEventListener("mouseenter", () =>
        onHoverStart(topAnimation)
      );
      topItems.removeEventListener("mouseleave", () =>
        onHoverEnd(topAnimation)
      );

      bottomItems.removeEventListener("mouseenter", () =>
        onHoverStart(bottomAnimation)
      );
      bottomItems.removeEventListener("mouseleave", () =>
        onHoverEnd(bottomAnimation)
      );
    };
  }, []);

  return (
    <>
      <div className="flex justify-around w-full items-center gap-3 mb-10 laptop:mb-0 container1 h-[400px] laptop:h-screen  overflow-hidden">
        <div className="w-1/2 flex flex-col gap-3 ">
          <div>
            <p className="text-custom-green text-2xl tablet:text-5xl text-start font-poppins font-semibold">
              Product
            </p>
            <p className=" text-2xl tablet:text-5xl text-start font-poppins font-semibold text-custom-green">
              Categories
            </p>
          </div>
          <h2 className="tablet:text-lg laptop:max-w-md  text-sm text-start font-poppins text-gray-500">
            Explore our diverse range of laboratory equipment for all your
            medical and diagnostic needs.
          </h2>
          <button className="text-left text-black shadow-custom-green text-sm p-2 bg-white border font-poppins w-fit tablet:px-3 tablet:py-2 rounded-md font-medium hover:scale-90 transition-all shadow-md">
            Explore Products
          </button>
        </div>
        {/* right */}
        <div
          ref={marqueeRef}
          className="flex gap-3 laptop:!gap-10 laptop:h-[80vh] h-full overflow-hidden"
        >
          {/* Top Items (scroll up) */}
          <div
            ref={topItemsRef} // Add the ref to this container
            className="top-items flex flex-col gap-2 laptop:!gap-5"
          >
            {categoryItems.map((val, i) => (
              <Magnetic key={i}>
                <div className="cursor-pointer border-1 laptop:rounded-xl bg-white border-custom-green shadow-md shadow-custom-green h-fit laptop:w-32 laptop:!p-3 flex flex-col-reverse items-center p-1 rounded-sm">
                  <img
                    src={val.image}
                    className="tablet:w-14 w-12 h-fit object-contain"
                    alt={val.name}
                  />
                  <p className="text-[10px] tablet:text-xs text-center laptop:text-sm font-medium">
                    {val.name}
                  </p>
                </div>
              </Magnetic>
            ))}
          </div>

          {/* Bottom Items (scroll down) */}
          <div
            ref={bottomItemsRef} // Add the ref to this container
            className="bottom-items flex flex-col-reverse gap-2 laptop:!gap-5"
          >
            {categoryItems2.map((val, i) => (
              <Magnetic key={i}>
                <div className="cursor-pointer border-1 laptop:rounded-xl bg-white border-custom-green shadow-md shadow-custom-green h-fit laptop:w-32 laptop:!p-3 flex flex-col items-center p-1 rounded-sm">
                  <img
                    src={val.image}
                    className="tablet:w-14 w-12 h-fit object-contain"
                    alt={val.name}
                  />
                  <p className="text-center text-[10px] tablet:text-xs laptop:text-sm font-medium">
                    {val.name}
                  </p>
                </div>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCategaries;

/* <div className="h-[100vh] flex justify-center items-center mb-10">
<div className="flex w-full">
  {/* Left Section */

// <div className="flex flex-col flex-[1.5] gap-3 pl-24 pt-12 mt-32">
//   <div className="text-white" style={{ lineHeight: "3px" }}>
//     <p className="text-custom-green text-6xl max-w-lg text-start font-poppins font-semibold">
//       Product
//     </p>
//     <p className="text-6xl max-w-lg text-start font-poppins font-semibold text-custom-green">
//       Categories
//     </p>
//   </div>
//   <h2 className="text-xl max-w-lg text-start font-poppins text-gray-500">
//     Explore our diverse range of laboratory equipment for all your
//     medical and diagnostic needs.
//   </h2>
//   <button className="text-left text-white text-xl bg-sky-400 font-poppins w-fit pl-3 pr-3 pt-2 pb-2 rounded-md font-medium hover:scale-90 transition-all shadow-md">
//     Explore Products
//   </button>
// </div>

{
  /* Right Section */
}
// <div className="flex-1 flex relative text-2xl w-full h-screen">
//   <div className="w-[15vw] h-screen flex justify-center">
//     <div className="flex items-center">
//       <Marquee
//         direction="up"
//         pauseOnHover
//         className="flex gap-3 overflow-hidden"
//         speed={30}
//       >
//         {categoryItems2.map((item) => (
//           <Link
//             to="/product"
//             onClick={() => setSelectedCategory(item.name)}
//           >
//             <Magnetic key={item.name}>
//               <div
//                 style={{ margin: "10px 10px" }}
//                 className="flex flex-col-reverse items-center justify-center pt-4 pb-4 pr-8 pl-8 text-center bg-white rounded-xl gap-2 w-[11vw] border-1 border-custom-green shadow-md shadow-custom-green"
//               >
//                 <img width="70px" src={item.image} alt={item.name} />
//                 <p className="text-sm font-semibold font-poppins truncate max-w-[9vw]">
//                   {item.name}
//                 </p>
//               </div>
//             </Magnetic>
//           </Link>
//         ))}
//       </Marquee>
//     </div>
//   </div>

//   <div className="w-[15vw] h-screen flex justify-center">
//     <div className="flex items-center">
//       <Marquee
//         direction="down"
//         pauseOnHover
//         className="flex gap-3"
//         speed={30}
//       >
//         {categoryItems.map((item) => (
//           <Link
//             to="/product"
//             onClick={() => setSelectedCategory(item.name)}
//           >
//             <div
//               style={{ margin: "10px 10px" }}
//               key={item.name}
//               className="flex flex-col items-center justify-center pt-4 pb-4 pr-8 pl-8 text-center bg-white border-1 border-custom-green shadow-md shadow-custom-green rounded-xl gap-2 w-[11vw]"
//             >
//               <img width="70px" src={item.image} alt={item.name} />
//               <p className="text-sm font-semibold font-poppins truncate max-w-[9vw]">
//                 {item.name}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </Marquee>
//     </div>
//   </div>
// </div>
// </div>
// </div> */}
