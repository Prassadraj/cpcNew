import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import world from "./images/humanitarian.gif";
import Employees from "./images/management.gif";
import Customers from "./images/loyalty.gif";
import Principles from "./images/consultation.gif";
import partners from "./images/warehouse.gif";

gsap.registerPlugin(ScrollTrigger);

function Section2() {
  const stats = [
    { end: 3, label: "Country presence", img: world },
    { end: 250, label: "Employees", img: Employees },
    { end: 1000, label: "Customers", img: Customers },
    { end: 16, label: "Principles", img: Principles },
    { end: 300, label: "Channel partners", img: partners },
  ];

  const statRefs = useRef([]);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      statRefs.current.forEach((stat, index) => {
        gsap.fromTo(
          stat,
          { textContent: 0 },
          {
            textContent: stats[index].end,
            duration: 1,
            ease: "power3.inOut",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
            },
          }
        );
      });
    }
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly h-44 largeLaptop:h-fit w-full items-center">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4 hover:scale-105 cursor-pointer duration-200 transition-all"
        >
          <div className="flex items-center flex-col justify-center">
            <div className="flex">
              <img className="w-[25px] sm:w-[50px]" src={stat.img} alt="" />
              <span
                ref={(el) => (statRefs.current[index] = el)}
                className="text-xl tablet:text-4xl laptop:text-5xl font-semibold"
                style={{ fontFamily: "Poppins", color: "#00A786" }}
              >
                {window.innerWidth < 768 ? stat.end : "0"}
              </span>
              <span
                className="text-sm tablet:text-3xl"
                style={{ fontFamily: "Poppins, sans-serif", color: "#00A786" }}
              >
                +
              </span>
            </div>
            <p
              className="text-xs tablet:text-sm laptop:text-lg sm:font-semibold font-semibold largeLaptop:text-xl"
              style={{ fontFamily: "Poppins" }}
            >
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section2;
