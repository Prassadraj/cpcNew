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
    <div className=" bg-white px-2 mb-2 md:mb-10">
      <div className=" flex justify-between  md:px-10">
        <p className="text-left text-custom-green md:text-3xl font-poppins font-bold uppercase">
          Blog Snippets
        </p>
        <p className="  bg-custom-green w-fit md:px-4 md:py-3  md:w-[10vw] h-fit text-center text-white rounded-lg text-xs md:text-md md:font-semibold font-poppins p-2">
          View All
        </p>
      </div>
      <p className="w-[300px] md:w-fit md:text-lg font-poppins mt-2 md:px-10 md:mb-5">
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </p>
      <div className="mt-0 p-1 md:mx-10 md:my-4 grid md:grid-cols-4 gap-4  md:gap-4 grid-cols-2 md:mb-4">
        {data.map((datas, index) => (
          <div
            key={index}
            className="h-[200px] p-3  bg-light-green w-full max-w-[300px] rounded-lg md:h-[370px] blogBox"
          >
            <div className="md:m-2">
              <img className="rounded-lg w-full" src={datas.img} alt="" />
            </div>
            <div className="flex flex-col justify-start items-start md:gap-2 md:mt-3 mt-1 gap-0 md:m-2">
              <p className="bg-black p-1 md:mt-2 text-white rounded-md text-xs hidden md:block">
                {datas.care}
              </p>
              <p className="text-black md:mt-2 font-poppins font-semibold text-xs">
                {datas.title}
              </p>
              <p className="md:text-lg text-gray-600 w-full text-xs md:mt-2">
                {datas.desc}
              </p>
            </div>
            <div className="flex justify-end sm:mt-0 md:mt-3">
              <p className="md:text-lg text-xs">~{datas.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
