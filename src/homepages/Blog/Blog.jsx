import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

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
      title: "How To Ensure Effective Result In Haematology Analyzers?",
      desc: "How to Ensure  Effective Result in Haematology Analyzers In this article, you will be learning to use Hematology...",
      date: "by admin | Jul 6, 2023",
    },

    {
      title:
        "Basics of 3 part Hematology Analyzer – Every Laboratarians should know",
      desc: "What is a 3-part differential hematology analyzer 3-part differential hematology analyzer  which analyzes the complete...",
      date: "by Mohana Priya | Feb 13, 2023",
    },
    {
      title: "Microalbuminuria",
      desc: "The urinary excretion of albumin greater than or equal to 30mg/day is defined as  Microalbuminuria. In a healthy...",
      date: "by Priyadharshini C | Feb 2, 2023",
    },
  ];
  return (
    <div className=" bg-white px-2 mb-2 !mt-10 laptop:mt-[8rem] largeLaptop:mt-0 ">
      <div className=" flex justify-between  tablet:px-10 tablet:mb-4">
        <p className="text-left laptop:mb-2 largeLaptop:mb-6 largeLaptop:text-4xl text-custom-green tablet:text-3xl text-lg font-poppins font-bold uppercase">
          Blog Snippets
        </p>
        <Link to="/blog">
          <p className="  bg-custom-green w-fit tablet:px-4 tablet:py-3  tablet:w-fit h-fit text-center text-white tablet:text-lg largeLaptop:text-xl rounded-lg text-xs tablet:text-md tablet:font-semibold font-poppins p-2">
            View All
          </p>
        </Link>
      </div>
      <p className="w-[300px] tablet:w-fit tablet:text-xl largeLaptop:text-2xl font-poppins mt-2 tablet:px-10 tablet:mb-5 laptop:mb-10">
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </p>
      <div className="mt-0 p-1 tablet:mx-10 tablet:my-4 grid tablet:grid-cols-2  laptop:grid-cols-3 gap-4  tablet:gap-4 grid-cols-1 place-items-center my-2  tablet:mb-4 ">
        {data.map((datas, index) => (
          <div
            key={index}
            className="h-auto p-3  border-1 border-custom-green w-full rounded-lg tablet:h-auto  "
          >
            <div className="tablet:h-32 largeLaptop:h-36">
              <p className="text-lg largeLaptop:text-xl font-semibold tablet:mb-2">
                {datas.title}
              </p>
              <p className="text-xs tablet:text-base largeLaptop:text-xl font-medium mb-2">
                {datas.date}
              </p>
            </div>
            <p className="text-base tablet:text-lg largeLaptop:text-xl">
              {datas.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
