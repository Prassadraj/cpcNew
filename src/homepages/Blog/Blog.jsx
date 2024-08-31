import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

function Blog() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".blogBox",
      {
        opacity: "0",
        scale: 0.1,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 0.2,
        stagger: { amount: 1 },

        scrollTrigger: ".blogBox",
      }
    );
  }, []);

  const data = [
    {
      img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg",
      care: "self care",
      title: "Care of Your",
      desc: "provide the best products to our patients.",
      author: "Jackson",
    },
    {
      img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg",
      care: "self care",
      title: "Care of Your",
      desc: "provide the best products to our patients.",
      author: "Jackson",
    },
    {
      img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg",
      care: "self care",
      title: "Care of Your",
      desc: "provide the best products to our patients.",
      author: "Jackson",
    },
    {
      img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg",
      care: "self care",
      title: "Care of Your",
      desc: "provide the best products to our patients.",
      author: "Jackson",
    },
  ];
  return (
    <div className=" bg-white px-2 mb-2 tablet:mb-10">
      <div className=" flex justify-between  tablet:px-10">
        <p className="text-left text-custom-green tablet:text-3xl font-poppins font-bold uppercase">
          Blog Snippets
        </p>
        <p className="  bg-custom-green w-fit tablet:px-4 tablet:py-3  tablet:w-[10vw] h-fit text-center text-white rounded-lg text-xs tablet:text-md tablet:font-semibold font-poppins p-2">
          View All
        </p>
      </div>
      <p className="w-[300px] tablet:w-fit tablet:text-lg font-poppins mt-2 tablet:px-10 tablet:mb-5">
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </p>
      <div className="mt-0 p-1 tablet:mx-10 tablet:my-4 grid laptop:grid-cols-4 gap-4  tablet:gap-4 grid-cols-2 tablet:mb-4">
        {data.map((datas, index) => (
          <div
            key={index}
            className="h-[200px] p-3  border-1 border-custom-green w-full max-w-[300px] rounded-lg tablet:h-[370px] blogBox"
          >
            <div className="tablet:m-2">
              <img className="rounded-lg w-full" src={datas.img} alt="" />
            </div>
            <div className="flex flex-col justify-start items-start tablet:gap-2 tablet:mt-3 mt-1 gap-0 tablet:m-2">
              <p className="bg-black p-1 tablet:mt-2 text-white rounded-md text-xs hidden tablet:block">
                {datas.care}
              </p>
              <p className="text-black tablet:mt-2 font-poppins font-semibold text-xs">
                {datas.title}
              </p>
              <p className="tablet:text-lg text-gray-600 w-full text-xs tablet:mt-2">
                {datas.desc}
              </p>
            </div>
            <div className="flex justify-end sm:mt-0 tablet:mt-3">
              <p className="tablet:text-lg text-xs">~{datas.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
