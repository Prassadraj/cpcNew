import React, { useEffect, useState } from "react";
import "./slider.css";
import image1 from "../AllDatas/ProductImages/Hematology/3D PLUS/Dynacount 3D Plus.webp";
import image2 from "../AllDatas/ProductImages/Hematology/SedratePro/Sedrate Pro.webp";
import image3 from "../AllDatas/ProductImages/Immunology/Iflash1200/product1.webp";
import image4 from "../AllDatas/ProductImages/Immunology/Plexmat4/product1.webp";
import image5 from "../AllDatas/ProductImages/Point of Care/ichroma™ II/product1.webp";
import image6 from "../AllDatas/ProductImages/Point of Care/ichroma™ III/product1.webp";

const Slider = () => {
  const [isHover, setIsHover] = useState(false);
  const [slide, setSlide] = useState([
    {
      url: image1,
      category: "Hematology",
      state: "active",
      class: "next",
      id: 1,
    },
    { url: image2, category: "Hematology", state: "next", class: "", id: 2 },
    { url: image3, category: "Immunology", state: "hidden", class: "", id: 3 },
    { url: image4, category: "Immunology", state: "hidden", class: "", id: 4 },
    {
      url: image5,
      category: "Point%20of%20Care",
      state: "hidden",
      class: "",
      id: 5,
    },
    {
      url: image6,
      category: "Point%20of%20Care",
      state: "prev",
      class: "",
      id: 6,
    },
  ]);

  const nextSlide = () => {
    setSlide((prevs) => {
      return prevs.map((s, index, arr) => {
        if (s.state === "active") return { ...s, state: "prev", class: "" };
        if (s.state === "next")
          return { ...s, state: "active", class: "fromNext" };
        if (s.state === "prev") return { ...s, state: "hidden", class: "" };

        if (s.state === "hidden") {
          const nextIndex = arr.findIndex((item) => item.state === "next");
          if (index === (nextIndex + 1) % arr.length) {
            return { ...s, state: "next", class: "fromActive" };
          }
        }
        return s;
      });
    });
  };

  const preSlide = () => {
    setSlide((prevs) => {
      return prevs.map((s, index, arr) => {
        if (s.state === "active") return { ...s, state: "next", class: "" };
        if (s.state === "prev")
          return { ...s, state: "active", class: "fromPrev" };
        if (s.state === "next") return { ...s, state: "hidden", class: "" };

        if (s.state === "hidden") {
          const prevIndex = arr.findIndex((item) => item.state === "prev");
          if (index === (prevIndex - 1 + arr.length) % arr.length) {
            return { ...s, state: "prev", class: "fromActive" };
          }
        }
        return s;
      });
    });
  };
  useEffect(() => {
    preSlide();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHover) {
        preSlide();
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [slide, isHover]);
  return (
    <>
      <div className="slider-grid">
        <div className="slider-wrapper">
          {slide.map((s, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                setIsHover(true);
                console.log("hover");
              }}
              onMouseLeave={() => {
                setIsHover(false);
                console.log("hover off");
              }}
              className={`slide d-flex justify-content-center align-items-center ${s.state} ${s.class}`}
            >
              <img
                src={s.url}
                alt={s.category}
                style={{
                  filter: "drop-shadow(5px 5px 10px rgba(75, 85, 99, 0.8))",
                  transform: s.id == 6 ? "scale(0.80)" : "scale(1)",
                }}
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <button className="slider-btn prev" onClick={preSlide}></button>
          <button className="slider-btn next" onClick={nextSlide}></button>
        </div>
      </div>
    </>
  );
};

export default Slider;
