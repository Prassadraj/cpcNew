import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
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

import Magnetic from "../../component/magneticButton/Magnetic";
import { CategoryContext } from "../../component/Context/CategoryContext";
import { Link } from "react-router-dom";

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
  { name: "Immunology", image: microbiology },
  { name: "Hematology", image: pieChart },
  { name: "Point of Care", image: medicine },
  { name: "Electrolyte Analyzer", image: covid },
  { name: "Pre-Analytical Automation", image: heamatology },
];

const categoryItems2 = [
  // { name: "COVID-19", image: covid },
  { name: "Immunology", image: Immunology },
  { name: "Point of Care", image: care },
  { name: "Electrolyte Analyzer", image: covid },
  // { name: "Clinical Microbiology", image: electrolyte },
  { name: "Biochemistry", image: BioChemistry },
  { name: "Pre-Analytical Automation", image: PreAnalytical },
  { name: "Point of Care", image: care },
  { name: "Immunology", image: Immunology },
  { name: "Electrolyte Analyzer", image: covid },
  // { name: "Clinical Microbiology", image: electrolyte },
];

function ProductCategaries() {
  const { setSelectedCategory } = useContext(CategoryContext);

  return (
    <div className="laptop:mt-[170px] tablet:mt-[100px] largeLaptop:mt-[2rem] ">
      {/* mobile */}
      <div className="mb-4 tablet:hidden h-fit w-full flex items-center justify-around font-poppins sm:px-4 px-2 gap-10">
        <div className="text-2xl font-semibold text-custom-green w-1/2">
          <p> Product</p>
          <p>Categories</p>
          <p className="text-xs font-thin text-gray-700 mt-2">
            Explore our diverse range of laboratory equipment for all your
            medical and diagnostic needs.
          </p>
          <p className="mt-2 text-white p-1 text-sm bg-sky-400 font-poppins rounded-md font-medium hover:scale-90 transition-all shadow-md text-center">
            Explore Products
          </p>
        </div>
        <div className="w-1/2 p-2 overflow-hidden ">
          {" "}
          {categoryItems2.map((item) => (
            <Link to="/product" onClick={() => setSelectedCategory(item.name)}>
              <div className="w-full flex flex-col items-center py-1 px-2 border rounded-xl mt-2 shadow-md shadow-custom-green">
                <img src={item.image} className="w-[25px]" alt={item.name} />
                <p className="text-xs text-gray-700 text-center">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* lap */}
      <div
        className="hidden laptop:h-[40vh]  largeLaptop:h-fit tablet:flex justify-center items-center 
      laptop:mb-[200px]
      largeLaptop:mb-[10rem]
      "
      >
        <div className="flex w-full">
          {/* Left Section */}
          <div className="flex flex-col flex-[1.5] gap-3 laptop:pl-24 tablet:pl-16 pt-2 laptop:mt-20 tablet:mt-16">
            <div className="text-white" style={{ lineHeight: "3px" }}>
              <p className="text-custom-green largeLaptop:text-[6rem] text-5xl max-w-lg text-start font-poppins font-semibold">
                Product
              </p>
              <p className="text-5xl largeLaptop:text-[6rem] max-w-lg text-start font-poppins font-semibold text-custom-green">
                Categories
              </p>
            </div>
            <p
              className="text-lg mt-4 largeLaptop:mt-6 max-w-sm text-start font-poppins text-gray-700
            largeLaptop:text-3xl"
            >
              Explore our diverse range of laboratory equipment for all your
              medical and diagnostic needs.
            </p>
            <Link to="/product">
              <button className=" mt-3 text-left text-gray-700 text-base bg-gray-white font-poppins w-fit pl-3 pr-3 pt-2 pb-2 rounded-md font-medium hover:scale-90 transition-all shadow-md shadow-custom-green border largeLaptop:text-3xl largeLaptop:mt-6">
                Explore Products
              </button>
            </Link>
          </div>

          {/* Right Section */}
          <div
            className="flex-1 flex relative text-2xl w-full laptop:h-[80vh] largeLaptop:h-[60vh] largeLaptop:overflow-hidden tablet:overflow-hidden tablet:gap-3
          "
          >
            <div className="w-[15vw] laptop:h-screen tablet:h-[500px]  flex justify-center overflow-hidden">
              <div className="flex items-center">
                <Marquee
                  direction="up"
                  pauseOnHover
                  className="flex gap-3 overflow-hidden"
                  speed={30}
                >
                  {categoryItems2.map((item) => (
                    <Link
                      to={`/product/${
                        item.name.includes(" ")
                          ? item.name.split(" ").join("")
                          : item.name
                      }/top`}
                      onClick={() => setSelectedCategory(item.name)}
                    >
                      <Magnetic key={item.name}>
                        <div
                          style={{ margin: "10px 10px" }}
                          className="flex flex-col-reverse items-center justify-center pt-4 pb-4 pr-8 pl-8 text-center bg-white rounded-xl gap-2 tablet:w-[14vw]  laptop:w-[11vw] border-1 border-custom-green shadow-md shadow-custom-green"
                        >
                          <img width="70px" src={item.image} alt={item.name} />
                          <p className="text-sm text-gray-700 font-semibold font-poppins truncate max-w-[9vw]">
                            {item.name}
                          </p>
                        </div>
                      </Magnetic>
                    </Link>
                  ))}
                </Marquee>
              </div>
            </div>

            <div className="w-[15vw] h-screen flex justify-center  overflow-hidden">
              <div className="flex items-center">
                <Marquee
                  direction="down"
                  pauseOnHover
                  className="flex gap-3 overflow-hidden"
                  speed={30}
                >
                  {categoryItems.map((item) => (
                    <Link
                      to={`/product/${item.name}/top`}
                      onClick={() => setSelectedCategory(item.name)}
                    >
                      <Magnetic key={item.name}>
                        <div
                          style={{ margin: "10px 10px" }}
                          key={item.name}
                          className="flex flex-col items-center justify-center pt-4 pb-4 pr-8 pl-8 text-center bg-white border-1 border-custom-green shadow-md shadow-custom-green rounded-xl gap-2 tablet:w-[14vw]  laptop:w-[11vw]"
                        >
                          <img
                            width="70px"
                            className=""
                            src={item.image}
                            alt={item.name}
                          />
                          <p className="laptop:text-sm tablet:text-xs text-gray-700 font-semibold font-poppins truncate max-w-[9vw]">
                            {item.name}
                          </p>
                        </div>
                      </Magnetic>
                    </Link>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
