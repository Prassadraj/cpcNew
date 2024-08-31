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
  const countUpRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".counterBox",
      {
        opacity: 0,
        width: "0%",
      },
      {
        opacity: 1,
        width: "100%",
        duration: 1,
        delay: 0.4,
        scrollTrigger: ".counterBox",
        stagger: {
          amount: 1,
        },
      }
    );

    countUpRefs.current.forEach((el) => {
      const endNumber = parseInt(el.dataset.end);
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          duration: 1,
          innerText: endNumber,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            el.innerHTML = Math.ceil(el.innerText);
          },
        }
      );

      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
          innerText: 0,
          duration: 0.4,
          ease: "power3.out",
          onComplete: () => {
            gsap.to(el, {
              innerText: endNumber,
              duration: 0.4,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none none",
              },
              onUpdate: function () {
                el.innerHTML = Math.ceil(el.innerText);
              },
            });
          },
          onUpdate: function () {
            el.innerHTML = Math.ceil(el.innerText);
          },
        });
      });
    });
  }, []);

  const stats = [
    { end: 3, label: "Country presence", img: world },
    { end: 250, label: "Employees", img: Employees },
    { end: 1000, label: "Customers", img: Customers },
    { end: 16, label: "Principles", img: Principles },
    { end: 300, label: "Channel partners", img: partners },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-hidden bg-white z-0 grid grid-cols-2 sm:grid-cols-3 laptop:grid-cols-5 gap-4 p-4 sm:p-14 counter-container"
    >
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center counterBox">
          <div className="flex items-center justify-center">
            <img className="w-[25px] sm:w-[50px]" src={stat.img} alt="" />
            <span
              ref={(el) => (countUpRefs.current[index] = el)}
              data-end={stat.end}
              className="text-xl sm:text-5xl font-semibold"
              style={{ fontFamily: "Poppins", color: "#00A786" }}
            >
              0
            </span>
            <span
              className="text-sm sm:text-3xl"
              style={{ fontFamily: "Poppins, sans-serif", color: "#00A786" }}
            >
              +
            </span>
          </div>
          <div className="flex items-center">
            <p
              className="text-xs sm:text-lg sm:font-bold font-semibold"
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
